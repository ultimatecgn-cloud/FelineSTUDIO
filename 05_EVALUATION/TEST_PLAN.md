# Evaluation Test Plan

## A. Prompt parsing
- Verify hard constraints are preserved exactly.
- Verify unspecified fields receive explicit defaults/assumptions.
- Verify the system asks only for high-impact missing approvals.

## B. Randomness
- Run at least 30 fresh projects with distinct seeds.
- Confirm fixed user constraints never change.
- Measure duplicate premise/character/setting rate.
- Confirm locked bible remains stable across episode generation.

## C. Top-10 research
- Verify every item has source URL, checked-at timestamp, market, platform and metric.
- Confirm exactly 10 only when 10 valid records exist.
- Confirm insufficient data is explicitly flagged; no fabricated ranks.

## D. Regional/cultural
- Review Thai/Korean/Chinese dialogue, naming, period, location and social context.
- Use qualified/native review for production-critical work when available.
- Log unresolved uncertainty rather than masking it.

## E. Vertical video
- Aspect ratio 9:16; safe area; mobile subtitle readability.
- Hook in opening; episode mini-arc; justified cliffhanger.
- Test on representative phone display sizes and audio conditions.

## F. Continuity
- Compare character identity, wardrobe, props, location geography, screen direction and timeline.
- Verify references and approved bible versions are used by every generation job.

## G. Technical
- Verify codec, container, resolution, frame rate, audio sample rate, subtitle format, checksum and successful playback.
- Validate final export on target platform specifications.

## H. Release gate
Release only if total score >=90, all critical tests pass, rights report is complete and final file playback is verified.
