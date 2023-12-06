import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './counter'
import SocialMedia from './socialmedia'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocialMedia/>
    <Counter/>
    <App />
  </React.StrictMode>
)
