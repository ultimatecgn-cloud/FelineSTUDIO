# Research Connectors Adapter Template

## Provider configuration
- Provider name: TO_BE_CONFIGURED
- Base endpoint / SDK: TO_BE_CONFIGURED
- Authentication secret name: `PROVIDER_API_KEY`
- Supported models/formats: TO_BE_VERIFIED
- Commercial use terms: REVIEW_REQUIRED

## Required implementation
1. `capabilities()` returns supported modes, formats, max duration/resolution and restrictions.
2. `validate_request(job)` rejects unsupported parameters before spending credits.
3. `estimate_cost(job)` returns estimate, currency, assumptions and confidence.
4. `submit(job)` returns provider job ID and request metadata.
5. `get_status(job_id)` returns queued/running/succeeded/failed.
6. `fetch_result(job_id)` returns asset URI, checksum, metadata and provenance.
7. `health_check()` verifies credentials and service availability.

## Acceptance tests
- Invalid input rejected without charge where possible
- Timeout/retry/idempotency behavior documented
- Output file opens and matches requested format
- Rights, watermark, retention and usage restrictions recorded
- API key never appears in logs
