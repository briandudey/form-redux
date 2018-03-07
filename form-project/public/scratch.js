const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api'; let successMessage; if (this.props.submitSucceeded)
onSubmit(values) { { successMessage = (
<div className="message message-success">
  Report submitted successfully
</div>
); }  {successMessage} {errorMessage} component={Input}
export component={Input} validate={[required, nonEmpty, exactLength5, onlyNumbers]}e default reduxForm({ form: 'delivery',
initialValues: { issue: 'not-delivered' } })(DeliveryForm); return Promise.reject( new SubmissionError({ _error: message
}) return fetch(`${API_BASE_URL}/report`, { method: 'POST', body: JSON.stringify(values), headers: { 'Content-Type': 'application/json'
} }) .then(res => { if (!res.ok) { if ( res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')
) { // It's a nice JSON error returned by us, so decode it return res.json().then(err => Promise.reject(err)); } // It's
a less informative error returned by express return Promise.reject({ code: res.status, message: res.statusText }); } return;
}) .then(() => console.log('Submitted with values', values)) .catch(err => { const { reason, message, location } = err; if
(reason === 'ValidationError') { // Convert ValidationErrors into SubmissionErrors for Redux Form return Promise.reject(
new SubmissionError({ [location]: message }) ); } ); }); }