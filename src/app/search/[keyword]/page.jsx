// This components

import Header from "@/components/List/Header";
import List from "@/components/List";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const decodeKeyword = decodeURI(keyword);

  const API = process.env.NEXT_PUBLC_API_BASE_URL;
  const response = await fetch(`${API}/anime?q=${decodeKeyword}`);

  const searchAnime = await response.json();

  return (
    <>
      <section className="pt-20">
        <Header
          title={`pencarian untuk ${decodeKeyword}.....`}
          LinkTitle="Liat semua"
          LinkHreft="/popular"
        />
        <List api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
