window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const height = window.innerHeight;

    const bg1 = document.querySelector(".bg1");
    const bg2 = document.querySelector(".bg2");
    const bg3 = document.querySelector(".bg3");
    const bg4 = document.querySelector(".bg4");
    if (scrollY < height) {
        bg1.style.opacity = "1";
        bg2.style.opacity = "0";
        bg3.style.opacity = "0";
        bg4.style.opacity = "0";
    } else if (scrollY >= height && scrollY < height * 2) {
        bg1.style.opacity = "0";
        bg2.style.opacity = "1";
        bg3.style.opacity = "0";
        bg4.style.opacity = "0";
    } else if(scrollY >= height * 2 && scrollY < height * 3){
        bg1.style.opacity = "0";
        bg2.style.opacity = "0";
        bg3.style.opacity = "1";
        bg4.style.opacity = "0";
    }
    else{
        bg1.style.opacity = "0";
        bg2.style.opacity = "0";
        bg3.style.opacity = "0";
        bg4.style.opacity = "1";
    }

    // Debug (optional): Log scroll position
    // console.log("scrollY:", scrollY);
});
