import React, { Component } from 'react'

class SearchBar extends Component {

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='searchbar'>
                <input
                    name='search'
                    onChange={this.props.searchFilter}
                    placeholder='search...'
                    type='text'
                />
            </div>
        )
    }
}
export default SearchBar