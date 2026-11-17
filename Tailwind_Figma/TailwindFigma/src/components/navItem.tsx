type NavItemProps = {
  label: string;
  active?: boolean;
};

function NavItem({ label, active = false }: NavItemProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
        active ? "bg-navy-light text-white" : "text-slate-300 hover:bg-navy-light"
      }`}
    >
      {active && <span className="size-3 rounded-sm bg-teal-light"></span>}
      {label}
    </a>
  );
}

export default NavItem;
