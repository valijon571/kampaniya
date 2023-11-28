import { Route, Routes } from "react-router-dom";
import Aftomash from "../avtokampaniya/Aftomash";
import Aftotur from "../avtokampaniya/Aftotur";
import Aftopazi from "../avtokampaniya/Aftopazi";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Aftotur />} />
        <Route path="tur/:afto_turi" element={<Aftomash />} />
        <Route path="tur/:afto_turi/:mash_id" element={<Aftopazi />} />
      </Routes>
    </>
  );
};

export default Router;
