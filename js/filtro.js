$(function(){
	$('.filter').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		let valor = $(this).attr('data-nombre');
		if (valor == 'todos'){
			$('.cont-temas').show('1000');
		}else{
			$('.cont-temas').not('.'+ valor).hide('1000');
			$('.cont-temas').filter('.'+ valor).show('1000');

		}
	});

	let equipo = $('#equipo').offset().top,
		objetivos = $('#objetivos').offset().top,
		temas = $('#temas').offset().top,
		contacto = $('#contacto').offset().top;

	window.addEventListener('resize', function(){
		let equipo = $('#equipo').offset().top,
			objetivos = $('#objetivos').offset().top,
			temas = $('#temas').offset().top,
			contacto = $('#contacto').offset().top;
	});

	$('#enlace-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},600);
	});

	$('#enlace-equipo').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: equipo -100
		},600);
	});

	$('#enlace-objetivos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: objetivos -100
		},600);
	});

	$('#enlace-temas').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: temas -80
		},600);
	});

	$('#enlace-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -45
		},600);
	});
});

