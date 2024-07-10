
// slider1
// dom
document.addEventListener('DOMContentLoaded',()=>{
    console.log('dom fully parseefd');
    const slider=document.querySelector('.slider')
const sliderContent=document.querySelectorAll('.slider-content')
const leftArrow=document.getElementById('left')
const rightArrow=document.getElementById('right')
let slideNum=1
let length=sliderContent.length
console.log(length);

// when left arrow clicked , .slider-content move towards right
leftArrow.addEventListener('click',()=>{
    length>1 ? prevSlide() : lastSlide()

console.log(slideNum);
    console.log(slideNum>1);
console.log('hai left');
if(leftArrow){
        console.log('hai left');        
    }
else {
    console.log('error');
}
})
rightArrow.addEventListener('click',()=>{
    slideNum<length? nxtSlide() : firstSlide()
  console.log(slideNum<length);
    if(rightArrow){
        console.log('hai right');        
    }
else {
    console.log('error');
}
})
// when right arrow clicked , .slider-content move towards left
function nxtSlide(){
    console.log('length is in nxtslide',length);
    slider.style.transform=`translateX(-${slideNum*1400}px)`
    slideNum++
    // slider.style.overflow=`scroll`
} 


// when right arrow clicked on last slide , it moves towards first slide 
function firstSlide(){
slideNum=1
slider.style.transform=`translateX(0px)`
}

function prevSlide(){
    console.log('prevSlide');
    console.log(slideNum>1);
// go to previous slide
slider.style.transform=`translateX(-${(slideNum-2)*1400}px)`
slideNum--
}

function lastSlide(){
    console.log('lastslide');
    // when left arrow clicked on first slide , it moves towards last slide 
    slider.style.transform=`translateX(-${(length-1)*1400}px)`

}
})

// dom
document.addEventListener('DOMContentLoaded',()=>{
    console.log('dom fully parseefd');
    const slider=document.querySelector('.slider')
const sliderContent=document.querySelectorAll('.slider-content')
const leftArrow=document.getElementById('left')
const rightArrow=document.getElementById('right')
let slideNum=1
let length=sliderContent.length
let width=100%
console.log(length);

// when left arrow clicked , .slider-content move towards right
leftArrow.addEventListener('click',()=>{
    length>1 ? prevSlide() : lastSlide()

console.log(slideNum);
    console.log(slideNum>1);
    // e.preventDefault()
console.log('hai left');
if(leftArrow){
        console.log('hai left');        
    }
else {
    console.log('error');
}
})
rightArrow.addEventListener('click',()=>{
    slideNum<length? nxtSlide() : firstSlide()
  console.log(slideNum<length);
    if(rightArrow){
        console.log('hai right');        
    }
else {
    console.log('error');
}
})
// when right arrow clicked , .slider-content move towards left
function nxtSlide(){
    console.log('length is in nxtslide',length);
    slider.style.transform=`translateX(-${slideNum*1300}px)`
    slideNum++
    // slider.style.overflow=`scroll`
} 


// when right arrow clicked on last slide , it moves towards first slide 
function firstSlide(){
slideNum=1
slider.style.transform=`translateX(0px)`
}

function prevSlide(){
    console.log('prevSlide');
    console.log(slideNum>1);
// go to previous slide
slider.style.transform=`translateX(-${(slideNum-2)*1300}px)`
slideNum--
}

function lastSlide(){
    console.log('lastslide');
    // when left arrow clicked on first slide , it moves towards last slide 
    slider.style.transform=`translateX(-${(length-1)*1300}px)`

}
})
// testimonial

document.addEventListener('DOMContentLoaded',()=>{
    // dom
    const leftArrow=document.getElementById('left-arrow')
    const rightArrow=document.getElementById('right-arrow')
    const testimonialContainer=document.querySelectorAll('.testimonial-container')
    const testimonialFrame=document.querySelector('.testimonial-frame')
    let testimonialLength=testimonialContainer.length
    let testimonialNum=1
    
    
    
    // when the botth arrow button clicked slider will move to nxt slide , if it is possible
    function nxtTestimonial(){
    console.log('This is nxtTestimonial');
    testimonialFrame.style.transform=`translateX(-${testimonialNum*744}px)`
    testimonialNum++
    }
    
    
    // when the right arrow (image will move towards left) button clicked on lastslider , it will move to first slide 
    function firstTestimonial(){
    console.log('This is firstTestimonial');
    
        testimonialNum=1
        testimonialFrame.style.transform=`translateX(0px)`
        // testimonialFrame.style.transition=`transform 2s ease`
    
    }
    
    
    //  when the left arrow (image will move towards right) button clicked on firstslider , it will move to last slide
    function lastTestimonial(){
    console.log('This is lastTestimonial');
    testimonialNum=testimonialLength-1
    testimonialFrame.style.transform=`translateX(-${(testimonialNum)*744}px)`
    // testimonialFrame.style.transition=`transform 2s ease`
    }
    
    //  when the botth arrow button clicked slider will move to previous slide , if it is possible
    function prevTestimonial(){
    console.log('This is prevTestimonial');
    // testimonialFrame.style.transition=`transform 2s ease`
        testimonialFrame.style.transform=`translateX(-${(testimonialNum-1)*744}px)`
        testimonialNum--
    }
    
    
    // event happen for button clicked
    
    
    rightArrow.addEventListener('click',()=>{
    // when the right arrow  button clicked , image will move towards left
        testimonialNum < testimonialLength ? nxtTestimonial() : firstTestimonial()
    })
    
     leftArrow.addEventListener('click',()=>{
         console.log('testimonial length is',testimonialLength);//7
        console.log('testimonial num is',testimonialNum);
        // testimonialFrame.style.transition=`transform 2s ease`
    
      // when the left arrow  button clicked , image will move towards right 
        // testimonialLength > 1 ? prevTestimonial() : lastTestimonial()
       testimonialNum <= 0 ?   lastTestimonial() : prevTestimonial()
    
    
     })
    
    
    })




// reveal
document.addEventListener('scroll',reveal)

function reveal(){
    var reveals=document.querySelectorAll('.reveal')
    for(var i = 0; i < reveals.length; i++){
        // reveals.length = 4
   
       var windowheight = window.innerHeight; ///This line gets the height of the browser window in pixels and stores it in the windowHeight variable.
       console.log('ht of window',windowheight);//467
       var revealtop = reveals[i].getBoundingClientRect().top; //This line gets the distance from the top of the viewport to the top of the current element
                                                                 // (reveals[i]) and stores it in the revealTop variable.
       var revealpoint = 260;
    // var revealpoint=100
   
       if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
       }
       else{
         reveals[i].classList.remove('active');
       }
     }
}
// 