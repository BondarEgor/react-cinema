import { Link } from "react-router-dom";
export interface CustomLinkProps {
  key: number;
  to: string;
  label: string;
  isActiveBtn: boolean;
}

export default function CustomLink({
  to,
  label,
  isActiveBtn,
}: CustomLinkProps) {
  return (
    <Link
      className=
			{`custom-button ${isActiveBtn ? "active-button" : ""}`}
      to={to}
    >
      {label}
    </Link>
  );
}
