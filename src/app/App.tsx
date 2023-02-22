import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Stats from '../pages/Stats';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='*' element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route path='stats' element={<Stats />} />
          <Route path='quiz' element={<Quiz />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
