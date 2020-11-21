function validateEmail(email) {
	const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	return re.test(String(email).toLowerCase());
	// return re.test(email);
}

export { validateEmail };
