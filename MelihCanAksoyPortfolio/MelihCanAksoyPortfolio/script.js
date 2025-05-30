document.addEventListener('DOMContentLoaded', function() {

    // Navbar Scroll Efekti
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobil Navigasyon Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Aktif Navigasyon Linkini Belirleme
    const sections = document.querySelectorAll('section[id]');
    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            let sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-links a[href*=' + sectionId + ']');
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
        const heroNavLink = document.querySelector('.nav-links a[href="#hero"]');
        if (heroNavLink) {
             if (window.scrollY < (document.getElementById('hero')?.offsetHeight || 0) - 100) {
                heroNavLink.classList.add('active');
            } else if (window.scrollY >= (document.getElementById('about')?.offsetTop || 0) -100) {
                 heroNavLink.classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll', navHighlighter);
    navHighlighter();


    // Kaydırmada Elemanların Ortaya Çıkması (Scroll Reveal)
    const revealElements = document.querySelectorAll('.content-section');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Footer'a güncel yılı ekle
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Basit İletişim Formu Gönderimi
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(translations[currentLang].formAlert || 'Mesajınız (sözde) gönderildi! Gerçek bir gönderim için backend entegrasyonu gerekir.');
            contactForm.reset();
        });
    }

    // --- DİL DEĞİŞTİRME FONKSİYONLARI ---
    const langSelect = document.getElementById('lang-select');
    let currentLang = localStorage.getItem('lang') || 'tr';

    const translations = {
        tr: {
            navHome: "Ana Sayfa",
            navAbout: "Hakkımda",
            navSkills: "Yetenekler",
            navPortfolio: "Projelerim",
            navContact: "İletişim",
            heroTitle: "WEB SİTEME HOŞ GELDİN!",
            heroButton: "Projelerimi Gör",
            scrollDown: "Kaydır",
            aboutTitle: "Hakkımda",
            aboutP1: "Merhaba! Ben Melih Can Aksoy, 22 yaşındayım ve Türkiye'de yaşıyorum. Teknolojiye ve tasarıma olan tutkumla, kullanıcı dostu ve estetik web deneyimleri oluşturuyorum. Özellikle frontend teknolojilerine odaklanarak kendimi sürekli geliştiriyor ve yenilikçi çözümler üretmeye çalışıyorum.",
            aboutP2: "Modern web standartlarına uygun, performanslı ve etkileşimli uygulamalar geliştirmek benim için bir yaşam biçimi. Her projede, detaylara verdiğim önem ve analitik düşünme becerilerimle fark yaratmayı hedeflerim. Yeni şeyler öğrenmeye ve karşılaştığım zorlukların üstesinden gelmeye her zaman açığım.",
            contactMeButton: "Benimle İletişime Geç",
            skillsTitle: "Yeteneklerim",
            skillUiUx: "UI/UX Tasarım",
            skillUiUxDesc: "Kullanıcı odaklı, sezgisel ve estetik arayüz tasarımları.",
            skillFrontend: "Frontend Geliştirme",
            skillFrontendDesc: "HTML, CSS ve JavaScript gibi teknolojilerle modern arayüzler.",
            skillDb: "SQL Veritabanı",
            skillDbDesc: "SQL (PostgreSQL, MySQL) veritabanları ile çalışma.",
            skillResponsive: "Responsive Tasarım",
            skillResponsiveDesc: "Tüm cihazlarda kusursuz çalışan, duyarlı web siteleri.",
            skillPerf: "Performans Optimizasyonu",
            skillPerfDesc: "Hızlı yüklenen ve akıcı çalışan web uygulamaları.",
            portfolioTitle: "Projelerim",
            project1Name: "Kişisel Portfolyo Sitesi",
            project1Desc: "HTML, CSS ve JavaScript ile oluşturulmuş bu kişisel portfolyo sitesi.",
            project2Name: "Uzay Gemisi Savaşı Oyunu",
            project2Desc: "Python (Pygame) kullanılarak geliştirilmiş klasik bir 2D uzay gemisi savaşı oyunu.",
            projectButton: "Detayları Gör",
            travelledEuropeTitle: "Avrupa'da Gezdiğim Ülkeler",
            travelledAsiaTitle: "Asya'da Gezdiğim Ülkeler",
            contactTitle: "İletişim",
            contactIntro: "Bir projeniz mi var veya sadece merhaba mı demek istiyorsunuz? Benimle iletişime geçmekten çekinmeyin!",
            formNamePlaceholder: "Adınız Soyadınız",
            formEmailPlaceholder: "E-posta Adresiniz",
            formMessagePlaceholder: "Mesajınız",
            formSubmitButton: "Mesaj Gönder",
            formAlert: "Mesajınız (sözde) gönderildi! Gerçek bir gönderim için backend entegrasyonu gerekir.",
            footerRights: "Tüm hakları saklıdır."
        },
        en: {
            navHome: "Home",
            navAbout: "About Me",
            navSkills: "Skills",
            navPortfolio: "My Projects",
            navContact: "Contact",
            heroTitle: "WELCOME TO MY WEBSITE!",
            heroButton: "View My Projects",
            scrollDown: "Scroll",
            aboutTitle: "About Me",
            aboutP1: "Hello! I'm Melih Can Aksoy, 22 years old, living in Turkey. With my passion for technology and design, I create user-friendly and aesthetic web experiences. I continuously improve myself, especially focusing on frontend technologies, and strive to produce innovative solutions.",
            aboutP2: "Developing high-performance and interactive applications compliant with modern web standards is a way of life for me. In every project, I aim to make a difference with my attention to detail and analytical thinking skills. I am always open to learning new things and overcoming challenges.",
            contactMeButton: "Contact Me",
            skillsTitle: "My Skills",
            skillUiUx: "UI/UX Design",
            skillUiUxDesc: "User-centered, intuitive, and aesthetic interface designs.",
            skillFrontend: "Frontend Development",
            skillFrontendDesc: "Modern interfaces with technologies like HTML, CSS, and JavaScript.",
            skillDb: "SQL Database",
            skillDbDesc: "Working with SQL (PostgreSQL, MySQL) databases.",
            skillResponsive: "Responsive Design",
            skillResponsiveDesc: "Responsive websites that work flawlessly on all devices.",
            skillPerf: "Performance Optimization",
            skillPerfDesc: "Fast-loading and smooth-running web applications.",
            portfolioTitle: "My Projects",
            project1Name: "Personal Portfolio Website",
            project1Desc: "This personal portfolio website created with HTML, CSS, and JavaScript.",
            project2Name: "Spaceship Battle Game",
            project2Desc: "A classic 2D spaceship battle game developed using Python (Pygame).",
            projectButton: "View Details",
            travelledEuropeTitle: "Countries I've Visited in Europe",
            travelledAsiaTitle: "Countries I've Visited in Asia",
            contactTitle: "Contact",
            contactIntro: "Have a project or just want to say hi? Don't hesitate to contact me!",
            formNamePlaceholder: "Your Name",
            formEmailPlaceholder: "Your Email Address",
            formMessagePlaceholder: "Your Message",
            formSubmitButton: "Send Message",
            formAlert: "Your message has been (supposedly) sent! Backend integration is required for actual submission.",
            footerRights: "All rights reserved."
        },
        de: {
            navHome: "Startseite",
            navAbout: "Über Mich",
            navSkills: "Fähigkeiten",
            navPortfolio: "Meine Projekte",
            navContact: "Kontakt",
            heroTitle: "WILLKOMMEN AUF MEINER WEBSITE!",
            heroButton: "Meine Projekte Ansehen",
            scrollDown: "Scrollen",
            aboutTitle: "Über Mich",
            aboutP1: "Hallo! Ich bin Melih Can Aksoy, 22 Jahre alt und lebe in der Türkei. Mit meiner Leidenschaft für Technologie und Design erstelle ich benutzerfreundliche und ästhetische Weberlebnisse. Ich verbessere mich ständig, insbesondere im Bereich Frontend-Technologien, und strebe danach, innovative Lösungen zu entwickeln.",
            aboutP2: "Die Entwicklung leistungsstarker und interaktiver Anwendungen, die modernen Webstandards entsprechen, ist für mich eine Lebensweise. In jedem Projekt ziele ich darauf ab, durch meine Detailgenauigkeit und analytischen Denkfähigkeiten einen Unterschied zu machen. Ich bin immer offen dafür, Neues zu lernen und Herausforderungen zu meistern.",
            contactMeButton: "Kontaktieren Sie Mich",
            skillsTitle: "Meine Fähigkeiten",
            skillUiUx: "UI/UX Design",
            skillUiUxDesc: "Benutzerzentrierte, intuitive und ästhetische Interface-Designs.",
            skillFrontend: "Frontend-Entwicklung",
            skillFrontendDesc: "Moderne Benutzeroberflächen mit Technologien wie HTML, CSS und JavaScript.",
            skillDb: "SQL-Datenbank",
            skillDbDesc: "Arbeiten mit SQL (PostgreSQL, MySQL) Datenbanken.",
            skillResponsive: "Responsives Design",
            skillResponsiveDesc: "Responsive Webseiten, die auf allen Geräten einwandfrei funktionieren.",
            skillPerf: "Leistungsoptimierung",
            skillPerfDesc: "Schnell ladende und reibungslos laufende Webanwendungen.",
            portfolioTitle: "Meine Projekte",
            project1Name: "Persönliche Portfolio-Website",
            project1Desc: "Diese persönliche Portfolio-Website wurde mit HTML, CSS und JavaScript erstellt.",
            project2Name: "Raumschiffkampfspiel",
            project2Desc: "Ein klassisches 2D-Raumschiffkampfspiel, entwickelt mit Python (Pygame).",
            projectButton: "Details Ansehen",
            travelledEuropeTitle: "Länder, die ich in Europa besucht habe",
            travelledAsiaTitle: "Länder, die ich in Asien besucht habe",
            contactTitle: "Kontakt",
            contactIntro: "Haben Sie ein Projekt oder möchten Sie einfach nur Hallo sagen? Zögern Sie nicht, mich zu kontaktieren!",
            formNamePlaceholder: "Ihr Name",
            formEmailPlaceholder: "Ihre E-Mail-Adresse",
            formMessagePlaceholder: "Ihre Nachricht",
            formSubmitButton: "Nachricht Senden",
            formAlert: "Ihre Nachricht wurde (angeblich) gesendet! Für eine tatsächliche Übermittlung ist eine Backend-Integration erforderlich.",
            footerRights: "Alle Rechte vorbehalten."
        },
        fr: {
            navHome: "Accueil",
            navAbout: "À Propos",
            navSkills: "Compétences",
            navPortfolio: "Mes Projets",
            navContact: "Contact",
            heroTitle: "BIENVENUE SUR MON SITE WEB !",
            heroButton: "Voir Mes Projets",
            scrollDown: "Défiler",
            aboutTitle: "À Propos de Moi",
            aboutP1: "Bonjour ! Je suis Melih Can Aksoy, j'ai 22 ans et je vis en Turquie. Passionné par la technologie et le design, je crée des expériences web conviviales et esthétiques. Je m'améliore continuellement, en me concentrant notamment sur les technologies frontend, et je m'efforce de produire des solutions innovantes.",
            aboutP2: "Développer des applications performantes et interactives conformes aux standards web modernes est pour moi un mode de vie. Dans chaque projet, je vise à faire la différence grâce à mon souci du détail et à mes capacités de réflexion analytique. Je suis toujours ouvert à l'apprentissage de nouvelles choses et à surmonter les défis.",
            contactMeButton: "Contactez-Moi",
            skillsTitle: "Mes Compétences",
            skillUiUx: "Design UI/UX",
            skillUiUxDesc: "Conceptions d'interfaces centrées sur l'utilisateur, intuitives et esthétiques.",
            skillFrontend: "Développement Frontend",
            skillFrontendDesc: "Interfaces modernes avec des technologies comme HTML, CSS et JavaScript.",
            skillDb: "Base de Données SQL",
            skillDbDesc: "Travail avec des bases de données SQL (PostgreSQL, MySQL).",
            skillResponsive: "Design Réactif",
            skillResponsiveDesc: "Sites web réactifs qui fonctionnent parfaitement sur tous les appareils.",
            skillPerf: "Optimisation des Performances",
            skillPerfDesc: "Applications web à chargement rapide et au fonctionnement fluide.",
            portfolioTitle: "Mes Projets",
            project1Name: "Site Web Portfolio Personnel",
            project1Desc: "Ce site web portfolio personnel créé avec HTML, CSS et JavaScript.",
            project2Name: "Jeu de Bataille Spatiale",
            project2Desc: "Un jeu de bataille spatiale classique en 2D développé avec Python (Pygame).",
            projectButton: "Voir les Détails",
            travelledEuropeTitle: "Pays que j'ai visités en Europe",
            travelledAsiaTitle: "Pays que j'ai visités en Asie",
            contactTitle: "Contact",
            contactIntro: "Vous avez un projet ou vous voulez simplement dire bonjour ? N'hésitez pas à me contacter !",
            formNamePlaceholder: "Votre Nom",
            formEmailPlaceholder: "Votre Adresse E-mail",
            formMessagePlaceholder: "Votre Message",
            formSubmitButton: "Envoyer le Message",
            formAlert: "Votre message a été (soi-disant) envoyé ! Une intégration backend est nécessaire pour une soumission réelle.",
            footerRights: "Tous droits réservés."
        }
    };

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-lang-placeholder-key]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder-key');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        if (langSelect) {
            langSelect.value = lang;
        }
    }


    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }

    setLanguage(currentLang);

    feather.replace();
});