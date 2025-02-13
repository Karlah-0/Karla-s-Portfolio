const languageContent = {
    es: {
        menu: {
            home: "Inicio",
            skills: "Herramientas",
            experience: "Experiencia",
            projects: "Proyectos",
            certifications: "Certificaciones",
            extracurricular: "Extracurricular"
        },
        section1: { title: "Karla Esther Escamilla Gachuz", content: "Contenido de la sección 1." },
        section2: { title: "Herramientas", content: "Contenido de la sección 2." },
        section3: { title: "Experiencia", content: "Contenido de la sección 3." },
        section4: { title: "Proyectos", content: "Contenido de la sección 4." },
        section5: { title: "Certificaciones", content: "Contenido de la sección 5." },
        section6: { title: "Extracurricular", content: "Contenido de la sección 6." }
    },
    en: {
        menu: {
            home: "Home",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            certifications: "Certifications",
            extracurricular: "Extracurricular"
        },
        section1: { title: "Karla Esther Escamilla Gachuz", content: "Content of section 1." },
        section2: { title: "Skills", content: "Content of section 2." },
        section3: { title: "Experience", content: "Content of section 3." },
        section4: { title: "Projects", content: "Content of section 4." },
        section5: { title: "Certifications", content: "Content of section 5." },
        section6: { title: "Extracurricular", content: "Content of section 6." }
    },
    ko: {
        menu: {
            home: "홈",
            skills: "기술",
            experience: "경험",
            projects: "프로젝트",
            certifications: "인증",
            extracurricular: "과외활동"
        },
        section1: { title: "카를라 에스더 에스카밀라 가추스", content: "섹션 1의 내용." },
        section2: { title: "기술", content: "섹션 2의 내용." },
        section3: { title: "경험", content: "섹션 3의 내용." },
        section4: { title: "프로젝트", content: "섹션 4의 내용." },
        section5: { title: "인증", content: "섹션 5의 내용." },
        section6: { title: "과외활동", content: "섹션 6의 내용." }
    }
};

document.querySelectorAll('#language-switcher button').forEach(button => {
    button.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        updateContent(selectedLang);
    });
});

function updateContent(lang) {
    for (let i = 1; i <= 6; i++) {
        const section = document.querySelector(`#section${i}`);
        const title = section.querySelector('h2');
        const content = section.querySelector('p');

        title.textContent = languageContent[lang][`section${i}`].title;
        content.textContent = languageContent[lang][`section${i}`].content;

        // Aquí se conservan las clases CSS
        title.className = title.className;
        content.className = content.className;
    }
    document.querySelector('nav ul li a[href="#section1"]').textContent = languageContent[lang].menu.home;
    document.querySelector('nav ul li a[href="#section2"]').textContent = languageContent[lang].menu.skills;
    document.querySelector('nav ul li a[href="#section3"]').textContent = languageContent[lang].menu.experience;
    document.querySelector('nav ul li a[href="#section4"]').textContent = languageContent[lang].menu.projects;
    document.querySelector('nav ul li a[href="#section5"]').textContent = languageContent[lang].menu.certifications;
    document.querySelector('nav ul li a[href="#section6"]').textContent = languageContent[lang].menu.extracurricular;
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const palabras = [
    "Python", "SQL", "C++", "R", "AI", "Machine Learning", "Natural Language Processing", "Large Language Models", "Data Modeling",
    "Big Data", "Dashboards", "Generative AI", "Chatbots", "Web Developing"
];

const elementoTexto = document.getElementById("carrusel-texto");
let indice = 0;

function cambiarPalabra() {
    elementoTexto.innerHTML = `<span>${palabras[indice]}</span>`;
    indice = (indice + 1) % palabras.length;

    // Reinicia la animación
    elementoTexto.style.animation = "none";
    setTimeout(() => {
        elementoTexto.style.animation = "leBlurInBottom 1s forwards";
    }, 10);
}

cambiarPalabra();
setInterval(cambiarPalabra, 2000); // Cambia cada 2 segundos


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {  // Ajusta el offset según sea necesario
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Manejar el despliegue del menú con hover y foco
    const dots = document.querySelector('.dots');
    const menu = document.querySelector('.menu');

    dots.addEventListener('mouseenter', function() {
        menu.style.display = 'block';
    });

    dots.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!menu.matches(':hover')) {
                menu.style.display = 'none';
            }
        }, 200);
    });

    menu.addEventListener('mouseleave', function() {
        menu.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactIcons = document.getElementById('contact-icons');

    contactButton.addEventListener('click', function() {
        if (contactIcons.style.display === 'none' || contactIcons.style.display === '') {
            contactIcons.style.display = 'flex';
        } else {
            contactIcons.style.display = 'none';
        }
    });
});


/*document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--progress-level', level + '%');
    });
}); */

document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.skill-category');

    categories.forEach(category => {
        const icon = category.querySelector('.category-icon');
        const skillsList = category.querySelector('.skills-list');

        icon.addEventListener('click', () => {
            // Cierra otras categorías antes de abrir la actual (opcional)
            document.querySelectorAll('.skills-list').forEach(list => {
                if (list !== skillsList) {
                    list.classList.remove('active');
                }
            });

            // Activa o desactiva la lista actual
            skillsList.classList.toggle('active');
        });
    });
});



document.getElementById("more-details-btn").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "flex";
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});


document.addEventListener("DOMContentLoaded", function() {
    const academicCounter = document.getElementById("academic-days");
    const professionalCounter = document.getElementById("professional-days");
    const academicEquivalent = document.getElementById("academic-equivalent");
    const professionalEquivalent = document.getElementById("professional-equivalent");

    let academicDays = 0;
    let professionalDays = 0;
    let hasStarted = false; // Evita múltiples ejecuciones

    // Fecha actual y fecha límite para el contador académico
    const currentDate = new Date();
    const endDate = new Date("2026-07-07");

    // Calcula la cantidad de días entre dos fechas
    function calculateDays(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000; // Milisegundos en un día
        return Math.round(Math.abs((date1 - date2) / oneDay));
    }

    // Fecha de inicio académica corregida (01/01/2022)
    const academicTotalDays = calculateDays(new Date("2022-01-01"), currentDate);
    const professionalTotalDays = calculateDays(new Date("2023-02-11"), currentDate);

    function startCounters() {
        if (hasStarted) return; // Evita múltiples ejecuciones
        hasStarted = true;

        const academicInterval = setInterval(() => {
            if (academicDays < academicTotalDays && currentDate < endDate) {
                academicDays++;
                academicCounter.textContent = academicDays;
                academicEquivalent.textContent = `Equal to ${Math.floor(academicDays / 365)} years and ${Math.floor((academicDays % 365) / 30)} months`;
            } else {
                clearInterval(academicInterval);
            }
        }, 10);

        const professionalInterval = setInterval(() => {
            if (professionalDays < professionalTotalDays) {
                professionalDays++;
                professionalCounter.textContent = professionalDays;
                professionalEquivalent.textContent = `Equal to ${Math.floor(professionalDays / 365)} years and ${Math.floor((professionalDays % 365) / 30)} months`;
            } else {
                clearInterval(professionalInterval);
            }
        }, 10);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        if (isElementInViewport(document.getElementById("section3"))) {
            startCounters();
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
});








