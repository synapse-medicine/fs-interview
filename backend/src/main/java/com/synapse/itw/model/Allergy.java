package com.synapse.itw.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record Allergy(
        @JsonProperty int id,
        @JsonProperty String name
) {
}
