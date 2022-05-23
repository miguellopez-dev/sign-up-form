const phone = document.getElementById('tel_number');

phone.addEventListener('keydown', (e) => {
	if (e.key === 'Backspace' || e.key === 'Delete') return;
	if (e.target.value.length === 3) {
		phone.value = phone.value + '-';
	} else if (e.target.value.length === 7) {
		phone.value = phone.value + '-';
	}
});
