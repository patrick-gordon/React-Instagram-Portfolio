import React from 'react';

import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const NavLeft = styled.div`
    display: flex;
`;

const InstagramLogo = styled.i` 
    padding-right: 10px;
    margin-top: 5px;
    font-weight: 500;
`;

const LogoText = styled.div`
    border-left: .5px solid black;
    padding-left: 10px;
`;

const NavcenterInput = styled.input`
    text-align: center;
    font-size:12px;
`;



class SearchBar extends React.Component {

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
           <NavBar>
                <div className='left'>
                    <InstagramLogo className="fab fa-instagram"  />
                    <LogoText> Instagram </LogoText>
                </div>
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