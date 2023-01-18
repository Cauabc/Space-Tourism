import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Crew } from './pages/Crew/Crew'
import { Home } from './pages/Home/Home'
import { Destination } from './pages/Destination/Destination'
import { Technology } from './pages/Technology/Technology'
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
