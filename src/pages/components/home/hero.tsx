import { SOCIAL } from "../../../constants";
import { UpstrsLogo } from "../../../img/upstrs_clean";

export const Hero = () => (
  <div id="hero" className="">
    <UpstrsLogo className="fill-base-content/40 sticky top-28 h-24 w-24" />

    <div className="sticky top-28 mt-2 flex w-full flex-col text-end text-xl uppercase sm:text-3xl">
      <span className="font-thin">
        Let's <span className="font-extrabold">create</span>
      </span>
      <span className="font-thin">
        <span className="font-extrabold">together</span>
      </span>
      <span className="font-thin">
        Get in{" "}
        <a
          className="link font-extrabold"
          href={SOCIAL.WHATS_APP}
          target="_blank"
        >
          touch
        </a>
      </span>
    </div>
  </div>
);
