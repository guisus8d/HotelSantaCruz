
	document.addEventListener('DOMContentLoaded', function() {
		// Carrusel functionality
		const carruselInner = document.querySelector('.carousel-inner');
		const items = document.querySelectorAll('.carousel-item');
		const prevBtn = document.querySelector('.prev');
		const nextBtn = document.querySelector('.next');
		const indicators = document.querySelectorAll('.indicator');
		
		let currentIndex = 0;
		const totalItems = items.length;
		let intervalId;
		
		// Función para mover el carrusel
		function moveToIndex(index) {
			if (index < 0) {
				index = totalItems - 1;
			} else if (index >= totalItems) {
				index = 0;
			}
			
			// Remover clase active de todos los items
			items.forEach(item => item.classList.remove('active'));
			// Añadir clase active al item actual
			items[index].classList.add('active');
			
			currentIndex = index;
			carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
			
			// Actualizar indicadores
			indicators.forEach((indicator, i) => {
				indicator.classList.toggle('active', i === currentIndex);
			});
		}
		
		// Función para avanzar automáticamente
		function startAutoSlide() {
			intervalId = setInterval(() => {
				moveToIndex(currentIndex + 1);
			}, 5000); // Cambia cada 5 segundos
		}
		
		// Iniciar el movimiento automático
		startAutoSlide();
		
		// Pausar al interactuar
		const carousel = document.querySelector('.carousel');
		carousel.addEventListener('mouseenter', () => {
			clearInterval(intervalId);
		});
		
		// Reanudar al dejar de interactuar
		carousel.addEventListener('mouseleave', startAutoSlide);
		
		// Controles manuales
		nextBtn.addEventListener('click', () => {
			moveToIndex(currentIndex + 1);
			clearInterval(intervalId);
			startAutoSlide();
		});
		
		prevBtn.addEventListener('click', () => {
			moveToIndex(currentIndex - 1);
			clearInterval(intervalId);
			startAutoSlide();
		});
		
		// Indicadores
		indicators.forEach(indicator => {
			indicator.addEventListener('click', () => {
				const slideIndex = parseInt(indicator.getAttribute('data-slide'));
				moveToIndex(slideIndex);
				clearInterval(intervalId);
				startAutoSlide();
			});
		});
		
		// Pausar carrusel cuando la pestaña no está visible
		document.addEventListener('visibilitychange', function() {
			if (document.hidden) {
				clearInterval(intervalId);
			} else {
				startAutoSlide();
			}
		});
	});
