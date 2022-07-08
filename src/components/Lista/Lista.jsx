import { useLocation, Link } from "react-router-dom";
import React from "react";
import functions from "../../services/API";
import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Modal from "../Modal/Modal";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Lista() {
  let query = useQuery();
  let value = query.get("value");
  let type = query.get("type");


  const [resultado, setResultado] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [detailsModal, setDetailsModal] = useState([]);

  useEffect(() => {
    async function reqAPI() {
      const { drinks } = await functions.getAPI(type, value);
      setResultado(drinks);
    }

    reqAPI();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center ">
        <Link to="/">
          <button className="w-24 h-10 mb-10 mt-3 font-semibold bg-[#FED766] rounded-md align-middle text-zinc-800">
            New Search
          </button>
        </Link>
        {openModal && (
          <Modal toggleStateModal={setOpenModal} details={detailsModal} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 h-screen ">
        {resultado == null ? (
          <div className="w-full col-span-3 mt-10 p-2 font-semibold text-lg bg-zinc-800 rounded-md h-min flex flex-col items-center">
            <h1>Bebida ou ingrediente inválido!</h1>
            <p>Tente novamente clicando no botao "New Seach"</p>
          </div>
        ) : (
          resultado.map((item, key) => {
            return (
              <Card
                item={item}
                toggleStateModal={setOpenModal}
                setDetails={setDetailsModal}
                key={key}
              ></Card>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Lista;
