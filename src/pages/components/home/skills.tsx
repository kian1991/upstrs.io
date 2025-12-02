import { useRef, forwardRef, useImperativeHandle } from "react";
import Accordion, {
  type AccordionHandle,
} from "../../../components/ui/accordion";
import { Box } from "../../../components/ui/box";

export type SkillsHandle = {
  openAll: () => void;
  closeAll: () => void;
};

export const Skills = forwardRef((_, ref) => {
  const accordionRefs = useRef<AccordionHandle[]>([]);

  useImperativeHandle(ref, () => ({
    openAll: () => {
      accordionRefs.current.forEach((ref) => ref?.open?.());
    },
    closeAll: () => {
      accordionRefs.current.forEach((ref) => ref?.close?.());
    },
  }));

  return (
    <div id="skills" className="grid gap-2 sm:grid-cols-2">
      <Box title="Hardskills">
        {/* FRONTEND */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[0] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mb-2 rounded px-2 py-0.5">
              Frontend
            </span>
          }
        >
          <div className="flex flex-col ps-3">
            <span>React</span>
            <span>Next.js</span>
            <span>Svelte</span>
            <span>TypeScript</span>
            <span>HTML & CSS</span>
            <span>Tailwind</span>
          </div>
        </Accordion>

        {/* BACKEND */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[1] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Backend
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>Bun / Node.js</span>
            <span>Hono</span>
            <span>Express</span>
            <span>Elysia</span>
            <span>REST API Design</span>
            <span>Zod</span>
          </div>
        </Accordion>

        {/* DEVOPS */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[2] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              DevOps & Cloud
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>AWS (EC2, S3, Lambda, DynamoDB)</span>
            <span>Docker</span>
            <span>CI/CD (GitHub Actions, Azure DevOps)</span>
            <span>Infrastructure as Code</span>
            <span>Linux</span>
          </div>
        </Accordion>

        {/* TESTING */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[3] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Testing & Quality
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>Jest</span>
            <span>bun:test</span>
            <span>Cypress</span>
            <span>Automated QA Pipelines</span>
          </div>
        </Accordion>

        {/* MOBILE */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[4] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Mobile
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>React Native</span>
            <span>Android (Kotlin)</span>
          </div>
        </Accordion>

        {/* DATABASE */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[5] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Databases
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>DynamoDB</span>
            <span>ORMs (Drizzle, Prisma)</span>
            <span>NoSQL & SQL Modeling</span>
          </div>
        </Accordion>

        {/* AI */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[6] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              AI & Data
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>TensorFlow / PyTorch (Basics)</span>
            <span>Stable Diffusion</span>
            <span>Ollama</span>
            <span>Power BI</span>
          </div>
        </Accordion>

        {/* AUTOMATION */}
        <Accordion
          ref={(el) => {
            accordionRefs.current[7] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Automation
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>GitHub Actions</span>
            <span>Google Apps Script</span>
            <span>Workflow Automation</span>
          </div>
        </Accordion>
      </Box>

      {/* ----------- SOFT SKILLS ----------- */}
      <Box title="Softskills">
        <Accordion
          ref={(el) => {
            accordionRefs.current[8] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mb-2 rounded px-2 py-0.5">
              Personal Traits
            </span>
          }
        >
          <div className="flex flex-col ps-3">
            <span>Fast Learner</span>
            <span>Solution-Oriented</span>
            <span>Adaptive</span>
            <span>Creative</span>
            <span>Structured Thinking</span>
          </div>
        </Accordion>

        <Accordion
          ref={(el) => {
            accordionRefs.current[9] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Communication & Collaboration
            </span>
          }
        >
          <div className="flex flex-col ps-3">
            <span>Clear Communication</span>
            <span>Team Collaboration</span>
            <span>Leadership</span>
            <span>Working Well With People</span>
          </div>
        </Accordion>

        <Accordion
          ref={(el) => {
            accordionRefs.current[10] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Teaching & Mentoring
            </span>
          }
        >
          <div className="flex flex-col ps-3">
            <span>Teaching</span>
            <span>Mentoring</span>
            <span>Curriculum Design</span>
          </div>
        </Accordion>

        <Accordion
          ref={(el) => {
            accordionRefs.current[11] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Values & Mindset
            </span>
          }
        >
          <div className="flex flex-col ps-3">
            <span>Web3 Interest</span>
            <span>Open-Minded</span>
            <span>Responsible</span>
          </div>
        </Accordion>
      </Box>
    </div>
  );
});
Skills.displayName = "Skills";
