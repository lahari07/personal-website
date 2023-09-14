import {React} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Canvas 
      className='canvas'
      camera={{
        fov: 30,
        near: 0.2,
        far: 2000,
        position:[0, 0, 5]
      }}>
      <Experience />
    </Canvas>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
