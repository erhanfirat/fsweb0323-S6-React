const Greeting = ({ userName, userEmail, userAge = 18, setUserAge }) => {
  console.log("Greeting içinden > ", userName);

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
