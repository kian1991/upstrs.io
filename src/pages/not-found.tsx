import { Link } from "react-router";

export const NotFound = () => (
  <main className="mx-auto flex w-[min(calc(100%-2rem),768px)] flex-col gap-7">
    <h1 className="mt-12 text-4xl font-bold tracking-tighter">Page not found</h1>
    <p className="opacity-80">The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="btn btn-primary btn-xl w-max">
      Go back home
    </Link>
  </main>
);

export default NotFound;
