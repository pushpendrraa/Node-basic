import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Createpost from './pages/createpost';
import Feed from './pages/post';
import axios from "axios"

const App = () => {
  const posts = [
    {
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      caption: 'Beautiful nature 🌿',
    },
    {
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      caption: 'Having a great day 😄',
    },
  ];
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        setPosts((prevPosts) => [...prevPosts, ...res.data.posts]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<Createpost />} />

        <Route
          path="/post"
          element={<Feed posts={posts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
