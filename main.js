 class Carousel {
            constructor() {
                this.track = document.querySelector('.carousel-track');
                this.slides = document.querySelectorAll('.carousel-slide');
                this.prevBtn = document.querySelector('.carousel-btn.prev');
                this.nextBtn = document.querySelector('.carousel-btn.next');
                this.dots = document.querySelectorAll('.dot');
                this.currentSlide = 0;
                
                this.init();
            }

            init() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });

                // Автопрокрутка (опционально)
                this.startAutoPlay();
            }

            updateCarousel() {
                this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
                
                // Обновляем активную точку
                this.dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentSlide);
                });
            }

            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                this.updateCarousel();
            }

            prevSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                this.updateCarousel();
            }

            goToSlide(index) {
                this.currentSlide = index;
                this.updateCarousel();
            }

            startAutoPlay() {
                setInterval(() => {
                    this.nextSlide();
                }, 5000); // Смена слайда каждые 5 секунд
            }
        }

        // Инициализация карусели после загрузки DOM
        document.addEventListener('DOMContentLoaded', () => {
            new Carousel();
        });



              // Управление поп-ап формой
        document.addEventListener('DOMContentLoaded', function() {
            const openPopupButton = document.getElementById('openPopup');
            const closePopupButton = document.getElementById('closePopup');
            const popupOverlay = document.getElementById('popupOverlay');
            const consultationForm = document.getElementById('consultationForm');
            
            // Открыть поп-ап
            openPopupButton.addEventListener('click', function() {
                popupOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
            
            // Закрыть поп-ап
            closePopupButton.addEventListener('click', function() {
                popupOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            // Закрыть поп-ап при клике вне формы
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) {
                    popupOverlay.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Обработка отправки формы
            consultationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Здесь можно добавить код для отправки данных формы
                alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                
                // Закрыть поп-ап после отправки
                popupOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Очистить форму
                consultationForm.reset();
            });
        });