queue()
   .defer(d3.json, "data/socials.json")
   .await(makeGraphs);
    
function makeGraphs(error, socialsData) {
        var ndx = crossfilter(socialsData);
       
        showing_social_followers(ndx);
        showing_followers_pie(ndx);
        
        dc.renderAll();

}

function showing_social_followers(ndx){
    var name_dim = ndx.dimension(dc.pluck('media'));
    var total_followers_per_media = name_dim.group().reduceSum(dc.pluck('followers'));
           
    dc.barChart('#follower-bar-chart')
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(name_dim)
        .group(total_followers_per_media)
        .transitionDuration(100)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("")
        .yAxisLabel('Followers (millions)');
}

function showing_followers_pie(ndx){
    var name_dim = ndx.dimension(dc.pluck('media'));
    var total_followers_per_media = name_dim.group().reduceSum(dc.pluck('followers'));
        dc.pieChart('#follers-pie-chart')
            .height(330)
            .radius(90)
            .transitionDuration(1500)
            .dimension(name_dim)
            .group(total_followers_per_media);
}

