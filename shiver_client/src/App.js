import React from 'react';
import BLOG_POSTS from './components/Post.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <BLOG_POSTS />
        </main>
        <nav>
          <h4>Create Post Form</h4>
          <form>

          </form>
        </nav>
      </div>
      <footer />
    </div>
  )
}

export default App;
