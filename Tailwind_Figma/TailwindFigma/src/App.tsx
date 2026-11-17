import "./App.css";
import MiniDashboard from "./Page_tabs/Mini_Dashboard";
import ProfileCard from "./Page_tabs/Profile_Card";
import {useState} from "react";
import EmployeeDashboard from "./Page_tabs/Employee_Dashboard";

const tabs = [
  { id: "profile", label: "Profile Card" },
  { id: "mini", label: "Mini Dashboard" },
  { id: "employee", label: "Employee Dashboard" },
] as const;

function App() {
  const [activeTab, setActiveTab] = useState<"profile" | "mini" | "employee">(
    "profile",
  );

  return (
    <div>
      <nav className="flex gap-2 p-4 bg-white border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === tab.id
                ? "bg-brand text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === "profile" && <ProfileCard />}
      {activeTab === "mini" && <MiniDashboard />}
      {activeTab === "employee" && <EmployeeDashboard />}
    </div>
  );
}

export default App;
