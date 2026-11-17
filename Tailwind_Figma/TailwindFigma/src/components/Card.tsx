

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className = ""}: CardProps) {
  return (
    <div className={`bg-white rounded-md ${className}`}>
      {children}
    </div>
  );
}

export default Card;




