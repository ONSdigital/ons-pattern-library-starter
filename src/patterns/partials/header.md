---
title: Header
template: test.html
type: partial
order: 1
show-snippet: true
---
[snippet]
<div class="wrapper">
	<div class="header col-wrap">
		<div class="col col--lg-one-third col--md-one-third">
			<a href="/">
				<!--[if lte IE 8]>
					<img class="logo" src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.png" alt="Office for National Statistics">
				<![endif]-->
				<!--[if gte IE 9]><!-->
					<img class="logo" src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg" alt="Office for National Statistics">
				<![endif]-->
			</a>
		</div>
		<div class="col col--lg-two-thirds col--md-two-thirds print--hide">&nbsp;</div>
		<div class="secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide">
			<ul class="secondary-nav__list">
				<li class="secondary-nav__item">
					<a class="secondary-nav__link" href="/methodology">Methodology</a>
				</li>
				<li class="secondary-nav__item">
					<a class="secondary-nav__link" href="/aboutus">
						About
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
[/snippet]

Description about the header file...