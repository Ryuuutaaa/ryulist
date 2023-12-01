import Link from "next/link";

const Header = ({ title, LinkHreft, LinkTitle }) => {
  return (
    <header className="text-center flex justify-between items-center p-4">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{title}</h2>

      <Link href={LinkHreft} className="underline">
        {LinkTitle}
      </Link>
    </header>
  );
};

export default Header;
