const bodyElement = document.body;
document.addEventListener('DOMContentLoaded', function() {
	domLoadSuccess();
});
bodyElement.remove(paragraph);

function domLoadSuccess() {
	const paragraph = document.createElement('p');
	paragraph.innerText = 'DOM load success';
	bodyElement.appendChild(paragraph);
	
}
