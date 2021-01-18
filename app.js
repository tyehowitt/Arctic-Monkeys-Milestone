const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    });
    //Animate links
    navLinks.forEach(link=>{
    link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7 + 2}s`;
    console.log(index)
    });
}

navSlide();