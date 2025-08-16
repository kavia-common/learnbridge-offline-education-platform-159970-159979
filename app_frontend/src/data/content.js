 /**
  * Content catalog with basic multi-language (en/es) and multi-age support (child/adult).
  * In a real app this could be synced from a backend or CDN.
  */

 // PUBLIC_INTERFACE
 export const LANGUAGES = [
   { code: 'en', name: 'English' },
   { code: 'es', name: 'Español' },
 ];

 // PUBLIC_INTERFACE
 export const AGE_GROUPS = [
   { code: 'child', name: 'Child' },
   { code: 'adult', name: 'Adult' },
 ];

 // PUBLIC_INTERFACE
 // Updated to support Grades 1 through 12, plus Adult.
 export const GRADE_LEVELS = [
   { code: '1', name: 'Grade 1' },
   { code: '2', name: 'Grade 2' },
   { code: '3', name: 'Grade 3' },
   { code: '4', name: 'Grade 4' },
   { code: '5', name: 'Grade 5' },
   { code: '6', name: 'Grade 6' },
   { code: '7', name: 'Grade 7' },
   { code: '8', name: 'Grade 8' },
   { code: '9', name: 'Grade 9' },
   { code: '10', name: 'Grade 10' },
   { code: '11', name: 'Grade 11' },
   { code: '12', name: 'Grade 12' },
   // For adult content, grade level is not applicable but represented here for consistency.
   { code: 'adult', name: 'Adult' },
 ];

 // PUBLIC_INTERFACE
 export const MODULES = {
   en: {
     child: [
       {
         id: 'literacy',
         title: 'Literacy',
         description: 'Learn letters, sounds, and words.',
         color: '#1976d2',
         // Starts at Grade 1
         gradeLevels: ['1', '2'],
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
         gradeLevels: ['1', '2', '3'],
         lessons: [
           { id: 'numbers', title: 'Numbers 1-20', duration: 10 },
           { id: 'add', title: 'Adding with Dots', duration: 12 },
         ],
         quizzes: [
           { id: 'math-q1', title: 'Count and Add', questions: 5 },
         ],
       },
       // NEW: Fractions & Measurement for Grades 4–5
       {
         id: 'fractions',
         title: 'Fractions & Measurement',
         description: 'Fractions, equivalent fractions, and common units of measure.',
         color: '#ef6c00',
         gradeLevels: ['4', '5'],
         lessons: [
           { id: 'frac_basics', title: 'Understanding Fractions', duration: 14 },
           { id: 'measure_units', title: 'Measuring Length & Volume', duration: 12 },
         ],
         quizzes: [{ id: 'frac-q1', title: 'Fractions Basics', questions: 5 }],
       },
       {
         id: 'thinking',
         title: 'Critical Thinking',
         description: 'Puzzles and patterns for reasoning.',
         color: '#ffb300',
         gradeLevels: ['1', '2', '3', '4'],
         lessons: [
           { id: 'patterns', title: 'Find the Pattern', duration: 8 },
         ],
         quizzes: [{ id: 'think-q1', title: 'Puzzle Time', questions: 4 }],
       },
       // Upper Middle School: Algebra Foundations (Grades 6–8)
       {
         id: 'algebra',
         title: 'Algebra Foundations',
         description: 'Linear equations, expressions, and problem solving.',
         color: '#8e24aa',
         gradeLevels: ['6', '7', '8'],
         lessons: [
           { id: 'lin_eq', title: 'Solving Linear Equations', duration: 15 },
           { id: 'expr', title: 'Simplifying Expressions', duration: 12 },
         ],
         quizzes: [{ id: 'alg-q1', title: 'Algebra Basics', questions: 3 }],
       },
       // High School: Grade 9 – Geometry
       {
         id: 'geometry',
         title: 'Geometry',
         description: 'Triangles, circles, and basic proofs.',
         color: '#26a69a',
         gradeLevels: ['9'],
         lessons: [
           { id: 'triangles', title: 'Triangles and Angles', duration: 16 },
           { id: 'circles', title: 'Circles and Arcs', duration: 14 },
         ],
         quizzes: [{ id: 'geo-q1', title: 'Geometry Fundamentals', questions: 4 }],
       },
       // NEW: High School: Grade 10 – Algebra II
       {
         id: 'algebra2',
         title: 'Algebra II',
         description: 'Quadratics, functions, and exponents.',
         color: '#d81b60',
         gradeLevels: ['10'],
         lessons: [
           { id: 'quadratics', title: 'Quadratic Equations', duration: 16 },
           { id: 'functions', title: 'Functions & Graphs', duration: 14 },
         ],
         quizzes: [{ id: 'alg2-q1', title: 'Algebra II Check', questions: 5 }],
       },
       // NEW: High School: Grade 11 – Precalculus & Trig
       {
         id: 'precalculus',
         title: 'Precalculus & Trigonometry',
         description: 'Trig ratios, unit circle, and function behavior.',
         color: '#3949ab',
         gradeLevels: ['11'],
         lessons: [
           { id: 'trig', title: 'Sine, Cosine, and Tangent', duration: 16 },
           { id: 'unit_circle', title: 'Unit Circle Essentials', duration: 14 },
         ],
         quizzes: [{ id: 'precalc-q1', title: 'Trigonometry Basics', questions: 5 }],
       },
       // NEW: High School: Grade 12 – Statistics & Probability
       {
         id: 'statistics',
         title: 'Statistics & Probability',
         description: 'Mean, median, variability, and simple probability.',
         color: '#00796b',
         gradeLevels: ['12'],
         lessons: [
           { id: 'descriptive', title: 'Descriptive Statistics', duration: 14 },
           { id: 'prob', title: 'Basic Probability', duration: 14 },
         ],
         quizzes: [{ id: 'stats-q1', title: 'Statistics Fundamentals', questions: 5 }],
       },

       // High School: Grade 10 – Biology (non-math, retained)
       {
         id: 'biology',
         title: 'Biology',
         description: 'Cells, genetics, and living systems.',
         color: '#2e7d32',
         gradeLevels: ['10'],
         lessons: [
           { id: 'cells', title: 'Cells and Organelles', duration: 15 },
           { id: 'genetics', title: 'DNA and Inheritance', duration: 16 },
         ],
         quizzes: [{ id: 'bio-q1', title: 'Introduction to Biology', questions: 4 }],
       },
       // High School: Grade 11 – English Literature (non-math, retained)
       {
         id: 'literature_hs',
         title: 'English Literature & Composition',
         description: 'Reading, analysis, and effective writing.',
         color: '#5e35b1',
         gradeLevels: ['11'],
         lessons: [
           { id: 'poetry', title: 'Reading Poetry', duration: 14 },
           { id: 'analysis', title: 'Close Reading & Analysis', duration: 15 },
         ],
         quizzes: [{ id: 'englit-q1', title: 'Literature & Composition Basics', questions: 4 }],
       },
       // High School: Grade 12 – Social Studies/History (non-math, retained)
       {
         id: 'history',
         title: 'Social Studies & History',
         description: 'Civics, sources, and major global events.',
         color: '#8d6e63',
         gradeLevels: ['12'],
         lessons: [
           { id: 'civics', title: 'Civics & Government', duration: 14 },
           { id: 'events', title: 'Major 20th Century Events', duration: 16 },
         ],
         quizzes: [{ id: 'hist-q1', title: 'History & Civics Overview', questions: 4 }],
       },
     ],
     adult: [
       {
         id: 'literacy',
         title: 'Adult Literacy',
         description: 'Reading comprehension and writing basics.',
         color: '#1976d2',
         gradeLevels: ['adult'],
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
         gradeLevels: ['adult'],
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
         gradeLevels: ['adult'],
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
         gradeLevels: ['1', '2'],
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
         gradeLevels: ['1', '2', '3'],
         lessons: [
           { id: 'numbers', title: 'Números 1-20', duration: 10 },
           { id: 'add', title: 'Sumar con puntos', duration: 12 },
         ],
         quizzes: [{ id: 'math-q1', title: 'Cuenta y Suma', questions: 5 }],
       },
       // NUEVO: Fracciones y Medición para 4–5
       {
         id: 'fractions',
         title: 'Fracciones y Medición',
         description: 'Fracciones, equivalencias y unidades de medida comunes.',
         color: '#ef6c00',
         gradeLevels: ['4', '5'],
         lessons: [
           { id: 'frac_basics', title: 'Entender las fracciones', duration: 14 },
           { id: 'measure_units', title: 'Medir longitud y volumen', duration: 12 },
         ],
         quizzes: [{ id: 'frac-q1', title: 'Conceptos de Fracciones', questions: 5 }],
       },
       {
         id: 'thinking',
         title: 'Pensamiento Crítico',
         description: 'Acertijos y patrones para razonar.',
         color: '#ffb300',
         gradeLevels: ['1', '2', '3', '4'],
         lessons: [{ id: 'patterns', title: 'Encuentra el patrón', duration: 8 }],
         quizzes: [{ id: 'think-q1', title: 'Hora de acertijos', questions: 4 }],
       },
       // Secundaria baja: Fundamentos de Álgebra (Grados 6–8)
       {
         id: 'algebra',
         title: 'Fundamentos de Álgebra',
         description: 'Ecuaciones lineales, expresiones y resolución de problemas.',
         color: '#8e24aa',
         gradeLevels: ['6', '7', '8'],
         lessons: [
           { id: 'lin_eq', title: 'Resolver ecuaciones lineales', duration: 15 },
           { id: 'expr', title: 'Simplificar expresiones', duration: 12 },
         ],
         quizzes: [{ id: 'alg-q1', title: 'Conceptos básicos de Álgebra', questions: 3 }],
       },
       // Bachillerato: Grado 9 – Geometría
       {
         id: 'geometry',
         title: 'Geometría',
         description: 'Triángulos, círculos y pruebas básicas.',
         color: '#26a69a',
         gradeLevels: ['9'],
         lessons: [
           { id: 'triangles', title: 'Triángulos y ángulos', duration: 16 },
           { id: 'circles', title: 'Círculos y arcos', duration: 14 },
         ],
         quizzes: [{ id: 'geo-q1', title: 'Fundamentos de Geometría', questions: 4 }],
       },
       // NUEVO: Bachillerato: Grado 10 – Álgebra II
       {
         id: 'algebra2',
         title: 'Álgebra II',
         description: 'Cuadráticas, funciones y exponentes.',
         color: '#d81b60',
         gradeLevels: ['10'],
         lessons: [
           { id: 'quadratics', title: 'Ecuaciones cuadráticas', duration: 16 },
           { id: 'functions', title: 'Funciones y gráficas', duration: 14 },
         ],
         quizzes: [{ id: 'alg2-q1', title: 'Repaso de Álgebra II', questions: 5 }],
       },
       // NUEVO: Bachillerato: Grado 11 – Precálculo y Trigonometría
       {
         id: 'precalculus',
         title: 'Precálculo y Trigonometría',
         description: 'Razones trigonométricas, circunferencia unitaria y funciones.',
         color: '#3949ab',
         gradeLevels: ['11'],
         lessons: [
           { id: 'trig', title: 'Seno, coseno y tangente', duration: 16 },
           { id: 'unit_circle', title: 'Esenciales de la circunferencia unitaria', duration: 14 },
         ],
         quizzes: [{ id: 'precalc-q1', title: 'Conceptos de Trigonometría', questions: 5 }],
       },
       // NUEVO: Bachillerato: Grado 12 – Estadística y Probabilidad
       {
         id: 'statistics',
         title: 'Estadística y Probabilidad',
         description: 'Media, mediana, variabilidad y probabilidad simple.',
         color: '#00796b',
         gradeLevels: ['12'],
         lessons: [
           { id: 'descriptive', title: 'Estadística Descriptiva', duration: 14 },
           { id: 'prob', title: 'Probabilidad básica', duration: 14 },
         ],
         quizzes: [{ id: 'stats-q1', title: 'Fundamentos de Estadística', questions: 5 }],
       },

       // Bachillerato: Grado 10 – Biología (no matemáticas, mantenido)
       {
         id: 'biology',
         title: 'Biología',
         description: 'Células, genética y sistemas vivos.',
         color: '#2e7d32',
         gradeLevels: ['10'],
         lessons: [
           { id: 'cells', title: 'Células y orgánulos', duration: 15 },
           { id: 'genetics', title: 'ADN y herencia', duration: 16 },
         ],
         quizzes: [{ id: 'bio-q1', title: 'Introducción a la Biología', questions: 4 }],
       },
       // Bachillerato: Grado 11 – Literatura/Redacción (no matemáticas, mantenido)
       {
         id: 'literature_hs',
         title: 'Literatura y Composición',
         description: 'Lectura, análisis y escritura efectiva.',
         color: '#5e35b1',
         gradeLevels: ['11'],
         lessons: [
           { id: 'poetry', title: 'Lectura de poesía', duration: 14 },
           { id: 'analysis', title: 'Lectura y análisis detallado', duration: 15 },
         ],
         quizzes: [{ id: 'englit-q1', title: 'Conceptos de Literatura y Composición', questions: 4 }],
       },
       // Bachillerato: Grado 12 – Estudios Sociales/Historia (no matemáticas, mantenido)
       {
         id: 'history',
         title: 'Estudios Sociales e Historia',
         description: 'Cívica, fuentes y eventos globales clave.',
         color: '#8d6e63',
         gradeLevels: ['12'],
         lessons: [
           { id: 'civics', title: 'Cívica y Gobierno', duration: 14 },
           { id: 'events', title: 'Grandes eventos del siglo XX', duration: 16 },
         ],
         quizzes: [{ id: 'hist-q1', title: 'Resumen de Historia y Cívica', questions: 4 }],
       },
     ],
     adult: [
       {
         id: 'literacy',
         title: 'Alfabetización de Adultos',
         description: 'Comprensión de lectura y escritura básica.',
         color: '#1976d2',
         gradeLevels: ['adult'],
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
         gradeLevels: ['adult'],
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
         gradeLevels: ['adult'],
         lessons: [{ id: 'percent', title: 'Porcentaje y descuento', duration: 14 }],
         quizzes: [{ id: 'emath-q1', title: 'Compra inteligente', questions: 5 }],
       },
     ],
   }
 };

 // PUBLIC_INTERFACE
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
     selectGradeLevel: 'Grade Level',
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
     selectGradeLevel: 'Nivel de grado',
     register: 'Crear perfil',
     login: 'Iniciar sesión',
     name: 'Nombre',
     welcome: 'Bienvenido a LearnBridge',
   },
 };
