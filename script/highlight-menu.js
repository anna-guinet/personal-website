document.addEventListener('DOMContentLoaded',
    function () {
        const menuItems = document
            .querySelectorAll('.pure-menu-item');
 
        menuItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    menuItems.forEach(menuItem => menuItem
                        .classList.remove('pure-menu-selected'));
                    this.classList.add('pure-menu-selected');
                });
        });
    });