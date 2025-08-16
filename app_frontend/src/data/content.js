/**
 * Content catalog with basic multi-language (en/es) and multi-age support (child/adult).
 * In a real app this could be synced from a backend or CDN.
 */

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
];

export const AGE_GROUPS = [
  { code: 'child', name: 'Child' },
  { code: 'adult', name: 'Adult' },
];

export const MODULES = {
  en: {
    child: [
      {
        id: 'literacy',
        title: 'Literacy',
        description: 'Learn letters, sounds, and words.',
        color: '#1976d2',
        lessons: [
          { id: 'letters', title: 'Letters A-M', duration: 10 },
          { id: 'sounds', title: 'Sounds and Rhymes', duration: 12 },
        ],
        quizzes: [
          { id: 'lit-q1', title: 'Letter Match', questions: 5 },
        ],
      },
      {
        id: 'math',
        title: 'Math',
        description: 'Numbers, counting, and basic operations.',
        color: '#43a047',
        lessons: [
          { id: 'numbers', title: 'Numbers 1-20', duration: 10 },
          { id: 'add', title: 'Adding with Dots', duration: 12 },
        ],
        quizzes: [
          { id: 'math-q1', title: 'Count and Add', questions: 5 },
        ],
      },
      {
        id: 'thinking',
        title: 'Critical Thinking',
        description: 'Puzzles and patterns for reasoning.',
        color: '#ffb300',
        lessons: [
          { id: 'patterns', title: 'Find the Pattern', duration: 8 },
        ],
        quizzes: [{ id: 'think-q1', title: 'Puzzle Time', questions: 4 }],
      },
    ],
    adult: [
      {
        id: 'literacy',
        title: 'Adult Literacy',
        description: 'Reading comprehension and writing basics.',
        color: '#1976d2',
        lessons: [
          { id: 'read1', title: 'Reading Short Stories', duration: 15 },
          { id: 'write1', title: 'Writing Sentences', duration: 18 },
        ],
        quizzes: [{ id: 'alit-q1', title: 'Comprehension Check', questions: 6 }],
      },
      {
        id: 'vocational',
        title: 'Vocational Skills',
        description: 'Practical job skills for daily life.',
        color: '#43a047',
        lessons: [
          { id: 'budget', title: 'Budgeting Basics', duration: 16 },
          { id: 'safety', title: 'Workplace Safety', duration: 12 },
        ],
        quizzes: [{ id: 'voc-q1', title: 'Safety First', questions: 5 }],
      },
      {
        id: 'math',
        title: 'Everyday Math',
        description: 'Percentages, measurements, and more.',
        color: '#ffb300',
        lessons: [
          { id: 'percent', title: 'Percent and Discount', duration: 14 },
        ],
        quizzes: [{ id: 'emath-q1', title: 'Shop Smart', questions: 5 }],
      },
    ],
  },
  es: {
    child: [
      {
        id: 'literacy',
        title: 'Alfabetización',
        description: 'Aprende letras, sonidos y palabras.',
        color: '#1976d2',
        lessons: [
          { id: 'letters', title: 'Letras A-M', duration: 10 },
          { id: 'sounds', title: 'Sonidos y Rimas', duration: 12 },
        ],
        quizzes: [{ id: 'lit-q1', title: 'Empareja Letras', questions: 5 }],
      },
      {
        id: 'math',
        title: 'Matemáticas',
        description: 'Números, conteo y operaciones básicas.',
        color: '#43a047',
        lessons: [
          { id: 'numbers', title: 'Números 1-20', duration: 10 },
          { id: 'add', title: 'Sumar con puntos', duration: 12 },
        ],
        quizzes: [{ id: 'math-q1', title: 'Cuenta y Suma', questions: 5 }],
      },
      {
        id: 'thinking',
        title: 'Pensamiento Crítico',
        description: 'Acertijos y patrones para razonar.',
        color: '#ffb300',
        lessons: [{ id: 'patterns', title: 'Encuentra el patrón', duration: 8 }],
        quizzes: [{ id: 'think-q1', title: 'Hora de acertijos', questions: 4 }],
      },
    ],
    adult: [
      {
        id: 'literacy',
        title: 'Alfabetización de Adultos',
        description: 'Comprensión de lectura y escritura básica.',
        color: '#1976d2',
        lessons: [
          { id: 'read1', title: 'Lectura de cuentos', duration: 15 },
          { id: 'write1', title: 'Escribe oraciones', duration: 18 },
        ],
        quizzes: [{ id: 'alit-q1', title: 'Comprensión', questions: 6 }],
      },
      {
        id: 'vocational',
        title: 'Habilidades Vocacionales',
        description: 'Habilidades prácticas para el trabajo.',
        color: '#43a047',
        lessons: [
          { id: 'budget', title: 'Presupuesto básico', duration: 16 },
          { id: 'safety', title: 'Seguridad laboral', duration: 12 },
        ],
        quizzes: [{ id: 'voc-q1', title: 'Seguridad', questions: 5 }],
      },
      {
        id: 'math',
        title: 'Matemáticas Cotidianas',
        description: 'Porcentajes, medidas y más.',
        color: '#ffb300',
        lessons: [{ id: 'percent', title: 'Porcentaje y descuento', duration: 14 }],
        quizzes: [{ id: 'emath-q1', title: 'Compra inteligente', questions: 5 }],
      },
    ],
  }
};

export const STRINGS = {
  en: {
    dashboard: 'Dashboard',
    continueLearning: 'Continue learning',
    yourProgress: 'Your Progress',
    modules: 'Modules',
    startLesson: 'Start Lesson',
    takeQuiz: 'Take Quiz',
    achievements: 'Achievements',
    profile: 'Profile',
    settings: 'Settings',
    offline: 'Offline',
    syncNow: 'Sync Now',
    lastSync: 'Last Sync',
    selectLanguage: 'Language',
    selectAgeGroup: 'Age Group',
    register: 'Create Profile',
    login: 'Login',
    name: 'Name',
    welcome: 'Welcome to LearnBridge',
  },
  es: {
    dashboard: 'Panel',
    continueLearning: 'Continuar aprendiendo',
    yourProgress: 'Tu progreso',
    modules: 'Módulos',
    startLesson: 'Iniciar lección',
    takeQuiz: 'Hacer cuestionario',
    achievements: 'Logros',
    profile: 'Perfil',
    settings: 'Configuración',
    offline: 'Sin conexión',
    syncNow: 'Sincronizar',
    lastSync: 'Última sincronización',
    selectLanguage: 'Idioma',
    selectAgeGroup: 'Grupo de edad',
    register: 'Crear perfil',
    login: 'Iniciar sesión',
    name: 'Nombre',
    welcome: 'Bienvenido a LearnBridge',
  },
};
