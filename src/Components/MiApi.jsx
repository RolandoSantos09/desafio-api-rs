import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const MiApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const feriados = await fetch(
        "https://api.victorsanmartin.com/feriados/en.json"
      );

      if (!feriados.ok) {
        throw new Error("No se pudo obtener los datos de la API");
      }
      const status = await feriados.json();
      console.log("Datos de la Api:", status.data);

      // Ordena los feriados alfabéticamente por título
      const sortedData = status.data.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      setData(sortedData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container text-center">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="cards">
          {data.map((feriados, index) => (
            <Card key={index}>
              <Card.Body className="cuerpocarta">
                <Card.Title className="titulocarta">
                  {feriados.title}
                </Card.Title>
                <Card.Text className="textocarta">
                  <strong>Date:</strong> {feriados.date}
                  <br />
                  <strong>Type:</strong> {feriados.type}
                  <br />
                  <strong>Inalienable:</strong>{" "}
                  {feriados.inalienable ? "Sí" : "No"}
                  <br />
                  <strong>Extra:</strong> {feriados.extra}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiApi;
