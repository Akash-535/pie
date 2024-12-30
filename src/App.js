import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Competition from './components/Competition';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Hero />}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
