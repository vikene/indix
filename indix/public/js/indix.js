var socket = io();
$("#search").keypress(function(event) {
    if (event.which == 13) {
      socket.emit("newWebpage",$("#search").val());

    }
});
socket.on('reloadiframe',function(message){
  var iframe = document.getElementById("myiframe");
  iframe.src = iframe.src;
  $("#summaryy").val("")
})
var counter=0;
 $("#addbutton").click(function(event){


 $(".objectadd").append("  <div id='div"+counter+"'class='row'>   <ul class='collection'> <li><div class='row'> <div class='input-field col s12'> <input id='css"+counter+"' type='text' class='validate'> <label for='css'>css</label></div><div class='input-field col s12'><select id='sel"+counter+"'><option>nothing</option><option>href</option><option>src</option></select><label>Attrib</label></div><div class='input-field col s12'><input id='name"+counter+"' type='text' class='validate'><label for='name'>Name</label></div><br><br><br><a onclick='removeme("+counter+")'  class='waves-effect waves-light btn'>remove</a></div></li></ul></div>");
 counter++;
 console.log("added")
  $('select').material_select();

 })

 function removeme(data){
   $("#div"+data).remove()

 }

 socket.on('add right pan', function(css){
   console.log("da")
   $(".objectadd").append("  <div id='div"+counter+"'class='row'>   <ul class='collection'> <li><div class='row'> <div class='input-field col s12'> css <input id='css"+counter+"' type='text' value='"+css+"' class='validate'> </div><div class='input-field col s12'><select id='sel"+counter+"'><option>nothing</option><option>href</option><option>src</option></select><label>Attrib</label></div><div class='input-field col s12'><input id='name"+counter+"' type='text' class='validate'><label for='name'>Name</label></div><br><br><br><a onclick='removeme("+counter+")'  class='waves-effect waves-light btn'>remove</a></div></li></ul></div>");
   $('select').material_select();
  counter++;
 })



 socket.on("appendSummary",function(msg,msg1){

     document.getElementById("summaryy").value= document.getElementById("summaryy").value + "\n"+"{ name:"+msg+", summary:"+msg1+"}";
     console.log(msg1);
 })
