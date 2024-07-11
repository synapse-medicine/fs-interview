package com.synapse.itw.service;

import com.synapse.itw.model.Allergy;
import com.synapse.itw.model.Patient;
import com.synapse.itw.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Optional<Patient> getPatientById(int id) {
        return patientRepository.getById(id);
    }

    public List<Allergy> updatePatientAllergies(int patientId, List<Integer> allergies) {
        patientRepository.updateAllergies(patientId, allergies);
        return patientRepository.getAllergies(patientId);
    }

    public List<Allergy> getPatientAllergies(int patientId) {
        return patientRepository.getAllergies(patientId);
    }
}
