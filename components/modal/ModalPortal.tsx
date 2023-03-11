import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}
export default function ModalPortal({ children }: ModalPortalProps) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setModalRoot(document.getElementById('modal'));
  }, []);
  if (!modalRoot) return null;
  return ReactDOM.createPortal(children, modalRoot as HTMLElement);
}
