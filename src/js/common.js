document.addEventListener('DOMContentLoaded', function() {
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