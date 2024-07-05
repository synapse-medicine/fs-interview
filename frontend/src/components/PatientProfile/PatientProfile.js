import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProfileItem from '../ProfileItem/ProfileItem';
import './PatientProfile.css';

const PatientProfile = () => {
  const {id} = useParams();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // TODO: Use a var for the URL
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(`http://localhost:8080/api/v1/patients/${id}`, {
      method: "GET",
      headers: myHeaders,
      mode: "no-cors",
    })
      .then(response => response.json())
      .then(data => setPatientData(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!patientData) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Patient Profile</h1>
      <div className="patient-profile">
        <ProfileItem label="ID" value={patientData.id}/>
        <ProfileItem label="First Name" value={patientData.first_name}/>
        <ProfileItem label="Last Name" value={patientData.last_name}/>
        <ProfileItem label="Birth Date" value={patientData.birth_date}/>
        <ProfileItem label="Height" value={patientData.height}/>
        <ProfileItem label="Weight" value={patientData.weight}/>
      </div>
    </div>
  );
};

export default PatientProfile;
