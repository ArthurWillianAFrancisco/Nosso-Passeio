const video = document.querySelector('video');
const btnChangeCamera =document.querySelector('#btnChangeCamera')
 
let useFrontCamera = true;
 

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error => {
    console.log(error);
});

document.querySelector('#tirarFoto').addEventListener('click', () => {
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0)
    var link = document.createElement(nome);
    link.download = 'fotp.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Clique para baixar a imagem'
    document.body.appendChild(link);
    nome++;
});


// switch camera
btnChangeCamera.addEventListener("click", function () {
    useFrontCamera = !useFrontCamera;

    initializeCamera();
});
// stop video stream
function stopVideoStream() {
    if (videoStream) {
        videoStream.getTracks().forEach((track) => {
        track.stop();
        });
    }
    }

// initialize
async function initializeCamera() {
stopVideoStream();
constraints.video.facingMode = useFrontCamera ? "user" : "environment";

    try {
        videoStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = videoStream;
    } catch (err) {
        alert("Could not access the camera");
    }
}

initializeCamera();