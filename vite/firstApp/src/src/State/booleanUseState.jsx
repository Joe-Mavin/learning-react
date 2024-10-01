import React, { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true); // Initial state is true (visible)

  return (
    <div>
      {isVisible && <p>This message is visible!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
    </div>
  );
}

export default ToggleMessage;
