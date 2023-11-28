import { Link, useNavigate, useParams } from "react-router-dom";
import { mashina } from "../aft/Uzgarmas";

const Aftomash = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Mashinalar</h1>
      <br />
      <button onClick={() => navigate(-1)}>orqaga</button>
      {mashina
        .filter((o) => o.tur_id === parseInt(params?.afto_turi))
        .map((item, index) => (
          <div>
            <Link key={index} to={"/tur/" + params?.afto_turi + "/" + item.id}>
              <br />
              {item?.name}
            </Link>
          </div>
        ))}
    </>
  );
};
export default Aftomash;
