import Link from "next/link";

const Header = ({ title, LinkHreft, LinkTitle }) => {
  return (
    <header className="text-center flex justify-between items-center p-4 ">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-color-primary">
        {title}
      </h2>

      {LinkHreft && LinkTitle ? (
        <Link
          href={LinkHreft}
          className="underline hover:text-color-accent text-color-primary transition-all"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </header>
  );
};

export default Header;
