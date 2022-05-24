const phone = document.getElementById('tel_number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

// Adds a dash after the third and seventh number
phone.addEventListener('keydown', (e) => {
	if (e.key === 'Backspace' || e.key === 'Delete') return;
	if (e.target.value.length === 3) {
		phone.value = phone.value + '-';
	} else if (e.target.value.length === 7) {
		phone.value = phone.value + '-';
	}
});

const checkPassword = function () {
	if (password.value != confirmPassword.value) {
		confirmPassword.setCustomValidity('Passwords do not match');
	} else {
		confirmPassword.setCustomValidity('');
	}
};

password.onchange = checkPassword;
confirmPassword.onkeyup = checkPassword;
