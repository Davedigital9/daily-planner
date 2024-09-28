import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const DATA = [
  { id: "todo-0", name: "Meditate", completed: false },
  { id: "todo-1", name: "Exercise", completed: false },
  { id: "todo-2", name: "Review yesterdays tasks", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)