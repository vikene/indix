<script src="/lib/css-selector-generator.js">
</script>
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>
<script>
 var socket = io();
my_selector_generator = new CssSelectorGenerator;
console.log("hey");
$('body').on('click',function(e){
  e.preventDefault();
  // get reference to the element user clicked on
  var element = event.target;
  // get unique CSS selector for that element
  var selector = my_selector_generator.getSelector(element);
  // do whatever you need to do with that selector
  console.log('selector', selector);
  socket.emit("edit text",selector);
  document.querySelector(selector).style.backgroundColor = "red";

})
document.body.addEventListener('click', function (event) {
  // get reference to the element user clicked on
  //var element = event.target;
  // get unique CSS selector for that element
  //var selector = my_selector_generator.getSelector(element);
  // do whatever you need to do with that selector
  //console.log('selector', selector);
  //socket.emit("edit text",selector);
  //document.querySelector(".example").style.backgroundColor = "red";
});
</script>
</body></html>
