document.addEventListener('DOMContentLoaded', function() {
    // theme.js
    (function() {
        const lightBg = 'linear-gradient(to bottom, #f5f6fb, #f5f6fb)';
        const darkBg = 'linear-gradient(to bottom, #002B41, #000D14)';

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            document.body.style.backgroundImage = theme === 'dark' ? darkBg : lightBg;
            localStorage.setItem('theme', theme);
        }

        function setupThemeToggle() {
            const btn = document.getElementById('themeToggle');
            if (!btn) return;

            const toggleTheme = () => {
                const current = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = current === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
                btn.setAttribute('aria-pressed', newTheme === 'dark');
                btn.classList.toggle('dark', newTheme === 'dark');
            };

            btn.addEventListener('click', toggleTheme);

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleMediaChange = (e) => {
                if (!localStorage.getItem('theme')) {
                    applyTheme(e.matches ? 'dark' : 'light');
                    btn.setAttribute('aria-pressed', e.matches);
                    btn.classList.toggle('dark', e.matches);
                }
            };

            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleMediaChange);
            } else if (mediaQuery.addListener) {
                mediaQuery.addListener(handleMediaChange);
            }

            const savedTheme = localStorage.getItem('theme') || (mediaQuery.matches ? 'dark' : 'light');
            applyTheme(savedTheme);
            btn.setAttribute('aria-pressed', savedTheme === 'dark');
            btn.classList.toggle('dark', savedTheme === 'dark');
        }

        window._setupThemeToggle = setupThemeToggle;
    })();

    

   // **** header **** //
    fetch('../header.inc')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // 헤더 로드 후 실행해야 하는 코드들

            // select box
            const buttons = document.querySelectorAll('.btn_dr');
            buttons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    const list = btn.nextElementSibling;
                    if (list && list.classList.contains('wrap_list')) {
                        list.classList.toggle('on');
                    }
                });
            });

            document.querySelectorAll('.wrap_list').forEach((list) => {
                list.addEventListener('click', (event) => {
                    if (event.target.nodeName === 'BUTTON') {
                        const btn = list.previousElementSibling;
                        if (btn && btn.classList.contains('btn_dr')) {
                            btn.innerText = event.target.innerText;
                            list.classList.remove('on');
                        }
                    }
                });
            });

            // gnb mobile
            const burgers = document.querySelectorAll('.menu-trigger');
            const nav = document.querySelectorAll('.gnb');
            const siteMap = document.querySelectorAll('.site-map');

            burgers.forEach(function(burger, index) {
                burger.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.classList.toggle('mo');
                    this.classList.toggle('active-' + (index + 1));
                    nav.forEach(function(nav) {
                        nav.classList.toggle('hidden');
                    });
                    siteMap.forEach(function(siteMap) {
                        siteMap.classList.toggle('show');
                    });
                });
            });

            // theme
            function handleThemeToggleVisibility() {
                const themeToggle = document.querySelector('.theme-toggle');
                const siteMapEl = document.querySelector('.site-map');
                if (!themeToggle) return;

                const isMobile = window.innerWidth <= 1110;
                const scrolled = window.scrollY > 0;
                const siteMapOpen = siteMapEl && siteMapEl.classList.contains('show');

                if (isMobile && (scrolled || siteMapOpen)) {
                    themeToggle.style.display = 'none';
                } else {
                    themeToggle.style.display = '';
                }
            }
            window.addEventListener('scroll', handleThemeToggleVisibility);
            window.addEventListener('resize', handleThemeToggleVisibility);
            const siteMapEl = document.querySelector('.site-map');
            if (siteMapEl) {
                const observer = new MutationObserver(handleThemeToggleVisibility);
                observer.observe(siteMapEl, { attributes: true, attributeFilter: ['class'] });
            }
            handleThemeToggleVisibility();


            if (window._setupThemeToggle) {
                window._setupThemeToggle();
            }
        })
        .catch(error => console.error('Error loading header:', error));
    // 로컬에서 확인 시
    // header select
    // const buttons = document.querySelectorAll('.btn_dr');
    // buttons.forEach((btn) => {
    //     btn.addEventListener('click', () => {
    //         const list = btn.nextElementSibling;
    //         if (list && list.classList.contains('wrap_list')) {
    //             list.classList.toggle('on');
    //         }
    //     });
    // });
    //
    // document.querySelectorAll('.wrap_list').forEach((list) => {
    //     list.addEventListener('click', (event) => {
    //         if (event.target.nodeName === 'BUTTON') {
    //             const btn = list.previousElementSibling;
    //             if (btn && btn.classList.contains('btn_dr')) {
    //                 btn.innerText = event.target.innerText;
    //                 list.classList.remove('on');
    //             }
    //         }
    //     });
    // });
    //
    // // **** gnb mobile **** //
    // const burgers = document.querySelectorAll('.menu-trigger');
    // const nav = document.querySelectorAll('.gnb');
    // const siteMap = document.querySelectorAll('.site-map');
    //
    //
    // burgers.forEach(function(burger, index) {
    //     burger.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         this.classList.toggle('mo');
    //         this.classList.toggle('active-' + (index + 1));
    //         nav.forEach(function(nav) {
    //             nav.classList.toggle('hidden');
    //         });
    //         siteMap.forEach(function(siteMap) {
    //             siteMap.classList.toggle('show');
    //         });
    //     });
    // });


});