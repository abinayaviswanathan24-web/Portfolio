import Practise from './Redux/practise'
import Login from './Common/Login'
import Calculator from './Calculator'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Practise />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App