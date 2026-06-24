import React from 'react';

const Feed = ({ posts }) => {
  return (
    <section className="feed-section">
      <h1>Feed</h1>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div className="post-card" key={index}>
            <img
              src={post.image}
              alt="post"
              className="post-image"
            />

            <div className="post-content">
              <p>{post.caption}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Feed;