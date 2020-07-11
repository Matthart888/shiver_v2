import React, { Component } from 'react';

class Blog_Posts extends Component {

    getPosts = () =>{
        fetch('localhost:3000')
        .then( blog_posts => console.log(blog_posts))
      }

    render () {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Blog_Posts;