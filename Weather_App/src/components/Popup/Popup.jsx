import React from "react";
import "./popup.css";
// Geolocation Popup Component
const GeolocationPopup = ({ onAllow, onDeny }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-header">
          <div className="location-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <h2>Location Access</h2>
        </div>
        
        <div className="popup-content">
          <p>We'd like to access your location to provide accurate weather information for your area.</p>
          <div className="benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <span>Precise local weather</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <span>Instant updates</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🌍</span>
              <span>Worldwide coverage</span>
            </div>
          </div>
        </div>
        
        <div className="popup-actions">
          <button className="btn-deny" onClick={onDeny}>
            Use Default Location
          </button>
          <button className="btn-allow" onClick={onAllow}>
            Allow Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeolocationPopup;