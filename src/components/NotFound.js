import React from 'react';
import Lottie from 'lottie-react'; // Make sure to install 'react-lottie' npm package
import notFoundImage from '../assets/images/Lottie/Not-Found-Lottie-01.json'; // Replace with your actual image path

const NotFound = () => {
  return (
    <div style={styles.container}>
      <Lottie animationData={notFoundImage} style={{height: "80vh"}} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default NotFound;
