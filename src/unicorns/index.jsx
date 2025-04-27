import React, { useContext } from 'react';
import UnicornsContainer from './UnicornsContainer';
import UnicornsForm from './UnicornsForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UnicornContext } from '../context/UnicornContext';

const UnicornsModule = () => {

  const { unicorns, getUnicorns, editUnicorn } = useContext(UnicornContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/unicornios" />} />
        <Route path="/unicornios" element={<UnicornsContainer getUnicorns={getUnicorns} unicorns={unicorns} />} />
        <Route path="/unicornios/crear" element={<UnicornsForm />} />    
      </Routes>
    </Router>
  )
};

export default UnicornsModule;