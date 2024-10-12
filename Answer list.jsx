import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AnswerList = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      const response = await api.get('/answers');
      setAnswers(response.data);
    };
    fetchAnswers();
  }, []);

  const handleUpvote = async (answerId) => {
    await api.post(`/upvote/${answerId}`);
    alert('Upvoted!');
  };

  return (
    <div>
      <h3>Answers</h3>
      {answers.map((answer) => (
        <div key={answer._id}>
          <p>{answer.content}</p>
          <p>Upvotes: {answer.upvotes}</p>
          <button onClick={() => handleUpvote(answer._id)}>Upvote</button>
        </div>
      ))}
    </div>
  );
};

export default AnswerList
