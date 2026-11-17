import Card from "../components/Card";
import Avatar from "../components/avatar";
import Button from "../components/button";
import NavItem from "../components/navItem";
import EmployeeRow from "../components/employeeRow";
import ActivityItem from "../components/activityItem";

const stats = [
  { label: "Total employees", value: 48, note: "+6 this month", icon: "☺", iconColor: "bg-teal-50 text-teal", noteColor: "text-teal" },
  { label: "Active projects", value: 12, note: "+2 this month", icon: "≡", iconColor: "bg-blue-50 text-blue-500", noteColor: "text-teal" },
  { label: "Tasks completed", value: 186, note: "+18% this week", icon: "✓", iconColor: "bg-purple-50 text-purple-500", noteColor: "text-teal" },
  { label: "Pending reviews", value: 7, note: "Needs attention", icon: "!", iconColor: "bg-amber-50 text-amber-500", noteColor: "text-amber-600" },
];

const employees = [
  { name: "Steve Rogers", email: "steve@northstar.co", role: "Frontline Commander", status: "active", initials: "SR", avatarColor: "bg-orange-100 text-orange-900" },
  { name: "Tony Stark", email: "tony@northstar.co", role: "Chief Armor Engineer", status: "active", initials: "TS", avatarColor: "bg-blue-100 text-blue-800" },
  { name: "Natasha Romanoff", email: "natasha@northstar.co", role: "Covert Ops Specialist", status: "leave", initials: "NR", avatarColor: "bg-purple-100 text-purple-800" },
  { name: "Bruce Banner", email: "bruce@northstar.co", role: "Gamma Research Lead", status: "active", initials: "BB", avatarColor: "bg-teal-100 text-teal" },
] as const;

const activity = [
  { icon: "✓", iconColor: "bg-teal-50 text-teal", title: "Project completed", subtitle: "Website refresh · 2h ago" },
  { icon: "+", iconColor: "bg-blue-50 text-blue-500", title: "New team member", subtitle: "Thor joined · Yesterday" },
  { icon: "!", iconColor: "bg-amber-50 text-amber-500", title: "Review requested", subtitle: "Mobile app · Yesterday" },
];

function EmployeeDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-62 shrink-0 bg-navy text-white p-5">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-8 rounded-lg bg-teal-light flex items-center justify-center font-bold">N</div>
          <span className="text-xl font-bold">Northstar</span>
        </div>

        <p className="text-xs font-semibold text-slate-400 mb-2">WORKSPACE</p>
        <nav className="flex flex-col gap-1 mb-8">
          <NavItem label="Overview" active />
          <NavItem label="Employees" />
          <NavItem label="Projects" />
          <NavItem label="Reports" />
        </nav>

        <p className="text-xs font-semibold text-slate-400 mb-2">MANAGEMENT</p>
        <nav className="flex flex-col gap-1">
          <NavItem label="Settings" />
          <NavItem label="Help Center" />
        </nav>

        <div className="mt-auto pt-5 border-t border-navy-light flex items-center gap-3">
          <Avatar initials="NF" className="size-9 text-xs bg-orange-200 text-orange-900" />
          <div>
            <p className="text-sm font-semibold">Nick Fury</p>
            <p className="text-xs text-slate-400">S.H.I.E.L.D. Director</p>
          </div>
        </div>
      </aside>

      {/* Right side */}
      <div className="flex-1 flex flex-col bg-page">
        <header className="h-22 bg-white border-b border-line flex items-center justify-between px-8">
          <p className="font-semibold text-slate-800">Workspace / Overview</p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search employees..."
              className="hidden sm:block bg-page border border-line rounded-lg px-3 py-2 text-sm"
            />
            <Avatar initials="NF" className="size-9 text-xs bg-teal-50 text-teal" />
          </div>
        </header>

        <main className="p-8 flex flex-col gap-6">
          {/* Title row */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Team overview</h1>
              <p className="text-sm text-slate-500 mt-1">Here's what's happening across your team today.</p>
            </div>
            <Button variant="teal">+ Add employee</Button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <Card key={stat.label} className="border border-line p-5">
                <div className="flex justify-between items-start">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <div className={`size-8 rounded-full flex items-center justify-center text-sm font-bold ${stat.iconColor}`}>
                    {stat.icon}
                  </div>
                </div>
                <p className="text-4xl font-bold text-slate-800 mt-2">{stat.value}</p>
                <p className={`text-xs mt-3 ${stat.noteColor}`}>{stat.note}</p>
              </Card>
            ))}
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Card className="border border-line p-5 lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Team members</h2>
                  <p className="text-sm text-slate-500">People working across your organization</p>
                </div>
                <button className="border border-line bg-page rounded-lg px-4 py-2 text-sm font-semibold text-slate-700">
                  View all →
                </button>
              </div>

              <table className="w-full text-left">
                <thead>
                  <tr className="border-y border-line text-xs text-slate-500">
                    <th className="py-3 px-3 font-semibold">EMPLOYEE</th>
                    <th className="py-3 px-3 font-semibold">ROLE</th>
                    <th className="py-3 px-3 font-semibold">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <EmployeeRow key={emp.email} {...emp} />
                  ))}
                </tbody>
              </table>

              <p className="text-xs text-slate-400 mt-4">Showing 4 of 48 employees</p>
            </Card>

            <Card className="border border-line p-5 flex flex-col">
              <h2 className="text-lg font-bold text-slate-800">Recent activity</h2>
              <p className="text-sm text-slate-500 mb-2">Latest team updates</p>

              {activity.map((item) => (
                <ActivityItem key={item.title} {...item} />
              ))}

              <div className="mt-auto bg-teal-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-teal">Keep the team moving</p>
                <p className="text-xs text-slate-500">Check pending reviews this week.</p>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
