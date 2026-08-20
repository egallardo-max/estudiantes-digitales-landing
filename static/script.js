
// PROMO BANNER FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
    const promoBanner = document.querySelector('.promo-banner');
    const closeBannerBtn = document.getElementById('closeBanner');

    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            promoBanner.classList.add('hidden');
            localStorage.setItem('promoBannerClosed', 'true');
            fbq('track', 'ViewContent', {
                content_name: 'Promo Banner Closed',
                content_type: 'engagement'
            });
        });
    }

    // Check if banner was previously closed
    if (localStorage.getItem('promoBannerClosed') === 'true') {
        promoBanner.classList.add('hidden');
    }

    // Track banner impression
    fbq('track', 'ViewContent', {
        content_name: 'Promo Banner Shown',
        content_type: 'engagement',
        content_data: {
            promo: 'Agosto 20% OFF'
        }
    });
});

// META PIXEL TRACKING EVENTS
document.addEventListener('DOMContentLoaded', () => {
    // Track course card views
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        const courseName = card.querySelector('h3').textContent;
        card.addEventListener('mouseenter', () => {
            fbq('track', 'ViewContent', {
                content_name: courseName,
                content_type: 'course',
                content_ids: ['course_' + (index + 1)]
            });
        });
    });

    // Track course clicks (Ver detalles)
    const courseLinks = document.querySelectorAll('.course-content a');
    courseLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            const courseName = link.closest('.course-card').querySelector('h3').textContent;
            fbq('track', 'AddToCart', {
                content_name: courseName,
                content_type: 'course',
                value: 1,
                currency: 'ARS'
            });
        });
    });

    // Track section views with Intersection Observer
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionTitle = entry.target.querySelector('.section-title');
                if (sectionTitle) {
                    fbq('track', 'ViewContent', {
                        content_name: 'Section: ' + sectionTitle.textContent,
                        content_type: 'section'
                    });
                }
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    // Track testimonial carousel interactions
    const carouselDots = document.querySelectorAll('.carousel-dot');
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            fbq('track', 'ViewContent', {
                content_name: 'Testimonial: ' + (index + 1),
                content_type: 'testimonial'
            });
        });
    });
});

// HERO TYPEWRITER EFFECT
window.addEventListener('load', () => {
    const typewriterElements = document.querySelectorAll('.typewriter-text');
    typewriterElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        let index = 0;

        const typeChar = () => {
            if (index < text.length) {
                el.textContent += text[index];
                index++;
                setTimeout(typeChar, 60);
            }
        };

        typeChar();
    });
});

// COUNTER ANIMATION FOR FLIP CARDS
const counterNumbers = document.querySelectorAll('[data-target]');
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    counterNumbers.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 50));
        const step = 75;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                current = target;
            }

            if (counter.getAttribute('data-target') === '98') {
                counter.textContent = current + '%';
            } else if (counter.getAttribute('data-target') === '37') {
                counter.textContent = current + 'k+';
            } else if (counter.getAttribute('data-target') === '4000') {
                counter.textContent = (current / 1000).toFixed(1) + 'k+';
            } else {
                counter.textContent = current + '+';
            }

            if (current < target) {
                setTimeout(updateCounter, step);
            }
        };

        updateCounter();
    });
};

// INTERSECTION OBSERVER para animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('records-grid')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

const recordsGrid = document.querySelector('.records-grid');
if (recordsGrid) {
    observer.observe(recordsGrid);
}


// CAROUSEL HORIZONTAL MANAGEMENT
const carousel = document.getElementById('testimonials-carousel');
const counter = document.getElementById('carousel-counter');
let currentSlide = 0;

function scrollCarousel(direction) {
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const slideWidth = slides[0].offsetWidth + 24; // width + gap

    currentSlide = Math.max(0, Math.min(currentSlide + direction, slides.length - 1));
    carousel.scrollLeft = currentSlide * slideWidth;

    updateCounter();
}

function updateCounter() {
    if (counter) {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        counter.textContent = (currentSlide + 1) + ' / ' + slides.length;
    }
}

// Mobile: Update active card on scroll
function updateActiveCard() {
    if (window.innerWidth <= 768 && carousel) {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        const containerCenter = carousel.clientWidth / 2 + carousel.scrollLeft;

        slides.forEach(slide => slide.classList.remove('active'));

        slides.forEach(slide => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            if (Math.abs(slideCenter - containerCenter) < 100) {
                slide.classList.add('active');
            }
        });
    }
}

if (carousel) {
    carousel.addEventListener('scroll', updateActiveCard);
    carousel.addEventListener('scroll', () => {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        const slideWidth = slides[0].offsetWidth + 24;
        currentSlide = Math.round(carousel.scrollLeft / slideWidth);
        updateCounter();
    });
}

// Track testimonial views
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-slide');
    testimonialCards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const author = card.querySelector('.testimonial-author').textContent;
                    fbq('track', 'ViewContent', {
                        content_name: 'Testimonial: ' + author,
                        content_type: 'testimonial'
                    });
                }
            });
        }, { threshold: 0.7 });

        observer.observe(card);
    });

    updateActiveCard();
});

// BESTSELLERS CAROUSEL
function scrollBestsellers(direction) {
    const grid = document.getElementById('bestsellers-grid');
    if (!grid) return;

    const cards = grid.querySelectorAll('.bestseller-card');
    const cardWidth = cards[0].offsetWidth + 24; // width + gap

    grid.scrollBy({
        left: direction * cardWidth * 2,
        behavior: 'smooth'
    });
}

// PROFESORES SECTION ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    // Track section view
    fbq('track', 'ViewContent', {
        content_name: 'Profesores Section',
        content_type: 'section'
    });

    // VOTA POR EL PRÓXIMO EFIP
    const voteButtons = document.querySelectorAll('.vote-btn-efip');
    const efipVotes = {
        escribania: 0,
        mediacion: 0,
        compliance: 0
    };

    // Cargar votos desde localStorage
    function loadEfipVotes() {
        const savedVotes = localStorage.getItem('efipVotes');
        if (savedVotes) {
            Object.assign(efipVotes, JSON.parse(savedVotes));
        }
    }

    // Manejar voto
    voteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const efip = btn.getAttribute('data-efip');
            efipVotes[efip]++;
            localStorage.setItem('efipVotes', JSON.stringify(efipVotes));

            // Animación de voto
            btn.textContent = '✓ ¡Votado!';
            btn.style.background = '#c2e2cc';
            btn.style.color = '#2b7f85';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Votar';
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 2000);

            // Track Meta Pixel
            fbq('track', 'ViewContent', {
                content_name: 'Vote Next EFIP: ' + efip,
                content_type: 'engagement'
            });
        });
    });

    loadEfipVotes();
});

// EXIT INTENT MODAL - MULTIPLE TRIGGERS
const exitIntentModal = document.getElementById('exitIntentModal');
const closeExitModal = document.getElementById('closeExitModal');
const skipExitModal = document.getElementById('skipExitModal');
let exitIntentShown = false;
let scrollTriggered = false;
let timeTriggered = false;
let idleTriggered = false;
let mouseExitTriggered = false;

function showExitIntentModal() {
    if (!exitIntentShown) {
        exitIntentModal.classList.add('show');
        exitIntentShown = true;
        fbq('track', 'ViewContent', {
            content_name: 'Exit Intent Modal Shown',
            content_type: 'modal'
        });
    }
}

// Close modal handlers
closeExitModal.addEventListener('click', () => {
    exitIntentModal.classList.remove('show');
});

skipExitModal.addEventListener('click', () => {
    exitIntentModal.classList.remove('show');
});

exitIntentModal.addEventListener('click', (e) => {
    if (e.target === exitIntentModal || e.target.classList.contains('exit-intent-overlay')) {
        exitIntentModal.classList.remove('show');
    }
});

// TRIGGER 1: Time-based (20 seconds)
setTimeout(() => {
    if (!exitIntentShown) {
        timeTriggered = true;
        showExitIntentModal();
    }
}, 20000);

// TRIGGER 2: Scroll-based (60%)
window.addEventListener('scroll', () => {
    if (!scrollTriggered && !exitIntentShown) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 80) {
            scrollTriggered = true;
            showExitIntentModal();
        }
    }
});

// TRIGGER 3: Mouse exit (only desktop, when mouse leaves top)
document.addEventListener('mouseleave', (e) => {
    if (!mouseExitTriggered && !exitIntentShown && e.clientY <= 0) {
        mouseExitTriggered = true;
        showExitIntentModal();
    }
});

// TRIGGER 4: Inactivity (30 seconds without interaction)
let inactivityTimer;
let lastActivity = Date.now();

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    lastActivity = Date.now();

    inactivityTimer = setTimeout(() => {
        if (!idleTriggered && !exitIntentShown) {
            const inactiveTime = Date.now() - lastActivity;
            if (inactiveTime >= 30000) {
                idleTriggered = true;
                showExitIntentModal();
            }
        }
    }, 30000);
}

document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);

resetInactivityTimer();

// FLOATING HELP BUTTON - Now direct WhatsApp link (no JS needed)

// EXPERTS MODAL
const expertsModal = document.getElementById('expertsModal');
const openExpertsBtn = document.getElementById('openExpertsModal');
const closeExpertsBtn = document.getElementById('closeExpertsModal');

if (openExpertsBtn) {
    openExpertsBtn.addEventListener('click', () => {
        expertsModal.classList.add('show');
        fbq('track', 'ViewContent', {
            content_name: 'Expertos Modal Opened',
            content_type: 'modal'
        });
    });
}

if (closeExpertsBtn) {
    closeExpertsBtn.addEventListener('click', () => {
        expertsModal.classList.remove('show');
    });
}

if (expertsModal) {
    expertsModal.addEventListener('click', (e) => {
        if (e.target === expertsModal || e.target.classList.contains('experts-modal-overlay')) {
            expertsModal.classList.remove('show');
        }
    });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// TESTIMONIAL MODAL FUNCTIONALITY
const testimonialModal = document.getElementById('testimonialModal');
const openTestimonialBtn = document.getElementById('openTestimonialModal');
const closeTestimonialBtn = document.getElementById('closeTestimonialModal');
const testimonialForm = document.getElementById('testimonialForm');
const starRating = document.getElementById('starRating');
const ratingInput = document.getElementById('rating');
const stars = starRating.querySelectorAll('.star');

// Open modal
openTestimonialBtn.addEventListener('click', () => {
    testimonialModal.classList.add('show');
    fbq('track', 'ViewContent', {
        content_name: 'Testimonial Form Opened',
        content_type: 'engagement'
    });
});

// Close modal
closeTestimonialBtn.addEventListener('click', () => {
    testimonialModal.classList.remove('show');
});

testimonialModal.addEventListener('click', (e) => {
    if (e.target === testimonialModal || e.target.classList.contains('testimonial-modal-overlay')) {
        testimonialModal.classList.remove('show');
    }
});

// Star rating functionality
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.dataset.value;
        ratingInput.value = value;

        stars.forEach(s => {
            if (s.dataset.value <= value) {
                s.classList.add('active');
                s.textContent = '⭐';
                s.style.color = '#ffc107';
            } else {
                s.classList.remove('active');
                s.textContent = '☆';
                s.style.color = '#ddd';
            }
        });

        fbq('track', 'AddToCart', {
            content_name: 'Testimonial Rating: ' + value + ' stars',
            content_type: 'engagement',
            value: value
        });
    });

    star.addEventListener('mouseenter', () => {
        const value = star.dataset.value;
        stars.forEach(s => {
            if (s.dataset.value <= value) {
                s.textContent = '⭐';
                s.style.color = '#ffc107';
            } else {
                s.textContent = '☆';
                s.style.color = '#ddd';
            }
        });
    });
});

starRating.addEventListener('mouseleave', () => {
    stars.forEach(s => {
        if (s.classList.contains('active')) {
            s.textContent = '⭐';
            s.style.color = '#ffc107';
        } else {
            s.textContent = '☆';
            s.style.color = '#ddd';
        }
    });
});

// Form submission
testimonialForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const rating = document.getElementById('rating').value;
    if (!rating) {
        alert('Por favor, selecciona una calificación');
        return;
    }

    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const testimonio = document.getElementById('testimonio').value;
    const email = document.getElementById('email').value;

    // Prepare the data as JSON
    const payload = {
        rating: rating,
        name: name,
        course: course,
        message: `Rating: ${rating} estrellas\n\nNombre: ${name}\nCurso: ${course}\n\nTestimonio:\n${testimonio}`,
        email: email
    };

    // Send via Formspree
    try {
        const response = await fetch('https://formspree.io/f/mkjwgobp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('¡Gracias por tu testimonio! Recibirás tu código de descuento por email pronto.');
            testimonialForm.reset();
            ratingInput.value = 0;
            stars.forEach(s => s.classList.remove('active'));
            testimonialModal.classList.remove('show');

            fbq('track', 'Purchase', {
                content_name: 'Testimonial Submitted',
                content_type: 'engagement',
                value: 1,
                currency: 'ARS'
            });
        } else {
            alert('Hubo un error. Intenta de nuevo.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar. Intenta de nuevo.');
    }
});

// ========================================
// SISTEMA DE NOTIFICACIONES DE COMPRA
// Diferente del EXIT-INTENT popup
// ========================================

console.log('🚀 Purchase Notifications System iniciando...');

const PURCHASE_DATA = {
    nombres: ['Andrea Cabutti', 'Ale Mijoc', 'Cristian Álvarez', 'Eve Silberstein', 'María Fernanda', 'Eugenio Gallardo'],
    cursos: ['EFIP 1 Derecho', 'EFIP 2 Derecho', 'EFIP 1 Contabilidad', 'EFIP 1 Administración', 'Seminario Final'],
    ciudades: ['Córdoba', 'Buenos Aires', 'Mendoza', 'Rosario', 'La Plata', 'San Juan', 'Tucumán', 'Santiago del Estero']
};

let purchaseNotificationCount = 0;
let purchaseNotificationStarted = false;
let purchaseNotificationInterval = null;

function getRandomPurchaseItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showPurchaseNotification() {
    if (purchaseNotificationCount >= 4) {
        console.log('🛑 Max 4 notifications reached');
        return;
    }

    purchaseNotificationCount++;
    const nombre = getRandomPurchaseItem(PURCHASE_DATA.nombres);
    const curso = getRandomPurchaseItem(PURCHASE_DATA.cursos);
    const ciudad = getRandomPurchaseItem(PURCHASE_DATA.ciudades);

    console.log(`📢 Notification #${purchaseNotificationCount}: ${nombre} - ${curso} (${ciudad})`);

    const div = document.createElement('div');
    div.className = 'purchase-notification';
    div.innerHTML = `
        <button class="purchase-notification-close">✕</button>
        <div class="purchase-notification-icon">🎉</div>
        <div class="purchase-notification-name">${nombre}</div>
        <div class="purchase-notification-action">acaba de comprar</div>
        <div class="purchase-notification-course">Curso: ${curso}</div>
        <div class="purchase-notification-location">Desde: ${ciudad}</div>
    `;

    document.body.appendChild(div);

    div.querySelector('.purchase-notification-close').addEventListener('click', () => {
        div.classList.add('hide');
        setTimeout(() => div.remove(), 400);
    });

    setTimeout(() => {
        if (div.parentNode) {
            div.classList.add('hide');
            setTimeout(() => { if (div.parentNode) div.remove(); }, 400);
        }
    }, 4000);
}

// Setup: cuando llegues a la sección de cursos, inicia las notificaciones
setTimeout(() => {
    const cursosElement = document.getElementById('cursos');
    console.log('📍 Buscando elemento #cursos:', cursosElement ? '✅ ENCONTRADO' : '❌ NO ENCONTRADO');

    if (!cursosElement) return;

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && !purchaseNotificationStarted) {
                purchaseNotificationStarted = true;
                console.log('✅ Sección de cursos visible - ACTIVANDO NOTIFICACIONES');

                showPurchaseNotification();

                purchaseNotificationInterval = setInterval(() => {
                    if (purchaseNotificationCount >= 4) {
                        clearInterval(purchaseNotificationInterval);
                        return;
                    }
                    showPurchaseNotification();
                }, 10000); // 10 segundos

                observer.disconnect();
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(cursosElement);
    console.log('👁️ Intersection Observer activo');
}, 500); // Esperar 500ms para asegurar que el DOM está listo