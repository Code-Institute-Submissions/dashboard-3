queue()
        .defer(d3.json, "data/youtubedata.json")
        .await(makeGraphs);
        
    function makeGraphs(error, transactionsData) {
        var ndx = crossfilter(transactionsData);
        var parseDate = d3.time.format("%Y-%m-%d").parse;
        transactionsData.forEach(function(d){
            d.date = parseDate(d.date);
        });
        var date_dim = ndx.dimension(dc.pluck('date'));
        var total_views = date_dim.group().reduceSum(dc.pluck('totalVIews'));
        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;
        
        dc.lineChart("#view-line-chart")
            .width(1000)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 100})
            .dimension(date_dim)
            .group(total_views)
            .transitionDuration(1000)
            .x(d3.time.scale().domain([minDate,maxDate]))
            .y(d3.scale.linear().domain([10000000,67248485]))
            .xAxisLabel("Month")
            .yAxis().ticks(5);
            
        var name_dim = ndx.dimension(dc.pluck('date'));
        var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('subsrcibersGained'));
        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;
        
            dc.barChart('#my-bar-chart')
                .width(1000)
                .height(300)
                .margins({top: 10, right: 50, bottom: 50, left: 100})
                .dimension(name_dim)
                .group(total_spend_per_person)
                .transitionDuration(100)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .xAxisLabel("")
                .yAxisLabel('Followers')
                
        dc.renderAll();
    }
   