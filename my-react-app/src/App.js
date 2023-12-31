import './App.css';
import PostList from "./components/PostList";
import React, { useState } from "react";

const DATA = [
  {
    id: 1,
    title: 'title-1',
    body: 'some-text'
  },
  {
    id: 2, 
    title: 'title-2',
    body: 'some-text'
  },
  {
    id: 3,
    title: 'title-3',
    body: 'some-text'
  },
  {
    id: 4,
    title: 'title-4',
    body: 'some-text'
  },
  {
    id: 5,
    title: 'title-5',
    body: 'some-text'
  }
];

function App() {
  const [posts, setPosts] = useState(DATA);
  const [inputValue, setInputValue] = useState('');

  function handleAdd(e) {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    const copyArr = [...posts];
    const newPost = {
      id: Math.random(),
      title: inputValue,
      body: ''
    };

    copyArr.push(newPost);
    setPosts(copyArr);
    setInputValue('');
  }

  function handleDelete(id) {
    setPosts(posts.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <form>
        <input
          value={inputValue}
          type="text"
          placeholder="add title"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
      <div className='lists'>
        {posts.map(item => (
          <PostList key={item.id} title={item.title} onClick={() => handleDelete(item.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;

