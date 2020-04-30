import React from 'react';
import './Home.css'
import SearchBar from '../components/SearchBar/SearchBar';
import PostContainer from '../components/PostContainer/PostContainer';
import dummyData from '../../dummyData';

class Home extends React.Component {
    state = {
        data: [],
        search: '',
        filteredPosts: []
      }
   
      changeHandler = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }
    
    componentDidMount(){
       this.setState({ data: dummyData})
    }
   
    searchFilter = e => {
       const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
       this.setState({ filteredPosts: filtered})
    }
       
     render() {
       return (
         <div className="App">
           <SearchBar 
           newSearch={this.state.search}
           searchFilter={this.searchFilter}
           />
           <PostContainer 
           data={this.state.data}
           filteredPosts={this.state.filteredPosts}
           searchFilter={this.searchFilter}
            />
         </div>
       )
     }
   }

   export default Home;