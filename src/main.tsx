import { createRoot } from 'react-dom/client';
import './index.css';
import { MainPage } from './ui/MainPage';

const rootEL = document.getElementById('root')!;
const reactRoot = createRoot(rootEL);

reactRoot.render(<MainPage />);
