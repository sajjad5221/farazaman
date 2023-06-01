let scrollBox = document.querySelector('.scroll-box') ;
window.addEventListener('scroll' , () => {
    let scrollY = window.scrollY ;
    let clientScroll = document.body.clientHeight ;
    let innerScroll = window.innerHeight ;
    let finalScroll = scrollY / (clientScroll - innerScroll) ;
    let finalScrollPercent = Math.floor(finalScroll * 100)

    scrollBox.style.width = finalScrollPercent + '%'
    console.log(scrollY , clientScroll , innerScroll);
})