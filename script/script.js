$(document).ready(function() {
	
		/**************************/
		$('main').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
			interactive: false
		});
       /***************************/
	
	// Automatic drops
	setInterval(function() {
		var $el = $('main');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 10;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
    
    $('[data-fancybox="gallery"]').fancybox({
	loop :true ,
        buttons : [
            "zoom",
            "share",
            "close",
            "thumbs"
        ]
        
   });
    /****************Header*****************/
   $('.slideWiz').slideWiz(
        {
            auto: true,
            speed: 5000,
            type : 'box3D',
            file : [
                {
                    src: {
                        main: "images/bg_1.jpg",
                        cover: "images/bg_1.jpg"
                    },
                    title: '<span class="mb-4 display-3" style="font-size:5vw;font-weight:bold;color: floralwhite">Fuel Your <br>Body Fitness</span><br><span class="subheading">Be One Of Us</span> ',
                    desc: ' ',
                    button: {
                        text: 'Regesiter',
                        url: '',
                        class: 'btn',
                        color: 'floralwhite'
                    }
                },
                {
                    src: {
                        main: "images/bg_2.jpg",
                        cover: "images/bg_2.jpg"
                    },
                    title: '<span class="mb-4 display-3" style="font-size:5vw;font-weight:bold;color: floralwhite">Challenge <br>Yourself</span><br><span class="subheading">Get Your Body Fit</span>',
                    desc: '',
                    button: {
                        text: 'Regesiter',
                        url: '',
                        class: 'btn',
                        color: 'floralwhite'
                    }
                }
                ]
        }
    );
    /*************End Header ***********************/
    $('.carousel').carousel();
    $("#Class1").mouseenter(function(){
        (this).css("opacity","0.5");
    });
    /*********Datepicker *****************/
    $(".appointment_date").datepicker({
        format:'mm/dd/yyy',
        autoclose:true
    });
    /**********Time Picker****************/
    $(".appointment_time").timepicker({
        timeFormat: 'h:mm',
        interval: 60,
        minTime: '10 am',
        maxTime: '6:00pm',
        dropdown: true,
        scrollbar: true
    });
    /****************Start Code of 3D Hover Img ********************/
    $(".project").hover3d({
        selector: ".project__card",
        shine: true,
    });
    $(".project").hover3d({
        // selector for element
        selector      : null,

        // Perspective value for 3d space
        perspective   : 500,

        // Mouse movement sensitivity
        sensitivity   : 20,

        // Default behavior is the element will follow the mouse, look like it facing the mouse
        invert        : false,

        // Add shining layer
        shine       : false,

        // Helper class when mouse hover in the element
        hoverInClass  : "hover-in",

        // Helper class when mouse hover Out the element
        hoverOutClass : "hover-out",

        // Helper class when the mouse is hovering the element
        hoverClass    : "hover-3d"
    });
    /**********End Code 3D hover************/
    
    /***********Sub Menu ******************/
    
    $("#schdule").click(function(){
        $(".Trainer").hide(function(){
           $("#tableSchedule").show();      
        })
       
    });
    $("#trainerbtn").click(function(){
         $("#tableSchedule").hide(function(){
           $(".Trainer").show();      
        })
    });
    $("#btntrainer1").click(function(){
        $("#trainer1").hide(function(){
            $("#trainer2").show();
        });
    });
    $("#btntrainer2").click(function(){
        $("#trainer2").hide(function(){
            $("#trainer1").show();
        })
    });
    /***************************************/
    
    /**************progress ***************/
    
    $(function(){
        $('.circlechart').circlechart();
    });
});


 $(() => {
            $.seamlessRolling({liHeight: 60});

            $.seamlessRolling({
                el: '.testList',
                speed: 12,
                direction: 1
            });
        });
