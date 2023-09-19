const img_bg = document.getElementById("img_bg")
let list_img_bg = []
for (i = 0; i < 16; i++) {
    let img_bg_number = i + 1
    img_bg.innerHTML += `<img class="img_bg img_bg_${img_bg_number}" id="img_bg_${img_bg_number}" src="/static/images/bg/${img_bg_number}.png">`
    list_img_bg[i] = `img_bg_${img_bg_number}`
}

let anim_t = 0
let anim_s = 0
let anim_n = 0
setInterval(() => {
    if (anim_n == 17) {
        anim_n = 1
    }
    if (anim_t.toFixed(3) >= 1.000) {
        anim_s = 1
    } else if (anim_t.toFixed(3) <= 0.000) {
        anim_s = 0
        anim_n += 1
    }
    if (anim_s == 0) {
        anim_t += 0.01
        document.getElementById(`img_bg_${anim_n}`).style.opacity = anim_t.toFixed(3)
    } else if (anim_s == 1) {
        anim_t -= 0.005
        document.getElementById(`img_bg_${anim_n}`).style.opacity = anim_t.toFixed(3)
    }
}, 20)
