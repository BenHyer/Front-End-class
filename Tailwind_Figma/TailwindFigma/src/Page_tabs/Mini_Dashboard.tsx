import Card from "../components/Card";
import ProjectRow from "../components/projectRow";
import StatCard from "../components/statCard";
import Button from "../components/button";

const statistics = [
  { label: "Total Projects", value: 12 },
  { label: "Active Projects", value: 48 },
  { label: "Completed Projects", value: 8 },
];

const projects = [
  { name: "Website Redesign", status: "in-progress" },
  { name: "Mobile Application", status: "planning" },
  { name: "Customer Portal", status: "completed" },
] as const;

function MiniDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-7 flex flex-col gap-9">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-lg text-slate-500 mt-1">Welcome back, Peter!</p>
        </div>
        <Button variant="primary">+ New Project</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {statistics.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <Card className="px-8 pt-8 pb-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Projects</h2>
        {projects.map((project) => (
          <ProjectRow
            key={project.name}
            name={project.name}
            status={project.status}
          />
        ))}
      </Card>
    </div>
  );
}

export default MiniDashboard;
