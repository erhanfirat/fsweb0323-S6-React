import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction } from "../store/actions/actions";

const Greeting = ({ userName, userEmail, userAge = 18, setUserAge }) => {
  // console.log("Greeting içinden > ", userName);
  const title = useSelector((store) => store.general.title);
  const dispatch = useDispatch();

  const changeTitle = () => {
    dispatch(changeTitleAction("Yeni Redux title'ı"));
  };

  useEffect(() => {
    console.log("Greeting yüklendi!");

    return () => {
      console.log("Greeting silindi!");
    };
  }, []);

  return (
    <div className="header-div">
      <h1>Merhaba {userName}! hoş geldiniz...</h1>
      <h3>{title}</h3>
      <button onClick={changeTitle}>Change Title</button>
      <span>
        ( {userEmail} / {userAge} )
      </span>
    </div>
  );
};

export default Greeting;
