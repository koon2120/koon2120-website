document.onreadystatechange = async () => {
  if (document.readyState === 'complete') {
    document.getElementById("loading_screen").style.transition = "0.5s"
    document.getElementById("loading_screen").style.backgroundColor = "rgba(0, 0, 255, 0)"
    document.getElementById("loading_screen_text").style.color = "rgba(0, 0, 255, 0)"
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById("loading_screen").style.display = "none"
    document.getElementById("loading_screen_text").style.display = "none"
    document.getElementById("welcome_1").style.animationName = "welcome"
    document.getElementById("welcome_1").style.animationDuration = "2s"
    document.getElementById("welcome_1").style.color = "white"
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById("welcome_2").style.animationName = "welcome"
    document.getElementById("welcome_2").style.animationDuration = "2s"
    document.getElementById("welcome_2").style.color = "white"
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById("welcome_3").style.animationName = "welcome"
    document.getElementById("welcome_3").style.animationDuration = "2s"
    document.getElementById("welcome_3").style.color = "white"
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById("welcome_4").style.animationName = "welcome"
    document.getElementById("welcome_4").style.animationDuration = "2s"
    document.getElementById("welcome_4").style.color = "white"
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById("welcome_5").style.animationName = "welcome"
    document.getElementById("welcome_5").style.animationDuration = "2s"
    document.getElementById("welcome_5").style.color = "white"
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById("welcome_6").style.animationName = "welcome_buttom"
    document.getElementById("welcome_6").style.animationDuration = "2s"
    document.getElementById("welcome_6").style.color = "black"
    document.getElementById("welcome_6").style.backgroundColor = "white"
  }
};