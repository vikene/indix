var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exec = require('child_process').exec;
var Horseman = require('node-horseman');
var horseman = new Horseman();
var fs = require('fs');

var bodyParser = require('body-parser');
var msgG="https://news.ycombinator.com/news?p=3"
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var inject= " ";
fs.readFile('public/inject.js', 'utf8', function (err,data) {
if (err) {
return console.log(err);
}
inject = data;

});

app.get('/getnewiframe',function(req,res){
  console.log(req.query.urll);
  var data ;
  msg=req.query.urll;
  msgG=msg;
  console.log("refesh");
  horseman
    .open(msg)
    .html()
    .then(function(uree){
      var str = String(uree);
      str = str.split("</body>")
    mydata = str[0] + inject;

      fs.writeFile("public/1.html",mydata,function(err,data){
        res.send("done!")
      });


    });

})

app.post('/processData',function(req,res){

  var jobj = req.body.fine;

  var final_json= " ";
  for(var i=0;i<jobj.objects.length;i++)
  {
    if(jobj.objects[i].attribute != "undefined" && jobj.objects[i].attribute != "nothing" )
    {
      var da = String(msgG);
      var horsem = new Horseman();
      console.log(jobj.objects[i].css)
      var name = jobj.objects[i].name
      horsem.open(da)
              .attribute(jobj.objects[i].css,jobj.objects[i].attribute)
              .then(function(data){

                io.emit("appendSummary",name,data)
              })
    }
    else if(jobj.objects[i].attribute != "undefined"){
      var da = String(msgG);
      var horse = new Horseman();
      var name = jobj.objects[i].name;
      horse.open(da)
      .text(jobj.objects[i].css)
      .then(function(data){

        //jobj.objects[i].summary = data
        io.emit("appendSummary",name,data)


      })
    }

  }

  res.send("success");
})

io.on('connection',function(socket)
{
  console.log("Connected !!");
  socket.on('edit text',function(msg){
    var da = String(msgG);

              io.emit("add right pan",msg)


  })

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

        fs.writeFile("public/1.html",mydata,function(err,data){
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
      if(jobj.objects[i].attribute != "undefined" && jobj.objects[i].attribute != "nothing" )
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
      else if(jobj.objects[i].attribute != "undefined"){
        var da = String(msgG);
        var horse = new Horseman();
        var name = jobj.objects[i].name;
        horse.open(da)
        .text(jobj.objects[i].css)
        .then(function(data){
          console.log(JSON.stringify(jobj))
          //jobj.objects[i].summary = data
          io.emit("appendSummary",name,data)

        })
      }
    }

  })
})
http.listen(8000);
