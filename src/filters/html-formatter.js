// Converts a string to html
// Only replaces newline chars with breaks, really.
export class HtmlFormatterValueConverter {
	toView(value) {
		return value.replace(new RegExp("\n", 'mg'), '<br />');
	}
}
