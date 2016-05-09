import moment from 'moment';

// Converts a date string to a human date for our UI
export class DateFormatterValueConverter {
	toView(value) {
		return moment(value).format('Mo MMM YYYY, HH:mm');
	}
}
