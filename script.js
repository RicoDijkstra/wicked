jQuery(document).ready(function(){

    $(document).ready(function(){
        $("#card1").click(function(){
          $("#card2, #card3").toggleClass("opacity");
          $("#go").toggleClass("display");
        });
      });

      $(document).ready(function(){
        $("#card2").click(function(){
          $("#card1, #card3").toggleClass("opacity");
          $("#go").toggleClass("display");
        });
      });

      $(document).ready(function(){
        $("#card3").click(function(){
          $("#card1, #card2").toggleClass("opacity");
          $("#go").toggleClass("display");
        });
      });

    });