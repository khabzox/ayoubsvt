export default function Component() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative w-16 h-16 animate-spin">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 dark:from-fuchsia-400 dark:to-fuchsia-600 opacity-50 blur-xl" />
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 dark:from-fuchsia-400 dark:to-fuchsia-600 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white dark:bg-gray-950 flex items-center justify-center">
            <LoaderIcon className="w-8 h-8 text-fuchsia-500 dark:text-fuchsia-400" />
          </div>
        </div>
      </div>
    )
  }
  
  function LoaderIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
      </svg>
    )
  }