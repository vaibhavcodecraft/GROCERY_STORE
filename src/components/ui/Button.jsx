// src/components/ui/Button.jsx
export const Button = ({ children, variant = "primary", ...props }) => {
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    };
  
    return (
      <button
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant]}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  