import React from "react";

const Player = ({ player ,handleChosePlayer ,active, }) => {
  const { id, name, country, price, battingStyle, bowlingStyle, image, type, rating} =
    player;
  return (
    <div className="">
      <div className="m-4 ml-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 py-4">
            <img
              src={image}
              alt={name}
              className="rounded-xl w-94 h-60 object-center"
            />
          </figure>
          <div className=" ">
            <h2 className="card-title p-4 object-cover">{name}</h2>
            <div className="flex justify-between w-10/12 mx-auto ">
                <p className="p-4 font-bold">{country}</p>
                <p className="bg-[#D9D9D9] p-4 rounded-2xl font-bold">{type}</p>
            </div>
            <div className="divider w-10/12 mx-auto"></div>
            <div className="cards">
              <div className="flex justify-between w-10/12 mx-auto">
                <h1 className=" text-xl font-bold">Ratting :</h1>
                <h1 className="text-xl font-semibold">{rating}</h1>
              </div>
              <div className="flex justify-between w-10/12 mx-auto pt-3">
                <h1 className="text-l font-semibold">{battingStyle}</h1>
                <h1 className="text-l font-semibold">{bowlingStyle}</h1>
              </div>
              <div className="flex justify-between w-10/12 mx-auto pt-3">
                <h1 className="text-l font-semibold">Price : {price}</h1>
                <button className="btn font-bold" onClick={() => handleChosePlayer(price)}>{active? "Chosen": "Choose Player"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
