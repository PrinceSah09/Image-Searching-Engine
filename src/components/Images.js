import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";
import "./style.css";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <div className="Header">
        <h1 className=" HeadingText text-center mt-6 text-2xl">
          Results for <span>{searchImage || "Cats"}</span>
        </h1>
      </div>

      <div className="imgfile grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-7 max-w-7xl mx-auto px-4 shadow-lg  shadow-md-cyan">
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
