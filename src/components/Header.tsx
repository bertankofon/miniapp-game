"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-black"></div>
        <span className="text-sm font-medium text-gray-900">@username</span>
      </div>
      <button className="p-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
  );
}

