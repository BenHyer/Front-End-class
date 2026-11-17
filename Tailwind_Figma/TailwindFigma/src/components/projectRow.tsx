import Badge from "./badge";


type ProjectRowProps = {
    name: string;
    status: "in-progress" | "planning" | "completed";
    className?: string;
};

const statusBadge = {
  "in-progress": { variant: "info", label: "In Progress" },
  planning: { variant: "neutral", label: "Planning" },
  completed: { variant: "success", label: "Completed" },
} as const;

function ProjectRow({ name, status, className = "" }: ProjectRowProps) {


    return (
        <div className={`flex items-center justify-between  py-5 border-b border-slate-200 last:border-b-0 ${className}`}>
            <span className="text-xl text-slate-700">{name}</span>
            <Badge className="inline-flex items-center justify-center h-10 w-[170px]" variant={statusBadge[status].variant}>
                {statusBadge[status].label}
            </Badge>
        </div>
    );
}

export default ProjectRow;