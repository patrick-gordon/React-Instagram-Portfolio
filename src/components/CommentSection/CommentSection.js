import React, { Component } from 'react'
import './CommentSection.css';
import styled from 'styled-components';

const CommentsWrapper = styled.div`
    display: flex;
    text-align: center;
    margin-top: 5px;
    margin-left: 10px;
`;
const UserName = styled.h3`
    font-size: 30px;
    font-weight: 550
`;
const Comments = styled.p`
    margin-left: 9px;
    padding-top: 7px;
    font-size: 20px;
`;

const TimeStamp = styled.p`
    margin-top: 10px;
    font-size: 13px;
    margin-left: 10px;
    margin-bottom: 5px;
`;

const CommentInput = styled.form`
    border-top: 1px solid grey;
    width: 100%;
    padding: 10px 10px;
    border-bottom: 2px solid black;
    overflow: hidden
`;

const Input = styled.input`
    width: 100%;
    height:100%;
    border: none;
    text-align: center;
`;
class CommentSection extends Component {
    state = {
        comments: this.props.comments,
        newComment: ''
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'P Diddy',
            text: this.state.newComment
        }
        this.setState({comments: [...this.state.comments, newComment], newComment: ''})
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className='comment-section'>
                {this.state.comments.map(comment => {
                    return (
                        <CommentsWrapper>
                            <UserName>{comment.username}</UserName>
                            <Comments>{comment.text}</Comments>
                        </CommentsWrapper>
                    )
                })}

                <TimeStamp className='timestamp'>{this.props.timestamp}</TimeStamp>

                <CommentInput onSubmit={this.addNewComment}>
                    <Input
                        name='newComment'
                        onChange={this.changeHandler}
                        placeholder='add a comment....'
                        type='text'
                        value={this.state.newComment}
                    />
                </CommentInput>
            </div>
        )
    }
}
export default CommentSection
