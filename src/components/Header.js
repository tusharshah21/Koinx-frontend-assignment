import { useEffect } from "react";
import { useState } from "react";
import Component_52 from "../assets/Component_52.png";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import TradingViewWidget from "../subComonent/TradingViewWidget";
import { BiErrorCircle } from "react-icons/bi";
import Vector from "../assets/Vector.png";
import Rectangle_11947 from "../assets/Rectangle_11947.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Rectangle_11948 from "../assets/Rectangle_11948.png";
import image_209 from "../assets/image_209.png";
import image_208 from "../assets/image_208.png";
import image_207 from "../assets/image_207.png";
const Header=()=>
{
    const API_URL=`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`;
    const [INR,setInr]=useState(0);
    const [USD,setUsd]=useState(0);
    const [dayChange,setDayChange]=useState(0);


    async function FetchData(){
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            console.log(data.bitcoin.usd);
            setUsd(data.bitcoin.usd);
            setInr(data.bitcoin.inr);
            setDayChange(data.bitcoin.usd_24h_change);
            
        }
        catch(error)
        {
            console.log("error in fetching");
        }
    }

    useEffect(()=>{
        FetchData();
    },);
    let inr=INR.toLocaleString('en-IN');
    let usd=USD.toLocaleString('en-US');
    let dayChangeValue=parseFloat(dayChange.toPrecision(3))
    return(
        <div className="flex flex-col w-1328px h-4399px ml-8 mr-8 lg:ml-16 lg:mr-16 gap-5 top-28">
            <div className="w-full lg:w-4/6 h-711px rounded-lg bg-[#FFFFFF] flex flex-col">
                <div className="ml-5 mt-5 flex">
                    <div className="flex gap-x-1 lg:gap-x-2 justify-center items-center">
                        <img src={Component_52} alt="" className="w-8 h-8 lg:w-9 lg:h-9"/>
                        <div><p className="font-bold text-xl lg:text-2xl leading-3">Bitcoin</p></div>
                        <div><p className="w-7 h-5 lg:w-8 lg:h-5 leading-5 font-semibold text-[#5D667B]">BTC</p></div>
                        <div className="ml-3 lg:ml-4"><p className="flex justify-center items-center w-16 h-8 text-md lg:w-20 lg:h-10 rounded-lg border bg-[#808A9D] text-white lg:text-lg font-semibold">Rank #1</p></div>
                    </div>
                </div>
                <div className="flex ml-5 mt-7 justify-start">
                    <div className="flex flex-col gap-y-3">
                        <div className="flex justify-center items-center gap-x-3">
                            <div>
                                <h1 className="leading-10 text-4xl font-semibold text-[#0B1426]">${usd}</h1>
                            </div>
                            <div className="flex items-center rounded w-20 h-7 p-1 top-1 bg-[#EBF9F4]">
                                <div>
                                    {
                                        dayChangeValue>0 ?
                                        (<div className="text-[#14b079]"><IoMdArrowDropup className="w-6 h-7"/></div>):
                                        (<div className="text-[#14b079]"><IoMdArrowDropdown className="w-6 h-7"/></div>)
                                    }
                                </div>
                                <p className="leading-5 pr-2 font-medium text-[#14B079]">{dayChangeValue}%</p>
                            </div>
                            <div className="mr-1">
                                (24H)
                            </div>
                        </div>
                       
                        <div>
                            <h1 className="leading-7 text-lg font-medium text-[#0B1426]">₹{inr}</h1>
                        </div>
                    </div>
                    
                </div>
                <div className="w-1px  bg-gray-500">

                </div>
                <div className="ml-2 mt-6 h-[80%]">
                    <TradingViewWidget INR={inr} USD={usd} dayChange={dayChangeValue} className="ml-2 mt-6 "/>
                </div>
            </div>
            <div className="w-full md:w-3/6 lg:w-4/6 flex justify-start gap-x-12 mt-4 pt-12">
                <div className="flex object-cover float-left gap-x-4 md:gap-x-12 overflow-y-hidden ">
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight text-[#0141CF] md:font-semibold md:text-lg">Overview</p>
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight hover:text-[#0141CF] md:font-semibold md:text-lg">Fundamentals</p>
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight hover:text-[#0141CF] md:font-semibold md:text-lg">New Insights</p>
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight hover:text-[#0141CF] md:font-semibold md:text-lg">Sentiments</p>
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight hover:text-[#0141CF] md:font-semibold md:text-lg">Team</p>
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight hover:text-[#0141CF] md:font-semibold md:text-lg">Technicals</p>
                    <p className="leading-4 font-medium text-base md:leading-5 tracking-tight hover:text-[#0141CF] md:font-semibold md:text-lg">Tokenomics</p>
                </div>
            </div>
            <div className="w-full lg:w-4/6 h-711px rounded-lg bg-[#FFFFFF] flex flex-col">
                {/* performance */}
                <div className="ml-5 mt-5 flex flex-col gap-y-5">
                    <h1 className="leading-7 font-semibold text-2xl text-[#0F1629]">Performance</h1>
                    <div className="flex flex-col gap-y-5">
                        <div class="flex justify-between items-center gap-x-6">
                            <div>
                                <p className="tracking-tight text-nowrap">Today's Low</p>
                                <p>45,4990</p>
                            </div>
                            <div className="w-4/5 h-1 bg-gradient-to-r from-[#FF4949] to-[#11EB68]">
                                
                            </div>
                            <div className="mr-1">
                                <p>Today's High</p>
                                <p>45,8986</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center gap-x-8">
                            <div>
                                <p className="tracking-tight text-nowrap">52W Low</p>
                                <p>45,4990</p>
                            </div>
                            <div className="w-4/5 h-1 bg-gradient-to-r from-[#FF4949] to-[#11EB68]">
                                
                            </div>
                            <div className="mr-5">
                                <p>52W High</p>
                                <p>45,8986</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-x-1">
                        <h1 className="leading-7 font-semibold text-2xl text-[#0F1629]">Fundamentals</h1>
                        <div className="flex justify-center items-center mt-1">
                            <BiErrorCircle/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-x-20 justify-between ">
                        <table className="flex flex-col gap-y-3 justify-between ml-1 mr-4 md:mr-4 md:ml-1">
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">Bitcoin Price</p>
                                <p className="lleading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$16,815.98</p>
                            </tr>
                            
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">24h Low/24h High</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$16,374/$16,786</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">7day Low/7day High</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$16,384/$16,987</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">Trading Volume</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$74,682,64,947</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4 md:mb-10">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">Markets Cap Rank</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">#1</p>
                            </tr>
                        </table>
                        <table className="flex flex-col gap-y-3 justify-between mr-4 ml-1 md:ml-1 md:mr-8">
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">Markets Cap</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$16,815.98</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">Markets Cap Domonie</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$16,374/$16,786</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">Volume/Market Cap</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$16,384/$16,987</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">All Time High</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">$74,682,64,947</p>
                            </tr>
                            <tr className="flex justify-between border-b-2 border-[#D3E0E6] pb-4 pt-4 md:mb-10">
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#768396]">All Time Low</p>
                                <p className="leading-4 font-medium text-base md:leading-5 md:font-medium md:text-lg text-[#111827]">#1</p>
                            </tr>
                        </table>
                    </div>
                    
                </div>
                
            </div>
            {/* sentiments */}
            <div className="w-full md:3/6 lg:w-4/6 h-full rounded-lg bg-[#FFFFFF] flex flex-col">
                <div className="ml-5 mt-5 flex flex-col gap-y-5">
                    <h1 className="leading-7 font-semibold text-2xl text-[#0F1629]">Sentiments</h1>
                    <h2 className="text-xl leading-7 font-semibold text-[#0F1629]">Key Events</h2>
                    <div className="flex object-cover float-left scroll-m-1 gap-x-4 md:gap-x-12 overflow-y-hidden">
                        <div className="w-full h-36 pl-3 pt-3 place-content-start gap-x-3 md:pt-4 md:pl-4 md:w-3/5 md:h-52 lg:w-3/4 rounded-xl border bg-[#E8F4FD]">
                            <div className="float-left flex justify-center items-center w-9 h-9 bg-[#0082FF] rounded-full md:w-11 md:h-11">
                                <img src={Vector}  className="w-4 h-4 md:w-6 md:h-6"/>
                            </div>
                            <div className="flex flex-col text-left pl-4 pr-6 justify-start">
                                <p className="leading-4 font-sans font-medium text-sm md:text-lg md:font-medium md:leading-5 lg:leading-6 text-[#191C1F]">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim </p>
                                <p className="font-serif leading-3 text-xs text-[#3E5765] md:leading-5 md:font-normal md:text-base object-fit mt-1 md:mt-3 lg:mt-4 md:text-[#3E5765]">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                            </div>
                        </div>
                        <div className="w-full h-36 pl-3 pt-3 place-content-start gap-x-3 md:pt-4 md:pl-4 md:w-3/5 md:h-52 lg:w-3/4 rounded-xl border bg-[#E8F4FD]">
                            <div className="float-left flex justify-center items-center w-9 h-9 bg-[#0082FF] rounded-full md:w-11 md:h-11">
                                <img src={Vector}  className="w-4 h-4 md:w-6 md:h-6"/>
                            </div>
                            <div className="flex flex-col text-left pl-4 pr-6 justify-start">
                                <p className="leading-4 font-sans font-medium text-sm md:text-lg md:font-medium md:leading-5 lg:leading-6 text-[#191C1F]">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim </p>
                                <p className="font-serif leading-3 text-xs text-[#3E5765] md:leading-5 md:font-normal md:text-base object-fit mt-1 md:mt-3 lg:mt-4 md:text-[#3E5765]">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-2 justify-start items-center">
                            <h1 className="leading-5 font-semibold text-xl text-[#44475B]">Analyst Estimates</h1>
                            <BiErrorCircle/>
                        </div>
                        <div className="flex pt-5 gap-x-1 justify-start items-center mb-6">
                            <div className="w-18 h-18 sm:w-18 sm:h-18 md:w-32 md:h-32 flex justify-center items-center rounded-full bg-[#EBF9F4]">
                                <p className="text-[#0FBA83] text-xl sm:text-base md:text-3xl leading-10 font-medium">76%</p>
                            </div>
                            <div className="flex flex-col gap-x-4 ml-8 md:ml-16 gap-y-5">
                                <div className="flex gap-x-4 md:gap-x-8 justify-center items-center">
                                    <p className="font-medium leading-6 text-base md:font-semibold md:leading-7 md:text-xl text-[#7C7E8C]">Buy</p>
                                    <div className="gap-x-2 flex items-center"> 
                                        <div className="h-2 pl-3 w-36 sm:w-48 md:w-96 rounded-sm bg-[#00B386]"></div>
                                        <p className="md:leading-6 md:font-medium text-base text-[#7C7E8C] ">76%</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-4 md:gap-x-8 justify-start items-center">
                                    <p className="font-medium leading-6 text-base md:font-semibold md:leading-7 md:text-xl text-[#7C7E8C]">Hold</p>
                                    <div className="gap-x-2 flex items-center">
                                        <div className="h-2 w-3 sm:w-4 md:w-9 rounded-sm bg-[#C7C8CE]"></div>
                                        <p className="md:leading-6 md:font-medium text-base text-[#7C7E8C] ">8%</p>
                                        
                                    </div>
                                </div>
                                <div className="flex gap-x-4 md:gap-x-8 justify-start items-center">
                                    <p className="font-medium leading-6 text-base md:font-semibold md:leading-7 md:text-xl text-[#7C7E8C]">Sell</p>
                                    <div className="gap-x-2 flex items-center">
                                        <div className="h-2 w-6 pl-3 sm:w-8 md:w-16 rounded-sm bg-[#F7324C]"></div>
                                        <p className="md:leading-6 md:font-medium text-base text-[#7C7E8C] ">16%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
            <div className="w-full md:3/6 lg:w-4/6 h-full rounded-lg bg-[#FFFFFF] flex flex-col">
                <div className="ml-6 mt-6 flex flex-col gap-y-6 mb-5">
                    <p className="leading-7 font-semibold text-2xl text-[#0F1629]">About Bitcoin</p>
                    <div className="flex flex-col gap-y-3 ">
                        <p className="leading-6 font-semibold text-xl text-[#0B1426]">What is Bitcoin?</p>
                        <p className="leading-7 font-medium text-base text-[3E424A] mr-3 md:mr-8 pb-6 border-b border-[#C9CFDD]">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
                    </div>
                </div>
                <div className="ml-6 flex flex-col gap-y-6 mb-5">
                    <p className="leading-5 font-bold text-xl text-[#0B1426]">Lorem ipsum dolor sit amet</p>
                    <p className="leading-7 font-medium text-lg mr-3 md:mr-6  text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.<br/><br/> Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  

Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.<br/>
<br/>

Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
                </div>
                <div className="ml-6 mt-6 flex flex-col gap-y-6 mb-5">
                    <p className="leading-7 font-bold text-3xl text-[#0F1629]">Already Holding Bitcoin?</p>
                    <div className="flex flex-col gap-y-7 gap-x-7 md:flex-row">
                        <div className="flex justify-evenly items-center gap-x-3 md:gap-x-5 w-72 h-32  md:w-96 md:h-40 rounded-md bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD]">
                            <img src={Rectangle_11947} className="w-24 h-24 md:w-32 md:h-32"/>
                            <div className="flex flex-col">
                                <p className="leading-7 w-40 font-bold text-xl text-[#FFFFFF]">Calculate your Profits</p>
                                <button className="flex mt-3 items-center justify-center w-32 h-8 p-1 gap-1 rounded-lg bg-[#FFFFFF]">
                                    <p>Check Now</p>
                                    <FaArrowRightLong/>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center gap-x-3 md:gap-x-5 w-72 h-32  md:w-96 md:h-40 rounded-md bg-gradient-to-r from-[#FF9865] to-[#EF3031]">
                            <img src={Rectangle_11948} className="w-24 h-24 md:w-32 md:h-32"/>
                            <div className="flex flex-col">
                                <p className="leading-7 w-40 font-bold text-xl text-[#FFFFFF]">Calculate your tax liability</p>
                                <button className="flex mt-3 items-center justify-center w-32 h-8 p-1 gap-1 rounded-lg bg-[#FFFFFF]">
                                    <p>Check Now</p>
                                    <FaArrowRightLong/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:pb-16  md:flex-col w-full md:3/6 lg:w-4/6 h-full rounded-lg bg-[#FFFFFF] ">
                <div className="ml-6 mt-6 flex flex-col gap-y-6 mb-5">
                    <p className="leading-7 font-bold text-2xl text-[#0F1629]">Tokenomics</p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="ml-6 leading-9 font-semibold text-xl text-[#1D1D1D]">Initial Distribution</p>
                    <div className="flex justify-start items-center gap-x-4 mt-4">
                        <div className="relative ml-5 w-20 h-20 rounded-full  md:w-32 md:h-32 bg-[#FFFFFF] border-8 border-[#0082FF]">
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-x-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
                                <p className="leading-5 font-normal text-sm md:text-base text-[#202020]">Crowdsale investors: 80%</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <div className="w-3 h-3 rounded-full bg-[#FAA002]"></div>
                                <p className="leading-5 font-normal text-sm md:text-base text-[#202020]">Foundation: 20%</p>
                            </div>
                        </div>
                    </div>
                    <p className="leading-6 ml-4 mt-8 mr-3 md:ml-5 md:mr-5 lg:ml-8 lg:mr-8 font-medium text-base text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
                </div>
        
            </div>
            {/* teams */}
            <div className="w-full pb-8 md:3/6 lg:w-4/6 h-full rounded-lg bg-[#FFFFFF] flex flex-col">
                <div className="ml-6 mt-6 flex flex-col gap-y-6 mb-5">
                    <p className="leading-7 font-bold text-2xl text-[#0F1629]">Teams</p>
                </div>
                <p className="ml-6 mr-6 leading-6 font-medium text-base text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
                <div className="flex flex-col mt-6">
                    <div className="flex mt-6 ml-7 pt-3 gap-x-5 rounded-md flex-col md:flex-row gap-y-5 pb-5 md:gap-y-6 mr-6 md:h-44 bg-[#E8F4FD] hover:border hover:border-[#0082FF]" >
                        <div className="flex gap-y-3 ml-3 pt-6 flex-col justify-center items-center">
                            <img src={image_209} className="rounded-md"/>
                            <div className="flex flex-col justify-center items-center">
                                <p className="leading-5 font-semibold text-center text-wrap text-base text-[#0F1629]">John Smith</p>
                                <p className="leading-4 font-medium text-sm text-center text-[#788F9B] pb-2">Designation here</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mr-6 ml-5">
                            <p className="leading-5 font-medium text-base text-[#0F1629]">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                        </div>
                    </div>
                    <div className="flex mt-6 ml-7 pt-3 gap-x-5 rounded-md flex-col md:flex-row gap-y-5 pb-5 md:gap-y-6 mr-6 md:h-44 bg-[#E8F4FD] hover:border hover:border-[#0082FF]" >
                        <div className="flex gap-y-3 ml-3 pt-6 flex-col justify-center items-center">
                            <img src={image_208} className="rounded-md"/>
                            <div className="flex flex-col justify-center items-center">
                                <p className="leading-5 font-semibold text-center text-wrap text-base text-[#0F1629]">Elina Williams</p>
                                <p className="leading-4 font-medium text-sm text-center text-[#788F9B] pb-2">Designation here</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mr-6 ml-5">
                            <p className="leading-5 font-medium text-base text-[#0F1629]">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                        </div>
                    </div>
                    <div className="flex mt-6 ml-7 pt-3 gap-x-5 rounded-md flex-col md:flex-row gap-y-5 pb-5 md:gap-y-6 mr-6 md:h-44 bg-[#E8F4FD] hover:border hover:border-[#0082FF]" >
                        <div className="flex gap-y-3 ml-3 pt-6 flex-col justify-center items-center">
                            <img src={image_207} className="rounded-md"/>
                            <div className="flex flex-col justify-center items-center">
                                <p className="leading-5 font-semibold text-center text-wrap text-base text-[#0F1629]">John Smith</p>
                                <p className="leading-4 font-medium text-sm text-center text-[#788F9B] pb-2">Designation here</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mr-6 ml-5">
                            <p className="leading-5 font-medium text-base text-[#0F1629]">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;