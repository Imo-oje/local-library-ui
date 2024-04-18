import { Link } from "react-router-dom";

export default function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <Link className={path === to ? "active" : ""} to={to} {...props}>
      <li>{children}</li>
    </Link>
  );
}
