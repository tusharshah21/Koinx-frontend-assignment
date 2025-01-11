import react from "react";
import Frame_26863 from "../assets/Frame_26863.png";
import { HiOutlineBars3 } from "react-icons/hi2";
const Navbar=()=>{

    return(
        <div className="flex justify-between w-full h-80px -left-0.15px bg-[#FFFFFF] border-[#DEDFE2] shadow-sm">
            <div className="w-24 h-60px ml-12 gap-16 lg:ml-16 lg:h-72px">
                <img src={Frame_26863} alt="" className="w-81px h-20px  lg:w-96px lg:h-24px" />
            </div>
            <div className="hidden  lg:mr-16 lg:flex lg:gap-x-12">
                <div className="flex justify-center items-center">
                    <p className="w-20 h-5 text-[#0F1629] leading-5 font-semibold text-lg">Crypto Taxes</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="w-20 h-5 text-[#0F1629] leading-5 font-semibold text-lg">Free Tools</p>
                </div >
                <div className="flex justify-center items-center">
                    <p className="w-20 h-5 text-[#0F1629] leading-5 font-semibold  text-lg mr-3">Resource Center</p>
                </div>
                <div className="flex justify-center items-center ml-5">
                    <button className="w-136px h-9 font-semibold  rounded-lg gap-2 bg-[#2870EA] px-4 border-[#1B4AEF] text-white text-lg">Get Started</button>
                </div>
            </div>
            <div className="flex justify-center items-center  mr-12 lg:hidden">
                    <HiOutlineBars3 className="w-8 h-8 place-content-center"/>
            </div>
        </div>
    );
}
export default Navbar;