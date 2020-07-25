document.addEventListener('DOMContentLoaded', () => {
    const bar = document.styleSheets[0].cssRules[4];
    const maxHeight = document.body.offsetHeight - window.innerHeight;
    window.addEventListener('scroll', () => {
        let percentage = (window.pageYOffset + 1) / maxHeight * 100;
        bar.style.width = percentage.toFixed(1) + "%"
    })
})