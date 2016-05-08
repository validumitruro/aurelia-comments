import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
	constructor(http) {
        // Set up our API calls
		http.configure(config => {
	      config
	        .useStandardConfiguration()
	        .withBaseUrl('http://localhost:3000/');
	    });
	}
}
