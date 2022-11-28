const modal = document.getElementById('seller-info');
const openButton = document.querySelector('.open-modal');
const closeButton = document.getElementById('close-modal');
const form = document.getElementById('id-form');
const formErrorsContainer = form.querySelector('.errors');

openButton.addEventListener('click', showModal);
closeButton.addEventListener('click', hideModal);
form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Fire');
	formErrorsContainer.innerHTML = '';
	let errors = [];
	const userInitials = form.querySelector('#user-initials').value;
	const userBirthday = form.querySelector('#user-birthday').value;

	if (userInitials.length === 0 || userBirthday.length === 0) {
		errors.push('Wszystkie pola są wymagane');
	}
	if (userInitials.length > 0 && userInitials.length < 2) {
		errors.push('Inicjały muszą składać się z conajmniej 2 znaków');
	}
	if (userBirthday.length < 6) {
		errors.push('Data urodzenia jest za krótka. Prawidłowy format to DDMMRR');
	}
	if (errors.length > 0) {
		let renderErrors = '';
		errors.forEach((error) => {
			renderErrors += `<p>${error}</p>`;
		});
		formErrorsContainer.innerHTML = renderErrors;
		return;
	}
});
function showModal() {
	modal.classList.remove('hidden');
}
function hideModal() {
	modal.classList.add('hidden');
}
