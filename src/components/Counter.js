import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

import "./Counter.css";

const Counter = () => {
  const [sayac, setSayac] = useState(0);
  const [sayac2, setSayac2] = useState(0);

  // useEffect(() => {
  //   console.log("Sayaç state i güncellendi! sayac: ", sayac);
  // }, [sayac]);

  // useEffect(() => {
  //   console.log("Sayaç 2 state i güncellendi! sayac2: ", sayac2);
  //   // if (sayac2 > sayac) {
  //   //   setSayac2(sayac);
  //   // }
  // }, [sayac2]);

  // useEffect(() => {
  //   console.log("[COMPONENT_DID_MOUNT] Coutner componenti monte edildi!");
  // }, []);

  // useEffect(() => {
  //   console.log("[COMPONENT_DID_UPDATE] Coutner componenti update edildi!");
  // }, [sayac, sayac2]);

  useEffect(() => {
    // console.log("Sayac güncellendi: ", sayac);
    return () => {
      // console.log("Return function Sayac: ", sayac);
    };
  }, [sayac]);

  return (
    <div style={{ display: "flex" }}>
      <div className="sayac-container">
        <CounterDisplay counter={sayac} />
        <button
          onClick={() => {
            setSayac(sayac + 1);
          }}
        >
          Arttır
        </button>
        <button
          onClick={() => {
            setSayac(sayac - 1);
          }}
        >
          Azalt
        </button>
      </div>
      <div className="sayac-container">
        <CounterDisplay counter={sayac2} />
        {!(sayac2 + 1 > sayac) && (
          <button
            onClick={() => {
              if (!(sayac2 + 1 > sayac)) setSayac2(sayac2 + 1);
            }}
          >
            Arttır
          </button>
        )}
        <button
          onClick={() => {
            setSayac2(sayac2 - 1);
          }}
        >
          Azalt
        </button>
      </div>
    </div>
  );
};

export default Counter;
