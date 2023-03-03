import styles from '@/styles/Button.module.css';
import React from 'react';

interface ButtonProps {
  className: string;
  type: 'button' | null;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, className, disabled, type, ...rest }: ButtonProps) {
  return (
    <button
      className={styles[className]}
      type={!type ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  );
}
