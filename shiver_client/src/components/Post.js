import React, { Component } from 'react';

class BLOG_POSTS extends Component {
    state = {
        blog_posts: []
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () =>{
        fetch('http://localhost:3000/blog_posts')
        .then(res => res.json())
        .then(jsonedPosts => this.setState({ blog_posts: jsonedPosts}))
        .catch (error => console.error(error))
    }

    render () {
        console.log(this.state.blog_posts)
        return (
            <div>
                {this.state.blog_posts.map( blog_post => {
                    return (
                        <div key={blog_post.id}>
                            <h2>Title: {blog_post.title}</h2>
                            <h3>Username: {blog_post.username}</h3>
                            <h3>Catagory: {blog_post.catagory}</h3>
                            <p>{blog_post.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BLOG_POSTS;