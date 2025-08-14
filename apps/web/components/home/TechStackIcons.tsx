export const TechStackIcons = () => {
  return (
    <div className="relative mt-10">
      <div className="md:px-0 px-4 flex flex-wrap justify-center items-center mb-4 relative z-20 mx-auto max-w-3xl gap-4">
        {/*NextJs Icon */}
        <div className="flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
            >
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            Next.js
          </span>
        </div>

        {/*Tailwind CSS Icon */}
        <div className="flex items-center space-x-2">
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[0.5px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            TailwindCSS
          </span>
        </div>

        {/*Framer Motion Icon */}
        <div className="flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
            >
              <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
              <path d="M20 12l-8 8l-4 -4"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            Framer Motion
          </span>
        </div>

        {/*Prisma Icon */}
        <div className="flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
            >
              <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.2 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.2 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9Z"></path>
              <path d="m3.27 6.96 8.73 4.89 8.73-4.89"></path>
              <path d="M12 22.08V11.85"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            Prisma
          </span>
        </div>

        {/*Node.js Icon */}
        <div className="flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
            >
              <path d="M12 2.5L4.5 7v10l7.5 4.5L19.5 17V7L12 2.5z"></path>
              <path d="M8.5 8.5v7L12 17.5v-7"></path>
              <path d="M12 10.5L15.5 8.5v7"></path>
            </svg>
          </span>
          <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">
            Node.js
          </span>
        </div>
      </div>
    </div>
  );
};
