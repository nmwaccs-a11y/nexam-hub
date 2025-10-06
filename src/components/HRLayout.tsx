import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Clock,
  DollarSign,
  FileText,
  Settings,
  Bell,
  Menu,
  X,
} from "lucide-react";

interface HRLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Employees", path: "/employees" },
  { icon: Clock, label: "Attendance", path: "/attendance" },
  { icon: DollarSign, label: "Salary", path: "/salary" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function HRLayout({ children }: HRLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Floating particles background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 glass-panel border-b border-border/50 animate-slide-in-left">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-xl hover:bg-accent/10 smooth-transition glow-hover"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              NMW HR
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl hover:bg-accent/10 smooth-transition glow-hover">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse-glow" />
            </button>
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel glow-hover cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center font-semibold text-primary text-sm">
                SA
              </div>
              <span className="font-medium text-sm">Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 z-40 glass-panel border-r border-border/50 smooth-transition ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl smooth-transition group relative overflow-hidden ${
                  isActive
                    ? "bg-accent text-primary shadow-[var(--shadow-glow)]"
                    : "hover:bg-accent/10 text-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent animate-pulse-glow" />
                )}
                <Icon
                  size={20}
                  className={`relative z-10 smooth-transition ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                {sidebarOpen && (
                  <span className="relative z-10 font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-20 smooth-transition ${
          sidebarOpen ? "pl-64" : "pl-20"
        }`}
      >
        <div className="p-6 animate-fade-in">{children}</div>
      </main>

      {/* Footer Credit */}
      <footer className="fixed bottom-4 right-4 text-xs text-muted-foreground/40 z-50">
        Developed by Shahzaib Azmat
      </footer>
    </div>
  );
}
