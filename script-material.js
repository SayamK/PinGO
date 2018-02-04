$(document).ready(function()  {
	
	$('link[title="mystyle"]').prop('disabled', true);

  tempStart = -250;
  tempEnd = 250;

  popStart = 100;

  elevStart = 0;
  elevEnd = 3000;

  budget = 100000;

  pref = [1,1,1,1];

$("#range1").mousedown(function(){


    $(".b2").css({opacity:"1"});
    $(".slider2").css({"filter":"grayscale(0)"})



        var iv = setInterval(function(){
        var rangeval = $('#range1').val();


        document.getElementById('rangeValue').innerHTML = rangeval;
        left = 20 +  (rangeval*6.4);
        
        popStart = rangeval;
        

          $("#rangeValue").css({"left":left + "px"})
        });

    });
  

  $("#range2").mousedown(function(){
    $(".d2").css({opacity:"1"});
    $(".slider4").css({"filter":"grayscale(0)"})


        var iv = setInterval(function(){
        var rangeval2 = $('#range2').val();


        document.getElementById('rangeValue2').innerHTML = rangeval2;
        
          budget = rangeval2;
          rangeval2/=1000;
        left = 20 +  (rangeval2*6.4);

          $("#rangeValue2").css({"left":left + "px"})
        });

    });
  

	  $( function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: -250,
      max: 250,
      values: [ -250, 250 ],
      slide: function( event, ui ) {
        $( ".st" ).html($( "#slider-range1" ).slider( "values", 0 ));
        $( ".end" ).html($( "#slider-range1" ).slider( "values", 1 ));


        tempStart = $( ".st" ).html();
        tempEnd = $( ".end" ).html();
      }

    });
    
  } );


    $( function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 3000,
      values: [ 0, 3000 ],
      slide: function( event, ui ) {
        $( ".st2" ).html($( "#slider-range2" ).slider( "values", 0 ));
        $( ".end2" ).html($( "#slider-range2" ).slider( "values", 1 ));
              elevStart = $(".st2").html();
      elevEnd = $(".end2").html();
      }


      // elevEnd=0;
    });
    
  } );

  $("slider-range1").mousedown(function(){

    $(".a2").css({opacity:"1"});
    $("#slider-range1").css({"filter":"grayscale(0)"})

      var iv = setInterval(function(){
         var rangeval = $(this).val();
      
          $( ".st" ).html($( "#slider-range1" ).slider( "values", 0 ));
          $( ".end" ).html($( "#slider-range1" ).slider( "values", 1 ));


      });



  });


  $("slider-range2").mousedown(function(){

      $(".c2").css({opacity:"1"});
      $("#slider-range2").css({"filter":"grayscale(0)"})

      var iv = setInterval(function(){
         var rangeval = $(this).val();
      
        $( ".st2" ).html($( "#slider-range2" ).slider( "values", 0 ));
        $( ".end2" ).html($( "#slider-range2" ).slider( "values", 1 ));

      });

  });

  $(".a2").click(function(){
    pref[0] = 0;
    $(this).css({opacity:"0"});
    $("#slider-range1").css({"filter":"grayscale(0.8)"})

  });

   $(".b2").click(function(){
    pref[1] = 0;
    $(this).css({opacity:"0"});
    $(".slider2").css({"filter":"grayscale(0.8)"})

  });

    $(".c2").click(function(){
    pref[2] = 0;
    $(this).css({opacity:"0"});
    $("#slider-range2").css({"filter":"grayscale(0.8)"})

  });

     $(".d2").click(function(){
    $(this).css({opacity:"0"});
    pref[3] = 0;
    $(".slider4").css({"filter":"grayscale(0.8)"})

  });


  $(".a1").click(function(){
    

  	$(this).addClass("curr");
  	$(".b1").removeClass("curr");
  	$(".c1").removeClass("curr");
  	$(".d1").removeClass("curr");
    $(".slider2").css({"opacity":"0","visibility":"hidden"});
    $(".slider3").css({"opacity":"0","visibility":"hidden"});
    $(".slider4").css({"opacity":"0","visibility":"hidden"});
    $(".slider1").css({"opacity":"1","visibility":"visible"});

    $(".d2").css({"visibility":"hidden"});
    $(".c2").css({"visibility":"hidden"});
    $(".b2").css({"visibility":"hidden"});
    $(".a2").css({"visibility":"visible"});
  });

  $(".b1").click(function(){


  	$(this).addClass("curr");
  	$(".a1").removeClass("curr");
  	$(".c1").removeClass("curr");
  	$(".d1").removeClass("curr");
  	$(".slider1").css({"opacity":"0","visibility":"hidden"});
    $(".slider3").css({"opacity":"0","visibility":"hidden"});
    $(".slider4").css({"opacity":"0","visibility":"hidden"});
    $(".slider2").css({"opacity":"1","visibility":"visible"});

    $(".d2").css({"visibility":"hidden"});
    $(".c2").css({"visibility":"hidden"});
    $(".a2").css({"visibility":"hidden"});
    $(".b2").css({"visibility":"visible"});


    //scroller2();


  });

  $(".c1").click(function(){
    

  	$(this).addClass("curr");
  	$(".b1").removeClass("curr");
  	$(".a1").removeClass("curr");
  	$(".d1").removeClass("curr");
  	$(".slider2").css({"opacity":"0","visibility":"hidden"});
    $(".slider1").css({"opacity":"0","visibility":"hidden"});
    $(".slider4").css({"opacity":"0","visibility":"hidden"});
    $(".slider3").css({"opacity":"1","visibility":"visible"});

    $(".d2").css({"visibility":"hidden"});
    $(".a2").css({"visibility":"hidden"});
    $(".b2").css({"visibility":"hidden"});
    $(".c2").css({"visibility":"visible"});
  });

  $(".d1").click(function(){
    

  	$(this).addClass("curr");
  	$(".b1").removeClass("curr");
  	$(".c1").removeClass("curr");
  	$(".a1").removeClass("curr");
  	$(".slider2").css({"opacity":"0","visibility":"hidden"});
    $(".slider3").css({"opacity":"0","visibility":"hidden"});
    $(".slider1").css({"opacity":"0","visibility":"hidden"});
    $(".slider4").css({"opacity":"1","visibility":"visible"});

    $(".a2").css({"visibility":"hidden"});
    $(".c2").css({"visibility":"hidden"});
    $(".b2").css({"visibility":"hidden"});
    $(".d2").css({"visibility":"visible"});

    //$('link[title="mystyle"]').prop('disabled', true);
  });

  $(".apply").click(function(){
    console.log(popStart);
       drawRegionsMap(tempStart, tempEnd, elevStart, elevEnd, budget,popStart);

  });

    $(".submit").click(function(){
    console.log(popStart);
       // drawRegionsMap(tempStart, tempEnd, elevStart, elevEnd, budget,popStart);

       window.open(encodeURI("cities.html?temp1="+tempStart+"&temp2="+tempEnd+"&e1="+elevStart+"&e2="+elevEnd+"&b1="+budget+"&pop="+popStart),'_blank');


  });


});
