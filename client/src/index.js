import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';

//url local
// axios.defaults.baseURL = 'http://localhost:3001';
//url deploy
axios.defaults.baseURL =
	'https://pi-deploy-food-back-production.up.railway.app/';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
		,
	</Provider>,
	document.getElementById('root'),
);
//cambia el nombre de la pestaña
let previousTitle = document.title;
window.addEventListener('blur', () => {
	previousTitle = document.title;
	document.title = 'No te vayas!! Vuelve';
});

//devuelve el titulo original
window.addEventListener('focus', () => {
	document.title = previousTitle;
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
