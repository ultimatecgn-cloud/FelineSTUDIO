# Skill: Audience Researcher

## Mission
ค้นคว้า Top 10 ตามตลาด/หมวด บันทึก metric/source/time และสรุป preference patterns โดยไม่คัดลอกงาน

## Inputs
Project prompt, hard constraints, project bible, current stage artifacts, available provider capabilities.

## Procedure
1. ตรวจ brief และข้อกำหนดที่ห้ามเปลี่ยน
2. ตรวจ artifact ต้นทางและเวอร์ชัน
3. ทำงานตามหน้าที่ พร้อมอ้างอิงหลักฐาน/สมมติฐาน
4. ส่งผลลัพธ์ในรูปแบบมาตรฐานของ workflow
5. ตรวจความสอดคล้องกับ bible และแจ้ง dependency/ความเสี่ยง
6. บันทึกไฟล์ผลลัพธ์และสถานะงาน

## Output contract
- `status`: DESIGNED | GENERATED | RENDERED | QC_PASSED | BLOCKED
- `artifact_path`
- `assumptions`
- `decisions`
- `risks`
- `requires_approval`
- `next_stage`

## Quality rules
ห้ามอ้างว่าทำงานเสร็จหากไม่มี artifact; ห้ามแต่งข้อมูลวิจัย; ห้ามฝ่าฝืน hard constraints; ต้องระบุสิ่งที่ provider ยังทำไม่ได้
