import React from 'react';
import './RegistrationPage.css';
import UserRegistrationFrom from '../../Components/Forms/UserRegistrationFrom'
const RegistrationPage = () => {
    return (
      <div className='reg-form-container'>
          <h1 className='welcome-title'>Welcome to simple registration app</h1>
          <UserRegistrationFrom />
      </div>
    );
}

export default RegistrationPage;