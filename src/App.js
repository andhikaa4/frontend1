import { Routes, Route } from 'react-router-dom'
import Auth from './component/pages/Auth';
import Home from './component/pages/Home';

function App() {
  return (
    <div style={{ backgroundColor: '#ffe876', minHeight: '100vh' }}>
      <div style={{backgroundImage:`url('https://png.pngtree.com/png-clipart/20211128/original/pngtree-set-of-creativity-doodle-vector-png-image_6955765.png')`, backgroundSize:'200px', minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
