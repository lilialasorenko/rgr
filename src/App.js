import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main/Main';
import Photos from './Pages/Photos/Photos';
import News from './Pages/News/News';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  );
}

export default App;
