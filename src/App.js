import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/about' element={<About />} exact></Route>
      </Routes>
    </Router>

  );
}

export default App;
