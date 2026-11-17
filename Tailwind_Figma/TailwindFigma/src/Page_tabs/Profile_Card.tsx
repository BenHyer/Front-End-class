import Card from "../components/Card";
import Badge from "../components/badge";
import Avatar from "../components/avatar";
import Button from "../components/button";

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <Card className="border border-black shadow-[4px_6px_0_#DCE3ED] w-full max-w-[400px] px-8 pt-9 pb-14 flex flex-col gap-7">
        
        <div className="flex items-center gap-6">
          <Avatar
            initials="AJ"
            className="size-18 bg-blue-100 text-brand text-[22px]"
          />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Alex Johnson</h2>
            <p className="text-base text-slate-500 mt-1">Frontend Developer</p>
          </div>
        </div>

        <Badge variant="success" className="self-start">
          Available
        </Badge>

        <hr className="border-slate-200" />

        
        <div className="flex gap-4">
          <Button variant="primary" className="flex-1">
            View Profile
          </Button>
          <Button variant="secondary" className="flex-1">
            Message
          </Button>
        </div>
      </Card>
    </div>
  );
}
