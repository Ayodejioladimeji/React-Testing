import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className='App'>
      <Input showDiv={showDiv} />
      <Button />
    </div>
  );
}

export default App;
