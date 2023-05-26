INSERT INTO department (name)
VALUES ("Athletics"),
       ("Legal"),
       ("Healthcare"),
       ("Finance");

INSERT INTO roles (title, salary, department_id) VALUES
('AthleticsManager', 200000, 1),
('Athletic Director',80000, 1),
('Legal Team Supervisor', 950000, 2),
('Legal Director',650000,2 ),
('Healthcare Chief Director', 850000, 3),
('Medical Department Head', 500000, 3)
('Chief Financial Officer', 400000, 4),
('Finance Director',200000, 4)


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Asha', 'Asiya', 1, 2),
('Marwo', 'Nimco', 2, null),
('Hassan', 'Zaini', 3, 4),
('Muktaar', 'Amira', 4, null),
('Mahad', 'Muntaas', 5, 6),
('Omer', 'Munira', 6, null),
('Mubarik', 'Muwahib', 7, 8),
('Sudais', "Ayub", 8, null),
