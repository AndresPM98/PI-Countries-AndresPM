import React from "react";
import styled from "styled-components"
import {connect} from "react-redux"
import { getCountries } from "../Redux/Actions";
import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap: wrap;
`

class Cards extends React.Component{

    componentDidMount(){
        this.props.getCountries();
    }

    render(){
        return(
            // cuando el componente se monta....
            // haga dispatch de la actionCreator que trae los paises
            // 
            <Container>
                  {
                    [...this.props.countries,...this.props.countries].map(country=>{
                        return(
                            <Card
                                flag= {country.flag}   
                                name={country.name}
                                continent = {country.continent}
                            />
                        )
                    })
                }  
            </Container>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        countries:state.countries,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCountries: () => dispatch(getCountries()),        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);