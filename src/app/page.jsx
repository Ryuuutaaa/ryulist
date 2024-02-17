// This components

import Header from "@/components/List/Header";
import List from "@/components/List/ListAnime";
import { getAnimeResponse } from "./libs/api-libs";
import Carousel from "@/components/Carousel/page";
import TopAnime from "@/components/List/ListAnime/Top_Anime";
import UpcomingAnime from "@/components/List/ListAnime/Upcoming_Anime";
import AllListAnime from "@/components/List/page";

// end

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const topAnime1 = await getAnimeResponse("top/anime");
  const upcomingAnime = await getAnimeResponse("seasons/upcoming");

  return (
    <>
      <section>
        <div>
          <Carousel randomAnime={topAnime} />
        </div>
        <div>
          <AllListAnime populer={topAnime1} upcoming={upcomingAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
