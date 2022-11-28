export function formatDate(date) {
	let splitDate;

	if (new Date(date).toString() === 'Invalid Date') return '00.00.00';
	if (date.match(/[0-9]*\/[0-9]*\/[0-9]*/)) splitDate = date.split('/');
	else if (date.match(/[0-9]*\.[0-9]*\.[0-9]*/)) splitDate = date.split('.');
	else {
		return '00.00.00';
	}

	let [day, month, year] = splitDate;

	if (!isNaN(+day)) day = +day > 9 ? day : '0' + day;
	if (!isNaN(+month)) month = +month > 9 ? month : '0' + month;

	return `${day}.${month}.${year}`;
}
