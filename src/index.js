import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Greeting from './components/Greetings';
import Home from './components/Home';
import Navbar from './components/Navbar'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={stores}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);


