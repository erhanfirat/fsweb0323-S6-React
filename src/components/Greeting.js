import { useEffect } from "react";

const Greeting = ({ userName, userEmail, userAge = 18, setUserAge }) => {
  // console.log("Greeting içinden > ", userName);

  useEffect(() => {
    // ComponentDidMount
    // console.log("[COMPONENT_DID_MOUNT] Greeting componenti ekrana yüklendi!");

    return () => {
      // component will unmount
      // console.log(
      //   "[COMPONENT_WILL_UNMOUNT] Greeting componenti ekrandan silindi!"
      // );
      
    };
  }, []);

  return (
    <div className="header-div">
      <h1>Merhaba {userName}! hoş geldiniz...</h1>
      <span>
        ( {userEmail} / {userAge} )
      </span>
    </div>
  );
};

export default Greeting;
