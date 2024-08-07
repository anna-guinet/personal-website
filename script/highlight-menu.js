document.addEventListener('DOMContentLoaded',
    function () {
        const menuItems = document
            .querySelectorAll('.pure-menu-item');
 
        menuItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    menuItems.forEach(menuItem => menuItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });