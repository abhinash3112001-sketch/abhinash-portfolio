/* =====================================================================
   ✏️  EDIT YOUR PORTFOLIO HERE — this is the only file you need to touch.
   ---------------------------------------------------------------------
   Rules (that's all the "coding" there is):
   • Text goes inside 'single quotes'. If your text has an apostrophe,
     write it as \'  (example: 'Simon\'s Burger').
   • Every item ends with a comma.
   • Put *stars* around words you want in italics.
   • Images live in the "images" folder. Write their names like
     'images/my-picture.jpg'. Keep them under ~500 KB each.
   • To ADD a project: copy one { ... }, block in "projects",
     paste it below, and change the words.
   • To HIDE a project without deleting it: set  hidden: true,
   ===================================================================== */

window.SITE = {

  /* ---------- About you ---------- */
  name: 'abhinash',
  fullName: 'Abhinash A.S.',
  role: 'graphic designer',
  location: 'Bengaluru, India',
  email: 'abhinashas101@gmail.com',
  phone: '+91 79941 26121',
  showPhone: false,            // change to true to show your phone number

  /* ---------- Top of the page ---------- */
  hero: {
    line1: 'i design brands',
    line2: 'people',
    // These phrases take turns in the blue "selected" box:
    rotating: ['stop scrolling for', 'remember', 'pick off the shelf', 'come back to'],
    sub: 'And *this* is where that begins.',
    // Your about-me paragraph, shown under the line above:
    intro: 'I\'m a graphic designer in Bengaluru working across branding, packaging and social media, most recently on Flipkart\'s Big Billion Days. I studied design at IIITDM Jabalpur (2020–2024) and have spent the years since making things that have to work in a feed, on a shelf and in a product catalogue. I like a brief with a problem in it.',
    // Your photo on the right (a cut-out PNG/WebP with a see-through background works best):
    photo: 'images/abhinash.webp',
  },

  /* ---------- Links ---------- */
  links: [
    { label: 'Behance',   url: 'https://www.behance.net/abhinashas' },
    { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/abhinash-a-s-6009a41ba/' },
    { label: 'Instagram', url: 'https://www.instagram.com/_i6_turbo' },
    { label: 'Résumé',    url: 'https://drive.google.com/file/d/1d0cwepWQnXyvZjlMWwomY-LgtRu82k_S/view' },
  ],

  /* ---------- Scrolling strip of places you worked ---------- */
  clients: ['Flipkart', 'Zepto', 'Brandstudio', 'Azira', 'Brandshark', 'Minus Zero Robotics'],

  /* ---------- Projects ----------
     id:       short name with no spaces (used in the web address)
     category: one of the filter names below
     size:     '' (normal), 'wide' or 'tall' — how big the card is
     cover:    the picture on the card
     images:   pictures shown when someone opens the project
               (for a video, write { img: 'images/x.jpg', video: 'link', label: 'Name' })
     links:    optional buttons (PDFs, videos on Drive, Behance…)        */
  filters: ['All', 'Branding', 'Packaging', 'Social', '3D & Motion', 'Web', 'Illustration', 'Photography'],

  projects: [
    {
      id: 'sutra',
      title: '64 Sutra',
      category: 'Branding',
      type: 'Logo & identity',
      year: '2023',
      size: 'wide',
      cover: 'images/sutra-3.jpg',
      text: 'An ornate gold emblem and wordmark for 64 Sutra, explored as a flat mark, a Devanagari-inspired lockup and 3D gold renders.',
      tools: 'Illustrator, Photoshop, Blender',
      images: ['images/sutra-1.jpg', 'images/sutra-2.jpg', 'images/sutra-3.jpg', 'images/sutra-4.jpg'],
      links: [],
    },
    {
      id: 'skin-mumma',
      title: 'Skin Mumma',
      category: 'Packaging',
      type: 'Packaging design',
      year: '2024',
      size: 'tall',
      cover: 'images/skin-2.jpg',
      text: 'Packaging for a skincare range: serums, shampoo, moisturiser and hair care, held together by one soft pink system and shown in product mockups.',
      tools: 'Illustrator, Photoshop',
      images: ['images/skin-4.jpg', 'images/skin-1.jpg', 'images/skin-2.jpg', 'images/skin-3.jpg', 'images/skin-5.jpg', 'images/skin-6.jpg'],
      links: [],
    },
    {
      id: 'glint',
      title: 'Glint Stories',
      category: 'Branding',
      type: 'Brand identity',
      year: '2023',
      size: '',
      cover: 'images/glint-1.jpg',
      text: 'Identity for a wedding photography studio. The mark folds a ring and a camera lens into one line drawing, carried onto cards, merch and the office wall.',
      tools: 'Illustrator, Photoshop',
      images: ['images/glint-4.jpg', 'images/glint-1.jpg', 'images/glint-2.jpg', 'images/glint-3.jpg'],
      links: [],
    },
    {
      id: 'minus-zero',
      title: 'Minus Zero Robotics',
      category: 'Social',
      type: 'Social media & event collateral',
      year: '2023',
      size: '',
      cover: 'images/minus-4.jpg',
      text: 'Internship work for an autonomous-mobility startup: a countdown series and culture posts for social, plus beach flags and valet tags for their event.',
      tools: 'Illustrator, Photoshop',
      images: ['images/minus-1.jpg', 'images/minus-2.jpg', 'images/minus-3.jpg', 'images/minus-4.jpg', 'images/minus-5.jpg', 'images/minus-6.jpg', 'images/flag-1.jpg', 'images/flag-2.jpg'],
      links: [],
    },
    {
      id: 'highlander',
      title: 'Highlander',
      category: '3D & Motion',
      type: '3D CGI videos',
      year: '2023',
      size: 'tall',
      cover: 'images/hl-4.jpg',
      text: 'CGI moments blended into real footage: a helicopter drop, a giant notification, a store shopping bag and a banner transition.',
      tools: 'Blender, After Effects, Premiere Pro',
      // Video thumbnails: each one plays the video on Google Drive when clicked.
      images: [
        { img: 'images/hl-2.jpg', video: 'https://drive.google.com/file/d/1TLPJmNNp_R-XZnEVNdJ2qtuZn35u9RQO/view', label: 'Helicopter' },
        { img: 'images/hl-3.jpg', video: 'https://drive.google.com/file/d/1BqF70_lRqqd6NfbOPGD4H6-ttYjZhT63/view', label: 'Notification' },
        { img: 'images/hl-4.jpg', video: 'https://drive.google.com/file/d/1fm3_BUYIm2RBTBFsfYHbHc8l79WrObtl/view', label: 'Shopping bag' },
        { img: 'images/hl-1.jpg', video: 'https://drive.google.com/file/d/1x7VlboctXjRElBpS5jdlxA8n0wCAUR7o/view', label: 'Banner transition' },
      ],
      links: [],
    },
    {
      id: 'dat',
      title: 'DAT Marketing Solution',
      category: 'Branding',
      type: 'Stationery',
      year: '2023',
      size: 'wide',
      cover: 'images/dat-1.jpg',
      text: 'A sharp blue-and-red stationery set for a marketing agency: business cards, letterhead and envelope.',
      tools: 'Illustrator, Photoshop',
      images: ['images/dat-4.jpg', 'images/dat-1.jpg', 'images/dat-2.jpg', 'images/dat-3.jpg'],
      links: [],
    },
    {
      id: 'vishudh',
      title: 'Vishudh',
      category: 'Social',
      type: 'Social media creatives',
      year: '2025',
      size: '',
      cover: 'images/vishudh-4.jpg',
      text: 'Campaign and festive posts for an ethnic-wear label: collection launches, Diwali, Dhanteras and Bhai Dooj greetings, and "Spotted in Vishudh" customer features, each with its own name, colour and type.',
      tools: 'Photoshop, Illustrator',
      layout: 'feed',   // shows pictures 3-across like an Instagram grid
      images: [
        'images/vishudh-4.jpg',
        'images/vishudh-2.jpg',
        'images/vishudh-5.jpg',
        'images/vishudh-11.jpg',
        'images/vishudh-12.jpg',
        'images/vishudh-7.jpg',
        'images/vishudh-8.jpg',
        'images/vishudh-9.jpg',
        'images/vishudh-13.jpg',
        'images/vishudh-15.jpg',
        'images/vishudh-16.jpg',
        'images/vishudh-17.jpg',
        'images/vishudh-18.jpg',
        'images/vishudh-6.jpg',
        'images/vishudh-10.jpg',
        'images/vishudh-14.jpg',
        'images/vishudh-3.jpg',
      ],
      links: [],
    },
    {
      id: 'jatieco',
      title: 'Jatieco',
      category: 'Branding',
      type: 'Brand identity & brandbook',
      year: '2023',
      size: '',
      cover: 'images/jatieco-1.jpg',
      text: 'A loud, colourful wordmark with the line “Bare the best”, built out into a full brandbook.',
      tools: 'Illustrator',
      images: ['images/jatieco-1.jpg', 'images/jatieco-2.jpg'],
      links: [{ label: 'Brandbook (PDF)', url: 'https://drive.google.com/file/d/1fl27sAwPhI3hWXhqPIzZ8asSqTQXpJ-C/view' }],
    },
    {
      id: 'iv-homes',
      title: 'IV Homes',
      category: 'Web',
      type: 'Landing page',
      year: '2024',
      size: 'tall',
      cover: 'images/ivhomes-1.jpg',
      text: 'A landing page design for a real-estate brand.',
      tools: 'Figma',
      images: ['images/ivhomes-1.jpg'],
      links: [{ label: 'Full page (PDF)', url: 'https://drive.google.com/file/d/19JDhpInUOET6c72R5wwpV_yOFocf454S/view' }],
    },
    {
      id: 'brushstrokes',
      title: 'Brushstrokes',
      category: 'Branding',
      type: 'Brandbook',
      year: '2023',
      size: '',
      cover: 'images/brush-logo.jpg',
      text: 'Brandbook and logo ideations for Brushstrokes.',
      tools: 'Illustrator',
      images: ['images/brush-logo.jpg', 'images/brush-1.jpg'],
      links: [
        { label: 'Brandbook (PDF)', url: 'https://drive.google.com/file/d/1i53PPQlECFY5tFIqTCRwV74L4L72jhTs/view' },
        { label: 'Logo ideations (PDF)', url: 'https://drive.google.com/file/d/1UMqAjgh1oz-TnisqPPM2O4RjhmGbLRcF/view' },
      ],
    },
    {
      id: 'simons',
      title: 'Simon\'s Burger',
      category: 'Branding',
      type: 'Logo design',
      year: '2023',
      size: 'wide',
      cover: 'images/simons-1.jpg',
      text: 'A logo for a burger joint. I worked through pages of sketches before landing on one idea: the bottom bun doubles as a frying pan, a nod to the pan-fried patty. The mark went from pencil to flat colour to a bold outlined badge, paired with the *Butter Chicken* script and a palette of bun golds, melted-cheese yellow, lettuce green and ketchup red.',
      tools: 'Pencil & paper, Illustrator',
      layout: 'stack',   // one picture per row, full width
      images: [
        'images/simons-final.jpg',
        'images/simons-sketches.jpg',
        'images/simons-evolution.jpg',
        'images/simons-type.jpg',
        'images/simons-palette.jpg',
        'images/simons-board.jpg',
      ],
      links: [],
    },
    {
      id: 'illustration',
      title: 'Illustrations',
      category: 'Illustration',
      type: 'Digital art',
      year: '2021–23',
      size: 'wide',
      cover: 'images/art-3.jpg',
      text: 'Personal illustration work: car studies, pencil sketches and a Procreate portrait.',
      tools: 'Procreate, Photoshop',
      images: ['images/art-3.jpg', 'images/art-4.jpg', 'images/art-5.jpg', 'images/art-2.jpg', 'images/art-1.jpg'],
      links: [],
    },
    {
      id: 'photography',
      title: 'Automotive',
      category: 'Photography',
      type: 'Photography',
      year: '2024–25',
      size: '',
      cover: 'images/photo-4.jpg',
      text: 'Cars and bikes, shot and edited.',
      tools: 'Camera, Lightroom, Photoshop',
      layout: 'masonry',   // shows pictures in uneven columns, keeping their full shape
      images: ['images/photo-4.jpg', 'images/photo-3.jpg', 'images/photo-5.jpg', 'images/photo-6.jpg', 'images/photo-1.jpg', 'images/photo-2.jpg'],
      links: [],
    },
  ],

  /* ---------- About ---------- */
  // (Your about-me paragraph is now 'intro', near the top of this file.)
  skills: ['Graphic design', 'Branding', 'Packaging design', 'Visual design', 'Typography', 'Illustration', 'UI design', 'Video editing'],
  // Shown as "Familiar tools":
  tools: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Blender', 'Rhino 3D'],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    { when: 'Sep – Nov 2026', role: 'Graphic Designer (contract)', org: 'Flipkart', note: 'Big Billion Days' },
    { when: 'Mar – Dec 2025', role: 'Catalogue Designer II', org: 'Zepto', note: 'Catalogue team' },
    { when: 'Jul – Dec 2024', role: 'Junior Graphic Designer', org: 'Brandstudio', note: 'Social media team' },
    { when: 'Apr – Jun 2024', role: 'Graphic Design Intern', org: 'Azira', note: 'Creative design team' },
    { when: 'Nov 2023 – Feb 2024', role: 'Graphic Design Intern', org: 'Brandshark', note: 'Creative & marketing' },
    { when: 'May – Jul 2023', role: 'Graphic Design Intern', org: 'Minus Zero Robotics', note: 'Creative & marketing' },
    { when: '2020 – 2024', role: 'Bachelor of Design', org: 'IIITDM Jabalpur', note: 'Education' },
  ],

};
