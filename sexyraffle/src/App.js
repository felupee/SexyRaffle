import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import CreateUsers from './Componets/CreateUsers';

function App() {
	return (
		<Routes>
		  <Route exact path="/" element={ <CreateUsers /> } />
		  <Route path="/home" element={ <Home /> } />
	  </Routes>
	);
}

export default App;
