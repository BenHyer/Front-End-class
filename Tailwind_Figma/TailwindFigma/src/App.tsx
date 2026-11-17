import "./App.css";
import Badge from "./components/badge";
import Avatar from "./components/avatar";
import Button from "./components/button";

function App() {
  return (
    <div className="flex gap-4 p-8">
      <Badge variant="success">Available</Badge>
      <Badge variant="info">In Progress</Badge>
      <Badge variant="neutral">Planning</Badge>
      <Avatar
        initials="AJ"
        className="size-18 bg-blue-100 text-brand text-[22px]"
      />
      <Button variant="primary">View Profile</Button>
      <Button variant="secondary">Message</Button>
    </div>
  );
}

export default App;
