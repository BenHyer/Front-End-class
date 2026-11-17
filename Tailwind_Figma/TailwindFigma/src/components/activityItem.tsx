type ActivityItemProps = {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
};

function ActivityItem({ icon, iconColor, title, subtitle }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-line last:border-b-0">
      <div className={`size-7 rounded-full flex items-center justify-center text-xs font-bold ${iconColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default ActivityItem;
