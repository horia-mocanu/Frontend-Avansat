import React from 'react';

const Button: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <button type="submit" className={className}>
      Login
    </button>
  );
};

export default Button;