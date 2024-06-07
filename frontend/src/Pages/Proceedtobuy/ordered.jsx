import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';

function Ordered() {
  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '90vh',
    backgroundColor: "#8A2BE2"
  };

  const cardStyle = {
    padding: 20,
    maxWidth: '500px',
    backgroundColor: "#5B33F3"
  };

  const gifURL = "https://cdn.dribbble.com/users/2960440/screenshots/8599913/media/dbd45827a0d850ac8738f0c3123f23e2.gif";

  const isMobileView = window.innerWidth < 768; 

  return (
    <div style={centerContentStyle}>
      <Card style={cardStyle} className={isMobileView ? 'mobile-card' : 'desktop-card'}>
        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={gifURL}
            alt="GIF"
            style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: isMobileView ? '70vh' : 'auto' }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Ordered;
