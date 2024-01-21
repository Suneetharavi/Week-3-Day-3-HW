import logo from './logo.svg';
import Brother from './components/Brother';
import Sister from './components/Sister';
import Neice from './components/Neice';

import './App.css';

function App() {
  return (
    <div className='App'>
      <>
       <h1 className="title">Christmas Gifts</h1>
        <Brother/>
        <Sister/>
        <Neice />
        </>
    </div>
  );
}

export default App;
