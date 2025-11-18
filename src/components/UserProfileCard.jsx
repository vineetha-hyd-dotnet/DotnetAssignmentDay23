import React, { useState } from 'react';

const UserProfileCard = ({ user = {} }) => {
  const defaultUser = {
    name: "Vineetha",
    email: "vineetha@gmail.com",
    bio: "Dotnet Full Stack Developer.",
    joinDate: "August 2025"
  };

  const userData = { ...defaultUser, ...user };
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(userData);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved user data:", userInfo);
  };

  const handleChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="user-profile-card">
      <div className="profile-header">
        
        
        <div className="profile-info">
          {isEditing ? (
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="edit-input"
            />
          ) : (
            <h2>{userInfo.name}</h2>
          )}
          <p className="email">{userInfo.email}</p>
          <p className="join-date">Working since {userInfo.joinDate}</p>
        </div>
      </div>
      
      <div className="profile-bio">
        <h3>About Me</h3>
        {isEditing ? (
          <textarea
            value={userInfo.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="edit-textarea"
          />
        ) : (
          <p>{userInfo.bio}</p>
        )}
      </div>
      
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;