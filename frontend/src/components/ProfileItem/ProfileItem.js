import React from 'react';
import './ProfileItem.css';

const ProfileItem = ({ label, value }) => (
  <div className="profile-item">
    <span className="label">{label}:</span>
    <span className="value">{value}</span>
  </div>
);

export default ProfileItem;
