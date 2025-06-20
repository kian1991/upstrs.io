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
            <span>TypeScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Tailwind</span>
          </div>
        </Accordion>

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
            <span>Bun</span>
            <span>Hono</span>
            <span>Python</span>
            <span>Drizzle & Prisma</span>
          </div>
        </Accordion>
        <Accordion
          ref={(el) => {
            accordionRefs.current[2] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              DevOps
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>Azure</span>
            <span>AWS</span>
            <span>Terraform</span>
            <span>Docker</span>
          </div>
        </Accordion>

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
            <span>CI/CD</span>
          </div>
        </Accordion>

        <Accordion
          ref={(el) => {
            accordionRefs.current[4] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Mobile & UI
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>React Native</span>
            <span>Android Native (Kotlin)</span>
            <span>UI/UX Design</span>
          </div>
        </Accordion>

        <Accordion
          ref={(el) => {
            accordionRefs.current[5] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              Database & Storage
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>NoSQL & RDBMS</span>
            <span>Drizzle ORM</span>
            <span>Prisma</span>
          </div>
        </Accordion>

        <Accordion
          ref={(el) => {
            accordionRefs.current[6] = el!;
          }}
          className="pe-4"
          header={
            <span className="bg-base-content/10 text-base-content mt-2 mb-2 rounded px-2 py-0.5">
              AI, Data & Analytics
            </span>
          }
        >
          <div className="mt-2 flex flex-col ps-3">
            <span>TensorFlow & PyTorch</span>
            <span>Stable Diffusion</span>
            <span>Ollama</span>
            <span>Power BI</span>
          </div>
        </Accordion>

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
            <span>Google App Script</span>
            <span>CI/CD</span>
          </div>
        </Accordion>
      </Box>
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
            <span>Highly Adaptive</span>
            <span>Creative</span>
            <span>Agile</span>
            <span>Hodler</span>
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
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Leadership</span>
            <span>Can handle human beings well</span>
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
            <span>Web3 Advocate</span>
            <span>Open Minded</span>
            <span>Responsible</span>
          </div>
        </Accordion>
      </Box>
    </div>
  );
});
