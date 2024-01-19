export const projectsDataUk = [
  // 9-Lushwood Haven
  {
    id: 'lushwood-haven',
    imagePath: '/lushwood-haven.jpg',
    projectName: 'Lushwood Haven',
    type: 'Соло проект',
    responsibilities: null,
    links: [
      { github: 'https://github.com/SerhiiMukhin/js-team10-project' },
      { web: 'https://serhiimukhin.github.io/js-team10-project' },
      { backendGithub: 'https://github.com/333Nikita333/lushwood-haven-api' },
    ],
    description:
      '"Lushwood Haven App" — додаток, створений для зручності та надійності в процесі бронювання номерів в унікальному готелі, розташованому в мальовничому лісовому оазисі. Поєднання сучасних технологій із природним усамітненням створює ідеальне місце для відпочинку.',
    features: [
      {
        featureName: 'Просте бронювання номера',
        featureDesc:
          'Інтуїтивно зрозумілий інтерфейс для швидкого та легкого бронювання номерів із вибором дат перебування та типу потрібного номера в кілька дотиків',
      },
      {
        featureName: 'Детальна інформація',
        featureDesc:
          'Кожна кімната забезпечена детальним описом і фотографіями',
      },
      {
        featureName: 'Інтерактивні карти та навігація',
        featureDesc: 'Інтегровані карти для зручної навігації до готелю',
      },
      {
        featureName: 'Гнучкість і масштабованість',
        featureDesc:
          'Проста інтеграція з іншими системами та API для додаткових функцій',
      },
      {
        featureName: 'Ефект паралакса',
        featureDesc:
          'Унікальний ефект паралакса на кожній сторінці додатку, що створює вражаючу візуальну глибину',
      },
      {
        featureName: 'Відгуки',
        featureDesc:
          'Можливість переглядати відгуки та оцінки попередніх відвідувачів',
      },
      {
        featureName: 'Фотогалерея',
        featureDesc: `Розділ із фотографіями, завантаженими відвідувачами, що дозволяє побачити реальні візуальні огляди номерів і зручностей готелю`,
      },
      {
        featureName: 'Інтерактивні елементи',
        featureDesc:
          'Використання інтерактивних елементів, таких як анімація, для покращення взаємодії з користувачем',
      },
      {
        featureName: 'Адаптивність',
        featureDesc:
          'Адаптивний дизайн, що забезпечує комфортне використання додатку на різних пристроях',
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
    type: 'Командний проект',
    responsibilities: {
      role: 'SCRUM Майстер',
      list: [
        'Організація командної роботи',
        'Маршрути відгуків(backend)',
        'Документація Swagger(backend)',
        'Маршрути перевірки електронної пошти (backend)',
        'Рефакторинг коду(backend)',
        'Оптимізациія векторної та растрової графіки(frontend)',
        'Функціонал роботи слайдеру з відгуками(frontend)',
        'Верстка сторінки перевірки електронної пошти(frontend)',
        'Функціонал повторної відправки електронної пошти(frontend)',
        'Верстка футеру(frontend)',
        'Рефакторинг коду(frontend)',
      ],
    },
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
      'Це Full Stack додаток для управління часом, що містить календар, керування завданнями, статистику, реєстрацію користувачів, надсилання відгуків і керування даними профілю',
    features: [
      {
        featureName: 'Реєстрація користувача',
        featureDesc:
          'Користувачі можуть зареєструвати обліковий запис, щоб отримати доступ до додаткових функцій і персоналізувати роботу в додатку. Процес реєстрації вимагає надання необхідних даних, таких як ім’я, адреса електронної пошти та пароль',
      },
      {
        featureName: 'Календар',
        featureDesc:
          'Додаток надає перегляд календаря, щоб допомогти вам ефективно керувати своїм часом. Ви можете переглядати та переходити між різними місяцями та днями, щоб планувати й упорядковувати свої завдання',
      },
      {
        featureName: 'Управління завданнями',
        featureDesc:
          'Ви можете додавати, редагувати та видаляти завдання в календарі. Завдання можна призначити певним датам і містити такі деталі, як назва, опис, пріоритет і дата виконання. Виконані завдання можна позначати як виконані',
      },
      {
        featureName: 'Перегляд статистики',
        featureDesc:
          'Додаток пропонує статистичні дані, щоб отримати уявлення про вашу продуктивність. Ви можете переглядати графічні зображення виконаних завдань, відстежувати свій прогрес і визначати шаблони у своїй роботі',
      },
      {
        featureName: 'Керування даними профілю',
        featureDesc:
          'Користувачі мають можливість оновлювати інформацію свого профілю. Вони можуть змінювати такі деталі, як ім’я, електронна адреса, пароль та іншу відповідну інформацію, пов’язану з їхнім обліковим записом',
      },
      {
        featureName: 'Надсилання відгуку',
        featureDesc:
          'Користувачі можуть залишати відгуки про додаток, пропонувати вдосконалення або повідомляти про будь-які проблеми, з якими вони стикаються. Функція зворотного зв’язку дозволяє користувачам висловлювати свої думки та сприяти розвитку додатку',
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
    type: 'Соло проект',
    responsibilities: null,
    links: [
      { github: 'https://github.com/333Nikita333/phonebook-api' },
      { documentation: 'https://contacts-api-n3q6.onrender.com/api/docs' },
    ],
    description:
      'Бекенд персональної телефонної книги на основі бази даних MongoDB, який дозволяє користувачам додавати, редагувати, видаляти та переглядати свої контакти. Додаток реалізує реєстрацію та аутентифікацію користувачів. Авторизовані користувачі можуть додавати, редагувати, видаляти та переглядати свої контакти',
    features: [
      {
        featureName: 'Авторизація',
        featureDesc:
          'Реєстрація та вхід користувача, у тому числі через автентифікацію Google',
      },
      {
        featureName: 'Верифікація',
        featureDesc:
          'Перевірка користувача шляхом надсилання електронного листа',
      },
      {
        featureName: 'Менеджер контактів',
        featureDesc:
          'Реалізовані маршрути для взаємодії з книгою контактів: отримання всіх контактів користувача, а також створення, редагування та видалення контакту',
      },
      {
        featureName: 'Безпека',
        featureDesc:
          'Реалізовано захист даних користувача за допомогою токенів доступу (JWT) і хешування пароля (bcrypt)',
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
    type: 'Соло проект',
    responsibilities: null,
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
      'Image Publish App — це мобільний додаток, який дозволяє користувачам створювати публікації та додавати описи на основі зображень. Користувачі можуть поставити лайк до публікації, перейти до розділу коментарів і переглянути карту з маркером, що вказує місце, де була зроблена фотографія.',
    features: [
      {
        featureName: 'Firebase',
        featureDesc:
          'Зареєструйтеся та увійдіть у свій профіль за допомогою автентифікації Firebase. Усі дані користувача зберігаються в хмарній базі даних Firebase для надійності та доступності.',
      },
      {
        featureName: 'Публікація постів',
        featureDesc: 'Публікація постів у вигляді фотографій з описом',
      },
      {
        featureName: 'Особиста колекція постів',
        featureDesc: 'Перегляд власної колекції постів у вашому профілі',
      },
      {
        featureName: 'Коментарі та лайки',
        featureDesc:
          'Інтегрована можливість ставити лайки та коментувати публікації',
      },
      {
        featureName: 'Геолокація фотографій',
        featureDesc:
          'Перегляньте карту, щоб побачити, де було зроблено кожне фото',
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
    type: 'Соло проект',
    responsibilities: null,
    links: [
      { github: 'https://github.com/333Nikita333/phonebook' },
      { web: 'https://333nikita333.github.io/phonebook' },
      { documentation: 'https://connections-api.herokuapp.com/docs' },
    ],
    description:
      'Телефонна книга — це додаток на React для керування приватною колекцією контактів. Це дозволяє користувачам виконувати такі операції, як створення, видалення та редагування контактів',
    features: [
      {
        featureName: 'Backend',
        featureDesc:
          'Додаток використовує власну серверну частину та базу даних',
      },
      {
        featureName: 'Авторизація',
        featureDesc:
          'Реєстрація користувача та автентифікація за допомогою JWT',
      },
      {
        featureName: 'Керування контактами',
        featureDesc: 'Створення, читання, оновлення та видалення контактів',
      },
      {
        featureName: 'Пошук',
        featureDesc: 'Функція пошуку для пошуку контактів за іменем',
      },
      {
        featureName: 'Адаптивність',
        featureDesc: 'Адаптивний дизайн для різних розмірів екрана',
      },
      {
        featureName: 'Інтерфейс користувача',
        featureDesc: 'Зручний інтерфейс користувача з плавною взаємодією',
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
    responsibilities: null,
    links: [
      { github: 'https://github.com/333Nikita333/ip-address-tracker' },
      { web: 'https://ip-address-tracker-bice-beta.vercel.app' },
      { geolocateAPI: 'https://geo.ipify.org' },
    ],
    description:
      'IP Adress Tracker — це веб-додаток, розроблений за допомогою React і Vite для отримання інформації про місцезнаходження з IP-адреси. Він дозволяє користувачеві вводити IP-адресу та отримувати такі дані, як місцезнаходження, часовий пояс і провайдер підключення до Інтернету. Крім того, додаток також відображає карту з маркером, що вказує на місцезнаходження на основі отриманих даних',
    features: [
      {
        featureName: 'Відстеження IP-адреси',
        featureDesc:
          'Отримайте миттєвий доступ до ключової інформації про місцезнаходження',
      },
      {
        featureName: 'Детальна інформація',
        featureDesc:
          'Дізнатися інформацію про свого інтернет-провайдера та часовий пояс за IP-адресою',
      },
      {
        featureName: 'Інтерактивна карта',
        featureDesc:
          'Детальна візуалізація розташування, що показує країну, місто та регіон на інтерактивній карті',
      },
      {
        featureName: 'Швидкість і простота',
        featureDesc:
          'Миттєві результати без необхідності перезавантажувати сторінку',
      },
      {
        featureName: 'Адаптивність',
        featureDesc:
          'Адаптивний дизайн, що забезпечує комфортне використання додатку на різних пристроях',
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
    type: 'Командний проект',
    responsibilities: {
      role: 'SCRUM Майстер',
      list: [
        'Організація командної роботи',
        'Рефакторинг коду',
        'Кнопка прокручування вгору',
        'Додавання загальних і скинутих стилів',
        'Оптимізація зображення',
      ],
    },
    links: [
      { github: 'https://github.com/SerhiiMukhin/js-team10-project' },
      { web: 'https://serhiimukhin.github.io/js-team10-project' },
      {
        figma:
          'https://www.figma.com/file/G9EWd1jV9ht4fYTDcj2pxi/Filmoteka-(Copy)?type=design&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'Filmoteka — додаток, який надає зручний спосіб керувати своєю колекцією фільмів, надаючи детальну інформацію та можливість зберігати ваші улюблені фільми',
    features: [
      {
        featureName: 'Великий каталог',
        featureDesc: 'Відображення великого каталогу фільмів',
      },
      {
        featureName: 'Детальна інформація',
        featureDesc: 'Отримання повної інформації про кожен фільм',
      },
      {
        featureName: 'Особиста колекція',
        featureDesc: 'Створення власної колекції фільмів',
      },
      {
        featureName: 'Локальне сховище',
        featureDesc:
          'Використовуйте локальне сховище, щоб зберігати фільми у своїй колекції, навіть коли ви закриваєте додаток',
      },
      {
        featureName: 'REST API',
        featureDesc:
          'Зовнішній REST API для отримання додаткової інформації про фільм, збереження даних в актуальному стані',
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
    type: 'Командний проект',
    responsibilities: {
      role: 'SCRUM Майстер',
      list: [
        'Організація командної роботи',
        'Оформлення розділу',
        'Produce',
        'Рефакторинг коду',
      ],
    },
    links: [
      { github: 'https://github.com/IhorLeonov/ice-cream_team-project' },
      { web: 'https://ihorleonov.github.io/ice-cream_team-project' },
      {
        figma:
          'https://www.figma.com/file/au48QkRLwRTwfZCQQb53Op/ice-cream-(Copy)?type=design&node-id=0%3A1&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'Ice Cream — це веб-додаток, створений з використанням передових технологій веб-розробки, включаючи HTML5, SASS, BEM і JavaScript. Наш додаток надає зручний та інтерактивний спосіб замовити улюблене морозиво прямо з дому.',
    features: [
      {
        featureName: 'Персоналізовані замовлення',
        featureDesc:
          'Користувачі можуть додавати різноманітні начинки, соуси та додаткові інгредієнти до свого морозива, щоб створити справжній витвір мистецтва',
      },
      {
        featureName: 'Адаптивність',
        featureDesc:
          'Додаток розроблений для безперебійної роботи на мобільних пристроях, планшетах і комп’ютерах',
      },
      {
        featureName: 'Препроцесор SASS',
        featureDesc:
          'SASS використовується для написання більш зручного та структурованого коду CSS, що полегшує керування стилями',
      },
      {
        featureName: 'Методологія БЕМ',
        featureDesc:
          'Ми дотримуємося методології Block, Element, Modifier (BEM) для іменування класів, забезпечуючи узгодженість і зручність обслуговування',
      },
      {
        featureName: 'Оптимізація зображення',
        featureDesc:
          'Усі зображення оптимізовано для різних розмірів екрана, щоб покращити продуктивність і скоротити час завантаження',
      },
      {
        featureName: 'Анімація',
        featureDesc:
          'Інтегруйте анімацію за допомогою animate.css для зручності користувача',
      },
      {
        featureName: 'Відгуки',
        featureDesc: 'Можливість залишати та переглядати відгуки про додаток',
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
    type: 'Соло проект',
    responsibilities: null,
    links: [
      { github: 'https://github.com/333Nikita333/Web-Studio' },
      { web: 'https://333nikita333.github.io/Web-Studio' },
      {
        figma:
          'https://www.figma.com/file/lMs2r2u1EmMZnn4Kd9HO3v/Web-Studio-(Version-2.1)-(Copy)?type=design&mode=design&t=DTBDRs13CYBC8LbI-1',
      },
    ],
    description:
      'Цей проект є адаптивним макетом HTML для трьох версій: для мобільних пристроїв, планшетів і комп’ютерів, який використовує препроцесор SASS і дотримується методології BEM',
    features: [
      {
        featureName: 'Адаптивність',
        featureDesc:
          'Додаток розроблений для безперебійної роботи на мобільних пристроях, планшетах і комп’ютерах',
      },
      {
        featureName: 'Препроцесор SASS',
        featureDesc:
          'SASS використовується для написання більш зручного та структурованого коду CSS, що полегшує керування стилями',
      },
      {
        featureName: 'Методологія БЕМ',
        featureDesc:
          'Ми дотримуємося методології Block, Element, Modifier (BEM) для іменування класів, забезпечуючи узгодженість і зручність обслуговування',
      },
      {
        featureName: 'Оптимізація зображення',
        featureDesc:
          'Усі зображення оптимізовано для різних розмірів екрана, щоб покращити продуктивність і скоротити час завантаження',
      },
    ],
    technologies: {
      frontend: ['HTML5', 'CSS3', 'SASS', 'Bem', 'JS'],
    },
  },
];
