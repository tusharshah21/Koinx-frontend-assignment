import { useEffect, useState } from "react";
import { BiCaptions } from "react-icons/bi";
import Coin from "../subComonent/Coin";
import Spinner from "../subComonent/Spinner";
const Trading=()=>
{
    const API_URL=`https://api.coingecko.com/api/v3/search/trending`;
    const [coin,setCoin]=useState([]);
    const [loading,setloading]=useState(false);
    async function fetchData()
    {
        setloading(true);
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            console.log(data.coins)
            setCoin(data.coins);
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
    return(
        <div className="flex flex-col gap-y-3 bg-[#FFFFFF] w-full mt-10">
            <div className="px-4 py-2">
                <h1 className="leading-7 font-semibold text-2xl text-[#0F1629]">You May Also Like</h1>
            </div>
            <div className="bg-[#FFFFFF] flex object-cover float-left overflow-x-hidden px-4 py-2 h-72">
                {
                    loading ?
                    <Spinner/> :
                    <div className="flex overflow-x-scroll ">
                    {
                        coin.map((coin)=>{
                            return(
                            <Coin key={coin.id} coin={coin}/>
                            )
                        })
                    }
                    </div>
                }
                
            </div>
            <div className="px-4 py-2">
                <h1 className="leading-7 font-semibold text-2xl text-[#0F1629]">Trending Coins</h1>
            </div>
            <div className="bg-[#FFFFFF] flex object-cover float-left overflow-x-scroll px-4 py-2 h-64">
                {
                    coin.map((coin)=>{
                        return(
                        <Coin key={coin.id} coin={coin} className="w-80"/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trading;