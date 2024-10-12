import React, { useState } from 'react';
import api from '../services/api';

const CreateAnswer = ({ userId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/answer', { userId, content });
      alert('Answer posted and points awarded!');
    } catch (err) {
      alert('Failed to post answer');
    }
  };

  return (
    <div>
      <h3>Post an Answer</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type your answer here"
        ></textarea>
        <button type="submit">Post Answer</button>
      </form>
    </div>
  );
};

export default CreateAnswer
