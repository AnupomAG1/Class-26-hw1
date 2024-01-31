// $(function(){

//    let details = $(".details");
   
   




// details.click(function(){
//     $(this).hide()
// })


// let Box = $(".box");


// let HideBTN = $(".Hide");
// HideBTN.click(function(){

//     Box.fadeOut(2000)
    
// })

// let ShowBTN = $(".Show");
// ShowBTN.click(function(){

//     Box.slideDown()
    
// })

// let ToggleBTN = $(".Toggle");
// ToggleBTN.click(function(){

//     Box.toggle(2000)
// })


// })



// // })
// // $(document).ready()
// // document.querySelector(".details");




// FAQ Starts

$(function(){

    // FAQ Starts //

    let faq = $('#FaqWrapper .faq')

    faq.click(function () {

         if($(this).hasClass('active')){
            $(this).removeClass("active");
         } else{

             faq.removeClass('active')
             $(this).addClass('active')
         }


    });

    // FAQ   end//
    


    // preLoader  //


    // let preloader = $('.preloader')
    // $(window).on('load',function(){
    //     preloader.hide(200)
    // })

    // preLoader end  //


})

