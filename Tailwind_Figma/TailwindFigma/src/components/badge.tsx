

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant: "success" | "info" | "neutral"
};


const variantClasses = {
  success: "bg-green-100 text-green-800",
  info: "bg-blue-100 text-blue-700",
neutral: "bg-slate-100 text-slate-600",
};



function Badge({ children, className = "", variant }: BadgeProps) {
  return (
    <span className={`rounded-full px-5 py-2 text-sm leading-none font-bold ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;




