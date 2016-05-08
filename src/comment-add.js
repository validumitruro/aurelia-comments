import {HttpClient, json} from 'aurelia-fetch-client';
import {Validator, ValidationEngine} from 'aurelia-validatejs';

import {CommentList} from './comment-list';

export class CommentAdd {
    static inject() { return [HttpClient, CommentList, Validator];}

	constructor(http, commentList, validation) {
        // DI
        this.http = http;
        this.commentList = commentList;

        // Local vars
        this.author = this.message = null;
        this.validationErrors = [];

        // Set up validation
        this.validation = validation
            .ensure(this, 'author')
                .required()
                .length({ minimum: 3, maximum: 32})
            .ensure(this, 'message')
                .required();

        // Set up our error reporter
        this.reporter = ValidationEngine.getValidationReporter(this);

        // Attach an observer that simply stores a local copy of the err list
        this.observer = this.reporter.subscribe(result => {
            this.validationErrors = result;
        });
	}

	addComment() {
        // Trigger validation
        this.validation.validate();

        // Do the thing...
        if(this.validationErrors.length == 0) {
            return this.http.fetch('comments', {
                'method': 'post',
                'body': json({
                    author: this.author,
                    message: this.message,
                    date: new Date(),
                    likes: 0
                })
            }).then(response => {
                this.author = this.message = null;

                // Reload parent component data
                this.commentList.bind();
            });
        }
	}

    // Not sure if this is a lifecycle event...just left it here...
    validate() {
        this.validation.validate();
    }

    // Free Mem :-)
    detached() {
        this.observer.dispose();
    }
}
