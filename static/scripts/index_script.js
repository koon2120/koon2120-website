const img_bg=document.getElementById("img_bg");let list_img_bg=[];for(i=0;i<16;i++){let m=i+1;img_bg.innerHTML+=`<img class="img_bg img_bg_${m}" id="img_bg_${m}" src="/static/images/bg/${m}.png">`,list_img_bg[i]=`img_bg_${m}`}let anim_t=0,anim_s=0,anim_n=0;setInterval((()=>{17==anim_n&&(anim_n=1),anim_t.toFixed(3)>=1?anim_s=1:anim_t.toFixed(3)<=0&&(anim_s=0,anim_n+=1),0==anim_s?(anim_t+=.01,document.getElementById(`img_bg_${anim_n}`).style.opacity=anim_t.toFixed(3)):1==anim_s&&(anim_t-=.005,document.getElementById(`img_bg_${anim_n}`).style.opacity=anim_t.toFixed(3))}),20);