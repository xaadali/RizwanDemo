'use client';
import React, { useState, useEffect } from 'react';
// import { Slide } from 'react-awesome-reveal';

const AnimatedText = ({ textArray=[] }) => {

  const [currentText, setCurrentText] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const nextIndex = (textArray.indexOf(prevText) + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray]);

  return (
    // <Slide triggerOnce direction='up' key={currentText}>
      <> {currentText} </>
    // </Slide>
  );
};

export default AnimatedText;