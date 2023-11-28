import { Link, useNavigate, useParams } from "react-router-dom";
import { pazis, mashina } from "../aft/Uzgarmas";
const Aftopazi = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <br />
      <Link to="/">Bosh saxifaga qaytish</Link>
      <br />
      <h1>Mashina pazitsasi</h1>
      <button onClick={() => navigate(-1)}>orqaga</button>
      <div>
        {mashina
          .filter((o) => o.id === parseInt(params?.mash_id))
          .map((item, index) => (
            <div key={index}>
              {item?.name} <br />
              {pazis
                .filter((o) => o.mashina_id === item?.tur_id)
                .map((pitem, pindex) => (
                  <span key={pindex}>
                    {pitem?.name}
                    <br />
                  </span>
                ))}
            </div>
          ))}
      </div>
    </>
  );
};
export default Aftopazi;
