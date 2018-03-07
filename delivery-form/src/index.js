import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import DeliveryForm from './delivery-form';

ReactDOM.render(
	<Provider store={store}>
		<DeliveryForm />
	</Provider>,
	document.getElementById('root')
);
