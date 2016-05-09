# aurelia-comments
A simple Aurelia demonstration of how to create a custom comment list. The comments are stored (using the infamous json-server package, which is awesome btw) using a simple JSON structure inside the db.json file, found in the project root folder.

The SCSS file(s) are built into regular CSS files by gulp (styles/*.scss). Moment.js is used as a dependency for the DateFormatterValueConverter.

# System Requirements
This program requires node 5.x (currently using 5.11.0 myself).

# Installation & Usage
The dependencies can be installed as such (if you don't already have them):

```
npm install -g gulp
npm install -g jspm
npm install -g json-server
```

.then().run():

```
npm install
jspm install
```

And to power everything up:

```
json-server --watch db.json
gulp
```

That's all. Enjoy!
