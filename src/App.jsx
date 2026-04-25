import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Players from "./Players/Players";
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

function App() {

  const [selected, setSelected] = useState(false)
 const [available, setAvailable] = useState(true)
  const [chosenPlayer, setChosenPlayer] = useState(0)
  const [active, setActive] = useState (false)
  const [coinCount, setCoinCount] = useState(1200);
  const [players, setPlayers] = useState([]) ;
  
  // fetch("/public/players.json")
  //       .then( res => res.json())
  //       .then(data=> setPlayers(data))
  useEffect(() => {
  fetch("/public/players.json")
    .then(res => res.json())
    .then(data => setPlayers(data))
}, []);
  const handleClaim = () => {
       if (!active) { 
    setCoinCount(prev => prev + 1000);
      
        toast.success("Balance Added")
        setActive(!true)
       }
  };

  const handleChosePlayer = (price) =>{
    setActive(!true)
    if(coinCount >= price){
    setCoinCount(prev => prev - price)
    setChosenPlayer(prev => prev + 1)
    }
    else{
      toast.error("Claim More Balance")
    }
  }
  const handleSelected = () =>{
    console.log('selected btn clicked');
    setSelected(!false)
    setAvailable(!true)
  }
  const handleAvailable = () =>{
    console.log('selected btn clicked');
    setSelected(false)
    setAvailable(true)
  }

  return (
    <div className="">
      <Navbar coinCount={coinCount}></Navbar>
      <Banner handleClaim={handleClaim}  active = {active}></Banner>

      {/* player-container  */}
      <div className="w-10/12 mx-auto mb-10">
        {/* <div className="flex  justify-between">
          <div>
            <h1 className="text-2xl font-bold">Available Player</h1>
          </div>
          <div>
            <button className="btn">Available</button>
            <button className="btn">Selected ({selected} )</button>
          </div>
        </div> */}
        {/* players container */}
        {
          <Suspense fallback="Players Loading...">
            <Players
              players = {players}
              active = {active}
              handleChosePlayer = {handleChosePlayer}
              chosenPlayer = {chosenPlayer}
              available = {available}
              selected = {selected}
              handleSelected = {handleSelected}
              handleAvailable = {handleAvailable}
            ></Players>

          </Suspense>
        }
        <SelectedPlayer chosenPlayer = {chosenPlayer}></SelectedPlayer>
          <ToastContainer />
      </div>
    </div>
  );
}

export default App;
