import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {

    render() {
        return (
            <div className='post-container'>
                {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                    return (
                        <>
                            <header>
                                <img src={post.thumbnailUrl} alt='profile-pic' />
                                <h3>{post.username}</h3>
                            </header>

                            <img src={post.imageUrl} alt='main-image' />

                            <div className='icons'>
                                <i className="fas fa-heart" onClick></i>
                                <i className="far fa-comment"></i>
                            </div>
                            

                            <section className='likes'>
                                {post.likes} likes
                             </section>

                            <CommentSection
                                comments={post.comments}
                                timestamp={post.timestamp}
                            />
                        </>
                    )
                }) : this.props.filteredPosts.map(post => {
                    return (
                        <>
                            <header>
                                <img src={post.thumbnailUrl} alt='profile-pic' />
                                <h3>{post.username}</h3>
                            </header>

                            <img src={post.imageUrl} alt='main-image' />

                           

                            <section className='likes'>
                                {post.likes} likes
                             </section>

                            <CommentSection
                                comments={post.comments}
                                timestamp={post.timestamp} />
                        </>
                    )
                }

                )
                }

            </div>
        )
    }
}
export default PostContainer

