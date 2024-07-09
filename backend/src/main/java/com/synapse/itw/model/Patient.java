package com.synapse.itw.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;

public class Patient {
    @JsonProperty("id")
    private int id;
    @JsonProperty("first_name")
    private String firstName;
    @JsonProperty("last_name")
    private String lastName;
    @JsonProperty("birth_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate birthDate;
    @JsonProperty("height")
    private int height;
    @JsonProperty("weight")
    private int weight;

    public Patient(int id, String firstName, String lastName, LocalDate birthDate, int height, int weight) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.height = height;
        this.weight = weight;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }
}
