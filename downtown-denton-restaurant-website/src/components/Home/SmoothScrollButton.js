import React from 'react';

const SmoothScrollButton = ({ targetId, buttonText }) => {
  const scrollToTarget = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button onClick={() => scrollToTarget(targetId)} className="scroll-button">
      {buttonText}
    </button>
  );
};

export default SmoothScrollButton;
