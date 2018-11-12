queue()
   .await(makeGraphs);

 var genderData = [
                {"gender": "male", "store": "Acme", "state": "NY", "percenatge": 42},
                {"gender": "female", "store": "Big Co.", "state": "NY", "percenatge": 68},
              
                 ];
               
               
               
             
              function makeGraphs3(adx){
                  var adx = crossfilter(genderData);
                  show_it(adx)
                  dc.renderAll();     
                  
                 
        
        
              }
        
            
 function show_it(adx){
                      var adx = crossfilter(genderData);
                
                var name_dim = adx.dimension(dc.pluck('gender'));
                var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('percenatge'));
                dc.pieChart('#per-person-chart-gender')
                        .height(330)
                        .radius(90)
                        .transitionDuration(1500)
                        .dimension(name_dim)
                        .group(total_spend_per_person); 
                  }