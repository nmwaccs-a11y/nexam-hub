import { User } from "lucide-react";

interface EmployeeCardProps {
  name: string;
  department: string;
  attendance: number;
  salary: number;
  image?: string;
  delay?: number;
}

export default function EmployeeCard({
  name,
  department,
  attendance,
  salary,
  image,
  delay = 0,
}: EmployeeCardProps) {
  return (
    <div
      className="glass-card rounded-3xl p-6 glow-hover smooth-transition cursor-pointer group animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center overflow-hidden border-4 border-background smooth-transition group-hover:scale-110 group-hover:border-accent/50">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <User size={32} className="text-primary" />
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-background animate-pulse-glow" />
        </div>

        {/* Employee Info */}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-accent/10">
            {department}
          </p>
        </div>

        {/* Stats */}
        <div className="w-full space-y-3 pt-2">
          {/* Attendance */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Attendance</span>
              <span className="font-semibold text-accent">{attendance}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full smooth-transition"
                style={{ width: `${attendance}%` }}
              />
            </div>
          </div>

          {/* Salary Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Salary</span>
              <span className="font-semibold">${salary.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full smooth-transition"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
