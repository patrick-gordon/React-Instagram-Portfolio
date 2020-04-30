import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
    display: flex;
    text-align: center;
    margin-left: 10px;
    padding: 10px 10px
`;

const UserNameImg = styled.img`
    height: 35px;
    width: 35px
    border-radius: 50%;
`;

const UserName = styled.p`
   padding-top: 8px;
   margin-left: 10px;
   font-weight: 600;
   font-size: 20px;
`;

const MainImg = styled.div`
    
`;

const IconsWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Heart = styled.i`
    margin-right: 20px;
    margin-left: 10px;
`;

const Main = styled.img`
    width: 100%
`;

const Likes = styled.div`
    font-weight: 600;
    margin-left: 10px;
`;

class PostContainer extends Component {
    render() {
        return (
            <div className='post-container'>
                {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                    return (
                        <>
                            <Header>
                                <UserNameImg src={post.thumbnailUrl} alt='profile-pic' />
                                <UserName>{post.username}</UserName>
                            </Header>

                            <MainImg>
                                <Main src={post.imageUrl} alt='main-image' />
                            </MainImg>

                            <IconsWrapper>
                            <FontAwesomeIcon icon={faHeart} />
                                {/* <i className="far fa-comment fa-2x"></i> */}
                                <FontAwesomeIcon icon={faComment} />
                            </IconsWrapper>
                            
                            <Likes>
                                {post.likes} likes
                             </Likes>

                            <CommentSection
                                comments={post.comments}
                                timestamp={post.timestamp}
                            />
                        </>
                    )
                }) : this.props.filteredPosts.map(post => {
                    return (
                        <>
                            <Header>
                                <UserNameImg src={post.thumbnailUrl} alt='profile-pic' />
                                <UserName>{post.username}</UserName>
                            </Header>

                            <Main src={post.imageUrl} alt='main-image' />

                            <IconsWrapper>
                            <FontAwesomeIcon icon={faHeart} />
                                {/* <i className="far fa-comment fa-2x"></i> */}
                                <FontAwesomeIcon icon={faComment} />
                            </IconsWrapper>
                        
                            <Likes>
                                {post.likes} likes
                             </Likes>

                            <CommentSection
                                comments={post.comments}
                                timestamp={post.timestamp} 
                            />
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

