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
            // haga dispatch de la actionCreator que trae los personajes
            // 
            <Container>
                  {
                    [...this.props.countries,...this.props.countries].map(country=>{
                        return(
                            <Card
                                name={country.name}
                                continent = {country.continent}
                                flag= {country.flag}
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