

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary"
  className?: string;
};

const variantClasses = {
  primary: "bg-brand text-white",
  secondary: "bg-white border border-slate-300 text-slate-700",
};

function Button({ children, className = "", variant }: ButtonProps) {
  return (
    <button className={`inline-flex items-center justify-center h-13 px-8 rounded-lg text-[15px] font-bold leading-none ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;




