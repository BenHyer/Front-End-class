import Avatar from "./avatar";
import Badge from "./badge";

type EmployeeRowProps = {
  name: string;
  email: string;
  role: string;
  status: "active" | "leave";
  initials: string;
  avatarColor: string;
};

function EmployeeRow({ name, email, role, status, initials, avatarColor }: EmployeeRowProps) {
  return (
    <tr className="border-b border-line last:border-b-0">
      <td className="py-4 px-3">
        <div className="flex items-center gap-3">
          <Avatar initials={initials} className={`size-9 text-xs ${avatarColor}`} />
          <div>
            <p className="text-sm font-semibold text-slate-800">{name}</p>
            <p className="text-xs text-slate-400">{email}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-3 text-sm text-slate-600">{role}</td>
      <td className="py-4 px-3">
        {status === "active" ? (
          <Badge variant="success">Active</Badge>
        ) : (
          <Badge variant="warning">On leave</Badge>
        )}
      </td>
    </tr>
  );
}

export default EmployeeRow;
