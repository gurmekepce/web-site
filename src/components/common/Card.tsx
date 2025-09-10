import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        transition-all duration-700 ease-out
        ${hover ? 'hover:shadow-xl hover:-translate-y-2' : ''}
        ${isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};