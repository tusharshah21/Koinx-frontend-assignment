import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const Coin=({coin})=>
{
  
    let usd=coin.item.data.price.toLocaleString('en-US');
    let dayChange=coin.item.data.price_change_percentage_24h.usd;
    let dayChangeValue=parseFloat(dayChange.toPrecision(3));
    return(
        <div className="w-full h-40 mt-8 p-5 flex flex-col pt-7 gap-y-2">
            <div clasName="flex flex-row gap-x-2 w-full">
                <div>
                <img src={coin.item.small} className="w-8 h-6"/>
                </div>
                <div>
                <p className="leading-5 font-medium text-base text-[#202020]">{coin.item.name}</p>
                </div>
                <div className="flex items-center rounded w-20 h-7 p-1 top-1 bg-[#EBF9F4]">
                    {
                        dayChangeValue > 0 ?
                        (
                            <div className="text-[#14b079]"><IoMdArrowDropup className="w-6 h-7"/></div>
                        ) :
                        (
                            <div className="text-[#14b079]"><IoMdArrowDropdown className="w-6 h-7"/></div>
                        )
                    }
                    <p className="leading-5 pr-2 font-medium text-[#14B079]">{dayChangeValue}%</p>
                </div>

            </div>
            <div>
                <p className="leading-7 text-lg font-medium text-[#0B1426]">{usd}</p>
            </div>
            <div>
                <img src={coin.item.data.sparkline}/>
            </div>
        </div>
    )
}

export default Coin;