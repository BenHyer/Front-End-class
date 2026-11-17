

type AvatarProps = {
  className?: string;
  initials: string;
};

function Avatar({ className = "", initials}: AvatarProps) {
  return (
    <div className={`rounded-full flex items-center justify-center font-bold leading-none ${className}`}>
      {initials}
    </div>
  );
}

export default Avatar;




