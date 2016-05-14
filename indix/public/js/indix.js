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

   $(".objectadd").append("  <div id='div"+counter+"'class='row'>   <ul class='collection'> <li><div class='row'> <div class='input-field col s12'> css <input id='css"+counter+"' type='text' value='"+css+"' class='validate'> </div><div class='input-field col s12'><select id='sel"+counter+"'><option>nothing</option><option>href</option><option>src</option></select><label>Attrib</label></div><div class='input-field col s12'><input id='name"+counter+"' type='text' class='validate'><label for='name'>Name</label></div><br><br><br><a onclick='removeme("+counter+")'  class='waves-effect waves-light btn'>remove</a></div></li></ul></div>");
   $('select').material_select();
  counter++;
 })

 $("#process").click(function(event){
   var mylist = []
   var final_json='{"objects":[';
   console.log(counter)
   for(var i=0;i<counter;i++)
   {
     var o1 = $("#css"+i).val();
     console.log(o1)
     var q1= $("#name"+i).val();
     var att = $("#sel"+i).val();
     if(o1 == null){continue;}
     final_json= final_json + "{";
     final_json = final_json + '"css": "'+o1+'",';
     final_json = final_json + '"attribute": "'+att+'",';
       final_json = final_json + '"summary": "sample",';
     final_json = final_json + '"name": "'+q1+'"';
     if(i+1 != counter)
     {
       final_json = final_json + "},";
     }
     else{
       final_json = final_json + "}";
     }

   }
   final_json= final_json + "]}";
   final_json = String(final_json);
   final_json = final_json.replace(",]}","]}");

   console.log(final_json)
   socket.emit("output_please",final_json);
 })

 socket.on("appendSummary",function(msg,msg1){

     document.getElementById("summaryy").value= document.getElementById("summaryy").value + "\n"+"{ name:"+msg+", summary:"+msg1+"}";
     console.log(msg1);
 })
