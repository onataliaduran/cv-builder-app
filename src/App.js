import React from 'react';
import './App.css';

import Layout from './components/layout/Layout';
import Edit from './components/your_cvs/Edit';

function App() {
  return (
    <div className="App">
      <Layout>
        <Edit />
      </Layout>
    </div>
  );
}

export default App;

