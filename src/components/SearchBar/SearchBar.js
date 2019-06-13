import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='searchbar'>
                <div className='left'>
                    <i className="fab fa-instagram fa-2x"></i>
                    <p>| Instagram</p>
                </div>
                <input
                    name='search'
                    onChange={this.props.searchFilter}
                    placeholder='search...'
                    type='text'
                />
                <div className='right'>
                    <i className='far fa-compass fa-2x'></i>
                    <i className="fas fa-heart fa-2x"></i>
                    <i className="fas fa-user fa-2x"></i>
                </div>
            </div >
        )
    }
}
export default SearchBar