import { Check, X, Calendar } from "lucide-react";

interface AttendanceRecord {
  name: string;
  department: string;
  days: ("present" | "absent" | "leave")[];
}

const mockAttendance: AttendanceRecord[] = [
  {
    name: "John Smith",
    department: "Enamel",
    days: ["present", "present", "present", "leave", "present", "present", "absent"],
  },
  {
    name: "Sarah Johnson",
    department: "Workshop",
    days: ["present", "present", "absent", "present", "present", "present", "present"],
  },
  {
    name: "Michael Brown",
    department: "Machinist",
    days: ["present", "present", "present", "present", "leave", "present", "present"],
  },
  {
    name: "Emily Davis",
    department: "Admins",
    days: ["present", "present", "present", "present", "present", "absent", "present"],
  },
];

const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function AttendanceTable() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <Check size={16} className="text-green-500" />;
      case "absent":
        return <X size={16} className="text-red-500" />;
      case "leave":
        return <Calendar size={16} className="text-blue-500" />;
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-500/10 border-green-500/20";
      case "absent":
        return "bg-red-500/10 border-red-500/20";
      case "leave":
        return "bg-blue-500/10 border-blue-500/20";
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 animate-scale-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
          <Calendar size={20} className="text-accent" />
        </div>
        <h2 className="text-xl font-bold">Weekly Attendance</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-4 px-4 font-semibold text-sm text-muted-foreground">
                Employee
              </th>
              <th className="text-left py-4 px-4 font-semibold text-sm text-muted-foreground">
                Department
              </th>
              {dayLabels.map((day) => (
                <th
                  key={day}
                  className="text-center py-4 px-3 font-semibold text-sm text-muted-foreground"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockAttendance.map((record, index) => (
              <tr
                key={record.name}
                className="border-b border-border/30 hover:bg-accent/5 smooth-transition animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <td className="py-4 px-4 font-medium">{record.name}</td>
                <td className="py-4 px-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {record.department}
                  </span>
                </td>
                {record.days.map((status, dayIndex) => (
                  <td key={dayIndex} className="py-4 px-3">
                    <div
                      className={`w-8 h-8 rounded-xl border flex items-center justify-center smooth-transition hover:scale-110 ${getStatusBg(
                        status
                      )}`}
                    >
                      {getStatusIcon(status)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <Check size={14} className="text-green-500" />
          </div>
          <span className="text-xs text-muted-foreground">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <X size={14} className="text-red-500" />
          </div>
          <span className="text-xs text-muted-foreground">Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Calendar size={14} className="text-blue-500" />
          </div>
          <span className="text-xs text-muted-foreground">Leave</span>
        </div>
      </div>
    </div>
  );
}
