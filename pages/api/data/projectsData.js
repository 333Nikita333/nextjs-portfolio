export const projectsData = [
  // 9-Lushwood Haven
  {
    id: 'lushwood-haven',
    imagePath: '/lushwood-haven.jpg',
    projectName: 'Lushwood Haven',
    type: 'Solo Project',
    links: [
      { github: 'https://github.com/SerhiiMukhin/js-team10-project' },
      { web: 'https://serhiimukhin.github.io/js-team10-project' },
      { backendGithub: 'https://github.com/333Nikita333/lushwood-haven-api' },
    ],
    description:
      '"Lushwood Haven App" is an application created to provide convenience and reliability in the process of booking rooms in a unique hotel located in a picturesque forest oasis. The combination of modern technology with natural seclusion creates the ideal place to relax.',
    features: [
      {
        featureName: 'Simple Room Booking',
        featureDesc:
          'Intuitive interface for quick and easy room booking with selection of dates of stay and type of desired room in a few touches',
      },
      {
        featureName: 'Detailed Information',
        featureDesc:
          'Each room is provided with detailed descriptions and photographs',
      },
      {
        featureName: 'Interactive Maps and Navigation',
        featureDesc: 'Integrated maps for easy navigation to the hotel',
      },
      {
        featureName: 'Flexibility and Scalability',
        featureDesc:
          'Easy integration with other systems and APIs for additional features',
      },
      {
        featureName: 'Parallax Effect',
        featureDesc:
          'Unique parallax effect on every page of the app, creating impressive visual depth',
      },
      {
        featureName: 'Reviews',
        featureDesc:
          'Ability to view reviews and ratings from previous visitors',
      },
      {
        featureName: 'Photo Gallery',
        featureDesc: `Section with photos uploaded by visitors, allowing you to see real visual reviews of the hotel&apos;s rooms and amenities`,
      },
      {
        featureName: 'Interactive Elements',
        featureDesc:
          'Using interactive elements such as animations to improve the user experience',
      },
      {
        featureName: 'Adaptability',
        featureDesc:
          'Adaptive design ensuring comfortable use of the application on various devices',
      },
    ],
    technologies: {
      frontend: [
        'Vite',
        'TS',
        'React',
        'React-router',
        'React-hook-form',
        'Styled-components',
        'Fancyapps',
        'React-datepicker',
        'React-icons',
        'React-parallax',
        'React-parallax-tilt',
        'React-photo-gallery',
        'Gsap',
        'Swiper',
      ],
      backend: [
        'TS',
        'Node',
        'Express',
        'Class-transformer',
        'Class-validator',
        'Cloudinary',
        'Cors',
        'Dotenv',
        'JsonWebToken',
        'Mongoose',
        'Nulter',
        'Reflect-metadata',
        'Routing-controllers',
      ],
    },
  },
  // 8-Goose Track
  {
    id: 'goose-track',
    imagePath: '/goose-track.jpg',
    projectName: 'Goose Track',
    type: 'Team Project',
    role: 'SCRUM Master',
    responsibilities: [
      'Organization of team work',
      'Feedback routes(backend)',
      'Swagger documentation(backend)',
      'Email verification routes(backend)',
      'Code refactoring(backend)',
      'Svg and image optimization(frontend)',
      'Slider functionality with reviews(frontend)',
      'Mail verification route layout(frontend)',
      'Email resend functionality(frontend)',
      'Footer section(frontend)',
      'Code refactoring(frontend)',
    ],
    links: [
      { github: 'https://github.com/IhorLeonov/project-Bra1n_Gain' },
      { web: 'https://ihorleonov.github.io/project-Bra1n_Gain' },
      { backendGithub: 'https://github.com/IhorLeonov/Bra1n_Gain-backend' },
      { documentation: 'https://bra1n-gain-backend.onrender.com/api-docs' },
      {
        figma:
          'https://www.figma.com/file/gb1s67vWNoBYl1PY8VVhmF/Goose-Track-(Copy)?type=design&node-id=0%3A1&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'This is Full Stack application for time management, featuring a calendar, task management, statistics, user registration, feedback submission, and profile data management',
    features: [
      {
        featureName: 'User Registration',
        featureDesc:
          'Users can register an account to access additional features and have personalized experiences within the app. The registration process requires providing necessary details such as name, email address, and password',
      },
      {
        featureName: 'Calendar',
        featureDesc:
          'The app provides a calendar view to help you manage your time effectively. You can view and navigate through different months and days to plan and organize your tasks',
      },
      {
        featureName: 'Task Management',
        featureDesc:
          'You can add, edit, and delete tasks within the calendar. Tasks can be assigned to specific dates and can include details such as title, description, priority, and due date. Completed tasks can be marked as done',
      },
      {
        featureName: 'Statistics',
        featureDesc:
          'The app offers statistics to provide insights into your productivity. You can view graphical representations of your completed tasks, track your progress, and identify patterns in your work',
      },
      {
        featureName: 'Profile Data Management',
        featureDesc:
          'Users have the ability to update their profile information. They can modify details like name, email, password, and other relevant information associated with their account',
      },
      {
        featureName: 'Feedback Submission',
        featureDesc:
          'Users can provide feedback about the app, suggest improvements, or report any issues they encounter. The feedback feature allows users to communicate their thoughts and contribute to the development of the app',
      },
    ],
    technologies: {
      frontend: [
        'ReactJS',
        'Redux Toolkit',
        'Axios',
        'Date-fns',
        'Formik',
        'Framer-motion',
        'Nanoid',
        'React-hot-toast',
        'React-i18next',
        'React-icons',
        'React-router',
        'Redux-persist',
        'Slick-carousel',
        'Styled-components',
        'Yup',
      ],
      backend: [
        'NodeJS',
        'ExpressJS',
        'Nodemon',
        'Sendgrid',
        'Bcrypt',
        'Cloudinary',
        'Cors',
        'Dotenv',
        'Joi',
        'JsonWebToken',
        'Mongoose',
        'Morgan',
        'Multer',
        'Multer-storage-cloudinary',
        'Nanoid',
        'Swagger-ui-express',
      ],
    },
  },
  // 7-Phonebook API
  {
    id: 'phonebook-api',
    imagePath: '/phonebook-api.jpg',
    projectName: 'Phonebook API',
    type: 'Solo Project',
    links: [
      { github: 'https://github.com/333Nikita333/phonebook-api' },
      { documentation: 'https://contacts-api-n3q6.onrender.com/api/docs' },
    ],
    description:
      'Personal phone book backend based on MongoDB database that allows users to add, edit, delete and view their contacts. The application implements user registration and authentication. Authorized users can add, edit, delete and view their contacts',
    features: [
      {
        featureName: 'Authorization',
        featureDesc:
          'User registration and login, including through Google authenticationed',
      },
      {
        featureName: 'Verification',
        featureDesc: 'User verification by sending an email',
      },
      {
        featureName: 'Contact Manager',
        featureDesc:
          'Implemented routes for interacting with the contact book: obtaining all user contacts, as well as creating, editing and deleting a contact',
      },
      {
        featureName: 'Security',
        featureDesc:
          'Implemented user data protection using access tokens (JWT) and password hashing (bcrypt)',
      },
    ],
    technologies: {
      backend: [
        'NodeJS',
        'ExpressJS',
        'Bcrypt',
        'Cloudinary',
        'Cors',
        'Dotenv',
        'Jest',
        'Joi',
        'JsonWebToken',
        'Mongoose',
        'Morgan',
        'Multer',
        'Nanoid',
        'Nodemailer',
        'Nodemon',
        'Supertest',
        'Swagger-ui-express',
        'Passport',
        'Passport-google-oauth20',
      ],
    },
  },
  // 6-Image Publish App
  {
    id: 'image-publish-app',
    imagePath: '/image-publish-app.jpg',
    projectName: 'Image Publish App',
    type: 'Solo Project',
    links: [
      { github: 'https://github.com/333Nikita333/react-native-project' },
      {
        qrCode:
          'https://expo.dev/%40mykyta_hilis/react-native-project?serviceType=eas&distribution=expo-go&scheme=exp%2Breact-native-project&channel=master&sdkVersion=47.0.0',
      },
      {
        expoAppLink:
          'exp://u.expo.dev/e100b86f-98aa-46ce-99e1-ab75266f53d5?channel-name=master&runtime-version=exposdk%3A47.0.0',
      },
      {
        figma:
          'https://www.figma.com/file/OxWLon7kLrdpgB9tiNp9xo/Homework-(Copy)?type=design&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'Image Publish App is a mobile application that allows users to create posts and add descriptions based on images. Users can like the post, go to the comments section and view a map with a marker indicating the location where the photo was taken.',
    features: [
      {
        featureName: 'Firebase',
        featureDesc:
          'Register and login to your app using Firebase authentication. All user data is stored in the Firebase cloud database for reliability and availability.',
      },
      {
        featureName: 'Publishing posts',
        featureDesc:
          'Publishing posts in the form of photographs with descriptions',
      },
      {
        featureName: 'Personal collection of posts',
        featureDesc: 'View your own collection of posts on your profile',
      },
      {
        featureName: 'Comments and likes',
        featureDesc: 'Integrated ability to like and comment on posts',
      },
      {
        featureName: 'Geolocation of photos',
        featureDesc: 'View a map to see where each photo was taken',
      },
    ],
    technologies: {
      frontend: [
        'ReactJS',
        'Firebase',
        'Redux Toolkit',
        'Redux-persist',
        'React-native',
        'React-native-gesture-handler',
        'React-native-maps',
        'React-native-reanimated',
        'React-native-safe-area-context',
        'React-native-screens',
        'React-native-uuid',
        'React-native-dotenv',
        'React-navigation',
        'Vector-icons',
        'Expo',
        'Expo-camera',
        'Expo-dev-client',
        'Expo-font',
        'Expo-image-picker',
        'Expo-location',
        'Expo-media-library',
        'Expo-splash-screen',
        'Expo-status-bar',
        'Expo-updates',
      ],
    },
  },
  // 5-Phonebook App
  {
    id: 'phonebook',
    imagePath: '/phonebook.jpg',
    projectName: 'Phonebook',
    type: 'Solo Project',
    links: [
      { github: 'https://github.com/333Nikita333/phonebook' },
      { web: 'https://333nikita333.github.io/phonebook' },
      { documentation: 'https://connections-api.herokuapp.com/docs' },
    ],
    description:
      'Phonebook is a React application for managing a private collection of contacts. It allows users to perform operations such as creating, deleting, and editing contacts',
    features: [
      {
        featureName: 'Backend',
        featureDesc: `The application uses its own backend and database - ${(
          <a
            href="https://connections-api.herokuapp.com/docs"
            target="_blank"
            rel="noreferrer nofollow noopener"
          ></a>
        )}`,
      },
      {
        featureName: 'Authorization',
        featureDesc: 'User registration and authentication using JWT',
      },
      {
        featureName: 'Сontact management',
        featureDesc: 'Create, read, update, and delete contacts',
      },
      {
        featureName: 'Search',
        featureDesc: 'Search functionality to find contacts by name',
      },
      {
        featureName: 'Adaptability',
        featureDesc: 'Responsive design for various screen sizes',
      },
      {
        featureName: 'User Interface',
        featureDesc: 'User-friendly UI with smooth interactions',
      },
    ],
    technologies: {
      frontend: [
        'ReactJS',
        'Redux Toolkit',
        'Axios',
        'Formik',
        'Prop-types',
        'React-helmet',
        'React-hot-toast',
        'React-icons',
        'React-router',
        'Redux-persist',
        'Styled-components',
        'Yup',
      ],
    },
  },
  // 4-IP Adress Tracker
  {
    id: 'ip-adress-tracker',
    imagePath: '/ip-adress-tracker.jpg',
    projectName: 'IP Adress Tracker',
    type: 'Solo Project',
    links: [
      { github: 'https://github.com/333Nikita333/ip-address-tracker' },
      { web: 'https://ip-address-tracker-bice-beta.vercel.app' },
      { geolocateAPI: 'https://geo.ipify.org' },
    ],
    description:
      'IP Adress Tracker project is a web application developed using React and Vite to get location information from an IP address. It allows the user to enter an IP address and get data such as location, time zone, and internet connection provider. In addition, the application also displays a map with a marker indicating the location based on the received data',
    features: [
      {
        featureName: 'IP Address Tracking',
        featureDesc: 'Get instant access to key location information',
      },
      {
        featureName: 'Detailed Information',
        featureDesc:
          'Find out information about your Internet service provider and time zone by IP address',
      },
      {
        featureName: 'Interactive map',
        featureDesc:
          'Detailed location visualization showing country, city and region on an interactive map',
      },
      {
        featureName: 'Speed and simplicity',
        featureDesc: 'Instant results without the need to reload the page',
      },
      {
        featureName: 'Adaptability',
        featureDesc:
          'Adaptive design ensuring comfortable use of the application on various devices',
      },
    ],
    technologies: {
      frontend: [
        'Vite',
        'ReactJS',
        'Axios',
        'Leaflet',
        'React-hook-form',
        'React-icons',
        'React-leaflet',
        'React-router',
        'React-toastify',
        'Styled-components',
      ],
    },
  },
  // 3-Filmoteka
  {
    id: 'filmoteka',
    imagePath: '/filmoteka.jpg',
    projectName: 'Filmoteka',
    type: 'Team Project',
    role: 'SCRUM Master',
    responsibilities: [
      'Organization of team work',
      'Code refactoring',
      'Scroll up button',
      'Adding common and reset styles',
      'Image optimization',
    ],
    links: [
      { github: 'https://github.com/SerhiiMukhin/js-team10-project' },
      { web: 'https://serhiimukhin.github.io/js-team10-project' },
      {
        figma:
          'https://www.figma.com/file/G9EWd1jV9ht4fYTDcj2pxi/Filmoteka-(Copy)?type=design&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'Filmoteka is an application that provides a convenient way to manage your film collection, providing detailed information and the ability to save your favorite films',
    features: [
      {
        featureName: 'Large catalog',
        featureDesc: 'Displaying an extensive movie catalog',
      },
      {
        featureName: 'Detailed information',
        featureDesc: 'Getting complete information about each movie',
      },
      {
        featureName: 'Personal collection',
        featureDesc: 'Creating your own movie collection',
      },
      {
        featureName: 'Local storage',
        featureDesc:
          'Use local storage to save movies to your collection even when you close the app',
      },
      {
        featureName: 'REST API',
        featureDesc:
          'External REST API for additional movie information, keeping data up to date',
      },
    ],
    technologies: {
      frontend: [
        'Parcel',
        'HTML5',
        'CSS3',
        'SASS',
        'BEM',
        'JS',
        'Axios',
        'Basiclightbox',
        'Handlebars',
        'Modern-normalize',
        'Notiflix',
        'Tui-pagination',
      ],
    },
  },
  // 2-Ice Cream
  {
    id: 'ice-cream',
    imagePath: '/ice-cream.jpg',
    projectName: 'Ice Cream',
    type: 'Team Project',
    role: 'SCRUM Master',
    responsibilities: [
      'Organization of team work',
      'Layout of the "Producs" section',
      'Сode refactoring',
    ],
    links: [
      { github: 'https://github.com/IhorLeonov/ice-cream_team-project' },
      { web: 'https://ihorleonov.github.io/ice-cream_team-project' },
      {
        figma:
          'https://www.figma.com/file/au48QkRLwRTwfZCQQb53Op/ice-cream-(Copy)?type=design&node-id=0%3A1&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'Ice Cream is a team project created using advanced web development technologies including HTML5, SASS, BEM and JavaScript. Our app provides a convenient and interactive way to order your favorite ice cream right from the comfort of your home.',
    features: [
      {
        featureName: 'Personalized Orders',
        featureDesc:
          'Users can add a variety of toppings, sauces and additional ingredients to their ice cream to create a true work of art',
      },
      {
        featureName: 'Adaptability',
        featureDesc:
          'The application is designed to work seamlessly on mobile, tablets, and desktop',
      },
      {
        featureName: 'SASS Preprocessor',
        featureDesc:
          'SASS is used to write more maintainable and structured CSS code, making it easier to manage styles',
      },
      {
        featureName: 'BEM Methodology',
        featureDesc:
          'We follow the Block, Element, Modifier (BEM) methodology for class naming, ensuring consistency and maintainability',
      },
      {
        featureName: 'Image Optimization',
        featureDesc:
          'All images have been optimized for different screen sizes to improve performance and reduce load times',
      },
      {
        featureName: 'Animations',
        featureDesc:
          'Integrate animations using animate.css for a good user experience',
      },
      {
        featureName: 'Reviews',
        featureDesc: 'Ability to leave and view reviews about the application',
      },
    ],
    technologies: {
      frontend: [
        'HTML5',
        'CSS3',
        'SASS',
        'Bem',
        'JS',
        'Parcel',
        'Animate.css',
        'Modern-normalize',
      ],
    },
  },
  // 1-Web Studio
  {
    id: 'web-studio',
    imagePath: '/web-studio.jpg',
    projectName: 'Web Studio',
    type: 'Solo Project',
    links: [
      { github: 'https://github.com/333Nikita333/Web-Studio' },
      { web: 'https://333nikita333.github.io/Web-Studio' },
      {
        figma:
          'https://www.figma.com/file/lMs2r2u1EmMZnn4Kd9HO3v/Web-Studio-(Version-2.1)-(Copy)?type=design&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'This project is an adaptive HTML layout for three versions: mobile, tablet, and desktop, utilizing the SASS preprocessor and following the BEM methodology',
    features: [
      {
        featureName: 'Adaptability',
        featureDesc:
          'The application is designed to work seamlessly on mobile, tablets, and desktop',
      },
      {
        featureName: 'SASS Preprocessor',
        featureDesc:
          'SASS is used to write more maintainable and structured CSS code, making it easier to manage styles',
      },
      {
        featureName: 'BEM Methodology',
        featureDesc:
          'We follow the Block, Element, Modifier (BEM) methodology for class naming, ensuring consistency and maintainability',
      },
      {
        featureName: 'Image Optimization',
        featureDesc:
          'All images have been optimized for different screen sizes to improve performance and reduce load times',
      },
    ],
    technologies: {
      frontend: ['HTML5', 'CSS3', 'SASS', 'Bem', 'JS'],
    },
  },
];
