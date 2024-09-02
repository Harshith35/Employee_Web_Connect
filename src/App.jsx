// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Navbar/>
//     <Outlet/>
//     </>
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import HRPolicies from './components/HRPolicies/HRPolicies';

// function App() {
//   return (
//     <div className="App">
//       <LandingPage/>    
//     </div>
// );
// }


// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import './App.css';  // Your CSS file

// const App = () => {
//   return (
//       <div className="app">
//           {/* Navigation */}
//           <nav className="nav">
              
//               <Link to="/hr-policies">HR Policies</Link>
//               {/* Add other navigation links here */}
//           </nav>

//           {/* Main Content */}
//           <Outlet /> {/* This will render child routes like Home and HRPolicies */}
//       </div>
//   );
// };


// export default App;


// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';  // Your CSS file

const App = () => {
    return (
        <div className="app">
            {/* Main Content */}
            <Outlet /> {/* Renders the child components based on the route */}
        </div>
    );
};

export default App;
