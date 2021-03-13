
	/*index.js*/

	$(function(){
		AOS.init(
		);
	});

	$(document).ready(function(){ 
		$('.btn-toggle').click(function(){ 
			var state = $('#gnb').css('display'); 
			if(state == 'none'){  
				$('#gnb').show(); 
			}
		});
	});

    $(document).ready(function(){ 
			$('.btn-close').click(function(){ 
					$('#gnb').hide(); 
				})
      });

	  $(function(){
		let dutation = 0;
	
		//all
		$('#btn-all').on('click', function(){
			$('.list li').show(500);
		})
	
		//design
		$('#btn-design').on('click', function(){
			$('.list li').hide(dutation).filter('.design').show(500);
		})
	
		//homepage
		$('#btn-homepage').on('click', function(){
			$('.list li').hide(dutation).filter('.homepage').show(500);
		})
	
	})

	$(function(){
        $('.container, .container_1').each(function(i){
            var skill = $(this).find('.skills');
            var percent = skill.text(); 

            skill.delay(i*500).animate({'width':percent});
        });
    });
