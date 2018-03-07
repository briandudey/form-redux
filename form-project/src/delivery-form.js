import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class DeliveryForm extends React.Component {
	render() {
		return (
			<div className="delivery-form">
				<h2>Report a problem with your delivery</h2>
				<form>
					<Field
						name="trackingNumber"
						id="trackingNumber"
						label="Tracking number"
					/>
					<Field
						name="issue"
						id="issue"
						label="What is your issue?"
						element="select">
						<option value="not-delivered">My delivery hasn't arrived</option>
						<option value="wrong-item">The wrong item was delivered</option>
						<option value="missing-part">Part of my order was missing</option>
						<option value="damaged">Some of my order arrived damaged</option>
						<option value="other">Other (give details below)</option>
					</Field>
					<Field
						name="details"
						id="details"
						label="Give more details (optional)"
						element="textarea"
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm()(DeliveryForm);
