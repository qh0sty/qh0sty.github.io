// Select the image by its ID
const mainImage = document.getElementById ('mainImage');
const caption = document.getElementById ('caption');
// Array of slides (10 images)
const slides = [
	{ src: 'images/flowers.jpg', 
	  alt: 'flowers',
	  caption: 'The bouquet sits still at first.'
	},
	{ src: 'images/flowers_blooming.jpg',	
	  alt: 'flowers2',
	  caption: 'Slowly, the flowers begin to open, letting hearts into the air'
	},
	{ src: 'images/flowers_blossom.jpg',	
	  alt: 'flowers3',
	  caption: 'Love blooms gently, just like flowers blooming in the spring'
	},
	{ src: 'images/heart_to_heart.jpg',	
	  alt: 'hearttoheart',
	  caption: 'To love another is to love yourself, to build upon trust.'
	},
	{ src: 'images/tea_for_two.jpg',	
	  alt: 'teafor2',
	  caption: 'Love can be quiet, simply being near is enough.'
	},
	{ src: 'images/under_the_tree.jpg',	
	  alt: 'couple',
	  caption: 'Love can begin quietly, in shared moments that others don’t notice at first.'
	},
	{ src: 'images/kiss_on_stairs.jpg',	
	  alt: 'kisses',
	  caption: 'You don’t need to know someone to love them.'
	},
	{ src: 'images/dancers.jpg',	
	  alt: 'lovedance',
	  caption: 'When we fall in love, the world does not stop.'
	},
	{ src: 'images/candle_lit.jpg',	
	  alt: 'candle',
	  caption: 'Love does not need to be loud, sometimes the quiet is best.'
	},
	{ src: 'images/ending.jpg',	
	  alt: 'world',
	  caption: 'And though a bouquet wilts and grows lighter, the world grows brighter.'
	}
];

let currentIndex = 0;

// Preload images
slides.forEach (({ src }) => {
	const i = new Image();
	i.src = src;
});

// Helper to show slide
function showSlide (index) {
	const slide = slides[index];
	mainImage.src = slide.src; // replaces the image
	mainImage.alt = slide.alt; // replaces the alt of the image
	caption.textContent = slide.caption; // updates caption text
}

// Advance on Click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}

// Initialize
showSlide (currentIndex);
mainImage.addEventListener('click', nextSlide);