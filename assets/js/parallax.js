
const mountainLeft = document.querySelector('#mountain_left');
const mountainRight = document.querySelector('#mountain_right');
const cloud1 = document.querySelector('#clouds_1');
const cloud2 = document.querySelector('#clouds_2');
const text = document.querySelector('#text');
const man = document.querySelector('#man');

window.addEventListener('scroll',()=>{
    let value = scrollY;
    mountainLeft.style.left = `-${value/0.7}px`
    cloud2.style.left = `-${value*2}px`
    mountainRight.style.left = `${value/0.7}px`
    cloud1.style.left = `${value*2}px`
    text.style.bottom = `-${value}px`;
    man.style.height = `${window.innerHeight - value}px`
})

class Example {
    constructor(options) {
        this.root = options.root;

        this.init();

        setTimeout(this.showImages.bind(this), 1000);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.root,
            direction: 'horizontal',
            smooth: true,
            lerp: 0.05,
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
        });

        this.images = this.root.querySelectorAll('.image');

        [].forEach.call(this.images, (image) => {
            image.addEventListener('click', () => {
                image.classList.add('-clicked');
                this.hideImages();
            });
        });
    }

    showImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-clicked');
            image.classList.add('-active');
        });
    }

    hideImages() {
        [].forEach.call(this.images, (image) => {
            image.classList.remove('-active');
        });

        setTimeout(this.showImages.bind(this), 2000);
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    const example = new Example({
        root: document.querySelector('.scroll-animations-example')
    });
});

// start
var items = document.querySelectorAll(".list__item")

items.forEach(item => {
var itemTitle = item.querySelector(".list__item__title")
var itemTitleOutline = item.querySelector(".list__item__titleOutline")
var itemImg = item.querySelector(".list__item img")

var itemTL = gsap.timeline({scrollTrigger: {
trigger: item,
start: "0% 75%",
end: "25% 50%",
scrub: 3,
}})

itemTL.fromTo(itemTitle, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
itemTL.fromTo(itemTitleOutline, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)

gsap.fromTo(itemImg, {x: "60vw", y : "60vh", rotate: -30}, {x: "-60vw", y: "-60vh", rotate: 30, ease: "none", scrollTrigger: {
trigger: item,
start: "50% 100%",
end: "100% 50%",
scrub: 3,
}})
})