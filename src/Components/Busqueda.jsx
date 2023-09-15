import React from "react";

const Buscador = ({ status, data }) => {
  return (
    <>
      <form action="">
        <input
          className="form-control me-5 my-1"
          type="search"
          placeholder="Busca el feriado"
          // value={data}
          // onChange={setData}
          // onChange={(e) => {
          //   status;
          //   data(e.target.value);
          // }}
        ></input>
      </form>
    </>
  );
};
export default Buscador;
