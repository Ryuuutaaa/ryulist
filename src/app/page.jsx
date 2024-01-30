// This components

import Header from "@/components/List/Header";
import List from "@/components/List";
import { getAnimeResponse } from "./libs/api-libs";
import Carousel from "@/components/Carousel/page";
import TopAnime from "@/components/List/Top_Anime";
import UpcomingAnime from "@/components/List/Upcoming_Anime";

// end

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  const topAnime1 = await getAnimeResponse("top/anime");
  const upcomingAnime = await getAnimeResponse("seasons/upcoming");

  return (
    <>
      <section>
        <Carousel randomAnime={topAnime} />
        <Header title=" populer" LinkTitle="Liat semua" LinkHreft="/popular" />
        <TopAnime populer={topAnime1} />
        <Header
          title="upcoming"
          LinkTitle="Liat semua"
          // LinkHreft="/popular"
        />
        <UpcomingAnime upcoming={upcomingAnime} />
      </section>
    </>
  );
};

export default Page;
