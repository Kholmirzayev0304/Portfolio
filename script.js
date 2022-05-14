window.addEventListener('load' ,function(){
    this.window.addEventListener('scroll',function(){
        let header = this.document.querySelector('header')
        header.classList.toggle('stiky', window.scrollY > 0)
    })

    const menuBtn = this.document.querySelector('.menu-btn');
    const navigation = this.document.querySelector('.navigation');
    const navigationItems = this.document.querySelectorAll('.navigation a');
   

    menuBtn.addEventListener('click' , () => {
       menuBtn.classList.toggle('active')
       navigation.classList.toggle('active')
    })

    navigationItems.forEach(navItem => {
       navItem.addEventListener('click', ( ) =>{
        menuBtn.classList.remove('active')
        navigation.classList.remove('active')
       })
    })

    const scroolBtn = document.querySelector('.scroolToTop-btn')

   this.window.addEventListener('scroll',() => {
        scroolBtn.classList.toggle('active', this.window.scrollY > 500)
    })

    scroolBtn.addEventListener('click' , ( ) => {
       this.document.body.scrollTop = 0;
       this.document.documentElement.scrollTop = 0;
    })

    this.window.addEventListener('scroll', () =>{
        let reveals = this.document.querySelectorAll('.reveal')

        for(let i = 0; i < reveals.length; i++){
              let windowHight = this.window.innerHeight;
              let revealsTop = reveals[i].getBoundingClientRect().top;
              let revealsPoint = 50;

              if(revealsTop < windowHight - revealsPoint){
                  reveals[i].classList.add('active')
              }
        }
    })
    
}) 