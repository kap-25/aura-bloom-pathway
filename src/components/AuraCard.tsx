
import React, { ReactNode } from 'react';

type AuraCardProps = {
  children: ReactNode;
  className?: string;
  floatingEffect?: boolean;
};

const AuraCard: React.FC<AuraCardProps> = ({ 
  children, 
  className = "",
  floatingEffect = false
}) => {
  return (
    <div 
      className={`
        aura-card p-6 md:p-8
        ${floatingEffect ? 'animate-float' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default AuraCard;
