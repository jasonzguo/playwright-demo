import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import server from './server';

server();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />,
)
