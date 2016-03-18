---
title: Global search
template: test.html
type: partial
order: 3
show-snippet: true
---
[snippet]
<div class="search nav-search--hidden print--hide" id="searchBar">
	<div class="wrapper" role="search">
		<form class="col-wrap search__form" action="/search">
			<label class="search__label col col--md-23 col--lg-24" for="nav-search">
				Search for a keyword(s) or time series ID
			</label>
			<input type="search" autocomplete="off" class="search__input col col--md-21 col--lg-32" id="nav-search" name="q" value="">
			<button type="submit" class="search__button col--md-3 col--lg-3" id="nav-search-submit">
				<span class="visuallyhidden">Search</span>
				<span class="icon icon-search--light"></span>
			</button>
		</form>
	</div>
</div>
[/snippet]

Description about the header file...