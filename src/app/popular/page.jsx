"use client";

import List from "@/components/List";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import PaginationBottom from "@/components/utilities/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";

const Page = () => {
  const [pagess, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${pagess}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [pagess]);

  return (
    <div className="pt-20">
      <HeaderMenu title={`ANIME POPULER #${pagess}`} />
      <List api={topAnime} />
      <PaginationBottom
        page={pagess}
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Page;
