"use client";

import List from "@/components/List";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import PaginationPage from "@/components/utilities/Pagination";

import React, { useEffect, useState } from "react";

const page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchData = async () => {
    const response = await fetch(`${API}/top/anime?page=${page}`);
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="pt-20">
      <HeaderMenu title={`ANIME POPULER #${page}`} />
      <List api={topAnime} />
      <PaginationPage
        page={page}
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default page;
