import Spinner from "../subComonent/Spinner";
import { useEffect,useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const CoinsType=()=>{

    const API_URL=`https://api.coingecko.com/api/v3/search/trending`;
    const [coin,setCoin]=useState(null);
    const [loading,setloading]=useState(false);
    async function fetchData()
    {
        setloading(true);
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            const coins = data?.coins;
            console.log("data",coins[0].item);
            setCoin(coins);
            console.log("coin",coin);
        }
        catch(error)
        {
            console.log("roor ocuur");
        }
        setloading(false);
    }


    useEffect(()=>
    {
        fetchData();
        
    },[]);
    
    console.log("coin",coin);
    return(
        <div className="flex w-full pr-5 mr:4 md:mr-6 flex-col rounded-md md:w-2/6 gap-y-3 bg-[#FFFFFF]">
            <div>
                <h1 className="leading-7 ml-4 mt-4 font-semibold text-2xl text-[#0F1629]">Trending Coins (24h)</h1>
            </div>
            <div className="flex flex-col gap-y-6">
                {
                    loading ?
                    <Spinner/> :
                    
                    <div className="flex  flex-col gap-y-4 mx-3 mb-5">
                        {
                            coin !== null &&
                            coin?.slice(0,3)?.map((c,i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-center items-center gap-x-2">
                                        <img src={c?.item?.small}/>
                                        <p className="leading-5 font-medium text-base text-[#202020]">{c?.item?.name}</p>
                                        <p className="leading-5 font-medium text-base text-[#202020]">{c?.item?.symbol}</p>
                                    </div>
                                    <div className="flex items-center rounded w-20 h-7 p-1 top-1 bg-[#EBF9F4]">
                                        <div>
                                            {
                                                c?.item?.data?.price < 0 ?
                                                (<div className="text-[#b01414]"><IoMdArrowDropdown className="w-6 h-7"/></div>):
                                                (<div className="text-[#14b079]"><IoMdArrowDropup className="w-6 h-7"/></div>)
                                            }
                                        </div>
                                        <p className="leading-5 pr-2 font-medium text-[#14B079]">{Number(c?.item?.data?.price).toPrecision(1)}%</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                }
                
            </div>
        </div>
    )
}

export default CoinsType;