//
/*
 Quiz content storage for the app (multi-language).
 This file contains real questions and answers for the quizzes referenced in content.js.

 Structure:
 export const QUIZ_CONTENT = {
   en: {
     "<quizId>": {
       title: string,
       questions: [
         { id: string, text: string, options: string[], correctIndex: number, explanation?: string }
       ]
     }
   },
   es: { ... }
 };
*/

// PUBLIC_INTERFACE
export const QUIZ_CONTENT = {
  en: {
    // Child: Literacy - Letter Match (lit-q1)
    'lit-q1': {
      title: 'Letter Match',
      questions: [
        {
          id: 'q1',
          text: 'Which of the following is a vowel?',
          options: ['B', 'E', 'T', 'Z'],
          correctIndex: 1,
          explanation: 'The English vowels are A, E, I, O, U.'
        },
        {
          id: 'q2',
          text: 'What letter comes after M?',
          options: ['L', 'N', 'O', 'K'],
          correctIndex: 1,
          explanation: 'The sequence goes ... L, M, N, O ...'
        },
        {
          id: 'q3',
          text: 'Choose the letter that makes the “sss” sound.',
          options: ['S', 'B', 'G', 'R'],
          correctIndex: 0,
          explanation: 'The letter S makes the “sss” sound.'
        },
        {
          id: 'q4',
          text: 'Which pair are both vowels?',
          options: ['E and T', 'I and O', 'B and A', 'C and U'],
          correctIndex: 1,
          explanation: 'I and O are both vowels.'
        },
        {
          id: 'q5',
          text: 'Which letter is first in the alphabet?',
          options: ['Z', 'C', 'A', 'D'],
          correctIndex: 2,
          explanation: 'The alphabet starts with A.'
        }
      ]
    },

    // Child: Math - Count and Add (math-q1)
    'math-q1': {
      title: 'Count and Add',
      questions: [
        {
          id: 'q1',
          text: '2 + 3 = ?',
          options: ['4', '5', '6', '7'],
          correctIndex: 1,
          explanation: '2 + 3 = 5.'
        },
        {
          id: 'q2',
          text: 'How many apples are there if you have 1 and get 2 more?',
          options: ['2', '3', '4', '5'],
          correctIndex: 1,
          explanation: '1 + 2 = 3.'
        },
        {
          id: 'q3',
          text: '10 - 6 = ?',
          options: ['3', '4', '5', '6'],
          correctIndex: 1,
          explanation: '10 - 6 = 4.'
        },
        {
          id: 'q4',
          text: 'What number comes after 9?',
          options: ['8', '9', '10', '11'],
          correctIndex: 2,
          explanation: 'Counting goes 8, 9, 10, 11...'
        },
        {
          id: 'q5',
          text: '5 + 0 = ?',
          options: ['0', '4', '5', '6'],
          correctIndex: 2,
          explanation: 'Adding zero keeps the number the same.'
        }
      ]
    },

    // Child: Critical Thinking - Puzzle Time (think-q1)
    'think-q1': {
      title: 'Puzzle Time',
      questions: [
        {
          id: 'q1',
          text: 'What comes next: A, C, E, G, __?',
          options: ['H', 'I', 'J', 'K'],
          correctIndex: 1,
          explanation: 'Every other letter: A (1), C (3), E (5), G (7), I (9).'
        },
        {
          id: 'q2',
          text: 'Find the odd one out: circle, square, banana, triangle',
          options: ['circle', 'square', 'banana', 'triangle'],
          correctIndex: 2,
          explanation: 'Banana is a fruit; the others are shapes.'
        },
        {
          id: 'q3',
          text: 'If 2, 4, 6, 8 is the pattern, what is the next number?',
          options: ['9', '10', '12', '14'],
          correctIndex: 1,
          explanation: 'Even numbers increasing by 2; next is 10.'
        },
        {
          id: 'q4',
          text: 'Which is a pattern? 🟦🟥🟦🟥 ... next is?',
          options: ['🟧', '🟨', '🟦', '🟥'],
          correctIndex: 2,
          explanation: 'The pattern alternates blue, red; next is blue.'
        }
      ]
    },

    // NEW: Grades 4–5: Fractions - Fractions Basics (frac-q1)
    'frac-q1': {
      title: 'Fractions Basics',
      questions: [
        {
          id: 'q1',
          text: 'Which fraction is equivalent to 1/2?',
          options: ['2/4', '3/6', '4/8', 'All of the above'],
          correctIndex: 3,
          explanation: '2/4, 3/6, and 4/8 all simplify to 1/2.'
        },
        {
          id: 'q2',
          text: 'Which is greater?',
          options: ['3/4', '2/3', 'They are equal', 'Cannot tell'],
          correctIndex: 0,
          explanation: '3/4 = 0.75, while 2/3 ≈ 0.67.'
        },
        {
          id: 'q3',
          text: 'How many fourths make a whole?',
          options: ['2', '3', '4', '8'],
          correctIndex: 2,
          explanation: 'Four fourths make one whole (4/4 = 1).'
        },
        {
          id: 'q4',
          text: '1/3 + 1/3 = ?',
          options: ['1/6', '2/3', '1/3', '1'],
          correctIndex: 1,
          explanation: '1/3 + 1/3 = 2/3.'
        },
        {
          id: 'q5',
          text: 'Which unit is best to measure the length of a pencil?',
          options: ['Kilometers', 'Meters', 'Centimeters', 'Milliliters'],
          correctIndex: 2,
          explanation: 'Centimeters are appropriate for small lengths.'
        }
      ]
    },

    // NEW: High School: Grade 10 – Algebra II (alg2-q1)
    'alg2-q1': {
      title: 'Algebra II Check',
      questions: [
        {
          id: 'q1',
          text: 'Solve: x^2 − 9 = 0',
          options: ['x = 3', 'x = −3', 'x = 3 or x = −3', 'No real solution'],
          correctIndex: 2,
          explanation: 'x^2 = 9 → x = ±3.'
        },
        {
          id: 'q2',
          text: 'The vertex of y = (x − 2)^2 + 5 is:',
          options: ['(−2, 5)', '(2, 5)', '(2, −5)', '(0, 5)'],
          correctIndex: 1,
          explanation: 'Vertex form y = (x − h)^2 + k has vertex (h, k).'
        },
        {
          id: 'q3',
          text: 'Which represents an exponential function?',
          options: ['y = 2x + 1', 'y = 2^x', 'y = x^2 + 2', 'y = √x'],
          correctIndex: 1,
          explanation: 'Exponential: variable x in the exponent.'
        },
        {
          id: 'q4',
          text: 'Factor: x^2 + 5x + 6',
          options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x − 2)(x − 3)', '(x + 2)(x + 6)'],
          correctIndex: 1,
          explanation: '2 and 3 multiply to 6 and add to 5.'
        },
        {
          id: 'q5',
          text: 'Domain of y = √x is:',
          options: ['All real x', 'x > 0 only', 'x ≥ 0', 'x ≤ 0'],
          correctIndex: 2,
          explanation: 'Square root requires x ≥ 0 for real outputs.'
        }
      ]
    },

    // NEW: High School: Grade 11 – Precalculus & Trig (precalc-q1)
    'precalc-q1': {
      title: 'Trigonometry Basics',
      questions: [
        {
          id: 'q1',
          text: 'sin(30°) =',
          options: ['0', '1/2', '√2/2', '√3/2'],
          correctIndex: 1,
          explanation: 'sin(30°) = 1/2.'
        },
        {
          id: 'q2',
          text: 'cos(0°) =',
          options: ['0', '1', '−1', 'Undefined'],
          correctIndex: 1,
          explanation: 'cos(0°) = 1.'
        },
        {
          id: 'q3',
          text: 'tan(45°) =',
          options: ['0', '1', '√2', 'Undefined'],
          correctIndex: 1,
          explanation: 'tan(45°) = 1.'
        },
        {
          id: 'q4',
          text: 'On the unit circle, the coordinates for 90° are:',
          options: ['(1, 0)', '(0, 1)', '(−1, 0)', '(0, −1)'],
          correctIndex: 1,
          explanation: '90° corresponds to (0, 1).'
        },
        {
          id: 'q5',
          text: 'The period of y = sin(x) is:',
          options: ['π/2', 'π', '2π', '4π'],
          correctIndex: 2,
          explanation: 'The sine function repeats every 2π.'
        }
      ]
    },

    // NEW: High School: Grade 12 – Statistics (stats-q1)
    'stats-q1': {
      title: 'Statistics Fundamentals',
      questions: [
        {
          id: 'q1',
          text: 'Mean of [2, 4, 6, 8] is:',
          options: ['4', '5', '6', '7'],
          correctIndex: 1,
          explanation: '(2 + 4 + 6 + 8) / 4 = 20 / 4 = 5.'
        },
        {
          id: 'q2',
          text: 'Median of [3, 7, 9, 10, 12] is:',
          options: ['7', '9', '10', '12'],
          correctIndex: 1,
          explanation: 'In an ordered list of 5 values, the 3rd is the median.'
        },
        {
          id: 'q3',
          text: 'Mode of [1, 2, 2, 3] is:',
          options: ['1', '2', '3', 'No mode'],
          correctIndex: 1,
          explanation: '2 appears most often.'
        },
        {
          id: 'q4',
          text: 'Probability of heads on a fair coin is:',
          options: ['0', '1/4', '1/2', '1'],
          correctIndex: 2,
          explanation: 'There are two equally likely outcomes; heads = 1/2.'
        },
        {
          id: 'q5',
          text: 'Which measure reflects spread/variability most directly?',
          options: ['Mean', 'Median', 'Standard deviation', 'Mode'],
          correctIndex: 2,
          explanation: 'Standard deviation measures how spread out values are.'
        }
      ]
    },

    // Adult: Literacy - Comprehension Check (alit-q1)
    'alit-q1': {
      title: 'Comprehension Check',
      questions: [
        {
          id: 'q1',
          text: 'The sentence: “Maria walked to the market before noon.” What did Maria do?',
          options: ['She ran to work', 'She walked to the market', 'She drove to school', 'She slept at home'],
          correctIndex: 1,
          explanation: 'Maria walked to the market.'
        },
        {
          id: 'q2',
          text: 'The story says: “James saved 10% of his pay.” What does “saved” mean?',
          options: ['Spent', 'Borrowed', 'Kept for later', 'Lost'],
          correctIndex: 2,
          explanation: 'Saved means kept for later.'
        },
        {
          id: 'q3',
          text: 'Choose the best topic sentence for a paragraph about safe cooking.',
          options: [
            'Cooking can be fun and safe with a few rules.',
            'New phones are very expensive.',
            'The bus was late again today.',
            'I like to swim in the ocean.'
          ],
          correctIndex: 0,
          explanation: 'It introduces the main idea: safe cooking.'
        },
        {
          id: 'q4',
          text: 'Fill in the blank: “Please ____ the form carefully.”',
          options: ['eat', 'read', 'sleep', 'jump'],
          correctIndex: 1,
          explanation: '“Read the form carefully” is the correct phrase.'
        },
        {
          id: 'q5',
          text: 'Which word means the same as “assist”?',
          options: ['help', 'hide', 'hurry', 'hate'],
          correctIndex: 0,
          explanation: 'Assist means help.'
        },
        {
          id: 'q6',
          text: 'Choose the correct punctuation: “Where is the meeting”',
          options: ['.', '!', '?', ','],
          correctIndex: 2,
          explanation: 'A question should end with a question mark.'
        }
      ]
    },

    // Adult: Vocational Skills - Safety First (voc-q1)
    'voc-q1': {
      title: 'Safety First',
      questions: [
        {
          id: 'q1',
          text: 'You see water on the floor at work. What should you do first?',
          options: ['Ignore it', 'Tell a supervisor or clean it up safely', 'Run across it', 'Wait until someone falls'],
          correctIndex: 1,
          explanation: 'Report or clean hazards to prevent accidents.'
        },
        {
          id: 'q2',
          text: 'Which item is personal protective equipment (PPE)?',
          options: ['Sandals', 'Gloves', 'Scarf', 'Wallet'],
          correctIndex: 1,
          explanation: 'Gloves are PPE.'
        },
        {
          id: 'q3',
          text: 'If a tool is broken, you should:',
          options: ['Use it anyway', 'Fix it without telling anyone', 'Report it and do not use it', 'Throw it away secretly'],
          correctIndex: 2,
          explanation: 'Report and stop using broken tools.'
        },
        {
          id: 'q4',
          text: 'To lift safely you should:',
          options: ['Twist and lift quickly', 'Keep back straight and bend your knees', 'Hold the load far from your body', 'Lift with only one hand'],
          correctIndex: 1,
          explanation: 'Use your legs; keep the load close to your body.'
        },
        {
          id: 'q5',
          text: 'An emergency exit should be:',
          options: ['Locked', 'Blocked by boxes', 'Clear and easy to reach', 'Used for storage'],
          correctIndex: 2,
          explanation: 'Emergency exits must be clear and accessible.'
        }
      ]
    },

    // Adult: Everyday Math - Shop Smart (emath-q1)
    'emath-q1': {
      title: 'Shop Smart',
      questions: [
        {
          id: 'q1',
          text: 'A shirt costs $20. It is 10% off. What is the discount?',
          options: ['$1', '$2', '$5', '$10'],
          correctIndex: 1,
          explanation: '10% of $20 is $2.'
        },
        {
          id: 'q2',
          text: 'A $50 item is on sale for $40. What is the percent discount?',
          options: ['10%', '15%', '20%', '25%'],
          correctIndex: 2,
          explanation: 'The discount is $10 out of $50 = 20%.'
        },
        {
          id: 'q3',
          text: 'You bought 3 kg of rice at $2 per kg. Total cost?',
          options: ['$3', '$5', '$6', '$9'],
          correctIndex: 2,
          explanation: '3 × $2 = $6.'
        },
        {
          id: 'q4',
          text: 'A recipe needs 500 ml water. You have a 1 liter bottle. How much is 1 liter in ml?',
          options: ['100 ml', '500 ml', '750 ml', '1000 ml'],
          correctIndex: 3,
          explanation: '1 liter = 1000 ml.'
        },
        {
          id: 'q5',
          text: 'Which is greater?',
          options: ['0.5', '50%', '1/2', 'All are equal'],
          correctIndex: 3,
          explanation: '0.5, 50%, and 1/2 are equivalent.'
        }
      ]
    },

    // Upper Middle: Algebra - Algebra Basics (alg-q1)
    'alg-q1': {
      title: 'Algebra Basics',
      questions: [
        {
          id: 'q1',
          text: 'Solve for x: 2x + 4 = 12',
          options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
          correctIndex: 2,
          explanation: '2x = 8 so x = 4.'
        },
        {
          id: 'q2',
          text: 'Simplify: 3(2x + 5) − (x − 1)',
          options: ['5x + 16', '6x + 15 − x + 1', '2x + 16', '4x + 16'],
          correctIndex: 0,
          explanation: '3(2x+5)=6x+15; subtract (x−1) => −x + 1, total 5x + 16.'
        },
        {
          id: 'q3',
          text: 'Which is equivalent to (x + 3)(x + 2)?',
          options: ['x^2 + 5x + 6', 'x^2 + 6x + 5', 'x^2 + 3x + 2', 'x^2 + 2x + 3'],
          correctIndex: 0,
          explanation: '(x+3)(x+2)=x^2+2x+3x+6=x^2+5x+6.'
        }
      ]
    },

    // High School: Grade 9 – Geometry (geo-q1)
    'geo-q1': {
      title: 'Geometry Fundamentals',
      questions: [
        {
          id: 'q1',
          text: 'The sum of interior angles of a triangle is:',
          options: ['90°', '120°', '180°', '360°'],
          correctIndex: 2,
          explanation: 'All triangles have interior angles summing to 180°.'
        },
        {
          id: 'q2',
          text: 'Which formula gives the circumference of a circle?',
          options: ['C = πr^2', 'C = 2πr', 'C = πd^2', 'C = r^2/2'],
          correctIndex: 1,
          explanation: 'Circumference C equals 2πr (or πd).'
        },
        {
          id: 'q3',
          text: 'Which of the following is a Pythagorean triple?',
          options: ['2, 3, 4', '3, 4, 5', '4, 5, 7', '5, 6, 7'],
          correctIndex: 1,
          explanation: '3^2 + 4^2 = 9 + 16 = 25 = 5^2.'
        },
        {
          id: 'q4',
          text: 'If two lines are perpendicular, the angle between them is:',
          options: ['45°', '60°', '90°', '180°'],
          correctIndex: 2,
          explanation: 'Perpendicular lines meet at right angles (90°).'
        }
      ]
    },

    // High School: Grade 10 – Biology (bio-q1)
    'bio-q1': {
      title: 'Introduction to Biology',
      questions: [
        {
          id: 'q1',
          text: 'Which is NOT part of the cell theory?',
          options: [
            'All living things are made of cells.',
            'Cells are the basic unit of life.',
            'All cells come from pre-existing cells.',
            'Cells are only found in animals.'
          ],
          correctIndex: 3,
          explanation: 'Cells are found in all living organisms, plants and animals.'
        },
        {
          id: 'q2',
          text: 'DNA base pairs are:',
          options: ['A–G and C–T', 'A–T and C–G', 'A–C and T–G', 'A–U and C–G'],
          correctIndex: 1,
          explanation: 'In DNA, adenine pairs with thymine; cytosine pairs with guanine.'
        },
        {
          id: 'q3',
          text: 'Photosynthesis primarily occurs in the:',
          options: ['Mitochondria', 'Nucleus', 'Chloroplasts', 'Ribosomes'],
          correctIndex: 2,
          explanation: 'Chloroplasts convert light energy into chemical energy.'
        },
        {
          id: 'q4',
          text: 'A trait appears in every generation when it is:',
          options: ['Recessive', 'Dominant', 'Codominant', 'Polygenic'],
          correctIndex: 1,
          explanation: 'Dominant traits can appear in every generation.'
        }
      ]
    },

    // High School: Grade 11 – English Literature & Composition (englit-q1)
    'englit-q1': {
      title: 'Literature & Composition Basics',
      questions: [
        {
          id: 'q1',
          text: 'Which sentence contains a metaphor?',
          options: [
            'The sun is a golden coin in the sky.',
            'The sun is like a golden coin.',
            'The sun shines brightly.',
            'It was sunny today.'
          ],
          correctIndex: 0,
          explanation: 'A metaphor directly equates two things without “like” or “as.”'
        },
        {
          id: 'q2',
          text: 'The central idea or message of a text is its:',
          options: ['Plot', 'Theme', 'Setting', 'Point of view'],
          correctIndex: 1,
          explanation: 'Theme is the underlying message or big idea.'
        },
        {
          id: 'q3',
          text: 'A strong thesis statement should:',
          options: [
            'Be vague and general.',
            'State a clear claim and direction.',
            'List every detail of the essay.',
            'Be longer than five sentences.'
          ],
          correctIndex: 1,
          explanation: 'A thesis clearly presents the claim and focus of the essay.'
        },
        {
          id: 'q4',
          text: 'An author’s tone refers to:',
          options: ['The time and place', 'Word choice and imagery', 'Attitude toward the subject', 'The order of events'],
          correctIndex: 2,
          explanation: 'Tone is the author’s attitude conveyed through style.'
        }
      ]
    },

    // High School: Grade 12 – Social Studies/History (hist-q1)
    'hist-q1': {
      title: 'History & Civics Overview',
      questions: [
        {
          id: 'q1',
          text: 'Separation of powers divides government primarily into:',
          options: ['Two branches', 'Three branches', 'Four branches', 'Many local councils'],
          correctIndex: 1,
          explanation: 'Legislative, Executive, and Judicial branches.'
        },
        {
          id: 'q2',
          text: 'A “primary source” is best defined as:',
          options: [
            'A textbook summary of past events',
            'A modern historian’s analysis',
            'An original document/artifact from the time',
            'A fictional story inspired by history'
          ],
          correctIndex: 2,
          explanation: 'Primary sources are original materials from the time studied.'
        },
        {
          id: 'q3',
          text: 'World War II began in Europe in:',
          options: ['1914', '1918', '1939', '1945'],
          correctIndex: 2,
          explanation: 'Germany invaded Poland in 1939.'
        },
        {
          id: 'q4',
          text: 'Civic participation includes:',
          options: ['Voting and community service', 'Only watching the news', 'Travel abroad', 'Avoiding public issues'],
          correctIndex: 0,
          explanation: 'Voting, volunteering, and engaging in public life are core civic acts.'
        }
      ]
    }
  },

  es: {
    // Niño: Alfabetización - Empareja Letras (lit-q1)
    'lit-q1': {
      title: 'Empareja Letras',
      questions: [
        {
          id: 'q1',
          text: '¿Cuál de los siguientes es una vocal?',
          options: ['B', 'E', 'T', 'Z'],
          correctIndex: 1,
          explanation: 'Las vocales son A, E, I, O, U.'
        },
        {
          id: 'q2',
          text: '¿Qué letra viene después de M?',
          options: ['L', 'N', 'O', 'K'],
          correctIndex: 1,
          explanation: 'La secuencia es ... L, M, N, O ...'
        },
        {
          id: 'q3',
          text: 'Elige la letra que hace el sonido “sss”.',
          options: ['S', 'B', 'G', 'R'],
          correctIndex: 0,
          explanation: 'La letra S hace el sonido “sss”.'
        },
        {
          id: 'q4',
          text: '¿Cuál par son ambas vocales?',
          options: ['E y T', 'I y O', 'B y A', 'C y U'],
          correctIndex: 1,
          explanation: 'I y O son vocales.'
        },
        {
          id: 'q5',
          text: '¿Qué letra es la primera del alfabeto?',
          options: ['Z', 'C', 'A', 'D'],
          correctIndex: 2,
          explanation: 'El alfabeto comienza con A.'
        }
      ]
    },

    // Niño: Matemáticas - Cuenta y Suma (math-q1)
    'math-q1': {
      title: 'Cuenta y Suma',
      questions: [
        {
          id: 'q1',
          text: '2 + 3 = ?',
          options: ['4', '5', '6', '7'],
          correctIndex: 1,
          explanation: '2 + 3 = 5.'
        },
        {
          id: 'q2',
          text: 'Si tienes 1 manzana y recibes 2 más, ¿cuántas tienes?',
          options: ['2', '3', '4', '5'],
          correctIndex: 1,
          explanation: '1 + 2 = 3.'
        },
        {
          id: 'q3',
          text: '10 - 6 = ?',
          options: ['3', '4', '5', '6'],
          correctIndex: 1,
          explanation: '10 - 6 = 4.'
        },
        {
          id: 'q4',
          text: '¿Qué número viene después de 9?',
          options: ['8', '9', '10', '11'],
          correctIndex: 2,
          explanation: 'La cuenta es 8, 9, 10, 11...'
        },
        {
          id: 'q5',
          text: '5 + 0 = ?',
          options: ['0', '4', '5', '6'],
          correctIndex: 2,
          explanation: 'Sumar cero deja el número igual.'
        }
      ]
    },

    // Niño: Pensamiento Crítico - Hora de acertijos (think-q1)
    'think-q1': {
      title: 'Hora de acertijos',
      questions: [
        {
          id: 'q1',
          text: '¿Qué sigue? A, C, E, G, __',
          options: ['H', 'I', 'J', 'K'],
          correctIndex: 1,
          explanation: 'Una sí y una no: A (1), C (3), E (5), G (7), I (9).'
        },
        {
          id: 'q2',
          text: 'Elige el que no pertenece: círculo, cuadrado, plátano, triángulo',
          options: ['círculo', 'cuadrado', 'plátano', 'triángulo'],
          correctIndex: 2,
          explanation: 'Plátano es una fruta; los otros son figuras.'
        },
        {
          id: 'q3',
          text: 'Si el patrón es 2, 4, 6, 8, ¿cuál es el siguiente número?',
          options: ['9', '10', '12', '14'],
          correctIndex: 1,
          explanation: 'Números pares aumentando de 2; sigue 10.'
        },
        {
          id: 'q4',
          text: '¿Cuál es el patrón? 🟦🟥🟦🟥 ... ¿qué sigue?',
          options: ['🟧', '🟨', '🟦', '🟥'],
          correctIndex: 2,
          explanation: 'Alterna azul, rojo; sigue azul.'
        }
      ]
    },

    // NUEVO: Grados 4–5: Fracciones (frac-q1)
    'frac-q1': {
      title: 'Conceptos de Fracciones',
      questions: [
        {
          id: 'q1',
          text: '¿Qué fracción es equivalente a 1/2?',
          options: ['2/4', '3/6', '4/8', 'Todas las anteriores'],
          correctIndex: 3,
          explanation: '2/4, 3/6 y 4/8 se simplifican a 1/2.'
        },
        {
          id: 'q2',
          text: '¿Cuál es mayor?',
          options: ['3/4', '2/3', 'Son iguales', 'No se puede saber'],
          correctIndex: 0,
          explanation: '3/4 = 0.75 y 2/3 ≈ 0.67.'
        },
        {
          id: 'q3',
          text: '¿Cuántos cuartos (1/4) hacen un entero?',
          options: ['2', '3', '4', '8'],
          correctIndex: 2,
          explanation: 'Cuatro cuartos hacen 1 (4/4 = 1).'
        },
        {
          id: 'q4',
          text: '1/3 + 1/3 = ?',
          options: ['1/6', '2/3', '1/3', '1'],
          correctIndex: 1,
          explanation: '1/3 + 1/3 = 2/3.'
        },
        {
          id: 'q5',
          text: '¿Qué unidad es mejor para medir la longitud de un lápiz?',
          options: ['Kilómetros', 'Metros', 'Centímetros', 'Mililitros'],
          correctIndex: 2,
          explanation: 'Los centímetros son adecuados para longitudes pequeñas.'
        }
      ]
    },

    // NUEVO: Bachillerato: Grado 10 – Álgebra II (alg2-q1)
    'alg2-q1': {
      title: 'Repaso de Álgebra II',
      questions: [
        {
          id: 'q1',
          text: 'Resuelve: x^2 − 9 = 0',
          options: ['x = 3', 'x = −3', 'x = 3 o x = −3', 'Sin solución real'],
          correctIndex: 2,
          explanation: 'x^2 = 9 → x = ±3.'
        },
        {
          id: 'q2',
          text: 'El vértice de y = (x − 2)^2 + 5 es:',
          options: ['(−2, 5)', '(2, 5)', '(2, −5)', '(0, 5)'],
          correctIndex: 1,
          explanation: 'En y = (x − h)^2 + k el vértice es (h, k).'
        },
        {
          id: 'q3',
          text: '¿Cuál representa una función exponencial?',
          options: ['y = 2x + 1', 'y = 2^x', 'y = x^2 + 2', 'y = √x'],
          correctIndex: 1,
          explanation: 'Exponencial: la variable x en el exponente.'
        },
        {
          id: 'q4',
          text: 'Factoriza: x^2 + 5x + 6',
          options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x − 2)(x − 3)', '(x + 2)(x + 6)'],
          correctIndex: 1,
          explanation: '2 y 3 multiplican 6 y suman 5.'
        },
        {
          id: 'q5',
          text: 'El dominio de y = √x es:',
          options: ['Todos los reales', 'x > 0 solamente', 'x ≥ 0', 'x ≤ 0'],
          correctIndex: 2,
          explanation: 'La raíz cuadrada requiere x ≥ 0 para salidas reales.'
        }
      ]
    },

    // NUEVO: Bachillerato: Grado 11 – Precálculo y Trigonometría (precalc-q1)
    'precalc-q1': {
      title: 'Conceptos de Trigonometría',
      questions: [
        {
          id: 'q1',
          text: 'sin(30°) =',
          options: ['0', '1/2', '√2/2', '√3/2'],
          correctIndex: 1,
          explanation: 'sin(30°) = 1/2.'
        },
        {
          id: 'q2',
          text: 'cos(0°) =',
          options: ['0', '1', '−1', 'Indefinido'],
          correctIndex: 1,
          explanation: 'cos(0°) = 1.'
        },
        {
          id: 'q3',
          text: 'tan(45°) =',
          options: ['0', '1', '√2', 'Indefinido'],
          correctIndex: 1,
          explanation: 'tan(45°) = 1.'
        },
        {
          id: 'q4',
          text: 'En la circunferencia unitaria, las coordenadas para 90° son:',
          options: ['(1, 0)', '(0, 1)', '(−1, 0)', '(0, −1)'],
          correctIndex: 1,
          explanation: '90° corresponde a (0, 1).'
        },
        {
          id: 'q5',
          text: 'El período de y = sen(x) es:',
          options: ['π/2', 'π', '2π', '4π'],
          correctIndex: 2,
          explanation: 'La función seno se repite cada 2π.'
        }
      ]
    },

    // NUEVO: Bachillerato: Grado 12 – Estadística (stats-q1)
    'stats-q1': {
      title: 'Fundamentos de Estadística',
      questions: [
        {
          id: 'q1',
          text: 'La media de [2, 4, 6, 8] es:',
          options: ['4', '5', '6', '7'],
          correctIndex: 1,
          explanation: '(2 + 4 + 6 + 8) / 4 = 5.'
        },
        {
          id: 'q2',
          text: 'La mediana de [3, 7, 9, 10, 12] es:',
          options: ['7', '9', '10', '12'],
          correctIndex: 1,
          explanation: 'En una lista ordenada de 5 valores, el 3.º es la mediana.'
        },
        {
          id: 'q3',
          text: 'La moda de [1, 2, 2, 3] es:',
          options: ['1', '2', '3', 'Sin moda'],
          correctIndex: 1,
          explanation: '2 es el valor que más se repite.'
        },
        {
          id: 'q4',
          text: 'La probabilidad de cara en una moneda justa es:',
          options: ['0', '1/4', '1/2', '1'],
          correctIndex: 2,
          explanation: 'Hay dos resultados equiprobables; cara = 1/2.'
        },
        {
          id: 'q5',
          text: '¿Qué medida refleja más directamente la variabilidad?',
          options: ['Media', 'Mediana', 'Desviación estándar', 'Moda'],
          correctIndex: 2,
          explanation: 'La desviación estándar mide la dispersión de los datos.'
        }
      ]
    },

    // Adulto: Alfabetización - Comprensión (alit-q1)
    'alit-q1': {
      title: 'Comprensión',
      questions: [
        {
          id: 'q1',
          text: 'La oración: “María caminó al mercado antes del mediodía.” ¿Qué hizo María?',
          options: ['Corrió al trabajo', 'Caminó al mercado', 'Condujo a la escuela', 'Durmió en casa'],
          correctIndex: 1,
          explanation: 'María caminó al mercado.'
        },
        {
          id: 'q2',
          text: 'El texto dice: “Jaime ahorró 10% de su paga.” ¿Qué significa “ahorró”?',
          options: ['Gastó', 'Pidió prestado', 'Guardó para después', 'Perdió'],
          correctIndex: 2,
          explanation: 'Ahorrar es guardar para después.'
        },
        {
          id: 'q3',
          text: 'Elige la mejor oración de tema para un párrafo sobre cocina segura.',
          options: [
            'Cocinar puede ser divertido y seguro con algunas reglas.',
            'Los teléfonos nuevos son muy caros.',
            'El autobús llegó tarde otra vez.',
            'Me gusta nadar en el mar.'
          ],
          correctIndex: 0,
          explanation: 'Presenta la idea principal: cocina segura.'
        },
        {
          id: 'q4',
          text: 'Completa: “Por favor ____ el formulario con cuidado.”',
          options: ['come', 'lee', 'duerme', 'salta'],
          correctIndex: 1,
          explanation: '“Lee el formulario con cuidado” es correcto.'
        },
        {
          id: 'q5',
          text: '¿Qué palabra significa lo mismo que “asistir” (ayudar)?',
          options: ['ayudar', 'ocultar', 'apresurar', 'odiar'],
          correctIndex: 0,
          explanation: 'Asistir significa ayudar.'
        },
        {
          id: 'q6',
          text: 'Elige la puntuación correcta: “¿Dónde es la reunión”',
          options: ['.', '¡', '?', ','],
          correctIndex: 2,
          explanation: 'Es una pregunta; debe terminar con “?”.'
        }
      ]
    },

    // Adulto: Habilidades Vocacionales - Seguridad (voc-q1)
    'voc-q1': {
      title: 'Seguridad',
      questions: [
        {
          id: 'q1',
          text: 'Ves agua en el piso del trabajo. ¿Qué debes hacer primero?',
          options: ['Ignorarlo', 'Avisar al supervisor o limpiarlo con seguridad', 'Correr sobre ella', 'Esperar a que alguien caiga'],
          correctIndex: 1,
          explanation: 'Reportar o limpiar el peligro para evitar accidentes.'
        },
        {
          id: 'q2',
          text: '¿Cuál es equipo de protección personal (EPP)?',
          options: ['Sandalias', 'Guantes', 'Bufanda', 'Billetera'],
          correctIndex: 1,
          explanation: 'Los guantes son EPP.'
        },
        {
          id: 'q3',
          text: 'Si una herramienta está rota, debes:',
          options: ['Usarla igual', 'Arreglarla sin decir nada', 'Reportarlo y no usarla', 'Tirarla en secreto'],
          correctIndex: 2,
          explanation: 'Reporta y deja de usar herramientas rotas.'
        },
        {
          id: 'q4',
          text: 'Para levantar de forma segura debes:',
          options: ['Girar y levantar rápido', 'Mantener la espalda recta y doblar las rodillas', 'Sujetar la carga lejos del cuerpo', 'Levantar con una sola mano'],
          correctIndex: 1,
          explanation: 'Usa las piernas y mantén la carga cerca del cuerpo.'
        },
        {
          id: 'q5',
          text: 'Una salida de emergencia debe estar:',
          options: ['Cerrada con llave', 'Bloqueada con cajas', 'Libre y de fácil acceso', 'Usada como almacén'],
          correctIndex: 2,
          explanation: 'Las salidas de emergencia deben estar despejadas.'
        }
      ]
    },

    // Adulto: Matemáticas Cotidianas - Compra inteligente (emath-q1)
    'emath-q1': {
      title: 'Compra inteligente',
      questions: [
        {
          id: 'q1',
          text: 'Una camisa cuesta $20. Tiene 10% de descuento. ¿Cuál es el descuento?',
          options: ['$1', '$2', '$5', '$10'],
          correctIndex: 1,
          explanation: '10% de $20 es $2.'
        },
        {
          id: 'q2',
          text: 'Un artículo de $50 está en $40. ¿Cuál es el porcentaje de descuento?',
          options: ['10%', '15%', '20%', '25%'],
          correctIndex: 2,
          explanation: 'El descuento es $10 de $50 = 20%.'
        },
        {
          id: 'q3',
          text: 'Compraste 3 kg de arroz a $2 por kg. ¿Costo total?',
          options: ['$3', '$5', '$6', '$9'],
          correctIndex: 2,
          explanation: '3 × $2 = $6.'
        },
        {
          id: 'q4',
          text: 'La receta necesita 500 ml de agua. Tienes 1 litro. ¿Cuántos ml son 1 litro?',
          options: ['100 ml', '500 ml', '750 ml', '1000 ml'],
          correctIndex: 3,
          explanation: '1 litro = 1000 ml.'
        },
        {
          id: 'q5',
          text: '¿Cuál es mayor?',
          options: ['0.5', '50%', '1/2', 'Todos son iguales'],
          correctIndex: 3,
          explanation: '0.5, 50% y 1/2 son equivalentes.'
        }
      ]
    },

    // Grados 6–8: Álgebra - Conceptos básicos (alg-q1)
    'alg-q1': {
      title: 'Conceptos básicos de Álgebra',
      questions: [
        {
          id: 'q1',
          text: 'Resuelve para x: 2x + 4 = 12',
          options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
          correctIndex: 2,
          explanation: '2x = 8, por lo tanto x = 4.'
        },
        {
          id: 'q2',
          text: 'Simplifica: 3(2x + 5) − (x − 1)',
          options: ['5x + 16', '6x + 15 − x + 1', '2x + 16', '4x + 16'],
          correctIndex: 0,
          explanation: '3(2x+5)=6x+15; restar (x−1) es −x + 1 ⇒ 6x+15−x+1 = 5x+16.'
        },
        {
          id: 'q3',
          text: '¿Cuál es equivalente a (x + 3)(x + 2)?',
          options: ['x^2 + 5x + 6', 'x^2 + 6x + 5', 'x^2 + 3x + 2', 'x^2 + 2x + 3'],
          correctIndex: 0,
          explanation: '(x+3)(x+2)=x^2+2x+3x+6=x^2+5x+6.'
        }
      ]
    },

    // Bachillerato: Grado 9 – Geometría (geo-q1)
    'geo-q1': {
      title: 'Fundamentos de Geometría',
      questions: [
        {
          id: 'q1',
          text: 'La suma de los ángulos interiores de un triángulo es:',
          options: ['90°', '120°', '180°', '360°'],
          correctIndex: 2,
          explanation: 'Todos los triángulos suman 180° en sus ángulos internos.'
        },
        {
          id: 'q2',
          text: '¿Cuál fórmula da la circunferencia de un círculo?',
          options: ['C = πr^2', 'C = 2πr', 'C = πd^2', 'C = r^2/2'],
          correctIndex: 1,
          explanation: 'La circunferencia C es 2πr (o πd).'
        },
        {
          id: 'q3',
          text: '¿Cuál es una terna pitagórica?',
          options: ['2, 3, 4', '3, 4, 5', '4, 5, 7', '5, 6, 7'],
          correctIndex: 1,
          explanation: '3^2 + 4^2 = 25 = 5^2.'
        },
        {
          id: 'q4',
          text: 'Si dos líneas son perpendiculares, el ángulo entre ellas es:',
          options: ['45°', '60°', '90°', '180°'],
          correctIndex: 2,
          explanation: 'Líneas perpendiculares forman un ángulo recto (90°).'
        }
      ]
    },

    // Bachillerato: Grado 10 – Biología (bio-q1)
    'bio-q1': {
      title: 'Introducción a la Biología',
      questions: [
        {
          id: 'q1',
          text: '¿Cuál NO es parte de la teoría celular?',
          options: [
            'Todos los seres vivos están hechos de células.',
            'Las células son la unidad básica de la vida.',
            'Todas las células provienen de células preexistentes.',
            'Las células solo se encuentran en animales.'
          ],
          correctIndex: 3,
          explanation: 'Las células están en todos los organismos vivos, plantas y animales.'
        },
        {
          id: 'q2',
          text: 'Los pares de bases del ADN son:',
          options: ['A–G y C–T', 'A–T y C–G', 'A–C y T–G', 'A–U y C–G'],
          correctIndex: 1,
          explanation: 'En ADN, adenina con timina; citosina con guanina.'
        },
        {
          id: 'q3',
          text: 'La fotosíntesis ocurre principalmente en:',
          options: ['Mitocondrias', 'Núcleo', 'Cloroplastos', 'Ribosomas'],
          correctIndex: 2,
          explanation: 'Los cloroplastos convierten energía lumínica en química.'
        },
        {
          id: 'q4',
          text: 'Un rasgo aparece en cada generación cuando es:',
          options: ['Recesivo', 'Dominante', 'Codominante', 'Poligénico'],
          correctIndex: 1,
          explanation: 'Los rasgos dominantes pueden aparecer en cada generación.'
        }
      ]
    },

    // Bachillerato: Grado 11 – Literatura y Composición (englit-q1)
    'englit-q1': {
      title: 'Conceptos de Literatura y Composición',
      questions: [
        {
          id: 'q1',
          text: '¿Cuál oración contiene una metáfora?',
          options: [
            'El sol es una moneda de oro en el cielo.',
            'El sol es como una moneda de oro.',
            'El sol brilla intensamente.',
            'Hoy estuvo soleado.'
          ],
          correctIndex: 0,
          explanation: 'La metáfora iguala dos cosas sin “como”.'
        },
        {
          id: 'q2',
          text: 'La idea central o mensaje de un texto es su:',
          options: ['Trama', 'Tema', 'Ambientación', 'Punto de vista'],
          correctIndex: 1,
          explanation: 'El tema es el mensaje o idea principal.'
        },
        {
          id: 'q3',
          text: 'Una buena tesis debe:',
          options: [
            'Ser vaga y general.',
            'Plantear una afirmación clara y dirección.',
            'Enumerar todos los detalles del ensayo.',
            'Tener más de cinco oraciones.'
          ],
          correctIndex: 1,
          explanation: 'La tesis presenta con claridad el enfoque del escrito.'
        },
        {
          id: 'q4',
          text: 'El “tono” del autor se refiere a:',
          options: ['Tiempo y lugar', 'Dicción e imágenes', 'Actitud hacia el tema', 'Orden de los eventos'],
          correctIndex: 2,
          explanation: 'El tono es la actitud del autor expresada en su estilo.'
        }
      ]
    },

    // Bachillerato: Grado 12 – Estudios Sociales/Historia (hist-q1)
    'hist-q1': {
      title: 'Resumen de Historia y Cívica',
      questions: [
        {
          id: 'q1',
          text: 'La separación de poderes divide al gobierno principalmente en:',
          options: ['Dos poderes', 'Tres poderes', 'Cuatro poderes', 'Muchos consejos locales'],
          correctIndex: 1,
          explanation: 'Poder Legislativo, Ejecutivo y Judicial.'
        },
        {
          id: 'q2',
          text: 'Una “fuente primaria” se define como:',
          options: [
            'Un resumen en un libro de texto',
            'El análisis de un historiador moderno',
            'Documento/objeto original de la época',
            'Un relato ficticio inspirado en la historia'
          ],
          correctIndex: 2,
          explanation: 'Las fuentes primarias son materiales originales del periodo.'
        },
        {
          id: 'q3',
          text: 'La Segunda Guerra Mundial comenzó en Europa en:',
          options: ['1914', '1918', '1939', '1945'],
          correctIndex: 2,
          explanation: 'Alemania invadió Polonia en 1939.'
        },
        {
          id: 'q4',
          text: 'La participación cívica incluye:',
          options: ['Votar y servicio comunitario', 'Solo ver noticias', 'Viajar al extranjero', 'Evitar los asuntos públicos'],
          correctIndex: 0,
          explanation: 'Votar, voluntariado y participación pública son actos cívicos.'
        }
      ]
    }
  }
};
