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
			//console.log("Deleted partial: " + file);
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
	var spacesToDashes = content.split(' ').join('-').toLowerCase();
	var removeChars = spacesToDashes.replace(/[^a-zA-Z0-9\- ]/g, "");
	return removeChars;
});

// helper to update date, format: 10 Mar 2014
Handlebars.registerHelper('date', function(){
	var date = new Date();
	var day = date.getDate();
	var month = [];
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";
	var year = date.getFullYear();
	var str = day + ' ' + month[date.getMonth()] + ' ' + year;
	return str;
});

Metalsmith(__dirname)
	.use(parseContentForSnippet)
	.use(collections({
		colour: {
			pattern: 'colour/partials/*.md',
			sortBy: 'order'
		},
		elements: {
			pattern: 'elements/partials/*.md',
			sortBy: 'order'
		},
		layout: {
			pattern: 'layout/partials/*.md',
			sortBy: 'order'
		},
		patterns: {
			pattern: 'patterns/partials/*.md',
			sortBy: 'order'
		}
	}))
	.use(markdown())
	.use(templates('handlebars'))
	.use(deletePartialMarkdownFiles)
	.destination('./build')
	.build(function (err) { if(err) console.log(err) })