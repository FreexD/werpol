import 'fslightbox'

let nextSlideTimeout = null;

const fullPageApi = new fullpage('#app', {
    menu: '.werpol-menu',
    anchors: ['intro', 'about', 'offer', 'equipment', 'implementations', 'images', 'movies', 'references', 'contact'],
    
    // Navigation for horizontal slides
    slidesNavigation: true,
    slidesNavPosition: 'bottom', // Default

    paddingTop: '80px',

    css3: false,

    controlArrows: true,

    normalScrollElements: '.normal-scroll',

    afterSlideLoad: function( section, origin, destination, direction, trigger) {
        if(section.anchor === 'intro') {
            if(nextSlideTimeout) {
                nextSlideTimeout && clearTimeout(nextSlideTimeout);
                nextSlideTimeout = null;
            }
            nextSlideTimeout = setTimeout(() => fullPageApi.moveSlideRight(), 5000);
        } else {
            nextSlideTimeout && clearTimeout(nextSlideTimeout);
            nextSlideTimeout = null;
        }
    },

    afterLoad: function( origin, destination, direction, trigger){
        if( destination.anchor === 'intro') {
            if(nextSlideTimeout) {
                nextSlideTimeout && clearTimeout(nextSlideTimeout);
                nextSlideTimeout = null;
            }
            nextSlideTimeout = setTimeout(() => fullPageApi.moveSlideRight(), 5000);
        } else {
            nextSlideTimeout && clearTimeout(nextSlideTimeout);
            nextSlideTimeout = null;
        }
    },

    // Get your license at https://alvarotrigo.com/fullPage/pricing
    licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
});