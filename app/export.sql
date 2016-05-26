SELECT * from (SELECT
    r.id, 
    CONCAT(r.lastname, ', ', r.firstname) as name,
    r.age,
    CASE WHEN r.weight is not null THEN r.weight ELSE r.weight_pre END as weight,
    CASE WHEN r.weight is null THEN '*' ELSE '' END as weight_not_confirmed,
    d.name as division,
    r.judo_club_name as club,
    r.club_instructor_country as country,
    ((SELECT COUNT(reg.event_id) from registrant r2, registration reg where r2.id = r.id AND r.id = reg.person_id) +
     (SELECT COUNT(reg.event_id) from registrant r3, registration reg where r3.id = r.id AND r.id = reg.person_id AND reg.fight_up = 1)) as division_count
FROM registrant r, registration reg, division d
WHERE r.id = reg.person_id
AND reg.event_id = d.id
AND r.payment_status = 'approved'
UNION ALL
SELECT
    r.id, 
    CONCAT(r.lastname, ', ', r.firstname) as name,
    r.age,
    CASE WHEN r.weight is not null THEN r.weight ELSE (r.weight_pre + '*') END as weight,
    CASE WHEN r.weight is null THEN '*' ELSE '' END as weight_not_confirmed,
    d.name as division,
    r.judo_club_name as club,
    r.club_instructor_country as country,
    ((SELECT COUNT(reg.event_id) from registrant r2, registration reg where r2.id = r.id AND r.id = reg.person_id) +
     (SELECT COUNT(reg.event_id) from registrant r3, registration reg where r3.id = r.id AND r.id = reg.person_id AND reg.fight_up = 1)) as division_count
FROM registrant r, registration reg, division d
WHERE r.id = reg.person_id
AND reg.event_id = d.id
AND r.payment_status = 'approved'
AND reg.fight_up = 1) as t
ORDER BY division asc, weight desc