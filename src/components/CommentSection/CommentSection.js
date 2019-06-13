import React, { Component } from 'react'
import './CommentSection.css';

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
            <div className='commnet-section'>
                {this.state.comments.map(comment => {
                    return (
                        <>
                            <h3>{comment.username}</h3>
                            <p>{comment.text}</p>
                        </>
                    )
                })}

                <p className='timestamp'>{this.props.timestamp}</p>
                <form onSubmit={this.addNewComment}>
                    <input
                        name='newComment'
                        onChange={this.changeHandler}
                        placeholder='add a comment....'
                        type='text'
                        value={this.state.newComment}
                    />
                </form>
            </div>
        )
    }
}
export default CommentSection
