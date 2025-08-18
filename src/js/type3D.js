window.addEventListener('DOMContentLoaded', () => {

    /*** Swiper ***/
    new Swiper('.swiper-data', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    /*** Toggle  ***/
    /* 250721 - s */
    document.querySelectorAll('.sel_toggle').forEach(toggleGroup => {
        const buttons = toggleGroup.querySelectorAll('.st');
        buttons[0]?.classList.add('active');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    });
    // on off
    const toggleButtons = document.querySelectorAll('.sc_tog');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            if (!isActive) {
                button.classList.add('active');
            }
        });
    });
    /* 250721 - e */

    /*** move ***/
    document.querySelectorAll('.move').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.move').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });

    /*** fold 250715 ***/
    // document.querySelector(".btn_fold")?.addEventListener("click", () => {
    //     document.querySelector(".right_graph")?.classList.toggle("show");
    // });

    /*** option btn ***/
    document.addEventListener("click", (e) => {
        const isBtn = e.target.classList.contains("btn_opt");
        const isInOpt = e.target.closest(".cont_opt");
        const items = document.querySelectorAll(".item_3d");
        const optionBoxes = document.querySelectorAll(".cont_opt");

        if (isBtn) {
            const currentItem = e.target.closest(".item_3d");
            const currentContOpt = e.target.closest(".option_box")?.querySelector(".cont_opt");
            const isVisible = currentContOpt && window.getComputedStyle(currentContOpt).display === "block";

            items.forEach(el => el.classList.remove("active"));
            optionBoxes.forEach(el => el.style.display = "none");

            if (!isVisible) {
                currentItem?.classList.add("active");
                currentContOpt.style.display = "block";
            }
        } else if (!isInOpt) {
            items.forEach(el => el.classList.remove("active"));
            optionBoxes.forEach(el => el.style.display = "none");
        }
    });

    /*** Custom Select ***/
    document.querySelectorAll(".custom-select").forEach(select => {
        const trigger = select.querySelector(".select-trigger");
        const options = select.querySelector(".select-options");

        trigger?.addEventListener("click", (e) => {
            e.stopPropagation();

            const isOpen = trigger.classList.contains("active");

            document.querySelectorAll(".select-options").forEach(opt => opt.style.display = "none");
            document.querySelectorAll(".select-trigger").forEach(tri => tri.classList.remove("active"));

            if (!isOpen) {
                options.style.display = "block";
                trigger.classList.add("active");
            }
        });

        options?.querySelectorAll(".s-option").forEach(option => {
            option.addEventListener("click", () => {
                trigger.textContent = option.textContent;
                options.style.display = "none";
                trigger.classList.remove("active");
            });
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".select-options").forEach(opt => opt.style.display = "none");
        document.querySelectorAll(".select-trigger").forEach(tri => tri.classList.remove("active"));
    });

    /*** layer popup ***/
    const btnFull = document.querySelector('.btn_full');
    const layerFull = document.querySelector('.layer_full');
    const btnClose = document.querySelector('.layer_full .btn_close');

    btnFull?.addEventListener('click', () => {
        layerFull?.classList.add('show');
    });

    btnClose?.addEventListener('click', () => {
        layerFull?.classList.remove('show');
    });

    /*** tab 250715 ***/
    const tabButtons = document.querySelectorAll(".tab_btn .tbtn");
    const tabPanels = document.querySelectorAll(".tab_panel");

    tabButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // 버튼 상태 초기화
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // 패널 전환
            tabPanels.forEach(p => p.classList.remove("active"));
            if (tabPanels[index]) {
                tabPanels[index].classList.add("active");
            }
        });
    });

});
