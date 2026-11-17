import Card from "./Card";

type StatCardProps = {
    label: string;
    value: string | number;
    className?: string;
};

function StatCard({ label, value, className = "" }: StatCardProps) {
    return (
        <Card className={`p-8 pb-14 ${className}`}>
            <p className="text-lg text-slate-500">{label}</p>
            <p className="text-5xl font-bold text-slate-900 mt-6">{value}</p>
        </Card>
    );
}

export default StatCard;