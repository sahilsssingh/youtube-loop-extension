const vid = document.querySelector("video");
if (vid != null){
    const A = 10;
    const B = 20;
    let N = 5;
    
    const id = setInterval(() => {
        if (vid.currentTime >= B){
            N--
            if (N > 0){
                vid.currentTime = A
            }
            else{
                clearInterval(id)
            }
        }
    } ,50)
}