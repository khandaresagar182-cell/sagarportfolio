import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Vibe Coder 🎧",
          "AI-Powered Developer",
          "Prompt-to-Product Builder",
          "Full Stack Vibe Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
