INSERT INTO category (category_name)
VALUES
('Tops'),
('Bottoms'),
('Hats');



INSERT INTO product (product_name, price, stock, category_id)
VALUES
('Button Down', '29.99', 20, 1),
('Classic T', '12.99', 15, 1),
('Khakis', '49.99', 36, 2),
('Shorts', '24.99', 25, 2),
('Baseball Cap', '29.99', 30, 3),
('Cowboy', '50.00', 6, 3);

INSERT INTO tag (tag_name)
VALUES
('Dress'),
('Casual');

INSERT INTO product_tag (product_id, tag_id)
VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 2),
(5, 2),
(6, 1);




