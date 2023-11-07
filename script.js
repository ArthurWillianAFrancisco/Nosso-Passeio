const video = document.querySelector('video');
 

video.getTracks().forEach((track) => {
    track.stop()
})

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error => {
    console.log(error);
});
const constraints = {
    video: {
        width: {
            min: 1280,
            max: 1920,
        },
        height: {
            min: 720,
            max: 1080
        },
        facingMode: {
            exact: 'environment'
        }
    },
};

document.querySelector('button').addEventListener('click', () => {
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