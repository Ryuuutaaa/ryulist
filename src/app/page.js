// This components
import Banner from "@/components/Banner";
import Header from "@/components/List/Header";
// end

import List from "@/components/List";
import Link from "next/link";

const Home = async () => {
  const API = process.env.NEXT_PUBLC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime?limit=8`);

  const topAnime = await response.json();

  return (
    <div>
      <Banner />
      <Header
        title="Paling populer"
        LinkTitle="Liat semua"
        LinkHreft="/popular"
      />
      <List api={topAnime} />
    </div>
  );
};

export default Home;
