export default function Header() {
  return (
    <header className="flex items-center justify-end mt-6 ">
      <div className="overflow-hidden fixed left-4 lg:left-8 right-4 lg:right-8 top-4.5 lg:top-6 grid grid-cols-12 gap-4 lg:gap-8 z-50">
        {/* About */}
        <div className="hidden lg:block col-span-3">
          <span className="block overflow-hidden">
            <div
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
              style={{ transform: "none" }}
            >
              About me
            </div>
          </span>
          <span className="block overflow-hidden">
            <div
              className="block font-medium text-neutral-400 text-[clamp(16px,1.2vw,20px)]"
              style={{ transform: "none" }}
            >
              Open to work
            </div>
          </span>
        </div>

        <div className="col-span-3">
          <span className="block overflow-hidden">
            <div
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
              style={{ transform: "none" }}
            >
              Skills
            </div>
          </span>
          <span className="block overflow-hidden">
            <div
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
              style={{ transform: "none" }}
            >
              <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                Frontend
              </span>
            </div>
          </span>
        </div>

        <div className="hidden lg:block col-span-3">
          <span className="block overflow-hidden">
            <div
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
              style={{ transform: "none" }}
            >
              FPT University
            </div>
          </span>
          <span className="block overflow-hidden">
            <div
              className="block font-medium text-neutral-400 text-[clamp(16px,1.2vw,20px)]"
              style={{ transform: "none" }}
            >
              Software Eng.
            </div>
          </span>
        </div>

        <a
          href="mailto:haison121202@gmail.com"
          className="fixed right-4 lg:right-8 top-4 lg:top-6 group cursor-pointer"

        >
          <div className="relative">
            <div className="flex items-center relative px-5 lg:px-6 h-12 lg:h-14 rounded-full bg-neutral-900 text-neutral-100 text-[clamp(16px,1.2vw,20px)] border border-neutral-800 z-10">
              <div className="overflow-hidden h-6 lg:h-7">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
                  <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-100 mb-1.5" style={{
                    fontFamily: "GeneralSans-Semibold; opacity: 1; transform: none; ",
                  }}>
                    Get in touch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}
