export const scrollToSection = (route) => {
    const section = document.querySelector(route);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 1000 });
    }
};