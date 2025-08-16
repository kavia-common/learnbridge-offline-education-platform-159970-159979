//
// Quiz content storage for the app (multi-language).
// This file contains real questions and answers for the quizzes referenced in content.js.
//
// Structure:
// export const QUIZ_CONTENT = {
//   en: {
//     "<quizId>": {
//       title: string,
//       questions: [
//         { id: string, text: string, options: string[], correctIndex: number, explanation?: string }
//       ]
//     }
//   },
//   es: { ... }
// };
//

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
    }
  }
};
