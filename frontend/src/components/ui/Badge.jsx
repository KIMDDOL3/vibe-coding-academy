const variants = {
  theory: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'hands-on': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  default: 'bg-slate-700 text-slate-300 border-slate-600',
};

const labels = {
  theory: '이론',
  'hands-on': '실습',
};

export default function Badge({ type = 'default', children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${variants[type] || variants.default} ${className}`}>
      {labels[type] || children}
    </span>
  );
}
