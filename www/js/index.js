document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');
    document.getElementById('ready').innerHTML = "DEVICE READY";

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(40, 40, 150, 100);
    ctx.fillStyle = "green";
    ctx.fill();

    document.getElementById('save').addEventListener('click', saveCanvas);
    
    

});


//===
//SAVE IMAGE FROM CANVAS
//save using cordova-save-image-gallery plugin
function saveImage(){
  var canvas = document.getElementById('myCanvas');
  var dataURL = canvas.toDataURL("image/jpg");
  var base64String = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  var params = {data: base64String, prefix: 'fearFilter_', format: 'JPG', quality: 80, mediaScanner: true};
  window.imageSaver.saveBase64Image(params,
        function (filePath) {
          console.log('File saved on ' + filePath);
          //result.innerHTML = '- Photo saved';
        },
        function (msg) {
          console.error(msg);
          result.innerHTML = msg;
        }
    );
}