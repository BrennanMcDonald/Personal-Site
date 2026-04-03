#!/usr/bin/env python3
"""
Daily site mutation — calls Claude to creatively rewrite project descriptions
and make one small structural change (reorder, reframe, or add emphasis).
"""

import sys
import json
import os
from pathlib import Path
import anthropic

SYSTEM_PROMPT = """\
You are an AI that keeps a software engineer's portfolio feeling fresh by
mutating project descriptions daily. You know the projects are real; your job
is to find new angles — sometimes punchy, sometimes technical, sometimes
narrative — while staying 100% factually accurate.

Rules:
- You may rewrite any or all "description" fields.
- You may reorder the projects array.
- Do NOT change "title", "stack", or "link" fields.
- Return only a valid JSON array. No markdown fences, no commentary.
"""


def mutate(workspace: str) -> None:
    client = anthropic.Anthropic()
    workspace_path = Path(workspace)

    projects_path = workspace_path / "src/data/projects.json"
    original = json.loads(projects_path.read_text())

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2048,
        system=SYSTEM_PROMPT,
        messages=[{
            "role": "user",
            "content": (
                "Here are the current projects. Mutate them for today:\n\n"
                + json.dumps(original, indent=2)
            ),
        }],
    )

    mutated = json.loads(response.content[0].text.strip())

    # Structural validation — never let Claude add, remove, or rename projects
    orig_titles = {p["title"] for p in original}
    new_titles = {p["title"] for p in mutated}
    assert orig_titles == new_titles, (
        f"Title mismatch.\nExpected: {orig_titles}\nGot: {new_titles}"
    )
    for project in mutated:
        orig = next(p for p in original if p["title"] == project["title"])
        assert project["stack"] == orig["stack"], (
            f'Stack changed for "{project["title"]}"'
        )
        assert project["link"] == orig["link"], (
            f'Link changed for "{project["title"]}"'
        )

    projects_path.write_text(json.dumps(mutated, indent=4) + "\n")

    print(f"Mutated {len(mutated)} project descriptions.")
    for p in mutated:
        orig = next(o for o in original if o["title"] == p["title"])
        if p["description"] != orig["description"]:
            print(f'  {p["title"]}: {p["description"][:80]}…')


if __name__ == "__main__":
    workspace = sys.argv[1] if len(sys.argv) > 1 else "/workspace"
    mutate(workspace)
