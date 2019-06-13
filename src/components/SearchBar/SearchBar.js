import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const NavBar = styled.div`
    // display: flex;
    // justify-content: space-between;
    // margin-top: 10px;
    // margin: 0 auto;
    
`;

const NavLeft = styled.div`
    display: flex;
`;

const InstagramLogo = styled.i` 
    padding-right: 10px;
   
    font-weight: 500;
`;

const LogoText = styled.div`
    border-left: .5px solid black;
    padding-left: 10px;
`;

const NavcenterInput = styled.input`
    text-align: center;
    font-size:15px;
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
           <NavBar className='nav-bar'>
                <NavLeft>
                    <InstagramLogo className="fab fa-instagram"  />
                    <LogoText> Instagram </LogoText>
                </NavLeft>
                <input
                    name='search'
                    onChange={this.props.searchFilter}
                    placeholder='search...'
                    type='text'
                />
                <div className='right'>
                    <i className="far fa-compass"></i>
                    <i className="fas fa-heart "></i>
                    <i className="fas fa-user "></i>
                </div>
                
            </NavBar >
            
            
        )
    }
}
export default SearchBar