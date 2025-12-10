export default function Button({ children, variant = "primary", ariaLabel, onClick, className = "", type = "button" }) {
  const base = "inline-flex items-center justify-center px-5 py-3 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary: "bg-black text-white hover:opacity-90 focus:ring-black",
    secondary: "bg-white text-black border hover:bg-gray-100 focus:ring-gray-300",
    outline: "border border-black text-black hover:bg-black hover:text-white focus:ring-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
