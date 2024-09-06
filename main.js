import './fullpage.js'
import 'fslightbox'


new fullpage('#fullpage', {
    menu: '.werpol-menu',
    anchors: ['intro', 'about', 'offer', 'equipment', 'implementations', 'images', 'movies', 'references', 'contact'],
    
    // Navigation for horizontal slides
    slidesNavigation: true,
    slidesNavPosition: 'bottom', // Default

    controlArrows: false,

    normalScrollElements: '.werpol-references-preview-companies',

    // Get your license at https://alvarotrigo.com/fullPage/pricing
    licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
});