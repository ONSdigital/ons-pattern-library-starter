// Stop prism from auto running on DOMContentLoaded
document.removeEventListener('DOMContentLoaded', Prism.highlightAll);

Prism.highlightAll();
// setPrismCSS();


function setPrismCSS() {
	// $( ".tag" ).css( "display", "block" );
	// $( ".tag .tag" ).css( "display", "inline" );
	// $( ".tag:not(.tag .tag)" ).css( "display", "block" );
	var plTags = $( ".tag:not(.tag .tag)" );

	plTags.addClass( "pl-tag" );

	var nest = 0;
	var lastitem;

	plTags.each(function( index ) {
		var text = $(this).text();
		var textArr = text.split(" ");
		var item;
		var indent;

		// console.log(text.split(" ")[0]);
		// console.log(textArr[0].split("/")[0]);

		//opening tags go here
		if (textArr[0].split("/")[0] != "<" && textArr[0].split("/")[0] != "<img") {
			// console.log("opening: " + text);
			item = "open";
			nest += 1;
			if (lastitem == "close") {
				nest += 0;
			} else {
				nest += 1;
			}
		}  

		//self closing tags go here
		if (textArr[0] == "<img") {
			// console.log("self closing: " + text);
			item = "self closing";
			nest += 1;
		}  

		//closing tags go here
		if (textArr[0].split("/")[0] == "<") {
			// console.log("closing " + text);
			item = "close";
			nest += -1;
			// if (nest > 0) {
			// 	nest += 0;
			// } else {
			// 	nest += -1;
			// }
			// console.log(nest);
		}

		lastitem = item;

		// indent = Array(nest).join("----");
		// $(this).wrap( "<span>" + indent + "</span>" );
		indent = nest * 20;

		// console.log(nest + " " + text);
		// console.log(indent + " " + text);

		// $(this).prepend(indent);
		// $(this).wrapInner("<span class=\"pl-block\"></span>");
		// $(this).closest(".pl-block").before(indent);
		// $(this).children(".tag").addClass("pl-block");
		// $(this).prepend(indent);
		// $(this).closest(".pl-tag").prepend("a");
		$(this).wrap( "<div style=\"padding-left:" + indent +  "px" + "\" class=\"" + item + "\"></div>" );
		// console.log($(this).text());




		// console.log( index + ": " + $( this ).text() );
	});

	
}

