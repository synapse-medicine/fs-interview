package com.synapse.itw.repository;

import com.synapse.itw.model.Allergy;
import com.synapse.itw.model.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public class PatientRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PatientRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<Patient> getById(int id) {
        List<Patient> patientList = this.jdbcTemplate.query(
                "SELECT * FROM patients WHERE id = ?",
                (rs, rowNum) -> new Patient(
                        rs.getInt("id"),
                        rs.getString("first_name"),
                        rs.getString("last_name"),
                        rs.getDate("birthdate").toLocalDate(),
                        rs.getInt("height"),
                        rs.getInt("weight")
                ), id);

        if (patientList.isEmpty()) {
            return Optional.empty();
        } else {
            return Optional.of(patientList.getFirst());
        }
    }

    @Transactional
    public void updateAllergies(int patientId, List<Integer> allergies) {
        jdbcTemplate.update("DELETE FROM patient_allergy WHERE patient_id = ?", patientId);
        for (Integer allergy : allergies) {
            jdbcTemplate.update("INSERT INTO patient_allergy (patient_id, molecule_id) VALUES (?, ?)", patientId, allergy);
        }
    }

    public List<Allergy> getAllergies(int patientId) {
        return this.jdbcTemplate.query(
                "SELECT m.id, m.name FROM molecules m JOIN patient_allergy pa ON m.id = pa.molecule_id WHERE pa.patient_id = ?",
                (rs, rowNum) -> new Allergy(
                        rs.getInt("id"),
                        rs.getString("name")
                ), patientId);
    }
}
