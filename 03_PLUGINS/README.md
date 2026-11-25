# Provider Adapter Framework
แต่ละ provider ต้อง implement interface กลาง และประกาศ capabilities, limits, pricing, data handling, license, supported formats และ failure modes
ห้ามใส่ API key ลงใน repository; ใช้ environment variables หรือ secret manager
ก่อนใช้งานจริงต้องทดสอบ sandbox, rate limits, retry policy, watermark, commercial rights และ data retention

## Adapter interface
- `capabilities()`
- `validate_request(job)`
- `submit(job)`
- `get_status(job_id)`
- `fetch_result(job_id)`
- `cancel(job_id)`
- `estimate_cost(job)`
- `health_check()`

## Provider categories
image-generation, video-generation, voice-generation, music-generation, auto-editing, research-connectors, storage
