---
title: Search on search page
template: test.html
type: partial
order: 4
show-snippet: true
---
[snippet]
<div class="search search--results-page print--hide" id="searchBar">
	<div class="wrapper">
		<form class="col-wrap search__form" action="/search">
			<h1>Search our website</h1>
			<label class="font-size--16 block" for="nav-search">Keyword(s) or time series ID</label>
			<input type="search" autocomplete="off" class="search__input search__input--results-page col col--md-29 col--lg-29" id="nav-search" name="q" value="">
			<button type="submit" class="search__button search__button--results-page col--md-3 col--lg-3" id="nav-search-submit">
				<span class="visuallyhidden">Search</span>
				<span class="icon icon-search--light"></span>
			</button>
		</form>
	</div>
</div>
[/snippet]

A larger search box that appears on the search results page.
