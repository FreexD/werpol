import 'fslightbox'


new fullpage('#app', {
    menu: '.werpol-menu',
    anchors: ['intro', 'about', 'offer', 'equipment', 'implementations', 'images', 'movies', 'references', 'contact'],
    
    // Navigation for horizontal slides
    slidesNavigation: true,
    slidesNavPosition: 'bottom', // Default

    paddingTop: '80px',

    css3: false,

    controlArrows: false,

    normalScrollElements: '.normal-scroll',

    // Get your license at https://alvarotrigo.com/fullPage/pricing
    licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
});