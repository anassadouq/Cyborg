import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import {Header, Footer } from './sections/index';
import {Home, Profil} from './Pages/index';
import {Container} from './Components/index';

const  App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Container>    
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profil' element={<Profil/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
      
    </>
  );
}
export default App;