var page = require('webpage').create();
var fs = require('fs');
var system = require('system');
var args = system.args;


console.log("am running");


page.open(args[1], function () {
    page.evaluate(function(){

    });

    //page.render('export.png');
 var str = page.content;
    var final = str.split("</body>");
console.log("am running");
var inject = fs.read('inject.js')
//console.log(inject)
   var data = final[0] + inject
   fs.write('1.html', data, 'w');

    phantom.exit();
});
