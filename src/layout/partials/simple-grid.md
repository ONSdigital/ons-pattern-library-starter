---
title: Simple grid
template: test.html
type: partial
order: 2
show-snippet: true
---
[snippet]
<div class="wrapper">

    <!-- full column -->
    <div class="col-wrap">
        <div class="col col--md-one col--lg-one">
            <p>full column</p>
        </div>
    </div>
    
    <!-- half columns -->
    <div class="col-wrap">
        <div class="col col--md-half col--lg-half">
            <p>half column</p>
        </div>
        <div class="col col--md-half col--lg-half">
            <p>half column</p>
        </div>
    </div>
    
    <!-- third columns -->
    <div class="col-wrap">
        <div class="col col--md-two-thirds col--lg-two-thirds">
            <p>two thirds column</p>
        </div>
        <div class="col col--md-one-third col--lg-one-third">
            <p>one third column</p>
        </div>
    </div>
    
    <!-- quarter columns -->
    <div class="col-wrap">
        <div class="col col--md-three-quarters col--lg-three-quarters">
            <p>three quarters column</p>
        </div>
        <div class="col col--md-one-quarter col--lg-one-quarter">
            <p>one quarter column</p>
        </div>
    </div>

</div>
[/snippet]

For simpler page structures, you can create elements at halves, thirds or quarters. Each column has a left margin of 16px and should use a column wrap to group columns into a row.

A simple column cannot be nested within another column. Eg putting a half column inside another half column won't result in a quarter column.