import resume from "@/resumes/resume.json";
import { CoolLink, WorkExperience } from "@/components";
import Link from "next/link";

const work = resume.work;
const project = resume.projects[0];

export default function Home() {
  return (
    <main id="content" className="lg:py-24 lg:w-1/2 pt-24">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <p className="mb-4">
          After receiving my B.S. in Computer Science from{" "}
          <CoolLink
            href={"https://engineering.vanderbilt.edu/cs/"}
            text={"Vanderbilt University"}
          />
          , I began my career as a Software Engineer at{" "}
          <CoolLink
            href={"https://insurancesaleslab.com"}
            text={"Insurance Sales Lab"}
          />
          , where I build some really cool stuff with some really cool people! I
          was exposed to new and interesting technologies and was forced to
          learn quickly, adapt, and hit deadlines.
        </p>
        <p className="mb-4">
          I enjoy solving complex problems using various technologies like
          React, TypeScript, and AWS. Collaborating with teams who embrace agile
          processes is important to me, and I thrive in fast-paced environments.
          I am a high-potential engineer with significant upside and I have
          demonstrated an ability to overcome a lack of knowledge and experience
          through dedication, effort, and work ethic.
        </p>
        <p>
          When I’m not working, I enjoy running, lifting, listening to music,
          and playing backgammon.
        </p>
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        {work.map((w, i) => (
          <WorkExperience work={w} key={i} />
        ))}

        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight font-semibold text-stone-200 group"
            aria-label="View Full Résumé"
            href="https://nicholas-e-wagner.com/Nicholas_Wagner.pdf"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-amber-300 motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-amber-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <WorkExperience
          work={{
            name: project.name,
            position: "",
            startDate: project.startDate,
            endDate: project.endDate,
            highlights: project.highlights,
            keywords: project.keywords,
          }}
        />
        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight font-semibold text-stone-200 group"
            aria-label="View Full Github"
            href="https://github.com/teddywagner"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-amber-300 motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-amber-300 motion-reduce:transition-none">
                  Github
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </section>
      <footer>
        <p className="text-sm text-stone-500">
          Inspired by the talented{" "}
          <Link
            className="text-stone-200 hover:text-amber-300"
            href={"https://brittanychiang.com"}
          >
            Brittany Chiang
          </Link>
          . Built with{" "}
          <Link
            className="text-stone-200 hover:text-amber-300"
            href={"https://nextjs.org"}
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            className="text-stone-200 hover:text-amber-300"
            href={"https://tailwindcss.com"}
          >
            Tailwind CSS
          </Link>
          , deployed with{" "}
          <Link
            className="text-stone-200 hover:text-amber-300"
            href={"https://vercel.com"}
          >
            Vercel
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
