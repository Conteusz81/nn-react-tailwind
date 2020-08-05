import React from 'react';
import './styles/main.css';

function App() {
  return (
    <div className="h-64">
      <div className="p-4 m-4 bg-green-600">
        <h1 className="text-2xl font-bold text-white">Tailwind CSS</h1>
      </div>
      <div className="p-4 m-4 bg-green-300 h-full">
        <h2 className="text-green-900">Tailwind CSS React JS configuration</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Test Button</button>
      </div>
    </div>
  );
}

export default App;
