import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Pricing from './pages/Pricing';
import Package from './pages/Package';
import Landingpage from './pages/Landingpage';

const Myroute = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landingpage/>} />
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/travel" element={<Package/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default Myroute;
