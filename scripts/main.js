$(document).ready(function(){

  $("#numberField").attr("max",citations.length-1);
  
  $('#cookie_form').on("submit",function(e){
    e.preventDefault();
    var nombre=$("#numberField").val();
    addCitation(nombre);
  });
  
  $("#numberField").on("blur",function(){
    var nombre=$(this).val();
    addCitation(nombre);
    
  });
  
  
  $("#fortune_button").on('click', function(event){
  
    event.preventDefault();
  
    var nombre= getTirage(citations.length);
    addCitation(nombre);
   
  });
  
  
  function getTirage(limit)
  {
    return Math.floor(Math.random()*limit);
  }
  
  function addCitation(nombre)
  {
    $("#fortune_cookie").empty();
    $("#fortune_cookie").append("<p>"+citations[nombre]["citation"]+"</p>");
    $("#fortune_cookie").append("<span>"+citations[nombre]["auteur"]+"</span>");
  }
  
  
  
  
  
  
  
  
  
});