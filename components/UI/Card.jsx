export default function Card({ title, children, className = "" }) {
  return (
    <div className={`p-6 bg-white rounded-2xl shadow-sm border border-gray-200 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
