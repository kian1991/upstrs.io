import { UpstrsLogo } from "../../img/upstrs_clean";
import { CV_LINK } from "../../constants";
import { Link } from "react-router";

export function BottomNav() {
  return (
    <div className="navbar bg-base-300/70 fixed bottom-0 shadow-sm backdrop-blur-2xl">
      <div className="navbar-start">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-bold shadow"
          >
            <li>
              <Link className="text-lg" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg" to="/imprint">
                Imprint
              </Link>
            </li>
            <li>
              <a
                className="text-lg"
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <UpstrsLogo className="size-10" />
      </div>
      <div className="navbar-end flex items-center">
        <a
          href={CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <span className="italic">RESUME</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-16"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M12 17v-6" />
            <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
