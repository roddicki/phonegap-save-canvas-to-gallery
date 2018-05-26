document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');
    document.getElementById('ready').innerHTML = "DEVICE READY";

    //create invisible canvas
    var canvasElem = document.createElement('canvas');
    canvasElem.id = 'myCanvas';
    //comment out the line below to make the canvas and image visible
    canvasElem.setAttribute('style','display:none');
    document.querySelector('.app').appendChild(canvasElem);

    //fetch remote image
    var myImage = new Image();
    myImage.src = "http://www.roddickinson.net/pages/img/airloom/2.6.jpg";

    //wait for image to load
    myImage.onload = function() {
        //draw on canvas
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext("2d");
        console.log("image height=" +myImage.height+ " canvas height=" +canvas.height);
        canvas.width = myImage.width;
        canvas.height = myImage.height;
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    }

    document.getElementById('save').addEventListener('click', saveCanvas);
    
    

});


//===
//SAVE IMAGE FROM CANVAS
//save using cordova-save-image-gallery plugin
function saveCanvas(){
  var canvas = document.getElementById('myCanvas');
  var dataURL = canvas.toDataURL("image/jpg");
  var base64String = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  var params = {data: base64String, prefix: 'fearFilter_', format: 'JPG', quality: 80, mediaScanner: true};
  window.imageSaver.saveBase64Image(params,
        function (filePath) {
          alert('File saved at ' + filePath);
        },
        function (msg) {
          console.error(msg);
          alert(msg);
        }
    );
}