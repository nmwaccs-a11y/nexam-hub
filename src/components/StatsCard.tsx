import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  delay?: number;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  delay = 0,
}: StatsCardProps) {
  return (
    <div
      className="glass-card rounded-3xl p-6 glow-hover smooth-transition animate-scale-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <h3 className="text-3xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            {value}
          </h3>
          {trend && (
            <p className="text-xs text-accent font-semibold flex items-center gap-1">
              {trend}
            </p>
          )}
        </div>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center smooth-transition group-hover:scale-110 group-hover:rotate-3">
          <Icon size={24} className="text-accent" />
        </div>
      </div>
    </div>
  );
}
