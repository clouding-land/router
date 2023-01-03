import './App.css';
import Products from './Pages/Products';
// import Products from '../Pages/Products'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Setting from './Pages/Setting'
import Login from './Pages/Login'
import Nav from './Components/Nav'
import {Routes, Route, Navigate} from "react-router-dom"
import PrivateRoute from './Context/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to ="/login"/>}/>
        <Route path="/home" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        } />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        } />
        <Route path="/dashboard/setting" element={
          <PrivateRoute>
            <Setting/>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </div>
  );
}

export default App;