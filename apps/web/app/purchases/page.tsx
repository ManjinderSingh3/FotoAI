export default function Purchases() {
  return (
    <div>
      <div className="flex h-full flex-col">
        <div className="group h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 antialiased dark:border-neutral-800 dark:bg-neutral-900">
          <div className="relative overflow-hidden rounded-2xl transition duration-200 group-hover:shadow-xl">
            <img
              alt="Component Thumbnail"
              loading="lazy"
              width="720"
              height="500"
              decoding="async"
              data-nimg="1"
              className="transition duration-300 blur-0 aspect-video h-[14rem] rounded-2xl object-cover object-top group-hover:scale-105"
              srcSet="https://aceternity.com/cdn-cgi/image/width=750/https://assets.aceternity.com/pro/hero-sections.png 1x, https://aceternity.com/cdn-cgi/image/width=1920/https://assets.aceternity.com/pro/hero-sections.png 2x"
              src="https://aceternity.com/cdn-cgi/image/width=1920/https://assets.aceternity.com/pro/hero-sections.png"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="mt-4 flex flex-col items-start px-4 pt-2 pb-4">
            <div className="flex w-full justify-between">
              <div className="mb-2 flex items-center">
                <p className="text-base font-medium text-neutral-700 dark:text-neutral-100">
                  Component Packs
                  <span className="shadow-input ml-1 hidden rounded-md border border-transparent bg-white px-1 py-px text-xs sm:inline-block dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
                    20+
                  </span>
                </p>
              </div>
            </div>
            <p className="mt-2 max-w-xs text-sm font-normal text-neutral-500 dark:text-neutral-500">
              <span
                data-br="«re»"
                data-brr="1"
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  textWrap: "balance",
                }}
              >
                Ever growing collection of components to help you ship more
                website features faster
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
