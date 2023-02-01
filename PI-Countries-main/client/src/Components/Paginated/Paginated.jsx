import React, { useState } from "react";

export default function Paginado({ countriesPerPage, countries, paginado }) {
  const [selectedNumber, setSelectedNumber] = useState(null);  // Para mostrar en que pagina se esta parado.
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries / countriesPerPage) && i <= 25; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="Paginado">
      <ul className="Paginado__List">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`Paginado__Number ${
                selectedNumber === number ? "Paginado__Number--selected" : ""
              }`}
              onClick={() => {
                setSelectedNumber(number);
                paginado(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
