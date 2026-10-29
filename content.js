const vid = document.querySelector("video");
if (vid != null){
    const A = 10;
    const B = 20;
    
    const id = setInterval(() => {
        if (vid.currentTime >= B){
            clearInterval(id)
            vid.currentTime = A
        }
    } ,50)
}