export default defineNuxtPlugin(() => {
    const sidebarToggler = document.getElementById('sidebar-toggler');
    const asideEl = document.getElementById('aside');
    let bodyOverflow = '';

    if (sidebarToggler) {
        sidebarToggler.addEventListener('click', () => {
            asideEl.classList.toggle('show');
            const asideDivOverlay = createOverlay();

            asideDivOverlay.addEventListener('click', () => {
                asideEl.classList.remove('show');
                document.body.style.overflow = bodyOverflow; // Restore the original overflow property
                document.body.removeChild(asideDivOverlay);
            });

            // Disable body scrolling
            bodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        });
    }

    function createOverlay() {
        const asideDivOverlay = document.createElement('div');
        asideDivOverlay.className = 'sidebar-overlay';
        document.body.appendChild(asideDivOverlay);
        return asideDivOverlay;
    }
})
