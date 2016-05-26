create table weight_class
(
id int(11) primary key not null auto_increment,
division int(11) not null,
weight_class text not null,
min_weight int(11) not null,
max_weight int(11) not null,
foreign key (division) references division(id)
)

--Boys 6-8
insert into weight_class (division, weight_class, min_weight, max_weight) values(1, '20', 0, 20);
insert into weight_class (division, weight_class, min_weight, max_weight) values(1, '23', 20, 23);
insert into weight_class (division, weight_class, min_weight, max_weight) values(1, '27', 23, 27);
insert into weight_class (division, weight_class, min_weight, max_weight) values(1, '32', 27, 32);
insert into weight_class (division, weight_class, min_weight, max_weight) values(1, '37', 32, 37);
insert into weight_class (division, weight_class, min_weight, max_weight) values(1, '37+', 37, 9999);

--Boys 9-10
insert into weight_class (division, weight_class, min_weight, max_weight) values(2, '27', 0, 27);
insert into weight_class (division, weight_class, min_weight, max_weight) values(2, '32', 27, 32);
insert into weight_class (division, weight_class, min_weight, max_weight) values(2, '37', 32, 37);
insert into weight_class (division, weight_class, min_weight, max_weight) values(2, '42', 37, 42);
insert into weight_class (division, weight_class, min_weight, max_weight) values(2, '47', 42, 47);
insert into weight_class (division, weight_class, min_weight, max_weight) values(2, '47+', 47, 9999);

--Boys 11-12
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '32', 0, 32);
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '37', 32, 37);
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '42', 37, 42);
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '47', 42, 47);
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '52', 47, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '58', 52, 58);
insert into weight_class (division, weight_class, min_weight, max_weight) values(3, '58+', 58, 9999);

--Boys 13-14
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '42', 0, 42);
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '47', 42, 47);
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '52', 47, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '58', 52, 58);
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '65', 58, 65);
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '73', 65, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(4, '73+', 73, 9999);

--Boys 15-16
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '55', 0, 55);
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '60', 55, 60);
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '66', 60, 66);
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '73', 66, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '81', 73, 81);
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '90', 81, 90);
insert into weight_class (division, weight_class, min_weight, max_weight) values(5, '90+', 90, 9999);

--Boys Youth 17-20
insert into weight_class (division, weight_class, min_weight, max_weight) values(17, '60', 0, 60);
insert into weight_class (division, weight_class, min_weight, max_weight) values(17, '66', 60, 66);
insert into weight_class (division, weight_class, min_weight, max_weight) values(17, '73', 66, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(17, '81', 73, 81);
insert into weight_class (division, weight_class, min_weight, max_weight) values(17, '90', 81, 90);
insert into weight_class (division, weight_class, min_weight, max_weight) values(17, '90+', 90, 9999);

--Girls 6-8
insert into weight_class (division, weight_class, min_weight, max_weight) values(6, '20', 0, 20);
insert into weight_class (division, weight_class, min_weight, max_weight) values(6, '23', 20, 23);
insert into weight_class (division, weight_class, min_weight, max_weight) values(6, '27', 23, 27);
insert into weight_class (division, weight_class, min_weight, max_weight) values(6, '32', 27, 32);
insert into weight_class (division, weight_class, min_weight, max_weight) values(6, '32+', 32, 9999);

--Girls 9-10
insert into weight_class (division, weight_class, min_weight, max_weight) values(7, '27', 0, 27);
insert into weight_class (division, weight_class, min_weight, max_weight) values(7, '32', 27, 32);
insert into weight_class (division, weight_class, min_weight, max_weight) values(7, '37', 32, 37);
insert into weight_class (division, weight_class, min_weight, max_weight) values(7, '42', 37, 42);
insert into weight_class (division, weight_class, min_weight, max_weight) values(7, '42+', 42, 9999);

--Girls 11-12
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '28', 0, 28);
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '32', 28, 32);
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '37', 32, 37);
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '42', 37, 42);
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '47', 42, 47);
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '52', 47, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(8, '52', 52, 9999);

--Girls 13-14
insert into weight_class (division, weight_class, min_weight, max_weight) values(10, '47', 0, 47);
insert into weight_class (division, weight_class, min_weight, max_weight) values(10, '52', 47, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(10, '57', 52, 57);
insert into weight_class (division, weight_class, min_weight, max_weight) values(10, '63', 57, 63);
insert into weight_class (division, weight_class, min_weight, max_weight) values(10, '70', 63, 70);
insert into weight_class (division, weight_class, min_weight, max_weight) values(10, '70+', 70, 9999);

--Girls 15-16
insert into weight_class (division, weight_class, min_weight, max_weight) values(19, '52', 0, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(19, '57', 52, 57);
insert into weight_class (division, weight_class, min_weight, max_weight) values(19, '63', 57, 63);
insert into weight_class (division, weight_class, min_weight, max_weight) values(19, '70', 63, 70);
insert into weight_class (division, weight_class, min_weight, max_weight) values(19, '78', 70, 78);
insert into weight_class (division, weight_class, min_weight, max_weight) values(19, '78+', 78, 9999);

--Girls Youth 17-20
insert into weight_class (division, weight_class, min_weight, max_weight) values(18, '52', 0, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(18, '57', 52, 57);
insert into weight_class (division, weight_class, min_weight, max_weight) values(18, '63', 57, 63);
insert into weight_class (division, weight_class, min_weight, max_weight) values(18, '70', 63, 70);
insert into weight_class (division, weight_class, min_weight, max_weight) values(18, '78', 70, 78);
insert into weight_class (division, weight_class, min_weight, max_weight) values(18, '78+', 78, 9999);

--M1
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '55', 0, 55);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '60', 55, 60);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '66', 60, 66);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '73', 66, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '81', 73, 81);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '90', 81, 90);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '100', 90, 100);
insert into weight_class (division, weight_class, min_weight, max_weight) values(11, '100+', 100, 9999);

--M2
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '55', 0, 55);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '60', 55, 60);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '66', 60, 66);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '73', 66, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '81', 73, 81);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '90', 81, 90);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '100', 90, 100);
insert into weight_class (division, weight_class, min_weight, max_weight) values(12, '100+', 100, 9999);

--M3
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '55', 0, 55);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '60', 55, 60);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '66', 60, 66);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '73', 66, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '81', 73, 81);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '90', 81, 90);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '100', 90, 100);
insert into weight_class (division, weight_class, min_weight, max_weight) values(13, '100+', 100, 9999);

--M4
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '55', 0, 55);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '60', 55, 60);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '66', 60, 66);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '73', 66, 73);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '81', 73, 81);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '90', 81, 90);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '100', 90, 100);
insert into weight_class (division, weight_class, min_weight, max_weight) values(14, '100+', 100, 9999);

--F1
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '44', 0, 44);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '48', 44, 48);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '52', 48, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '57', 52, 57);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '63', 57, 63);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '70', 63, 70);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '78', 70, 78);
insert into weight_class (division, weight_class, min_weight, max_weight) values(15, '78+', 78, 9999);

--F2
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '44', 0, 44);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '48', 44, 48);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '52', 48, 52);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '57', 52, 57);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '63', 57, 63);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '70', 63, 70);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '78', 70, 78);
insert into weight_class (division, weight_class, min_weight, max_weight) values(16, '78+', 78, 9999);