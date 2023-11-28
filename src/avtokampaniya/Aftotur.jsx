import { Link } from "react-router-dom";
import { turlar } from "../aft/Uzgarmas";

const Aftotur = () => {
  return (
    <>
      <h1>Mashinalar kampaniyasi</h1>
      <br />
      {turlar.map((item, index) => (
        <>
          <Link to={"/tur/" + item?.id} key={index}>
            {" "}
            {item?.name}{" "}
          </Link>
          <br />
        </>
      ))}
    </>
  );
};
export default Aftotur;
