// This components
import Banner from "@/components/Banner";
import Header from "@/components/List/Header";
import List from "@/components/List";

// end

const Page = async () => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime?limit=8`);

  const topAnime = await response.json();

  return (
    <>
      <section className="pt-20">
        <Header
          title="Paling populer"
          LinkTitle="Liat semua"
          LinkHreft="/popular"
        />
        <List api={topAnime} />
      </section>
    </>
  );
};

export default Page;
