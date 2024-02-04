import Image from "next/image";

const CardHover = ({ imgAnime }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content absolute bottom-[-90%] left-0 z-[10] group-hover:z-[11]">
      <div className="items-center text-center w-[150px] h-[200px] relative group-hover:scale-105 transition-transform duration-300 overflow-hidden">
        <p>We are using cookies for no reason.</p>
      </div>
    </div>
  );
};

export default CardHover;
