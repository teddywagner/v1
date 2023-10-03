import { FunctionComponent } from "react";
import Link from "next/link";

type CoolLinkProps = {
  href: string;
  text: string;
};

const CoolLink: FunctionComponent<CoolLinkProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-white hover:text-amber-300"
    >
      {text}
    </Link>
  );
};

export default CoolLink;
