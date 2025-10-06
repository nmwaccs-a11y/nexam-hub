import HRLayout from "@/components/HRLayout";
import StatsCard from "@/components/StatsCard";
import EmployeeCard from "@/components/EmployeeCard";
import AttendanceTable from "@/components/AttendanceTable";
import { Users, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const mockEmployees = [
    { name: "John Smith", department: "Enamel", attendance: 95, salary: 45000 },
    { name: "Sarah Johnson", department: "Workshop", attendance: 88, salary: 52000 },
    { name: "Michael Brown", department: "Machinist", attendance: 92, salary: 48000 },
    { name: "Emily Davis", department: "Admins", attendance: 97, salary: 55000 },
  ];

  return (
    <HRLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between animate-slide-in-left">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
            <p className="text-muted-foreground mt-2">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <Button className="rounded-2xl px-6 py-6 glow-hover smooth-transition bg-accent hover:bg-accent/90 text-primary font-semibold">
            + Add Employee
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Employees"
            value="156"
            icon={Users}
            trend="↑ 12% from last month"
            delay={0}
          />
          <StatsCard
            title="Present Today"
            value="142"
            icon={Clock}
            trend="↑ 91% attendance"
            delay={100}
          />
          <StatsCard
            title="Total Payroll"
            value="$2.4M"
            icon={DollarSign}
            trend="↑ 8% this quarter"
            delay={200}
          />
          <StatsCard
            title="Performance"
            value="98%"
            icon={TrendingUp}
            trend="↑ Excellent rating"
            delay={300}
          />
        </div>

        {/* Recent Employees */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/60 rounded-full" />
            Featured Employees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockEmployees.map((emp, index) => (
              <EmployeeCard
                key={emp.name}
                name={emp.name}
                department={emp.department}
                attendance={emp.attendance}
                salary={emp.salary}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Attendance Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/60 rounded-full" />
            This Week's Attendance
          </h2>
          <AttendanceTable />
        </div>
      </div>
    </HRLayout>
  );
};

export default Index;
