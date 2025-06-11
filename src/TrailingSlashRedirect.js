import { useLocation, Navigate } from "react-router-dom";

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const { pathname, search, hash } = location;

  if (pathname === "/") return null; // Don't redirect home

  // Redirect if no trailing slash and it's not a file path
  if (!pathname.endsWith("/") && !pathname.includes(".")) {
    return (
      <Navigate
        to={`${pathname}/${search}${hash}`}
        replace
      />
    );
  }

  return null;
};

export default TrailingSlashRedirect;
