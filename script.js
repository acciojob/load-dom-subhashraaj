document.addEventListener('DOMContentLoaded', function() {
	domLoadSuccess();
});

function domLoadSuccess() {
	const bodyElement = document.body;
	const paragraph = document.createElement('p');
	paragraph.innerText = 'DOM load success';
	bodyElement.appendChild(paragraph);
}
