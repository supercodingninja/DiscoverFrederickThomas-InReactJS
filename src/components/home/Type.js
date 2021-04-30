import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  
  return (
    
    <Typewriter
      
      options={{
          
        strings: [
            
          "",// BLANK SPACE FOR MORE EFFECT. //
          "Minister (Servant) For His Church & Community",
          "Full-Stack Web Developer & Emerging Engineer",
          "United States Marine Corps War Veteran",
          "Humanitarian & Entrepreneur",
          "Husband & Father",
          "Brother & Friend",
          "Musician & Vocalist",
          "WINNER!",
          "You Need To 👆🏿👆🏿👆🏿",
          "",// BLANK SPACE FOR MORE EFFECT. //
          "Or Someone Else Will!",
          "",// BLANK SPACE FOR MORE EFFECT. //
        ],

          autoStart: true,
          
          loop: true,
          
          typeSpeed: 10,
          
          deleteSpeed: 5,

      }}
    />
  );
};

export default Type;
