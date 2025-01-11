// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );
  //style={{ height: "800px", width: "100%" }}
  return (
    <div className="tradingview-widget-container h-[100%]" ref={container} >
      <div className="tradingview-widget-container__widget h-[90%] object-contain" style={{ height: "calc(100% - 32px)", width: "100%"} } ></div>
      <div className="tradingview-widget-copyright" href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        <a><span className="blue-text">Track all markets on TradingView</span></a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
