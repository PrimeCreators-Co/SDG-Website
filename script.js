document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initThemeSwitcher();
    loadSdgData();
    initScrollAnimations();
});

function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function initThemeSwitcher() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = themeSwitcher.querySelector('i');

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.className = `fas fa-${theme === 'dark' ? 'sun' : 'moon'}`;
    };

    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    themeSwitcher.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function loadSdgData() {
    const sdgData = [
        { "goal": 1, "title": "No Poverty", "description": "End poverty in all its forms everywhere", "color": "#E5243B" },
        { "goal": 2, "title": "Zero Hunger", "description": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture", "color": "#DDA63A" },
        { "goal": 3, "title": "Good Health and Well-being", "description": "Ensure healthy lives and promote well-being for all at all ages", "color": "#4C9F38" },
        { "goal": 4, "title": "Quality Education", "description": "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all", "color": "#C5192D" },
        { "goal": 5, "title": "Gender Equality", "description": "Achieve gender equality and empower all women and girls", "color": "#FF3A21" },
        { "goal": 6, "title": "Clean Water and Sanitation", "description": "Ensure availability and sustainable management of water and sanitation for all", "color": "#26BDE2" },
        { "goal": 7, "title": "Affordable and Clean Energy", "description": "Ensure access to affordable, reliable, sustainable and modern energy for all", "color": "#FCC30B" },
        { "goal": 8, "title": "Decent Work and Economic Growth", "description": "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all", "color": "#A21942" },
        { "goal": 9, "title": "Industry, Innovation and Infrastructure", "description": "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation", "color": "#FD6925" },
        { "goal": 10, "title": "Reduced Inequality", "description": "Reduce inequality within and among countries", "color": "#DD1367" },
        { "goal": 11, "title": "Sustainable Cities and Communities", "description": "Make cities and human settlements inclusive, safe, resilient and sustainable", "color": "#FD9D24" },
        { "goal": 12, "title": "Responsible Consumption and Production", "description": "Ensure sustainable consumption and production patterns", "color": "#BF8B2E" },
        { "goal": 13, "title": "Climate Action", "description": "Take urgent action to combat climate change and its impacts", "color": "#3F7E44" },
        { "goal": 14, "title": "Life Below Water", "description": "Conserve and sustainably use the oceans, seas and marine resources for sustainable development", "color": "#0A97D9" },
        { "goal": 15, "title": "Life on Land", "description": "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss", "color": "#56C02B" },
        { "goal": 16, "title": "Peace, Justice and Strong Institutions", "description": "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels", "color": "#00689D" },
        { "goal": 17, "title": "Partnerships for the Goals", "description": "Strengthen the means of implementation and revitalize the global partnership for sustainable development", "color": "#19486A" }
    ];

    const sdgGrid = document.querySelector('.sdg-grid');
    sdgData.forEach(sdg => {
        const card = document.createElement('div');
        card.className = 'sdg-card-container';
        card.innerHTML = `
            <div class="sdg-card">
                <div class="card-front" style="--goal-color: ${sdg.color}">
                    <div class="goal-number">${sdg.goal}</div>
                    <h3 class="goal-title">${sdg.title}</h3>
                </div>
                <div class="card-back" style="--goal-color: ${sdg.color}">
                    <p class="goal-description">${sdg.description}</p>
                    <a href="#" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
        `;
        sdgGrid.appendChild(card);
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.sdg-card-container, .about-content, .contact-wrapper, .resources-grid, .action-grid, .section-header');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}
