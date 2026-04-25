
import Player from './Player/Player';

  
const Players = ({players, handleChosePlayer, active, chosenPlayer, available, handleAvailable,selected, handleSelected}) => {
    
   
    return (
        <div>
            <div className="flex  justify-between">
          <div>
            <h1 className="text-2xl font-bold">Available Player</h1>
          </div>
          <div>
            <button className={`btn ${available === true ? 'bg-green-500 text-white': ''}`} onClick={handleAvailable}>Available</button>
            <button className={`btn ${selected === true? 'bg-green-500 text-white' : ''}`} onClick={handleSelected}>Selected ( {chosenPlayer} )</button>
          </div>
        </div>
        <div className={`grid grid-cols-3 gap-4 mt-5 ${!available ? 'hidden':''}`}>
            {
                players.map(player => <Player 
                    player = {player} 
                    handleChosePlayer = {handleChosePlayer}
                    active = {active}
                    ></Player>)
            }
            </div>
        </div>
    );
};

export default Players;