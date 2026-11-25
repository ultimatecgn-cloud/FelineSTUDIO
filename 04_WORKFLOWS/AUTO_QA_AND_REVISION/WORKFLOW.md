# Auto QA and Revision
1. Validate artifact existence, version, format and checksum.
2. Run rubric scoring with evidence per criterion.
3. Run critical-failure checks separately from numeric score.
4. Produce defect list with severity, timestamp/scene/shot and suggested fix.
5. Revise highest-impact defects first; preserve approved bible.
6. Re-run affected tests and regression tests.
7. Stop after 3 rounds per gate; report unresolved defects and request decision.
8. Mark PASS only when score >=90 and no critical failure remains.
