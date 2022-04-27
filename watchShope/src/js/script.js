const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav:false
  });

 
jQuery(document).ready(function($){
    $('.prev').on('click',function(){
      slider.goTo('prev')
    });
    $('.next').on('click',function(){
      slider.goTo('next')
    });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click',function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal
    $('[data-modal=consultation]').on('click',function(){
      $('.overlay,#consultation').fadeIn('');
    });
    $('.modal__close').on('click',function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    })

    // $('.button__mini').on('click',function(){
    //   $('.overlay,#order').fadeIn('slow');
    // });

    $('.button__mini').each(function(i){
      $(this).on('click',function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay,#order').fadeIn('slow');
      })
    });

    //  $('#consultation_form').validate();
    //  $('#consultation form').validate({
    //    rules:{
    //       name:{
    //         required: true,
    //         minlength: 2
    //       },
    //       phone:'required',
    //       email:{
    //         required:true,
    //         email:true,
    //        }
    //       },
    //       messages: {
    //         name: {
    //           required:  "Խնդրում եմ գրեք ձեր անունը",
    //           minlength: jQuery.validator.format("գրեք {0} սիմվոլներ!")
    //         },
    //         phone:'Խնդրում եմ գրեք ձեր հեռախոսահամարը',
    //         email: {
    //           required: "Խնդրում եմ գրեք ձեր մայլ հասցեն",
    //           email: "ձեր հասցեն ճիշտ չէ"
    //         }
    //       }
    //  });
    //  $('#order form').validate();

     function valideForms(form){
      $(form).validate({
        rules:{
           name:{
             required: true,
             minlength: 2
           },
           phone:'required',
           email:{
             required:true,
             email:true,
            }
           },
           messages: {
             name: {
               required:  "Խնդրում եմ գրեք ձեր անունը",
               minlength: jQuery.validator.format("գրեք {0} սիմվոլներ!")
             },
             phone:'Խնդրում եմ գրեք ձեր հեռախոսահամարը',
             email: {
               required: "Խնդրում եմ գրեք ձեր մայլ հասցեն",
               email: "ձեր հասցեն ճիշտ չէ"
             }
           }
      });
     };

     valideForms('#consultation form');
     valideForms('#consultation_form');
     valideForms('#order form');

     $('input[name=phone]').mask('+(999) 999-99-99');

    });