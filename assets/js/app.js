function navLink() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('burger-active');
        burger.classList.toggle('togg');
    });
} 

navLink();


// let scrollpos = window.scrollY

// const nav = document.querySelector("#navLinks")
// const navBody = document.querySelector(".nav-body")
// const scrollChange = 1

// const add_on_scroll = () => navBody.classList.add("remove-on-scroll")
// const add_class_on_scroll = () => nav.classList.add("scroll-down-nav")
// const remove_on_scroll = () => navBody.classList.remove("remove-on-scroll")
// const remove_class_on_scroll = () => nav.classList.remove("scroll-down-nav")

// window.addEventListener('scroll', function() { 
// scrollpos = window.scrollY;

// if (scrollpos >= scrollChange) { 
//     add_class_on_scroll()
//     remove_on_scroll()
// }
// else { 
//     remove_class_on_scroll()
//     add_on_scroll()
// }
// })