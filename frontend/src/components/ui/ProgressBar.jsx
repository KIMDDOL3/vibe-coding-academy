export default function ProgressBar({ value = 0, className = '', showLabel = false, color = 'indigo' }) {
  const colors = {
    indigo: 'bg-indigo-500',
    violet: 'bg-violet-500',
    cyan: 'bg-cyan-500',
    emerald: 'bg-emerald-500',
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1">
        {showLabel && (
          <span className="text-xs text-slate-400">{value}% 완료</span>
        )}
      </div>
      <div className="w-full bg-slate-700 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all duration-500 ${colors[color] || colors.indigo}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
