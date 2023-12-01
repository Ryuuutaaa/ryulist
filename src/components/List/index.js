import Image from "next/image";
import Link from "next/link";

const List = ({ api }) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-4">
        {api.data.map((anime) => {
          return (
            <Link
              href={`/${anime.mal_id}`}
              className="block overflow-hidden group"
            >
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                alt="....."
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded"
              />
              <h2 className="font-bold text-center p-4">{anime.title}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default List;