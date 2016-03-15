$(document).ready(function(){

  $("#numberField").attr("max",citations.length-1);
  
  var listOptions='';
  for(var i=0; i < citations.length; i++)
  {
    listOptions += "<option value='"+i+"'>"+citations[i]["auteur"]+"</option>";
  }
  $("#authorField").html(listOptions);
  //console.log(listOptions);
  
  $("#authorField").on("change",function(){
     var nombre=$(this).val();
      addCitation(nombre);
  });
  
  
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
  
  
  $("#nom p").on("blur", function(){
    localStorage.setItem("nom",$(this).html());
  });
  
  var nom= localStorage.getItem("nom");
  console.log(nom);
  if(nom != null)
  {
    $("#nom p").html(nom);
  }
  
  $("#nom span").on("click",function(){
    localStorage.removeItem("nom");
    $("#nom p").html("Votre nom");
  });
  
  $("#menu button").on('click', function(){
  
    $(this).toggleClass('is-active');
    $("#menuContent").toggleClass("open");
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});