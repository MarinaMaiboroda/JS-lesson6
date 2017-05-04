$(document).ready(function(){

});

// $(function(){

// })

$('#add_new').click(function(){
	$('form').show(100);
});

$('form button').click(function(e){
	e.preventDefault();
	var new_item = $('form input').val();
	if ($(this).prev().hasClass('edit-elem')){
		if (new_item != ''){
			$('ul').find('.editing').find('label').text(new_item);
			$('ul').find('.editing').removeClass('editing');
			$('form').hide(500);
			$('form input').removeClass('edit-elem').val('');
		}
	}else{
		if (new_item != ''){
			$('ul').append('<li><input type="checkbox"><label>'+ new_item +'</label> <button class="edit-btn">Edit</button> <button class="del-btn">Delete</button></li>');
			$('form').find('p').remove();
			$('form').hide(500);
			$('form input').val('');
		}else{
			$('form').append('<p>Введите данные</p>');
		}
	}			
});

$('ul').delegate('.del-btn', 'click',function(){
	$(this).parents('li').remove();
});

$('ul').on('click', '.edit-btn', function(){
	var lbl = $(this).prev().text();
	$('ul li').removeClass('editing');
	$(this).parent().addClass('editing');
	$('form input').addClass('edit-elem');
	$('form input').val(lbl);
	$('form').show(100);
});



// $('ul').on('click', 'a, li, ul', function(){

// })


$('.menu > li > a').click(function(e){
	var item = $(this).parent();
	if(item.has('ul')){
		e.preventDefault();
		if (item.hasClass(open)){
			item.removeClass('open');
			item.find('ul').hide();
		}else{
			$('.menu > li').removeClass('open');
			item.addClass('open');
			$('.menu > li ul').hide(); 
			item.find('ul').show();
			//$('a').css('color', 'red');
			//$('a').css({'color': 'red', 'background': 'green'});
		}		
	}
});

$(window).resize(function(){
		console.log($(window).width())
});

$(window).scroll(function(){
		console.log($('ul').offset().top);
		console.log($('ul').offset().left);
});