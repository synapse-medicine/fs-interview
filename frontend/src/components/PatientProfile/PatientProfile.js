import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProfileItem from '../ProfileItem/ProfileItem';
import './PatientProfile.css';

const PatientProfile = () => {
  const {id} = useParams();
  const [patientData, setPatientData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/patients/${id}`, {
      method: "GET",
      mode: "cors",
    })
      .then(response => response.json())
      .then(data => setPatientData(data))
      .catch(error => {
        console.error(error);
        setErrorMessage({title: "Error fetching patient data", details: error.message});
      });
  }, [id]);

  if (errorMessage) {
    return <div className="container">
      <h1>{errorMessage.title}</h1>
      <p>{errorMessage.details}</p>
    </div>
  }
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
