// import React from 'react';

// const SelectedPlayer = ({chosenPlayer,purchasePlayer}) => {
//     console.log(purchasePlayer);

//     return (
//         <div>

//         </div>
//     );

// export default SelectedPlayer;
import React from "react";

const SelectedPlayer = ({ chosenPlayer, purchasePlayer ,setDeletedPlayer, deletedPlayer, handleDelete}) => {
  setDeletedPlayer(chosenPlayer)
  return (
    <div>
      
      <div className=" ">
        {purchasePlayer.map((player, index) => (
          <div key={index}>
            <div className=" flex mx-auto mb-3 gap-3 items-center shadow">
              <img
                src={player.image}
                alt={player.name}
                className="rounded-xl w-20 h-20"
              />
              <div className="">
              <p className="text-xl font-bold">{player.name}</p>
              <p className="text-xs text-gray-400">{player.battingStyle}</p>
            </div>
            <img src="https://i.ibb.co.com/C5sFNgYB/icons8-trash-50.png" onClick={() => {handleDelete(player)}} className="bg-amber-700 font-white ml-200" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayer;
