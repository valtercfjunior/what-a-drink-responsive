import { useLocation, Link } from "react-router-dom";
import React from "react";
import functions from "../../services/API";
import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Modal from "../Modal";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Lista() {
  let query = useQuery();
  let value = query.get("value");
  let type = query.get("type");

  useEffect(() => {
    async function reqAPI() {
      const { drinks } = await functions.getAPI(type, value);
      setResultado(drinks);
    }

    reqAPI();
  }, []);

  const [resultado, setResultado] = useState([]);

  const [openModal, setOpenModal] = useState(false)

  const [detailsModal, setDetailsModal] = useState([])

 
  return (
    <div>
      <div className="flex justify-center">
        <Link to="/">
            <button className="w-20 m-2 bg-purple-600 rounded-md align-middle text-zinc-200">
              New Search
            </button>
          </Link>
          {openModal && <Modal toggleStateModal={setOpenModal}  details={detailsModal}/>}
      </div>

      <div className="grid grid-cols-3 gap-5  h-screen ">
        
        {resultado == null ? (
          <h1>Tente novamente clicando no botao abaixo.</h1>
        ) : (
          resultado.map((item, key) => {
            return (<Card  item={item} toggleStateModal={setOpenModal} setDetails={setDetailsModal} key={key}></Card>)
          })
        )}
      
        
      </div>
    </div>
    
  );
}

export default Lista;
