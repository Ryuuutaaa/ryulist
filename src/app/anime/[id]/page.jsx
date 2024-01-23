const page = async ({ params: { id } }) => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${API}/anime/${id}`);

  const anime = await response.json();

  console.log(anime);
  return (
    <div className="pt-20">
      <img src={anime.data.images.webp.image_url} alt="" />
      <h1 className="text-color-primary">{anime.data.title}</h1>
    </div>
  );
};

export default page;
