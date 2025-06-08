import { Cursor } from "./components/cursor/cursor";
import { GlassyBottomNav } from "./components/glassy-bottom-nav/glassy-bottom-nav";
import { Box } from "./components/ui/box";

export function App() {
  return (
    <div className="from-base-200 min-h-screen bg-gradient-to-br to-slate-200">
      <main className="mx-auto flex w-[min(calc(100%-2rem),768px)] flex-col gap-7">
        <header className="flex w-full items-center justify-between pt-6 sm:flex-col-reverse sm:items-start">
          <h1 className="text-4xl font-bold tracking-tight">Kian Lütke</h1>
          <span className="badge badge-accent">FULL STACK DEV</span>
        </header>
        <hr className="border-2" />
        <Box
          title="Essentials"
          className="grid w-full grid-cols-2 place-items-start"
        >
          <span className="bg-base-300 py-0.2 mb-2 px-2">Open for work:</span>
          <span className="">Currently Yes</span>

          <span className="bg-base-300 py-0.2 mb-2 px-2">Email:</span>
          <a href="mailto:kianluetke@gmail.com">kianluetke@gmail.com</a>

          <span className="bg-base-300 py-0.2 mb-2 px-2">Github:</span>
          <a className="link" href="https://github.com/kian1991/">
            kian1991
          </a>

          <span className="bg-base-300 py-0.2 mb-2 px-2">LinkedIn:</span>

          <a className="link" href="https://github.com/kian1991/">
            Of Course
          </a>
        </Box>
        <div className="bg-base-300 border-neutral/30 h-28 rounded border-2">
          <div className="flex h-full w-full items-center justify-between gap-1 p-4">
            <div className="text-xl font-bold tracking-tighter">
              Grab a copy
            </div>
            <button className="hover:bg-base-content/10 rounded-2xl border-2 border-dashed px-6 py-4 font-mono font-bold">
              File: kians-cv.pdf
            </button>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <Box
            title="Hardskills"
            className="grid w-full grid-cols-2 place-items-start"
            description={
              <span>
                Just my current favorite Stack. Read my{" "}
                <a className="link">CV</a> for more detail
              </span>
            }
          >
            <span className="bg-base-300 py-0.2 mb-2 px-2">Frontend</span>
            <div className="flex flex-col">
              <span>TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
            </div>
            <span className="bg-base-300 py-0.2 mt-2 mb-2 px-2">Backend</span>
            <div className="mt-2 flex flex-col">
              <span>Bun</span>
              <span>Hono</span>
              <span>Python</span>
              <span>Drizzle & Prisma</span>
            </div>
          </Box>
          <Box title="Softskills" className="flex flex-col">
            <span>Always learning. fast.</span>
            <span>Leadership</span>
            <span>Teaching Skills</span>
            <span>Can handle human being well</span>
          </Box>
        </div>
      </main>
      <GlassyBottomNav />
      <Cursor />
    </div>
  );
}
