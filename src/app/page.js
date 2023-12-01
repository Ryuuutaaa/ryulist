import Banner from "@/components/Banner";
import List from "@/components/List";

const Home = async () => {
  const API = process.env.NEXT_PUBLC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime`);

  const anime = await response.json();
  console.log(anime);

  return (
    <div>
      <div>
        <Banner />
      </div>
      <h1>Popular</h1>
      <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <List
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
