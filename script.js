const tl = gsap.timeline();
tl.fromTo('.box', {
  width: '100%',
    duration: 3,
    ease: 'power2.Out'
},{
    width: '5%',
    duration: 3,
    ease: 'power2.Out'
})
 tl.fromTo('.box2', {
   width:"0%",
    duration: 3,
    ease: 'power2.Out'
},
{
    width:"100%",
    duration: 3,
    ease: 'power2.Out'
},2
)
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');
logo.textContent = '';

letters.forEach(letter => {
    logo.innerHTML += `<span class="letter">${letter}</span>`
});
gsap.set(".letter", 
    {
    display: "inline-block"
});

gsap.from(".letter", {
    opacity: 0,
    x: 30,
    duration: 1,
    stagger: 0.2,
    ease: 'power1.Out'  
},"=-1")
tl.from('.cart', {
    opacity: 0,
    x: 30,
    duration: 1,
    ease: 'power1.Out'
},"=-1")
tl.from (".text", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: 'power1.Out'
})
tl.from(".hero-img", {
    opacity: 0,
    duration: 3,
    ease: 'power1.Out'
},"=-1")

const colors = document.querySelectorAll('.color');
function colorChange() {
    colors.forEach(color => {
        color.addEventListener('click', (e) => {
          
           
            if(color.value == 'black') {
                        document.querySelector('.phn-img').src="img/blackPhn2png.png"
                       document.querySelector('.color-value').innerHTML=color.value;
                       gsap.fromTo(".box2", 
                        {clipPath: "inset(0 100% 0 0)"},
                        {clipPath: "inset(0 0 0 0)",background: "#000"});
                        gsap.fromTo(".box", 
                            {clipPath: "inset(0 100% 0 0)"},
                            {clipPath: "inset(0 0 0 0)",background: "#000"});
                      
                   
                   }
                   if(color.value == 'burgandy') {
                    document.querySelector('.phn-img').src="img/greenPhn.png"
                    document.querySelector('.color-value').innerHTML=color.value;
                    gsap.fromTo(".box2", 
                        {clipPath: "inset(0 100% 0 0)"},
                        {clipPath: "inset(0 0 0 0)",background: "#66454C"});
                        gsap.fromTo(".box", 
                            {clipPath: "inset(0 100% 0 0)"},
                            {clipPath: "inset(0 0 0 0)",background: "#66454C"});
                   }
                   
                   if(color.value == 'green') {
                    document.querySelector('.phn-img').src="img/greenPhn.png"
                    document.querySelector('.color-value').innerHTML=color.value;
                    gsap.fromTo(".box2", 
                        {clipPath: "inset(0 100% 0 0)"},
                        {clipPath: "inset(0 0 0 0)",background: "#485F5B"});
                        gsap.fromTo(".box", 
                            {clipPath: "inset(0 100% 0 0)"},
                            {clipPath: "inset(0 0 0 0)",background: "#485F5B"});
                   }
                   document.querySelector('.hero-content h2').style.color="white"
                   document.querySelector(".hero-content p").style.color="white"
                   document.querySelector('.logo').style.color="white"
                   gsap.fromTo(".btn",{
                    opacity: 0,
                    duration: 1
                   },{
                    opacity: 1,
                    color: "#000",
                    background: "#fff",
                    duration: 1.5,
                    delay: 1
                   })
                 gsap.fromTo(".phn-img",{
                    opacity: 0,
                 },{
                    opacity: 1,
                    duration: 1,
                    delay: 1
                 })
         } )
    })
}
colorChange();








