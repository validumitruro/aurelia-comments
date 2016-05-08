import {HttpClient, json} from 'aurelia-fetch-client';

export class CommentList {
	static inject() { return [HttpClient];}

	constructor(http) {
		this.comments = [];
		this.http = http;
	}

	bind() {
        return this.http.fetch('comments?_sort=id&_order=DESC')
			.then(response => response.json())
			.then(comments => this.comments = comments);
	}
}
