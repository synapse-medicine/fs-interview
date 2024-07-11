CREATE TABLE IF NOT EXISTS patients
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    birthdate  DATE,
    height     INTEGER,
    weight     INTEGER
);

CREATE TABLE IF NOT EXISTS molecules
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS patient_allergy
(
    patient_id INT NOT NULL,
    molecule_id INT NOT NULL,
    PRIMARY KEY (patient_id, molecule_id),
    FOREIGN KEY (patient_id) REFERENCES patients (id),
    FOREIGN KEY (molecule_id) REFERENCES molecules (id)
);