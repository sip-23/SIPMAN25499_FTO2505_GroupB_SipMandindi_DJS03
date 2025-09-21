import { useState } from 'react';

const ErrorDisplay = ({ message, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-[#ff4444] text-white px-4 py-3 rounded shadow-lg z-[1000]">
      <span>{message}</span>
      <button onClick={handleDismiss} className="ml-4 text-xl">×</button>
    </div>
  );
};

export default ErrorDisplay;