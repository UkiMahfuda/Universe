import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="h-dvh w-full flex flex-col justify-center items-center bg-primary">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="animate-pulse bg-tesier px-4 py-1 text-sm  transition-all rounded rotate-12 absolute">Page Not Found</div>

      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-tesier group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 rounded-md translate-y-0.5 bg-tesier group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-secondary rounded-md border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </div>
  );
};
