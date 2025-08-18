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

        window.addEventListener('load', setupThemeToggle);
    })();

    // **** header **** //
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // 헤더가 로드된 후, 이벤트 리스너를 추가합니다.
            // header select
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

            // **** gnb mobile **** //
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