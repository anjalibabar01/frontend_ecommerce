import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white shadow-gray-200 my-5 rounded-lg shadow-lg  overflow-hidden w-[15rem] p-4 border border-gray-200">
      <div className="h-[13rem] w-[11rem]">
        <img
          className="object-cover object-top w-full h-full rounded-lg shadow-lg shadow-gray-400"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
