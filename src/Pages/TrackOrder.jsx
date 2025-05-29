import React, { useState } from 'react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [trackingResult, setTrackingResult] = useState('');

  const sampleOrderIds = [
    'SHP123456789',
    'ORD20230515ABC',
    'xxxxyyyy',
    'SHOP20250515XYZ',
    'kiranshoper',
  ];

  const handleTrack = () => {
    const trimmedId = orderId.trim();

    if (!trimmedId) {
      setTrackingResult('❌ Please enter a valid Order ID.');
      return;
    }

    if (!sampleOrderIds.includes(trimmedId)) {
      setTrackingResult('❌ Invalid Order ID. Please check and try again.');
      return;
    }

    setTrackingResult(`✅ Order ID ${trimmedId} is currently out for delivery. Expected delivery: within 2 days.`);
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh', // 👈 Keeps space for footer
    width: '150%',
  };

  const containerStyle = {
    maxWidth: '900px',
    padding: '200px',
    backgroundColor: '#fefefe',
    borderRadius: '10px',
    boxShadow: '0 4px 1px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    textAlign: 'center',
    boxSizing: 'border-box',
    width: '90%',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    marginBottom: '60px',
  };

  const inputStyle = {
    width: '80%',
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginBottom: '40px',
  };

  const buttonStyle = {
    padding: '10px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const resultStyle = {
    fontSize: '1.1rem',
    color: trackingResult.startsWith('❌') ? '#d00000' : '#007b00',
    marginTop: '20px',
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Track Your Order</h2>
        <p style={paragraphStyle}>Enter your order ID to check the delivery status.</p>
        <input
          type="text"
          placeholder="Enter Order ID"
          style={inputStyle}
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <br />
        <button style={buttonStyle} onClick={handleTrack}>
          Track
        </button>
        {trackingResult && <p style={resultStyle}>{trackingResult}</p>}
      </div>
    </div>
  );
}
