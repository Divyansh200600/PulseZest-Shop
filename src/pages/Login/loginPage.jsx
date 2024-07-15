import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';
import './style.css'


const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isWrapperActive, setIsWrapperActive] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const toggleWrapper = () => {
    setIsWrapperActive(!isWrapperActive);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2em', color: '#fff', userSelect: 'none' }}>PulseZest</h2>
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <a href="#" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</a>
        <a href="#" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>About</a>
        <a href="#" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Service</a>
        <a href="contactus.html" style={{ margin: '0 20px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        <button 
          onClick={toggleWrapper}
          style={{
            width: '130px', height: '50px', background: 'transparent', border: '2px solid #fff',
            outline: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1.1em', color: '#fff',
            fontWeight: '500', marginLeft: '20px', transitionDuration: '0.5s'
          }}
        >
          Login
        </button>
      </nav>
      <div 
        className={`wrapper ${isWrapperActive ? 'active-pop' : ''}`}
        style={{
          position: 'relative', width: '400px', height: '440px', background: 'transparent', 
          border: '2px solid rgba(255,255,255,5)', borderRadius: '20px', backdropFilter: 'blur(20px)', 
          boxShadow: '0 0 30px rgba(0, 0, 0, .5)', display: 'flex', justifyContent: 'center', 
          alignItems: 'center', overflow: 'hidden', transform: isWrapperActive ? 'scale(1)' : 'scale(0)', 
          transition: 'transform .2s ease'
        }}
      >
        <span 
          className="icon-close" 
          onClick={toggleWrapper}
          style={{
            position: 'absolute', top: '0', right: '0', width: '45px', height: '45px', background: '#162938',
            fontSize: '2em', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center',
            borderBottomLeftRadius: '20px', cursor: 'pointer', zIndex: 1
          }}
        >
          <IconButton style={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </span>
        <div 
          className={`form-box ${isRegister ? 'register' : 'login'}`} 
          style={{ width: '100%', padding: '40px', transition: 'transform .18s ease' }}
        >
          <h2 style={{ fontSize: '2em', color: '#162938', textAlign: 'center' }}>{isRegister ? 'Registration' : 'Login'}</h2>
          <form action="#">
            <div className="input-box" style={{ position: 'relative', width: '100%', height: '50px', borderBottom: '2px solid #162938', margin: '30px 0' }}>
              <span className="icon" style={{ position: 'absolute', right: '10px', fontSize: '1.2em', color: '#162938', lineHeight: '57px' }}>
                {isRegister ? <PersonOutlineIcon /> : <MailOutlineIcon />}
              </span>
              <input type={isRegister ? 'text' : 'email'} required style={{ width: '100%', height: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', color: '#162938', fontWeight: '500', padding: '0 35px 0 5px' }} />
              <label style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', fontSize: '1em', color: '#162938', fontWeight: '500', pointerEvents: 'none', transition: '.5s' }}>
                {isRegister ? 'Username' : 'Email'}
              </label>
            </div>
            {!isRegister && (
              <div className="input-box" style={{ position: 'relative', width: '100%', height: '50px', borderBottom: '2px solid #162938', margin: '30px 0' }}>
                <span className="icon" style={{ position: 'absolute', right: '10px', fontSize: '1.2em', color: '#162938', lineHeight: '57px' }}>
                  <LockOutlinedIcon />
                </span>
                <input type="password" required style={{ width: '100%', height: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', color: '#162938', fontWeight: '500', padding: '0 35px 0 5px' }} />
                <label style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', fontSize: '1em', color: '#162938', fontWeight: '500', pointerEvents: 'none', transition: '.5s' }}>
                  Password
                </label>
              </div>
            )}
            {isRegister && (
              <div className="input-box" style={{ position: 'relative', width: '100%', height: '50px', borderBottom: '2px solid #162938', margin: '30px 0' }}>
                <span className="icon" style={{ position: 'absolute', right: '10px', fontSize: '1.2em', color: '#162938', lineHeight: '57px' }}>
                  <LockOutlinedIcon />
                </span>
                <input type="password" required style={{ width: '100%', height: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '1em', color: '#162938', fontWeight: '500', padding: '0 35px 0 5px' }} />
                <label style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)', fontSize: '1em', color: '#162938', fontWeight: '500', pointerEvents: 'none', transition: '.5s' }}>
                  Password
                </label>
              </div>
            )}
            <div className="remember-forgot" style={{ fontSize: '.9em', color: '#162938', fontWeight: '500', margin: '-15px 0 15px', display: 'flex', justifyContent: 'space-between' }}>
              <label>
                <input type="checkbox" style={{ accentColor: '#162938', marginRight: '3px' }} />
                {isRegister ? 'I agree to the terms & conditions' : 'Remember me'}
              </label>
              {!isRegister && <a href="#" style={{ color: '#162938', textDecoration: 'none' }}>Forgot Password?</a>}
            </div>
            <button type="submit" style={{ width: '100%', height: '45px', background: '#162938', border: 'none', outline: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1em', color: '#fff', fontWeight: '500' }}>
              {isRegister ? 'Register' : 'Login'}
            </button>
            <div className="login-register" style={{ fontSize: '.9em', color: '#162938', textAlign: 'center', fontWeight: '500', margin: '25px 0 10px' }}>
              <p>
                {isRegister ? 'Already have an account? ' : "Don't have an account? "}
                <a href="#" onClick={toggleForm} style={{ color: '#162938', textDecoration: 'none', fontWeight: '600' }}>
                  {isRegister ? 'Login' : 'Register'}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
