class Slider {
    slides = []
    current = 0
    isHovered = false

    constructor() {
        this.init()
        this.showByNumber(this.current)
    }

    init() {
        this.initSlides()
        this.initNavButtons()
        this.registerAutoScroll()
        this.initLifecycleHooks()
    }

    initSlides = () => {
        this.slides = document.getElementsByClassName('slider-slide')
    }

    initNavButtons = () => {
        const prev = document.getElementsByClassName('slider-button-prev')[0]
        
        prev.addEventListener('click', (e) => {
            this.current = this.getPrevPosition()
            this.showByNumber(this.current)
        })

        const next = document.getElementsByClassName('slider-button-next')[0]
        
        next.addEventListener('click', (e) => {
            this.current = this.getNextPosition()
            this.showByNumber(this.current)
        })
    }

    initLifecycleHooks = () => {
        const main = document.getElementsByClassName('slider')[0]

        main.addEventListener('mouseenter', () => {
            this.isHovered = true
        })

        main.addEventListener('mouseout', () => {
            this.isHovered = false
        })
    }

    registerAutoScroll = () => {
        setInterval(() => {
            console.log(this.isHovered)
            if (this.isHovered === false) {
                this.current = this.getNextPosition()
                this.showByNumber(this.current)
            }
        }, 5000);
    }

    getNextPosition = () => {
        if (this.current === this.slides.length - 1) {
            return 0;
        }

        return this.current + 1
    }

    getPrevPosition = () => {
        if (this.current === 0) {
            return this.slides.length - 1;
        }

        return this.current - 1
    }

    showByNumber = (number) => {
        Array.from(this.slides).forEach((val, num) => {
            if (num === number) {
                this.slides[num].classList.add('slider-slide-visible')
                this.slides[num].classList.remove('slider-slide-hidden')
            } else {
                this.slides[num].classList.remove('slider-slide-visible')
                this.slides[num].classList.add('slider-slide-hidden')
            }
        })
    }
}

const slider = new Slider()