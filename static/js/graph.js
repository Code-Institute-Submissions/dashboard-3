queue()
    .defer(d3.csv,"data/subcount.csv")
    .await(makeGraphs)
    



function makeGraphs(error, subcount){
    }