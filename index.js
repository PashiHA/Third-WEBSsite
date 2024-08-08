let currentIndex = 0;
const points = document.querySelectorAll('.point-img');

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const numberPhoto = document.querySelector('.number-photo1')
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    
    const offset = -currentIndex * 33.3;
    slides.style.transform = `translateX(${offset}%)`;
    numberPhoto.innerHTML = `0${currentIndex+1}`
    points[currentIndex].classList.add('point-img-active')
}

function nextSlide() {
    points[currentIndex].classList.remove('point-img-active')
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 3000); // Меняет слайды каждые 3 секунды

// Начальный показ первого слайда
showSlide(currentIndex);

const footerStandart = document.querySelector('.footer-standart');
const footerSubmit = document.querySelector('.footer-submit');

function submitRequest(){
    footerStandart.classList.toggle('footer-submit')
    footerStandart.classList.toggle('footer-standart')
    footerSubmit.classList.toggle('footer-standart')
    footerSubmit.classList.toggle('footer-submit')
}

document.querySelector('.custom-checkbox').addEventListener('click', function() {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change')); // Обновить состояние, чтобы применились стили
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nameTrue = false;
    let telTrue = false;
    let checkboxTrue = false;
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('error-name');
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error-input');
        nameError.classList.remove('clear');
        nameError.classList.add('error');
    } else {
        nameInput.classList.remove('error-input');
        nameError.classList.remove('error');
        nameError.classList.add('clear');
        nameTrue = true;
    }

    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('error-tel');
    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('error-input');
        phoneError.classList.remove('clear');
        phoneError.classList.add('error');
    } else {
        phoneInput.classList.remove('error-input');
        phoneError.classList.remove('error');
        phoneError.classList.add('clear');
        telTrue = true;
    }
    var checkboxInput = document.getElementById('checkbox');
    var checkboxError = document.getElementById('error-checkbox');
    if (!checkboxInput.checked) {
        checkboxError.classList.remove('clear');
        checkboxError.classList.add('error');
    } else {
        checkboxError.classList.remove('error');
        checkboxError.classList.add('clear');
        checkboxTrue = true;
    }

    if(nameTrue & telTrue & checkboxTrue){
        submitRequest()
    } else {
        nameTrue = false;
        telTrue = false;
        checkboxTrue = false;
    }

});

//Animation

document.addEventListener('DOMContentLoaded', function () {
    var mainTextElements = document.querySelectorAll('.main-text-animated');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    mainTextElements.forEach(function(element) {
        observer.observe(element);
    });
});

//Scroll

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu-smooth-scroll div');
    const scrollBtns = document.querySelectorAll('.smooth-scroll')
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            closeMenuToggle();
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    scrollBtns.forEach((item)=> {
        item.addEventListener('click',()=>{
            const footer = document.getElementById('footer')
            window.scrollTo({
                top: footer.offsetTop,
                behavior: 'smooth'
            })
        })
    })
});

//Menu toggle
    const header = document.getElementById('header')
    const menuToggle = document.querySelector('.menu-toggle-close')
function openMenuToggle(){
    header.classList.remove('header');
    header.classList.add('header-menu-toggle')
    menuToggle.classList.remove('menu-toggle-close')
    menuToggle.classList.add('menu-toggle-open')
}
function closeMenuToggle(){
    header.classList.remove('header-menu-toggle');
    header.classList.add('header')
    menuToggle.classList.add('menu-toggle-close')
    menuToggle.classList.remove('menu-toggle-open')
}