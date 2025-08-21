document.addEventListener('DOMContentLoaded', function() {
    //main grid height
    const windowHeight = window.innerHeight;
    const remainingHeight = windowHeight - 168;
    const contentHeight = remainingHeight / 6;
    const mgl = document.querySelectorAll('.mgl');
    mgl.forEach(content => {
        content.style.minHeight = contentHeight + 'px';
    });

    //test data map
    const radios = document.querySelectorAll('input.mgl_bubble[type="radio"]');
    const imageEl = document.querySelector('.map_data img');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                const images = ['map01.png', 'map02.png', 'map03.png'];
                const randomImg = images[Math.floor(Math.random() * images.length)];
                imageEl.src = '../src/assets/images/' + randomImg; // 실제 이미지 경로에 맞게 수정
            }
        });
    });

    const initialChecked = document.querySelector('input.mgl_bubble[type="radio"]:checked');
    if (initialChecked) {
        const images = ['map01.png', 'map02.png', 'map03.png'];
        const randomImg = images[Math.floor(Math.random() * images.length)];
        document.querySelector('.map_data img').src = '../src/assets/images/' + randomImg;
    }

    //test graph height
    const bars = document.querySelectorAll('.graph_area span');
    for (let i = 0; i < bars.length; i += 2) {
        // 랜덤 높이 (예: 20 ~ 50px 범위)
        const height1 = Math.floor(Math.random() * 31) + 20; // 20~50
        const height2 = Math.floor(Math.random() * 31) + 20;

        bars[i].style.height = `${height1}px`;

        if (bars[i + 1]) {
            bars[i + 1].style.height = `${height2}px`;
        }
    }

    //test graph hover tooltip
    const tooltip = document.getElementById('tooltip');
    const toolbars = document.querySelectorAll('.graph_area span');

    toolbars.forEach((bar, index) => {
        bar.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
            tooltip.textContent = `24년 03월: ${index + 1}명`; // 원하면 여기 바꿔서 동적으로
        });

        bar.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.style.top = `${e.clientY + 10}px`;
        });

        bar.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });


});