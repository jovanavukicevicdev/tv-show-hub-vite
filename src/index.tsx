import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
