import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Trading from "./components/Trading";
import CoinsType from "./components/CoinsType";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import study from "./assets/study.jpg";
function App() {
  return (
    <div className="bg-[#EFF2F5]">
      <div>
        <Navbar/>
      </div>
      <div className="flex flex-col md:flex">
        <div>
          <div className="ml-12 gap-x-1 lg:ml-16 mt-4 h-17px flex lg:gap-x-1">
            <div className="w-50px mb-5 h-15px  lg:w-140.34px lg:h-17px">
              <p className="h-3 font-light tracking-tight lg:w-28 lg:h-4 leading-4 lg:font-medium text-[#3E5765] opacity-50">Cryptocurrencies</p>
            </div>
            <div className="flex  lg:mx-2 h-17px justify-center">
              <RxDoubleArrowRight className="h-4 w-4 lg:h-4 lg:w-4"/>
            </div>
            <div>
              <p className="w-3 h-3 lg:w-4 lg:h-4 leading-4 font-medium text-[#0F1629]">Bitcoin</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <Header/>
                
              </div>
              <div className=" lg:w-full">
                <Trading/>
              </div>
            </div>
            
          </div>
        </div>
        <div>
          <div className="ml-6 mr-6 mt-6 md:ml-8 w-auto md:w-2/6 md:h-1/5 flex flex-col justify-center items-center bg-[#0052FE] rounded-md p-4">
                <p className="m-7 leading-10 font-bold text-2xl text-center text-[#FFFFFF]">Get Started with KoinX for FREE</p>
                <p className="leading-6 px-2 pb-5 font-medium text-center text-sm mx-10 text-[#F2F2F2]">With our range of features that you can equip for free,
                  KoinX allows you to be more educated and aware of your tax reports.</p>
                <div>
                  <img src="https://img.freepik.com/vecteurs-libre/blogging-illustration-concept_114360-851.jpg" width="178px" height="166px"/>
                </div>
                <div>
                  <button className="w-60 h-12 mt-5 rounded-md mb-6 flex justify-center items-center gap-x-1 bg-[#FFFFFF]" 
                  onClick="">
                    <p className="leading-7 font-semibold text-base text-[#0F1629]">Get Started For Free</p>
                    <FaArrowRightLong className="w-5 h-5" />
                  </button>
                </div>
              </div>
          <div>
          <div className="mt-6 ml-6 md:ml-8">
            <CoinsType/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
