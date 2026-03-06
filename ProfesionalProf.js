


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

feather.replace();
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




document.querySelectorAll('.project-container').forEach(container => {
    const desc = container.querySelector('.project-description');

    container.addEventListener('mouseenter', () => {
        desc.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
        desc.style.display = 'none';
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");
    const bookRecommendation = document.getElementById("bookRecommendation");
    const bookCover = document.getElementById("bookCover"); // Imagen del libro

    // Lista de libros con sus portadas
    const books = [
        { title: "The Little Prince - Antoine de Saint-Exupéry", cover: "covers/pp.jpg" },
        { title: "The Prince & The  Dressmaker - Jen Wang", cover: "covers/dm.jpg" },
        { title: "The Secret History - Donna Tartt", cover: "covers/tsh.jpg" },
        { title: "Pride and Prejudice - Jane Austen", cover: "covers/pdp.jpg" },
        { title: "Demian - Herman Hesse", cover: "covers/dmn.jpg" },
        { title: "Tender is the flesh - Agustina Bazterrica", cover: "covers/titf.jpg" },
        { title: "The Midnight Library - Matt Haig", cover: "covers/tml.jpg" },
        { title: "Never Let Me Go - Kazuo Ishiguro ", cover: "covers/nlmg.jpg" },
        { title: "Heartstopper - Alice Oseman", cover: "covers/htstp.jpg" },
        { title: "Educated - Tara Westover", cover: "covers/edc.jpg" },
        { title: "Outliers - Malcom Gladwell", cover: "covers/out.jpg" },
        { title: "Please look after mom - Kyung Sook-Shin", cover: "covers/plam.jpg" },
        { title: "Fever Dream - Samanta Schweblin", cover: "covers/ddr.jpg" },
        { title: "This is not Miami - Fernanda Melchor", cover: "covers/tinm.jpg" },
        { title: "The Pachinko Parlour - Elisa Shua Dusapin", cover: "covers/pck.jpg" },
        { title: "A Little Life - Hanya Yanagihara", cover: "covers/tpv.jpg" },
        { title: "Persépolis - Marjane Satrapi", cover: "covers/prsp.jpg" },
        { title: "Almond - Won Pyung Sohn", cover: "covers/almd.jpg" },
        { title: "To kill a Mockingbird - Harper Lee", cover: "covers/tkm.jpg" },
        { title: "Lolita - Vladimir Nabokov", cover: "covers/llt.jpg" },
        { title: "Strange Pictures - Uketsu", cover: "covers/stpc.jpg" },
        { title: "The Ones Who Walk Away From Omelas - Úrsula K. LeGuin", cover: "covers/towwy.jpg" },
        { title: "Little Women - Luisa May Alcott", cover: "covers/lw.jpg" },
        { title: "Drácula - Bram Stoker", cover: "covers/dr.jpg" },
        { title: "The Truth about the Harry Quebert Affair - ", cover: "covers/hq.jpg" },
        { title: "Frankenstain - Mary Wollstonecraft Shelley", cover: "covers/ms.jpg" },
        { title: "Macario - Bruno Traven", cover: "covers/mc.jpg" },
        { title: "Actos Humanos - Han Kang", cover: "covers/hnk.jpg" },
        { title: "What I Know for Sure - Oprah Winfrey", cover: "covers/op.jpg" },
        { title: "Ikigai - Francesc Miralles and Héctor García", cover: "covers/ik.jpg" },
        { title: "Kim Ji-Young, born in 1982 - Cho Nam-joo", cover: "covers/km.jpg" },
        { title: "Fangs - Sarah Andersen", cover: "covers/fng.jpg" },
        { title: "The Wrath & The Down - Renee Ahdieh", cover: "covers/twd.jpg" },
        { title: "The Water Trench - Lydiette Carrión", cover: "covers/fda.png" },
        { title: "Nothing - Janne Teller", cover: "covers/nd.jpg" },
        { title: "Wild Swans - Jung Chang", cover: "covers/wld.jpg" },
        { title: "The Poppy War - R.F. Kuang", cover: "covers/ppy.jpg" },
        { title: "The Nightingale - Kristin Hannah", cover: "covers/nght.jpg" },
        { title: "My Dark Vanessa - Kate Elizabeth Russel", cover: "covers/dkv.jpg" },
        { title: "The Art of War - Sun Tzu", cover: "covers/wr.jpg" },
        { title: "To Live - Hua Yu", cover: "covers/tlv.jpg" },
        { title: "The Three Body Problem - Cixin Liu", cover: "covers/bd.jpg" },
        { title: "The Wedding People - Alison Espach", cover: "covers/twp.jpg" },
        { title: "The Island of Sea Women - Lisa See", cover: "covers/sw.jpg" },
        { title: "Winter in Sokcho - Elisa Shua Dusapin", cover: "covers/skc.jpg" },
        { title: "Thinking, fast and slow - Daniel Kahneman", cover: "covers/fns.jpg" },
        { title: "Find Your Vitamin Person - Marian Rojas Estapé", cover: "covers/vt.jpg" },
        { title: "The Boy, the Mole, the Fox and the Horse - Charlie Mackesy", cover: "covers/bml.jpg" }
    ];

// Función para mezclar la lista de libros
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambio
    }
}

// Cargar la lista de libros sin repetir
let remainingBooks = JSON.parse(localStorage.getItem("remainingBooks"));
if (!remainingBooks || remainingBooks.length === 0) {
    shuffle(books);
    remainingBooks = [...books];
    localStorage.setItem("remainingBooks", JSON.stringify(remainingBooks));
}

// Obtener número de likes almacenado
let likes = localStorage.getItem("likes") ? parseInt(localStorage.getItem("likes")) : 0;
likeCount.textContent = likes;

likeButton.addEventListener("click", function () {
    likes++;
    likeCount.textContent = likes;
    localStorage.setItem("likes", likes); // Guardar likes

    if (remainingBooks.length === 0) {
        shuffle(books);
        remainingBooks = [...books];
    }

    const randomBook = remainingBooks.pop(); // Extraer último libro de la lista
    localStorage.setItem("remainingBooks", JSON.stringify(remainingBooks)); // Guardar progreso

    // Mostrar el libro recomendado y la portada
    bookRecommendation.textContent = `📖 Recommendation: ${randomBook.title}`;
    bookCover.src = randomBook.cover;
    bookCover.style.display = "block"; // Asegurar que la imagen sea visible
});
});

