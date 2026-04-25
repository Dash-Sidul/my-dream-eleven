
import backgroundImg from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'


const Banner = ({handleClaim, active, }) => {
    
    return (
        <div className="lg:h-[545px] h-auto lg:w-10/12 mx-auto flex flex-col bg-cover mb-4 bg-center bg-black" style={{ backgroundImage: `url(${backgroundImg})` }}>
            
                <div className="   flex justify-center items-center md:mt-16 h-auto"><img src={banner} alt="" /></div> 
            
            <h1 className="lg:text-3xl text-white font-bold text-center m-5 w-full">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-white text-xl text-center  '>Beyond Boundaries Beyond Limits</h3>
            <button className='btn w-40 mx-auto mt-2 bg-[#E7FE29]  font-bold' onClick={handleClaim}>{  active? 'Claim Free Credit' : 'Claim Free Credit'}</button>
            
        </div>
    );
};

export default Banner;