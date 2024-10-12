Import React from 'react';
import Profile from './components/Profile';
import AnswerList from './components/AnswerList';
import TransferPoints from './components/TransferPoints';
import CreateAnswer from './components/CreateAnswer';

function App() {
  const userId = '60d...';  // Use the actual user ID from MongoDB

  return (
    <div>
      <h1>Reward System</h1>
      <Profile userId={userId} />
      <CreateAnswer userId={userId} />
      <AnswerList />
      <TransferPoints fromUserId={userId} />
    </div>
  );
}

export default App
