---
title: Complex grid
template: test.html
type: partial
order: 3
show-snippet: true
---
[snippet]
<div class="col-wrap">
    <div class="col col--md-10 col--lg-14 margin-left--1">
        <p>10 on medium, 14 on large</p>
    </div>
    <div class="col col--md-36 col--lg-45">
        <p>36 on medium, 45 on large</p>
    </div>
</div>

<!-- spaced using margin utilities -->
<div class="col-wrap">
    <div class="col col--md-10 col--lg-14 margin-left--1">
        <p>10 on medium, 14 on large</p>
    </div>
    <div class="col col--md-35 col--lg-44 margin-left--1">
        <p>35 on medium, 44 on large</p>
    </div>
</div>

<!-- nesting complex columns -->
<div class="col-wrap">
    <div class="col col--md-15 col--lg-15 margin-left--1">
        <p>10 on medium, 15 on large</p>
    </div>
    <div class="col col--md-22 col--lg-29">
        <div class="col col--md-11 col--lg-14">
            <p>15 on medium and  large</p>
        </div>
        <div class="col col--md-11 col--lg-15">
            <p>15 on medium and  large</p>
        </div>
    </div>
    <div class="col col--md-10 col--lg-15">
        <p>22 on medium, 29 on large</p>
    </div>
</div>
[/snippet]

Description here...