# Random Creative Engine
## Seed lifecycle
- สร้าง seed แบบสุ่มต่อ project; เก็บ seed, timestamp, engine version และรายการช่องที่สุ่ม
- รองรับ `reroll_all` เฉพาะก่อนล็อก bible และ `reroll_field` สำหรับช่องเฉพาะ
- เมื่อ bible ถูกล็อก การเปลี่ยนแปลงต้องเป็น change request พร้อมประเมินผลกระทบ

## Random dimensions
ตลาด/ประเทศ, genre blend, premise, protagonist archetype, central dilemma, setting, visual grammar, color palette, sound identity, episode hook pattern

## Diversity constraints
- ไม่ให้ตัวละครหลักทุกคนมีแรงจูงใจ/บุคลิกซ้ำกัน
- หลีกเลี่ยง trope ที่ซ้ำกับโปรเจกต์ล่าสุดเมื่อมีประวัติให้ตรวจ
- ตรวจความสมเหตุสมผลของเวลา สถานที่ อาชีพ ภาษา และวัฒนธรรม
- ความสุ่มต้องไม่แทนที่การตรวจ originality, factual accuracy หรือ cultural review

## Required output
`random_seed`, `randomized_fields`, `fixed_user_constraints`, `locked_fields`, `reroll_history`
