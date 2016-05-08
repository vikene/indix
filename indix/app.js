var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exec = require('child_process').exec;
var Horseman = require('node-horseman');
var horseman = new Horseman();
var fs = require('fs');
var msgG="https://www.reddit.com"
app.use(express.static('public'));

io.on('connection',function(socket)
{
  console.log("Connected !!");
  socket.on('edit text',function(msg){
    var da = String(msgG);
    
              io.emit("add right pan",msg,data)


  })
  var inject= " ";
  fs.readFile('public\\inject.js', 'utf8', function (err,data) {
if (err) {
return console.log(err);
}
inject = data;
console.log(inject)
});
  socket.on("newWebpage",function (msg) {
    var data ;
    msgG=msg;
    console.log("refesh");
    horseman
      .open(msg)
      .html()
      .then(function(uree){
        var str = String(uree);
        str = str.split("</body>")
      mydata = str[0] + inject;

        fs.writeFile("public\\1.html",mydata,function(err,data){
          io.emit('reloadiframe',"reload");
        });


      });




  })

  socket.on("output_please",function(jsondatat)
  {
    var jobj = JSON.parse(jsondatat);
    console.log(jobj.objects[0].css);
    for(var i=0;i<jobj.objects.length;i++)
    {
      if(jobj.objects[i].attribute != "undefined")
      {
        var da = String(msgG);
        var horsem = new Horseman();
        console.log(jobj.objects[i].css)
        var name = jobj.objects[i].name
        horsem.open(da)
                .attribute(jobj.objects[i].css,jobj.objects[i].attribute)
                .then(function(data){
                  console.log(data)
                  io.emit("appendSummary",name,data)
                })
      }
      else{
        var da = String(msgG);
        var horse = new Horseman();
        horse.open(da)
        .text(jobj.objects[i].css)
        .then(function(data){
          console.log(JSON.stringify(jobj))
          //jobj.objects[i].summary = data
          io.emit("appendSummary",jobj.objects[i].name,data)

        })
      }
    }
    console.log(JSON.stringify(jobj))
  })
})
http.listen(8000);
