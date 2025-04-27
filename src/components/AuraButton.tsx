
import React from 'react';
import { Button } from '@/components/ui/button';

type AuraButtonProps = React.ComponentProps<typeof Button> & {
  gradient?: boolean;
};

const AuraButton: React.FC<AuraButtonProps> = ({ 
  children, 
  className = '', 
  gradient = false,
  ...props 
}) => {
  return (
    <Button
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-medium 
        shadow-md hover:shadow-lg transition-all duration-300 transform 
        hover:-translate-y-1 text-base
        ${gradient ? 'bg-gradient-spiritual border-none text-white' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AuraButton;
