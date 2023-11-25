export const projectData = [
  {
    id: 'lushwood-haven',
    imagePath: '/lushwood-haven.jpg',
    projectName: 'Lushwood Haven',
    type: 'Solo Project',
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
    technologies: [
      'ReactJS',
      'React-router',
      'React-hook-form',
      'Styled-components',
      'React-datepicker',
      'React-icons',
      'React-parallax',
      'React-parallax-tilt',
      'React-photo-gallery',
      'Gsap',
      'Swiper',
    ],
  },
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
    description:
      'This is React application for time management, featuring a calendar, task management, statistics, user registration, feedback submission, and profile data management',
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
    technologies: [
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
  },
  {
    id: 'phonebook',
    imagePath: '/phonebook.jpg',
    projectName: 'Phonebook',
    type: 'Solo Project',
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
    technologies: [
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
  {
    id: 'web-studio',
    imagePath: '/web-studio.jpg',
    projectName: 'Web Studio',
    type: 'Solo Project',
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
    technologies: ['HTML5', 'CSS3', 'SASS', 'Bem', 'JS'],
  },
  {
    id: 'phonebook-api',
    imagePath: '/phonebook-api.jpg',
    projectName: 'Phonebook API',
    type: 'Solo Project',
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
    technologies: [
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
    technologies: [
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
    technologies: ['tech1', 'tech2', 'tech3'],
  },
  {
    id: 'image-publish-app',
    imagePath: 'https://picsum.photos/200/300',
    projectName: 'Goose Track',
    technologies: ['tech1', 'tech2', 'tech3'],
    type: 'Team Project',
    role: 'SCRUM Master',
    responsibilities: ['resp1', 'resp2', 'resp3'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed temporibus modi nemo architecto quo, est eligendi dignissimos doloremque soluta ex porro numquam provident natus iure laboriosam aliquam adipisci omnis?',
    features: [
      { featureName: 'feature1', featureDesc: 'featureDesc1' },
      { featureName: 'feature2', featureDesc: 'featureDesc2' },
      { featureName: 'feature3', featureDesc: 'featureDesc3' },
    ],
  },
];
