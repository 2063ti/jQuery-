$(document).ready(function(){

    $('#fname,#class').focus(function(){
        $(this).css('background-color','lime');
    });

    
    $('#fname,#class').blur(function(){
        $(this).css('background-color','pink');
    });

    
    $('#country').change(function(){
       // $(this).css('background-color','blue');
       var a=$(this).val();
       $('#test').html(a);
    });

    
    $('#fname,#class').select(function(){
        $(this).css('background-color','yellow');
    });

    
   // $('#fi').submit(function(){
     //  alert('form submitted');
    //});

   // $("li:even").css("border","2px solid green");
   // $("li:eq(3)").css("border","2px solid green");
    $("li:gt(1)").css("border","2px solid green");
   //$("li:lt(2)").css("border","2px solid blue");
    
    $("#t1").click(function(){
        var obj={sub1 :"JS",ssub2 :"c",ssub3 :"c++",ssub4 :"c#"};
    $("p").text("the object is :" + obj.sub1);
    });

});