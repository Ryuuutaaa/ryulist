import Image from "next/image";
import Link from "next/link";

const List = ({ title, images, id }) => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <ul>
          <li>
            <Link href={`/${id}`} className="block overflow-hidden group">
              <Image
                src={images}
                alt=".........."
                width={600}
                height={600}
                className="w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
            </Link>
            <div className="relative pt-3 bg-white">
              <p className="mt-2">
                <span className="text-black font-bold"> {title} </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default List;
