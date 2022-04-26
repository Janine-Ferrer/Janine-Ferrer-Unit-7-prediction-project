
$("button").click(function() {
    let intro = $(".name").val();
    let favStore = $(".numberOne").val();
    let week = $(".numberTwo").val();
    let favItem = $(".numberThree").val();
    let answer= (2033-2022) * week;
    
 $(".fortune-display").append("<p>" + intro + " you will have bought "  + answer + " clothes by 2033"+ "</p>");
   
  console.log(intro + favStore  + answer + favItem );


});