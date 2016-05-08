import {bindable} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

import {CommentList} from './comment-list';

export class Comment {
	static inject() { return [HttpClient, CommentList];}

	@bindable item = null;

	constructor(http, commentList) {
        // DI
        this.http = http;
        this.commentList = commentList;
    }

    like() {
        if(this.item.id) {
            // In case this is not inited yet...
            if(typeof this.item.likes == 'undefined') this.item.likes = 0;
            else this.item.likes++;

            return this.http.fetch(`comments/${this.item.id}`, {
                method: 'put',
                body: json(this.item)
            });
        }
    }

	remove() {
        if(this.item.id && confirm('Are you sure?')) {
            return this.http.fetch(`comments/${this.item.id}`, {
                'method': 'delete'
            }).then(response => {
                // Reload parent component data (since they're in the same page)
                this.commentList.bind();
            });
        }
    }
}
