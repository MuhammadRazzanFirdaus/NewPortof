import { useRef } from 'react';
import { useSpinBorder } from '../hooks/useSpinBorder';

export default function CardWrap({ children, className = '' }) {
  const ref = useRef(null);
  useSpinBorder(ref);

  return (
    <div className={`card-wrap ${className}`} ref={ref}>
      {children}
    </div>
  );
}
