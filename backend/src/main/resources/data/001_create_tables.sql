CREATE TABLE IF NOT EXISTS patients
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    birthdate  DATE,
    height     INTEGER,
    weight     INTEGER
);

CREATE TABLE IF NOT EXISTS allergies
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS patient_allergy
(
    patient_id INT NOT NULL,
    allergy_id INT NOT NULL,
    PRIMARY KEY (patient_id, allergy_id),
    FOREIGN KEY (patient_id) REFERENCES patient (id),
    FOREIGN KEY (allergy_id) REFERENCES allergy (id)
);