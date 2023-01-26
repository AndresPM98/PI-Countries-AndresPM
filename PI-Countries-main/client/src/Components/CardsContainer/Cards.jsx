import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/Actions";
import Card from "../Card/Card";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Cards = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);
  /*   Colocando dispatch en el arreglo de dependencias
     se está indicando a React que solo debe ejecutar 
     el efecto si dispatch cambia de valor. Dado que dispatch
      es una función importada y no cambia en el tiempo de ejecución,
     no habrá un cambio y el efecto solo se ejecutará una vez. */

    return (
        <Container>
            {[...countries].map(country => {
                return (
                    <Card
                        key={country.id}
                        id={country.id}
                        flag={country.flag}
                        name={country.name}
                        continent={country.continent}
                    />
                );
            })}
        </Container>
    );
};

export default Cards; 
