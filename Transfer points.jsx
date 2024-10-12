import React, { useState } from 'react';
import api from '../services/api';

const TransferPoints = ({ fromUserId }) => {
  const [toUserId, setToUserId] = useState('');
  const [points, setPoints] = useState(0);

  const handleTransfer = async () => {
    try {
      await api.post('/transfer', {
        fromUserId,
        toUserId,
        points: parseInt(points),
      });
      alert('Points transferred!');
    } catch (err) {
      alert('Transfer failed. You may not have enough points.');
    }
  };

  return (
    <div>
      <h3>Transfer Points</h3>
      <input
        type="text"
        placeholder="Recipient User ID"
        value={toUserId}
        onChange={(e) => setToUserId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Points to transfer"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer Points</button>
    </div>
  );
};

export default TransferPoints
