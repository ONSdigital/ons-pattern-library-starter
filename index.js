var Metalsmith = require('metalsmith'),
	markdown   = require('metalsmith-markdown'),
	templates  = require('metalsmith-templates'),
	collections = require('metalsmith-collections'),
	permalinks  = require('metalsmith-permalinks'),
	Handlebars = require('handlebars'),
	fs         = require('fs');


var deletePartialMarkdownFiles = function(files, metalsmith, done) {

	meta = metalsmith.metadata();
	for (var file in files) {
		var type = files[file].type;
		if (type == "partial" || type == "code") {
			delete files[file];
			console.log("Deleted partial: " + file);
		}
	}
	done();
};

var parseContentForSnippet = function (files, metalsmith, done) {
	var contents;
	var cleancontents;
	var snippet;
	var snippetclean;

	Object.keys(files).forEach(function (file) {
		var type = files[file].type;
		contents = files[file].contents.toString();
		if (type == "partial") {
			
			try {
				cleancontents = contents.replace(/\[snippet\][\s\S]*?\[\/snippet\]/i, "");

				snippet = contents.match(/\[snippet\][\s\S]*?\[\/snippet\]/i);

				if (snippet) {
					snippetclean = snippet[0];
					
					snippetclean = snippetclean.replace(/\[snippet\]/, "");
					snippetclean = snippetclean.replace(/\[\/snippet\]/, "");

					const buffsnippet = new Buffer(snippetclean);
					files[file].snippet = buffsnippet;

					const buffcontents = new Buffer(cleancontents);
					files[file].contents = buffcontents;

				} else {
					cleancontents = null;
					contents = null;
					snippet = null;
					snippetclean = null;
				}
			} catch(err) {
				return err.message;
			}
		}
	});
	done();
};

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.html').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.html').toString());
Handlebars.registerPartial('listpagebreadcrumb', fs.readFileSync(__dirname + '/templates/partials/listpagebreadcrumb.html').toString());

// helper to slugify strings
Handlebars.registerHelper('slug', function(content){
	var removeSpaces = content.split(' ').join('-').toLowerCase();
	var removeChars = removeSpaces.replace(/[^a-zA-Z0-9\- ]/g, "");
	return removeChars;
});

Metalsmith(__dirname)
	.use(parseContentForSnippet)
	.use(collections({
		elements: {
			pattern: 'elements/partials/*.md',
			sortBy: 'order'
		},
		components: {
			pattern: 'components/partials/*.md',
			sortBy: 'order'
		},
		colour: {
			pattern: 'colour/partials/*.md',
			sortBy: 'order'
		}
	}))
	.use(markdown())
	.use(templates('handlebars'))
	.use(deletePartialMarkdownFiles)
	.destination('./build')
	.build(function (err) { if(err) console.log(err) })