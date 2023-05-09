import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import { Button } from "reactstrap";

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
    console.log("Sayac güncellendi: ", sayac);
    return () => {
      console.log("Return function Sayac (eski değer): ", sayac);
    };
  }, [sayac]);

  // useEffect(() => {
  //   console.log("Counmter componenti güncellendir! ", new Date());
  // });

  return (
    <div style={{ display: "flex" }}>
      <div className="sayac-container">
        <CounterDisplay counter={sayac} />
        <Button
          color="primary"
          onClick={() => {
            setSayac(sayac + 1);
          }}
        >
          Arttır
        </Button>
        <Button
          color="primary"
          onClick={() => {
            setSayac(sayac - 1);
          }}
        >
          Azalt
        </Button>
      </div>
      <div className="sayac-container">
        <CounterDisplay counter={sayac2} />
        {!(sayac2 + 1 > sayac) && (
          <Button
            color="primary"
            onClick={() => {
              if (!(sayac2 + 1 > sayac)) setSayac2(sayac2 + 1);
            }}
          >
            Arttır
          </Button>
        )}
        <Button
          color="primary"
          onClick={() => {
            setSayac2(sayac2 - 1);
          }}
        >
          Azalt
        </Button>
      </div>
    </div>
  );
};

export default Counter;
