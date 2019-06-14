import React from 'react';

import styled from 'styled-components';

const NavBar = styled.div`
     display: flex;
     justify-content: space-between;
     margin-top: 0px;
     margin: 0 auto;
     border-bottom: 1px solid black;
     padding-top: 20px;
     padding-bottom: 20px;
    
`;

const NavLeft = styled.div`
    display: flex;
    text: 20px;
`;

const InstagramLogo = styled.i` 
    padding-right: 10px;
   
    font-weight: 500;
`;

const LogoText = styled.div`
    font-family: apple chancery, cursive;
    font-size: 25px;
    border-left: .5px solid black;
    padding-left: 10px;
`;

const NavcenterInput = styled.input`
    text-align: center;
    font-size:20px;
`;

const NavRight = styled.i`
    padding-right:

`;


class SearchBar extends React.Component {

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
           <NavBar >
                <NavLeft>
                    <InstagramLogo className="fab fa-instagram fa-2x" />
                    <LogoText> Instagram </LogoText>
                </NavLeft>
                <NavcenterInput
                    name='search'
                    onChange={this.props.searchFilter}
                    placeholder=' search...'
                    type='text'
                />
                <NavRight>
                    <i className="far fa-compass fa-2x"></i>
                    <i className="fas fa-heart fa-2x"></i>
                    <i className="fas fa-user  fa-2x"></i>
                </NavRight>
                
            </NavBar >
            
            
        )
    }
}
export default SearchBar