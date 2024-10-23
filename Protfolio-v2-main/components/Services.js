import {
  Atom,
  Database,
  FigmaLogo,
  Monitor,
  PencilCircle,
} from "@phosphor-icons/react/dist/ssr";

function Services() {
  return (
    <section
      id="services"
      className="mb-20 flex w-full items-center justify-center bg-neutral-200/80 px-6 py-24 lg:mb-40"
    >
      <div className="rounded-xl bg-white px-8 py-10">
        <p className="mb-2 text-sm text-blue-600">Areas</p>
        <h2 className="mb-12 text-4xl font-light tracking-tight">
          I can help you with
        </h2>
        <div>
          <ul className="space-y-10 font-light">
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Monitor size={22} className="mr-1 text-yellow-600" />
              <span className="font-medium">Websites </span>
              <span className="hidden md:block">-</span>
              <p>HTML, CSS and Vanilla JavaScript</p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Atom size={22} className="mr-1 text-blue-600" />
              <span className="font-medium">Frontend </span>
              <span className="hidden md:block">-</span>
              <p>React, Tailwind CSS, Redux / Context API, React Query etc.</p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Database size={22} className="mr-1 text-neutral-800" />
              <span className="font-medium">Full Stack </span>
              <span className="hidden md:block">-</span>
              <p>
                Next JS, Tailwind CSS, MongoDB, Auth, Payment, AI integration
              </p>
            </li>
            <li className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <PencilCircle size={22} className="mr-1 text-purple-600" />
              <span className="font-medium">Web Design </span>
              <span className="hidden md:block">-</span>
              <p>Figma, Web application design and copywriting</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
