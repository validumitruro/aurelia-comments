# aurelia-comments
A simple Aurelia demonstration of how to create a custom comment list. The comments are stored (using the infamous json-server package, which is awesome btw) using a simple JSON structure inside the db.json file, found in the project root folder.

# Installation & Usage
The dependencies can be installed as such (if you don't already have them):

```
npm install -g jspm
npm install -g json-server
```

.then().run:

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
