
import logo from '../assets/logo.png'
import coin from '../assets/icons8-coin-48.png'

const Navbar = ({coinCount}) => {

  
  return (
    <div className="">
      <div className="navbar bg-base-100 mt-5 w-10/12 mx-auto">
        <div className="lg:flex-1">
          <div><img src={logo} alt="" /></div>
        </div>
        <div className="lg:flex-none md:justify-center items-center">
          <ul className="lg:flex gap-3"> 
            <li className="text-gray-400 font-bold text-xl btn">Home</li>
            
            <li className="text-gray-400 font-bold text-xl btn">Fixture</li>
            <li className="text-gray-400 font-bold text-xl btn">Teams</li>
            <li className="text-gray-400 font-bold text-xl btn">Schedule</li>
            <div className="flex justify-center  "><button className="flex btn gap-3 outline-none justify-center items-center text-gray-400 font-bold text-xl"> <span className=" flex justify-center items-center font-bold text-xl">{coinCount}</span> Coin <img className="w-[25px]" src={coin} alt="" /></button></div>
          </ul>
        </div>
      </div>






    </div>
  );
};

export default Navbar;
 