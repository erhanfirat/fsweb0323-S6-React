import { useSelector } from "react-redux";
import Counter from "../components/Counter";
import Title from "../components/Title";

const SayacPage = () => {
  const title = useSelector((store) => store.general.title);

  return (
    <div>
      <Title>Sayaç Sayfası</Title>
      <hr />
      <Counter />
      <hr />
      title from redux: {title}
    </div>
  );
};

export default SayacPage;
