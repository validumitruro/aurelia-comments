// Converts a date string to a human date for our UI
// Pretty caveman-ish, but it should work for our demo
export class DateFormatterValueConverter {
	toView(value) {
		var _val = new Date(value);

		return `${_val.getDate()}.${_val.getMonth()+1}.${_val.getFullYear()} ${_val.getHours()}:${_val.getMinutes()}`;
	}
}
