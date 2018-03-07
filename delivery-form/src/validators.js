export const required = value =>
	value !== undefined ? undefined : 'value is required';

export const nonEmpty = value =>
	value.trim() !== '' ? undefined : 'Cannot be empty';

export const exactLength = length => value =>
	value.length === length
		? undefined
		: `Must contain exactly ${length} characters`;

export const onlyNumbers = value =>
	/^\d+$/.test(value) ? undefined : 'Must only contain numbers';
