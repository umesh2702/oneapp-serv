import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import profile from './assets/images/providers/profile.png'
import { FaRegEdit } from "react-icons/fa";


const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          throw new Error('JWT token not found in localStorage');
        }

        const response = await axios.get('http://localhost:9999/api/c3/user/me', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
            console.log(response)
        setUserData(response.data.user); // Assuming API returns user information
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error state or redirect to login
      }
    };

    fetchUserData();
  }, []);

  // Check if userData is null or undefined before accessing its properties
  if (!userData) {
    return <div>Loading...</div>; // Placeholder for when data is being fetched
  }

  console.log('userData:', userData); // Ensure userData is logged correctly

  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-card-left">
            <img 
              src={profile} // Replace with actual avatar URL field
              alt="Avatar" 
              className="profile-avatar" 
            />
            <h1>{userData.name}</h1> {/* Ensure userData.name is accessible */}
            
            <FaRegEdit fontSize={35}/>
          </div>
          <div className="profile-card-body">
            <h6>Information</h6>
            <hr className="profile-hr" />
            <div className="profile-info">
              <div className="profile-info-item">
                <h6>Email</h6>
                <p className="text-muted">{userData.email}</p>
              </div>
              <div className="profile-info-item">
                <h6>Phone</h6>
                <p className="text-muted">{userData.number}</p>
              </div>
            </div>

            {/* Additional sections can be added based on backend schema */}
            <div className="social-links">
              {/* Add your social links/icons here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
