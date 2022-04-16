
const menubtn = document.getElementById('menu-image');
const navb = document.getElementById('menu-option');
const exitbtn = document.getElementById('exitbtn');

if(window.innerWidth <= 575){
menubtn.addEventListener('click', () => {
  // navb.classList.toggle('active');
  //  menubtn.style.display = "none";
navb.style.display = "block";
  
});
exitbtn.addEventListener('click', () => {
    //navb.classList.toggle('active');
navb.style.display = "none";
});

document.body.addEventListener('pointermove' ,()=>{
  
  if(window.innerWidth > 575){
    
   navb.style.display = "block";
   
    //navb.classList.toggle('active');
  }else{
   navb.style.display = "none";
  }



});


}else if(window.innerWidth > 575){
    navb.style.display = "block";
  
}


window.onresize =()=>{
  if(window.innerWidth > 575){
    navb.style.display = "block";
  }else{
    navb.style.display = "none";
  }
 
}






//IMAGE PATH //

// var path = [
//     // put image path here/
//     // ["iamge Path" , "Image descriptions"]

//     ["assets/project2.png", "Log in System in java Ui - Java/mysql"],
//     ["assets/project1.png", "Log in form Using Php with database"],
//     ["assets/project3.png", "Enrolling and Attendance Management System - Java/mysql"],
//     ["assets/project4.png", "Mini Rc Car / with Arduino board - designed by me"],

// ];


// for (let i = 0; i < path.length; i++) {
//     var swiper_swrapper = document.getElementById("swiper-wrapper");
//     //   var swiper_slide = document.getElementById("swiper_slide");


//     var swipers = document.createElement("div");
//     swipers.classList = "swiper-slide";
//     swipers.id = "swiper-slide";


//     var anchor = document.createElement("a");
//     anchor.href = path[i][0];

//     swipers.appendChild(anchor);

//     var caption = document.createElement("p");
//     var text = document.createTextNode(path[i][1]);
//     caption.appendChild(text)
//     anchor.appendChild(caption);



//     var image = document.createElement("img");
//     image.src = path[i][0];
//     anchor.appendChild(image);


//     swiper_swrapper.appendChild(swipers);


// }







// GALLERY SWIPER ////////

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

function send() {
    alert("sent");

}
