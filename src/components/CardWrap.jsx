export default function CardWrap({ children, className = '' }) {

  return (
    <div className={`card-wrap ${className}`}>
      {children}
    </div>
  );
}
