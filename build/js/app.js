$(document).ready(function(){
      $('.admin_service_content_my_referals_resp').on('click', '.user_info_btn', function(event) {
        event.preventDefault();
        var parent = $(this).parents('.referal_user');
        var dropdown = parent.find('.user_dropdown');
        if (parent.hasClass('open')) {
          parent.removeClass('open');
          dropdown.stop().slideUp('300');
        } else{
          parent.addClass('open');
          dropdown.stop().slideDown('300');
        }
      });  
 
      $('.admin_service_content_my_referals_resp').on('click', '.year_button', function(event) {
        event.preventDefault();
        var year = $('.period_choose').find('.year'),
            yearText = year.text(),
            yearNumber = parseInt(yearText),
            count = ($(this).hasClass('year_prev') ? yearNumber-1 : yearNumber+1 );

          year.text(count);
      });
      $('.admin_service_content_my_referals_resp').on('click', '.period_dropdown', function(event) {
        event.preventDefault();
        var parent = $(this).parents('.header_period');
        if (parent.hasClass('open')) {
            parent.removeClass('open');
        } else{
            parent.addClass('open');
        }
      });
      $('.admin_service_messages_content').on('click', '.input_check', function(event) {
        event.preventDefault(); 
        event.stopPropagation();
        if($(this).find('input').is(':checked')){
          $(this).find('input').attr('checked', false);
        }else{
          $(this).find('input').attr('checked', true);
        }
      });
      $('.admin_service_messages_content').on('click', '.open_close,.act_back,.wtite_close', function(event) {
        event.preventDefault();
        var bd = $('.admin_service_messages_content');
          bd.find('.open_block').removeClass('open_block');
          $('#admin_service_messages_all').addClass('open_block');
      });
      $('.admin_service_messages_content').on('click', '.message', function(event) {
        event.preventDefault();
        var bd = $('.admin_service_messages_content');
          bd.find('.open_block').removeClass('open_block');
          $('#admin_service_messages_open').addClass('open_block');
      });
      $('body').on('click', '.toggle_btn', function(event) {
        event.preventDefault();
        var bd = $('.admin_service_messages_content'),
            link = ($(this).attr('data-href') === undefined ? $(this).attr('href') :$(this).attr('data-href'));
            bd.find('.open_block').removeClass('open_block');
            $(''+link).addClass('open_block');
            console.log(link);
      }); 
      // act messages open
      $('body').on('click', '#messages_open', function(event) {
        event.preventDefault();
        var parent = $(this).parents('.act_choose');
          if(parent.hasClass('open')){
              parent.removeClass('open');
          }else{
              parent.addClass('open');
          }
      });
      // make color select services
      $(window).load(function  () {

          var selector = document.getElementById('services_category-colored');
          // add color
          $('#services_category-colored').next().find('.chosen-single').css({"background": "#ff0000"});
          // check value and set color
          $('#services_category-colored').on('change', function() {
            var 
              getValue = selector[selector.selectedIndex].value,
              value = getValue.toLowerCase();

              if ( value === "послуги"){
                 $(this).next().find('.chosen-single').css({"background": "#ff0000"});
              } else if ( value === "товари" ) {
                 $(this).next().find('.chosen-single').css({"background": "#fe8f00"});
              } else if (value === "їжа") {
                 $(this).next().find('.chosen-single').css({"background": "#01a6f3"});
              } else if (value === "туризм") {
                 $(this).next().find('.chosen-single').css({"background": "#0ad900"});
              }
          });
          
      })
        // range  

            // console.log((rating_range - float_snipp.innerWidth()) /100);
             var output = document.querySelectorAll('.number_output')[0],
                float_snipp = $('#float_snipp');
                float_snipp.css({'left':50 + "%"});

          $(document).on('input', 'input[type="range"]', function(e) {

            var 
                rating_range = $('.rating_range').innerWidth(),
                numberValuePercent = (rating_range - float_snipp.innerWidth()) /100,
                numberValue = e.target.value - numberValuePercent , 
                ifStatement  = (e.target.value < 65 ) ? "right":"center" ;
                
                output.innerHTML = e.target.value;

                float_snipp.css({'left': numberValue + "%" , 'textAlign': ifStatement});
          });
        $('input[type="range"]').rangeslider({
            polyfill: false
         });
        // choosen
        $('.choosen_select').chosen({disable_search_threshold: 25});
        // date
      $('#date_calendar_pick').datepicker({
              weekStart: 5,
              clearBtn: false,
              language: "uk",
              multidate: true,
              forceParse: false,
              toggleActive: true
          });
     $('#data_archive').datepicker({
           clearBtn: false,
           language: 'uk',
           forceParse: false,
           todayHighlight:true,
           maxViewMode: 0
       });
     // create title calendar span's
       function createTheadSpan (className,text,cityCompany,className2,year) {
        var $dateArchive = $('#data_archive'),
             $row = $dateArchive.find('.datepicker-days .datepicker-switch'),
             $span = $('.prependSpan');      
            $row.parent().find('.th:eq(0)').append('<span class="'+className+'">'+text+'<b class="city_company">'+ cityCompany+'</b></span>');
            $row.parent().find('.th:eq(1)').append('<span class="'+className2+'">'+year+'</span>');
       }
       createTheadSpan('prependSpan','Назва об'+"'"+'єкту','Місто','appendSpan','2015');
       // end
       // create calendar numbers
       // function createLinksBody (className,number) {
       //   var $dateArchive = $('#data_archive'),
       //       $row = $dateArchive.find('.datepicker-days tbody tr td');
       //       $row.append('<span class="'+className+'">'+number+'</b></span>');
       // }
       // createLinksBody('numberLink',5);
       // end
       // calendar modal
       // $('#data_archive').find('tbody tr td ').on('click',function  () {
       //   $('#modalCalendar').modal('show');
       // })
       // end
    
   // var slides_wrapper = $('.slideshow_slides'),
   //      slide = $('.slideshow_slides_max-width'),
   //      slides_width = slide.width() + 200,
    var counter= 0,
        hoverCompany = $('#reg_info_block_header_company'),
        hoverUser = $('#reg_info_block_header_user'),
        hoverCompanyContent = $('#reg_info_block_header_company_hover'),
        hoverUserContent = $('#reg_info_block_header_user_hover'),
        clickCompany = $('#reg_info_block_header_company_click'),
        clickUser = $('#reg_info_block_header_user_click'),
        reg_info_block = $('.reg_info_block_content'),
        maskedInput = $('.maskedInput'),
        scrollImg= $('.scroll'),
        company_photos_blocks = $('.company_photos_blocks'),
        company_other_suggestions_blocks = $(".company_other_suggestions_blocks");
        // company_photos_blocks_width = company_photos_blocks.width() + 24;

        // console.log(company_photos_blocks_width); 
      function scrollWidth (nameBloks) {
        var blocks_width  =  nameBloks.width() + 24;

         nameBloks.each(function(){
             scrollImg.css({
                 'width': counter+= blocks_width          
          });      
         });
       
      }
      scrollWidth(company_photos_blocks);
      scrollWidth(company_other_suggestions_blocks);
  		
        $('.slide_heart').click(function(event){
             event.preventDefault();
            $(this).find('.heart').toggleClass('active_heart');
        });	
        $('.like').click(function(event){
             event.preventDefault();
            $(this).find('.heart').toggleClass('active_heart');
        });  
        $('.star').click(function(event){
			 event.preventDefault();
			$(this).find('.star').toggleClass('active_star');
		});
      
       $('#admin_nav_click_slide').on('click',function(event){
             event.preventDefault();
             $('#slide_menu').slideToggle( "slow");
       });
       $('.dropdown_admin').first().css({'display':'block'}).addClass('active_dropdown');
       $('.dropdown_li_admin').click(function  (event) {
           event.preventDefault();
           var dropdown = $('.admin_nav_li').find('.dropdown_admin');
           if ($(this).next().hasClass('active_dropdown')) {
               $(this).next().slideUp('slow').removeClass('active_dropdown');
           } else{
                dropdown.slideUp('slow').removeClass('active_dropdown');
                $(this).next().slideDown('slow').addClass('active_dropdown');
           };
       });


       if (window.innerWidth <= 767) {
             // click
             clickCompany.on('click', function(event) {
              event.preventDefault();
                // hidden user blocks
                hoverUserContent.css({
                'display': 'none'              
                });
                 hoverCompany.css({
                    'marginTop' : 0
                });  
                 // check display values
                 if(hoverCompanyContent.css('display') == 'none') {
                     hoverCompanyContent.css({
                    'display': 'block',               
                    'position' : "relative",
                    "top" : 1,
                    "textAlign": "center",
                    'marginLeft': 10,
                    'marginRight' : 10
                    });
                 } else if (hoverCompanyContent.css('display') == 'block'){
                     hoverCompanyContent.css({
                    'display': 'none'              
                    });
                    hoverCompany.css({
                    'marginTop' : 0
                     });  
                 }
                
            });
           clickUser.on('click', function(event) {
                event.preventDefault();
                // hidden and margin company blocks
 
                hoverCompany.css({
                        'marginTop' :  40
                    });  
                  hoverCompanyContent.css({
                'display': 'none'            
                 });  
                // check display values
                if (hoverUserContent.css('display') == 'none') {
                 hoverUserContent.css({
                'display': 'block',    
                'position' : "relative",
                "textAlign": "center",
                'marginLeft': 10,
                'marginRight' : 10,
                'top' : 15
                });
                } else if (hoverUserContent.css('display') == 'block'){
                     hoverUserContent.css({                    
                    'display': 'none'             
                    });  
                     hoverCompany.css({
                    'marginTop' : 0
                    });  
                 //  
                                   
                 }
                    
            });

/*            //  add drag scrollin on mobiles
               $('.company_photos').niceScroll({           
                touchbehavior :true, // add this func
                cursorcolor:"#777777",
                cursorborder : 'none',
                cursorwidth: '10px',
                autohidemode : false,
                railpadding: ({top:0,right:5,left:5,bottom:-10}),
                background : "#afaeae"
                });  
                 //  add drag scrollin on mobiles
               $('.company_other_suggestions').niceScroll({           
                touchbehavior :true, // add this func
                cursorcolor:"#777777",
                cursorborder : 'none',
                cursorwidth: '10px',
                autohidemode : false,
                railpadding: ({top:0,right:5,left:5,bottom:-10}),
                background : "#afaeae"
                }); */

          fNiceScroll($('.company_photos'),true);
          fNiceScroll( $('.company_other_suggestions'),true); 

        }

        if (window.innerWidth >= 768) {
             // hover effect for company block on registration page
        hoverCompany.mouseenter(function(){
            reg_info_block.css({
                'display': 'none'
            });
            hoverCompanyContent.css({
                'display': 'block'
            });
        }).mouseleave(function(){
            reg_info_block.css({
                'display': 'block'
            });
            hoverCompanyContent.css({
                'display': 'none'
            });
        });

            // hover effect for user block on registration page
        hoverUser.mouseenter(function(){
            reg_info_block.css({
                'display': 'none'
            });
            hoverUserContent.css({
                'display': 'block'
            });
        }).mouseleave(function(){
            reg_info_block.css({
                'display': 'block'
            });
            hoverUserContent.css({
                'display': 'none'
            });
        });
        // main_content top margin
          function contentMarginTop () {
            $('.main_content').css({"marginTop": $('.header').innerHeight()+20 });
          }
          contentMarginTop();        
        fNiceScroll($('.company_photos'),false);
        fNiceScroll( $('.company_other_suggestions'),false); 

        }     

        
        // add mask for input
        maskedInput.mask('999-99-99'); 
        function fNiceScroll  (nameBlok,touchbehavior) {
          
              nameBlok.niceScroll({
                  touchbehavior: touchbehavior,
                  cursorcolor:"#777777",
                  cursorborder : 'none',
                  cursorwidth: '10px',
                  autohidemode : false,
                  railpadding: ({top:0,right:5,left:5,bottom:-20}),
                  background : "#afaeae"
          });   
          
        }

        // open navigation
        $('.menu-link').click(function  (event) {
            event.preventDefault();

            if ($('.navigation').hasClass('open')) {
               $('.navigation').removeClass('open').addClass('hide');
              $(this).removeClass('active');
            }else{
              $(this).addClass('active');
              $('.navigation').removeClass('hide').addClass('open');                
            };
            if (window.innerWidth >= 768) {
              contentMarginTop();
            }
        })
        // click rating stars
         $('.rating_star').click(function  (e) {
           if($(this).hasClass("active")) {
             $(this).nextAll().removeClass('active');
           }else{
              $(this).addClass('active');
              $(this).prevAll().addClass('active');

           };
         })
});