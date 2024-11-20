package com.main.spss.embedded;


import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@NoArgsConstructor
@Getter
@Setter
public class Location {
    @Column(name = "campus")
    private String campusName;

    @Column(name = "building")
    private String buildingName;

    @Column(name = "room")
    private String roomNumber;
}
