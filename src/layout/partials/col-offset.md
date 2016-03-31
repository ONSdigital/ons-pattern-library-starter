---
title: Column offset
template: test.html
type: partial
order: 4
show-snippet: true
---
[snippet]
<div class="wrapper">

    <!-- single column with offset -->
    <div class="col-wrap">
        <div class="col col--md-offset-30 col--lg-offset-40 col--md-17 col--lg-19">
            <p>30 offset on medium, 40 offset on large</p>
        </div>
    </div>
    
    <!-- multiple columns with offset -->
    <div class="col-wrap">
        <div class="col col--md-offset-1 col--lg-offset-1 col--md-15 col--lg-15">
            <p>10 on medium, 14 on large</p>
        </div>
         <div class="col col--md-offset-16 col--lg-offset-29 col--md-15 col--lg-15">
            <p>36 on medium, 45 on large</p>
        </div>
    </div>

</div>
[/snippet]