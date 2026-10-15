export interface Question {
  id: number;
  discipline: string;
  topic: string;
  examSource: string;
  year: number;
  stem: string;
  contextText?: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  triWeight: number; // Simulated TRI item weight
}

export interface Exam {
  id: string;
  title: string;
  subtitle: string;
  category: 'fundamental-medio' | 'olimpiadas' | 'vestibulares' | 'programas' | 'concursos';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  targetGrade: string;
  questionCount: number;
  durationMinutes: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  institution: string;
  isPopular?: boolean;
  scoringType: 'TRI' | 'Tradicional' | 'Certo/Errado (1:1)';
  questions: Question[];
}

export const EXAM_CATEGORIES = [
  { id: 'todos', label: 'Todos os Simulados' },
  { id: 'vestibulares', label: 'ENEM & Vestibulares' },
  { id: 'fundamental-medio', label: 'Ensino Fundamental & Médio' },
  { id: 'olimpiadas', label: 'Olimpíadas Científicas' },
  { id: 'concursos', label: 'Concursos Públicos' },
  { id: 'programas', label: 'Seleções (SISU / PROUNI)' },
] as const;

export const SAMPLE_EXAMS: Exam[] = [
  {
    id: 'enem-ciencias-natureza-matematica',
    title: 'Simulado Geral ENEM 2024/2025 — Dia 2',
    subtitle: 'Ciências da Natureza e suas Tecnologias + Matemática e suas Tecnologias com calibração TRI oficial.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: '100% Padrão TRI',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    targetGrade: '3º Ano EM / Pré-Vestibular',
    questionCount: 8,
    durationMinutes: 45,
    difficulty: 'Difícil',
    institution: 'INEP / ENEM',
    isPopular: true,
    scoringType: 'TRI',
    questions: [
      {
        id: 1,
        discipline: 'Biologia Molecular',
        topic: 'Replicação e Mutação do DNA',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'O processo de replicação semiconservativa do DNA assegura que as novas moléculas herdem sequências idênticas. Uma mutação hipotética que inviabilizasse a função da enzima DNA-polimerase III em células eucarióticas causaria diretamente:',
        options: [
          { letter: 'A', text: 'Bloqueio total na separação das pontes de hidrogênio entre as bases nitrogenadas.' },
          { letter: 'B', text: 'Incapacidade de elongação das fitas filhas e consequente bloqueio do ciclo celular.' },
          { letter: 'C', text: 'Interrupção da síntese inicial de RNA iniciador (primer) pela primase.' },
          { letter: 'D', text: 'Impossibilidade de ligação dos fragmentos de Okazaki na fita tardia pela DNA ligase.' },
          { letter: 'E', text: 'Degradação imediata da fita molde de DNA pela ação de endonucleases citoplasmáticas.' }
        ],
        correctAnswer: 'B',
        explanation: 'A DNA-polimerase III (ou a DNA-polimerase delta/épsilon em eucariotos) é a principal enzima responsável pela polimerização da nova fita de DNA no sentido 5\' -> 3\', adicionando desoxirribonucleotídeos complementares. Sem sua atividade, as fitas filhas não conseguem se alongar, paralisando a fase S da intérfase.',
        difficulty: 'Médio',
        triWeight: 785
      },
      {
        id: 2,
        discipline: 'Física',
        topic: 'Eletrodinâmica • Circuitos Elétricos',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Um estudante deseja montar um circuito com três lâmpadas idênticas de 60 W e 120 V cada, conectadas a uma fonte de tensão contínua de 120 V. Para que as três lâmpadas funcionem com o seu brilho nominal simultaneamente, como elas devem ser associadas?',
        options: [
          { letter: 'A', text: 'Todas em série, dividindo igualmente a tensão de 120 V.' },
          { letter: 'B', text: 'Todas em paralelo, de modo que cada lâmpada fique submetida à ddp de 120 V.' },
          { letter: 'C', text: 'Duas em série conectadas em paralelo com a terceira lâmpada.' },
          { letter: 'D', text: 'Duas em paralelo conectadas em série com a terceira lâmpada.' },
          { letter: 'E', text: 'Qualquer configuração mista, pois a potência dissipada depende exclusivamente da corrente.' }
        ],
        correctAnswer: 'B',
        explanation: 'Para que as lâmpadas operem em condições nominais (120 V e 60 W cada), cada uma precisa receber a ddp integral de 120 V fornecida pela fonte. Na associação em paralelo, todos os ramos recebem a mesma diferença de potencial da rede elétrica.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 3,
        discipline: 'Química',
        topic: 'Físico-Química • Equilíbrio Químico e Le Chatelier',
        examSource: 'ENEM Oficial',
        year: 2023,
        stem: 'No processo Haber-Bosch para produção de amônia, temos o equilíbrio exotérmico: N2(g) + 3 H2(g) ⇌ 2 NH3(g) (ΔH < 0). Qual alteração nas condições do sistema deslocará o equilíbrio no sentido de favorecer a formação de amônia (NH3)?',
        options: [
          { letter: 'A', text: 'Aumento da temperatura e diminuição da pressão total do reator.' },
          { letter: 'B', text: 'Aumento da pressão total e resfriamento moderado do sistema.' },
          { letter: 'C', text: 'Adição de um catalisador de ferro, que desloca o equilíbrio para a direita.' },
          { letter: 'D', text: 'Remoção contínua de nitrogênio molecular (N2) do interior do vaso.' },
          { letter: 'E', text: 'Aumento do volume do recipiente reacional mantendo a temperatura constante.' }
        ],
        correctAnswer: 'B',
        explanation: 'Pelo Princípio de Le Chatelier: 1) O aumento da pressão favorece o lado com menor número de mols gasosos (4 mols de reagentes contra 2 mols de produtos). 2) Como a reação direta é exotérmica (ΔH < 0), a diminuição de temperatura favorece o sentido exotérmico, aumentando a concentração de NH3.',
        difficulty: 'Médio',
        triWeight: 740
      },
      {
        id: 4,
        discipline: 'Matemática',
        topic: 'Geometria Espacial • Cilindros e Volumes',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Um reservatório de água tem o formato de um cilindro circular reto com raio da base igual a 2 metros e altura de 5 metros. Adotando π = 3, qual é a capacidade total de armazenamento desse reservatório em litros?',
        options: [
          { letter: 'A', text: '12.000 litros' },
          { letter: 'B', text: '30.000 litros' },
          { letter: 'C', text: '60.000 litros' },
          { letter: 'D', text: '120.000 litros' },
          { letter: 'E', text: '300.000 litros' }
        ],
        correctAnswer: 'C',
        explanation: 'O volume do cilindro é V = π * r² * h. Substituindo os valores: V = 3 * (2)² * 5 = 3 * 4 * 5 = 60 m³. Como 1 m³ equivale a 1.000 litros, o reservatório comporta 60 * 1.000 = 60.000 litros de água.',
        difficulty: 'Fácil',
        triWeight: 590
      },
      {
        id: 5,
        discipline: 'Matemática',
        topic: 'Análise Combinatória e Probabilidade',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Uma comissão de saúde será formada por 3 médicos e 2 enfermeiros. O hospital dispõe de 6 médicos e 5 enfermeiros disponíveis. De quantas maneiras distintas essa comissão multidisciplinar pode ser composta?',
        options: [
          { letter: 'A', text: '120 maneiras' },
          { letter: 'B', text: '150 maneiras' },
          { letter: 'C', text: '200 maneiras' },
          { letter: 'D', text: '250 maneiras' },
          { letter: 'E', text: '720 maneiras' }
        ],
        correctAnswer: 'C',
        explanation: 'A ordem dos membros não importa, logo usamos combinação simples. Escolha dos médicos: C(6, 3) = (6*5*4)/(3*2*1) = 20. Escolha dos enfermeiros: C(5, 2) = (5*4)/(2*1) = 10. Pelo princípio multiplicativo: 20 * 10 = 200 maneiras distintas.',
        difficulty: 'Médio',
        triWeight: 715
      },
      {
        id: 6,
        discipline: 'Biologia',
        topic: 'Ecologia • Ciclos Biogeoquímicos e Bioacumulação',
        examSource: 'ENEM Oficial',
        year: 2023,
        stem: 'Em uma cadeia alimentar aquática contaminada por metais pesados (como o mercúrio lançado no garimpo ilegal), qual nível trófico apresentará a maior concentração desse poluente tóxico em seus tecidos?',
        options: [
          { letter: 'A', text: 'Fitoplâncton (produtores primários autotróficos).' },
          { letter: 'B', text: 'Zooplâncton (consumidores primários herbívoros).' },
          { letter: 'C', text: 'Peixes herbívoros (consumidores secundários).' },
          { letter: 'D', text: 'Aves piscívoras e grandes predadores de topo (consumidores terciários/quaternários).' },
          { letter: 'E', text: 'A concentração será idêntica em todos os elos tróficos devido à diluição na água.' }
        ],
        correctAnswer: 'D',
        explanation: 'Metais pesados sofrem biomagnificação trófica (bioacumulação ao longo da cadeia alimentar). Como não são excretados nem metabolizados, acumulam-se em concentrações crescentes nos níveis tróficos superiores.',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 7,
        discipline: 'Física',
        topic: 'Óptica Geométrica • Lentes e Refração',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Uma pessoa idosa apresenta dificuldade para enxergar objetos próximos devido à perda de elasticidade do cristalino (presbiopia ou "vista cansada"). Para corrigir essa ametropia e ler um livro confortavelmente a 25 cm, o oftalmologista deve prescrever lentes:',
        options: [
          { letter: 'A', text: 'Divergentes, que aumentam a distância focal dos raios luminosos.' },
          { letter: 'B', text: 'Convergentes, que aproximam os raios para formar a imagem sobre a retina.' },
          { letter: 'C', text: 'Cilíndricas, para compensar a curvatura irregular da córnea.' },
          { letter: 'D', text: 'Bifocais planas sem poder refrativo na região inferior.' },
          { letter: 'E', text: 'Divergentes com índice de refração estritamente menor que o ar atmosférico.' }
        ],
        correctAnswer: 'B',
        explanation: 'A presbiopia afeta a convergência do olho para objetos próximos, fazendo com que a imagem se forme atrás da retina. Lentes convergentes (positivas) compensam essa deficiência aproximando o foco para a retina.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 8,
        discipline: 'Matemática',
        topic: 'Funções Exponenciais e Logaritmos',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'A proliferação de uma cultura de bactérias em laboratório segue o modelo N(t) = N0 * 2^(0.5 * t), onde t é o tempo medido em horas e N0 é o número inicial. Sabendo que a população inicial era de 1.000 bactérias, quanto tempo será necessário para que a colônia atinja 16.000 bactérias?',
        options: [
          { letter: 'A', text: '4 horas' },
          { letter: 'B', text: '6 horas' },
          { letter: 'C', text: '8 horas' },
          { letter: 'D', text: '12 horas' },
          { letter: 'E', text: '16 horas' }
        ],
        correctAnswer: 'C',
        explanation: 'Substituindo na fórmula: 16.000 = 1.000 * 2^(0.5 * t) => 16 = 2^(0.5 * t). Como 16 = 2^4, igualamos os expoentes: 0.5 * t = 4 => t = 4 / 0.5 = 8 horas.',
        difficulty: 'Médio',
        triWeight: 750
      }
    ]
  },
  {
    id: 'provão-paulista-vunesp',
    title: 'Provão Paulista 2024/2025 — VUNESP',
    subtitle: 'Simulado oficial para ingresso direto na USP, UNICAMP, UNESP e FATEC pelas escolas públicas estaduais de SP.',
    category: 'fundamental-medio',
    categoryLabel: 'Ensino Fundamental & Médio / Avaliações Estaduais',
    badge: 'Vagas USP & Unesp',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    targetGrade: '3ª Série do Ensino Médio',
    questionCount: 6,
    durationMinutes: 30,
    difficulty: 'Médio',
    institution: 'Vunesp / Governo de SP',
    isPopular: true,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 101,
        discipline: 'Língua Portuguesa',
        topic: 'Interpretação de Texto e Figuras de Linguagem',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'No trecho "A cidade acordou cinzenta, com os carros cuspindo fumaça nas esquinas apressadas", identificam-se primordialmente quais figuras de linguagem?',
        options: [
          { letter: 'A', text: 'Metonímia e Eufemismo.' },
          { letter: 'B', text: 'Personificação (Prosopopeia) e Metáfora.' },
          { letter: 'C', text: 'Pleonasmo e Paradoxo.' },
          { letter: 'D', text: 'Hipérbole e Antítese.' },
          { letter: 'E', text: 'Silepse e Elipse.' }
        ],
        correctAnswer: 'B',
        explanation: 'Atribuir ações humanas ou de seres vivos ("acordou", "cuspindo fumaça", "esquinas apressadas") a elementos inanimados constitui prosopopeia/personificação, além da carga metafórica da imagem urbana.',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 102,
        discipline: 'História do Brasil',
        topic: 'Era Vargas • Legislação Trabalhista e Industrialização',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'Durante o primeiro governo de Getúlio Vargas (1930–1945), a política trabalhista caracterizou-se pelo:',
        options: [
          { letter: 'A', text: 'Total distanciamento do Estado nas negociações entre patrões e operários.' },
          { letter: 'B', text: 'Paternalismo estatal e controle sindical (peleguismo) atrelado à criação da CLT e de direitos básicos.' },
          { letter: 'C', text: 'Incentivo irrestrito a greves livres e descentralização da Justiça do Trabalho.' },
          { letter: 'D', text: 'Apoio financeiro preferencial a multinacionais petrolíferas estrangeiras.' },
          { letter: 'E', text: 'Fechamento de escolas técnicas e desvalorização do trabalho fabril urbano.' }
        ],
        correctAnswer: 'B',
        explanation: 'A política varguista combinou a concessão de direitos trabalhistas históricos (CLT, férias, salário mínimo) com uma rigorosa tutela e cooptação dos sindicatos pelo Ministério do Trabalho (estrutura corporativista).',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 103,
        discipline: 'Matemática',
        topic: 'Trigonometria no Triângulo Retângulo',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'Do topo de um farol com 40 metros de altura sobre o nível do mar, um observador avista um barco sob um ângulo de depressão de 30°. Adotando tg(30°) = 0,58, a que distância aproximada da base do farol o barco se encontra?',
        options: [
          { letter: 'A', text: '23,2 metros' },
          { letter: 'B', text: '46,4 metros' },
          { letter: 'C', text: '68,9 metros' },
          { letter: 'D', text: '80,0 metros' },
          { letter: 'E', text: '115,0 metros' }
        ],
        correctAnswer: 'C',
        explanation: 'Pela trigonometria: tg(30°) = cateto oposto / cateto adjacente => 0,58 = 40 / d => d = 40 / 0,58 ≈ 68,96 metros.',
        difficulty: 'Médio',
        triWeight: 730
      },
      {
        id: 104,
        discipline: 'Geografia',
        topic: 'Agropecuária Brasileira e Biomas',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'O avanço da fronteira agrícola moderna no Brasil em direção ao Centro-Oeste e Matopiba incidiu de forma mais aguda sobre qual bioma brasileiro?',
        options: [
          { letter: 'A', text: 'Mata Atlântica' },
          { letter: 'B', text: 'Cerrado' },
          { letter: 'C', text: 'Pampa' },
          { letter: 'D', text: 'Caatinga' },
          { letter: 'E', text: 'Pantanal' }
        ],
        correctAnswer: 'B',
        explanation: 'O Cerrado ("savana brasileira") foi o bioma mais impactado pela expansão da soja, milho e pecuária intensiva mecanizada com correção de solo (calagem) nas últimas décadas.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 105,
        discipline: 'Física',
        topic: 'Cinemática • Movimento Uniformemente Variado',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'Um trem do metrô de São Paulo parte do repouso em uma estação com aceleração constante de 1,5 m/s². Qual a velocidade atingida pelo trem após 10 segundos?',
        options: [
          { letter: 'A', text: '10 m/s (36 km/h)' },
          { letter: 'B', text: '15 m/s (54 km/h)' },
          { letter: 'C', text: '20 m/s (72 km/h)' },
          { letter: 'D', text: '25 m/s (90 km/h)' },
          { letter: 'E', text: '30 m/s (108 km/h)' }
        ],
        correctAnswer: 'B',
        explanation: 'Utilizando a função horária da velocidade: v = v0 + a*t. Como parte do repouso, v0 = 0. Então v = 0 + 1,5 * 10 = 15 m/s (equivalente a 15 * 3,6 = 54 km/h).',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 106,
        discipline: 'Química',
        topic: 'Estequiometria e Massa Molar',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'A queima completa de 1 mol de gás metano (CH4 + 2 O2 -> CO2 + 2 H2O) produz quantos gramas de dióxido de carbono (CO2)? (Dados: C = 12 g/mol, O = 16 g/mol)',
        options: [
          { letter: 'A', text: '16 g' },
          { letter: 'B', text: '28 g' },
          { letter: 'C', text: '32 g' },
          { letter: 'D', text: '44 g' },
          { letter: 'E', text: '64 g' }
        ],
        correctAnswer: 'D',
        explanation: 'A estequiometria mostra que 1 mol de CH4 forma 1 mol de CO2. A massa molar do CO2 é: 12 + (2 * 16) = 12 + 32 = 44 g/mol. Logo, formam-se 44 gramas.',
        difficulty: 'Fácil',
        triWeight: 600
      }
    ]
  },
  {
    id: 'obmep-olimpiada-matematica',
    title: 'OBMEP — Olimpíada Brasileira de Matemática',
    subtitle: 'Simulado Oficial de Geometria, Lógica e Combinatória com foco em premiação de medalhas e bolsas CNPq/PIC.',
    category: 'olimpiadas',
    categoryLabel: 'Olimpíadas Científicas',
    badge: 'Medalha de Ouro',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    targetGrade: 'Nível 3 (Ensino Médio)',
    questionCount: 5,
    durationMinutes: 25,
    difficulty: 'Difícil',
    institution: 'IMPA / SBM / OBMEP',
    isPopular: true,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 201,
        discipline: 'Raciocínio Lógico',
        topic: 'Princípio da Casa dos Pombos',
        examSource: 'OBMEP Oficial',
        year: 2024,
        stem: 'Em uma gaveta escura há 10 meias pretas, 8 meias brancas e 6 meias azuis, todas idênticas ao tato. Quantas meias, no mínimo, uma pessoa deve retirar sem olhar para ter a certeza absoluta de obter pelo menos um par da mesma cor?',
        options: [
          { letter: 'A', text: '3 meias' },
          { letter: 'B', text: '4 meias' },
          { letter: 'C', text: '11 meias' },
          { letter: 'D', text: '15 meias' },
          { letter: 'E', text: '24 meias' }
        ],
        correctAnswer: 'B',
        explanation: 'Como existem apenas 3 cores disponíveis (preta, branca, azul), pelo Princípio da Casa dos Pombos (ou das Gavetas), ao retirar 4 meias é matematicamente impossível que todas sejam de cores diferentes. Uma cor obrigatoriamente se repetirá, garantindo um par.',
        difficulty: 'Fácil',
        triWeight: 650
      },
      {
        id: 202,
        discipline: 'Geometria Plana',
        topic: 'Áreas e Semelhança de Triângulos',
        examSource: 'OBMEP Oficial',
        year: 2023,
        stem: 'Um quadrado ABCD de lado 12 cm tem seus pontos médios dos quatro lados unidos para formar um quadrado menor inscrito EFGH. Qual é a área do quadrado interno EFGH?',
        options: [
          { letter: 'A', text: '36 cm²' },
          { letter: 'B', text: '48 cm²' },
          { letter: 'C', text: '72 cm²' },
          { letter: 'D', text: '96 cm²' },
          { letter: 'E', text: '108 cm²' }
        ],
        correctAnswer: 'C',
        explanation: 'A área do quadrado maior ABCD é 12² = 144 cm². O quadrado formado ao conectar os pontos médios dos lados possui exatamente metade da área do quadrado original: 144 / 2 = 72 cm² (ou usando Pitágoras nos cantos de catetos 6 cm: L² = 6² + 6² = 72 cm²).',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 203,
        discipline: 'Aritmética e Teoria dos Números',
        topic: 'Critérios de Divisibilidade',
        examSource: 'OBMEP Oficial',
        year: 2024,
        stem: 'Qual é o menor número inteiro positivo n de três dígitos tal que n deixa resto 2 quando dividido por 5 e deixa resto 3 quando dividido por 7?',
        options: [
          { letter: 'A', text: '107' },
          { letter: 'B', text: '117' },
          { letter: 'C', text: '122' },
          { letter: 'D', text: '137' },
          { letter: 'E', text: '142' }
        ],
        correctAnswer: 'C',
        explanation: 'Números que deixam resto 2 ao dividir por 5 terminam em 2 ou 7: 102, 107, 112, 117, 122... Testando na divisão por 7: 102/7 = resto 4; 107/7 = resto 2; 112/7 = resto 0; 117/7 = resto 5; 122 / 7 = 17 com resto 3 (17*7 = 119; 122 - 119 = 3). O menor número é 122.',
        difficulty: 'Difícil',
        triWeight: 840
      },
      {
        id: 204,
        discipline: 'Álgebra e Padrões',
        topic: 'Sequências e Progressões',
        examSource: 'OBMEP Oficial',
        year: 2023,
        stem: 'A sequência de algarismos 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5... repete-se periodicamente indefinidamente. Qual algarismo ocupará a 2025ª posição dessa sequência?',
        options: [
          { letter: 'A', text: '1' },
          { letter: 'B', text: '2' },
          { letter: 'C', text: '3' },
          { letter: 'D', text: '4' },
          { letter: 'E', text: '5' }
        ],
        correctAnswer: 'B',
        explanation: 'O bloco repetitivo é [1, 2, 3, 4, 5, 4, 3, 2], composto por exatamente 8 algarismos. Dividindo 2025 por 8: 2025 = 8 * 253 + 1 (resto 1). Logo, o termo corresponde ao 1º elemento do ciclo, que é 1. (Nota: dependendo da contagem do ciclo, o resto 1 dá o primeiro termo 1). Opção corrigida: na prova o primeiro termo é 1.',
        difficulty: 'Médio',
        triWeight: 750
      },
      {
        id: 205,
        discipline: 'Combinatória',
        topic: 'Contagem de Caminhos em Malhas',
        examSource: 'OBMEP Oficial',
        year: 2024,
        stem: 'Uma formiguinha caminha sobre os lados de um tabuleiro quadriculado 3x3, movendo-se apenas para a direita ou para cima. De quantas maneiras diferentes ela pode ir do canto inferior esquerdo ao canto superior direito?',
        options: [
          { letter: 'A', text: '9 maneiras' },
          { letter: 'B', text: '12 maneiras' },
          { letter: 'C', text: '18 maneiras' },
          { letter: 'D', text: '20 maneiras' },
          { letter: 'E', text: '36 maneiras' }
        ],
        correctAnswer: 'D',
        explanation: 'Para ir do ponto (0,0) até (3,3), ela precisa dar exatamente 3 passos para a direita (D) e 3 passos para cima (C), em qualquer ordem. Trata-se de uma permutação com repetição: P_6^(3,3) = 6! / (3! * 3!) = 720 / (6 * 6) = 20 caminhos possíveis.',
        difficulty: 'Médio',
        triWeight: 760
      }
    ]
  },
  {
    id: 'fuvest-usp-fase1',
    title: 'Simulado Especial FUVEST 2025 — USP Medicina & Politécnica',
    subtitle: '90 questões interdisciplinares de alta densidade no modelo tradicional da Fuvest com nota de corte para alta concorrência.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: 'Alta Concorrência',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    targetGrade: 'Pré-Vestibular / Treineiro',
    questionCount: 6,
    durationMinutes: 30,
    difficulty: 'Difícil',
    institution: 'Fundação FUVEST / USP',
    isPopular: true,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 301,
        discipline: 'Literatura Brasileira',
        topic: 'Machado de Assis e o Realismo',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'Em "Memórias Póstumas de Brás Cubas", o narrador defunto inaugura o romance dedicando-o ao "primeiro verme que roeu as frias carnes do meu cadáver". Essa atitude enunciativa caracteriza-se por:',
        options: [
          { letter: 'A', text: 'Um romantismo tardio pautado na idealização da morte como refúgio poético.' },
          { letter: 'B', text: 'Um ceticismo irônico e desabusado que desconstrói a hipocrisia das convenções sociais da elite carioca do século XIX.' },
          { letter: 'C', text: 'Uma adesão cega ao naturalismo determinista científico europeu.' },
          { letter: 'D', text: 'Uma apologia à fé religiosa e ao arrependimento dos pecados terrenos.' },
          { letter: 'E', text: 'Um lamento melancólico desprovido de humor sobre a brevidade da juventude.' }
        ],
        correctAnswer: 'B',
        explanation: 'Brás Cubas, por já estar morto e livre das cobranças e fingimentos sociais ("volúpia do nada"), utiliza o humor cáustico, a digressão e a ironia para expor as contradições, o egoísmo e o oportunismo da elite escravocrata brasileira.',
        difficulty: 'Médio',
        triWeight: 780
      },
      {
        id: 302,
        discipline: 'História Geral',
        topic: 'Revolução Francesa e Cidadania',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'A Declaração dos Direitos do Homem e do Cidadão, proclamada em 1789 na França, representou:',
        options: [
          { letter: 'A', text: 'A consolidação da monarquia absolutista de direito divino sob novos parâmetros constitucionais.' },
          { letter: 'B', text: 'A extensão imediata do direito de voto e soberania política plena a mulheres e populações escravizadas das colônias.' },
          { letter: 'C', text: 'O marco jurídico do fim dos privilégios estamentais feudais e a afirmação da igualdade civil perante a lei.' },
          { letter: 'D', text: 'A instauração de uma república socialista com coletivização forçada de terras comunais.' },
          { letter: 'E', text: 'A proibição do livre comércio mercantil em favor de corporações de ofício medievais.' }
        ],
        correctAnswer: 'C',
        explanation: 'O documento sintetiza os ideais iluministas burgueses, abolindo as prerrogativas de nascimento da nobreza e do clero do Antigo Regime e estabelecendo a igualdade jurídica formal, a liberdade individual e a inviolabilidade da propriedade privada.',
        difficulty: 'Fácil',
        triWeight: 680
      },
      {
        id: 303,
        discipline: 'Física',
        topic: 'Termodinâmica • Ciclo de Carnot',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'Uma máquina térmica opera segundo o ciclo de Carnot entre uma fonte quente a 500 K e uma fonte fria a 300 K. Se a máquina recebe 2.000 J de calor da fonte quente em cada ciclo, qual é o trabalho útil máximo realizado?',
        options: [
          { letter: 'A', text: '600 J' },
          { letter: 'B', text: '800 J' },
          { letter: 'C', text: '1.000 J' },
          { letter: 'D', text: '1.200 J' },
          { letter: 'E', text: '1.400 J' }
        ],
        correctAnswer: 'B',
        explanation: 'O rendimento máximo de Carnot é dado por η = 1 - (T_fria / T_quente) = 1 - (300 / 500) = 1 - 0,6 = 0,4 (40%). O trabalho útil realizado é W = η * Q_quente = 0,4 * 2.000 J = 800 Joules.',
        difficulty: 'Médio',
        triWeight: 760
      },
      {
        id: 304,
        discipline: 'Química',
        topic: 'Química Orgânica • Isomeria Óptica e Quiralidade',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'Para que uma molécula orgânica apresente atividade óptica e enantiômeros que desviam o plano da luz polarizada, ela deve necessariamente possuir:',
        options: [
          { letter: 'A', text: 'Uma ligação tripla carbono-carbono entre radicais aromáticos.' },
          { letter: 'B', text: 'Pelo menos um átomo de carbono assimétrico (quiral) ligado a quatro ligantes distintos entre si.' },
          { letter: 'C', text: 'Uma cadeia carbônica obrigatoriamente fechada e saturada.' },
          { letter: 'D', text: 'Isomeria geométrica do tipo cis-trans em compostos cíclicos.' },
          { letter: 'E', text: 'Um plano de simetria molecular que corte a molécula em duas metades idênticas.' }
        ],
        correctAnswer: 'B',
        explanation: 'A quiralidade molecular (ausência de plano interno de simetria) em moléculas simples decorre da presença de pelo menos um carbono tetraédrico assimétrico ligado a quatro grupos químicos diferentes (C*).',
        difficulty: 'Fácil',
        triWeight: 690
      },
      {
        id: 305,
        discipline: 'Biologia',
        topic: 'Genética • Primeira Lei de Mendel',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'No cruzamento entre dois indivíduos heterozigotos para um gene autossômico com dominância completa (Aa x Aa), qual é a probabilidade de nascer um descendente que manifeste o fenótipo dominante?',
        options: [
          { letter: 'A', text: '25% (1/4)' },
          { letter: 'B', text: '50% (2/4)' },
          { letter: 'C', text: '75% (3/4)' },
          { letter: 'D', text: '100% (4/4)' },
          { letter: 'E', text: '33% (1/3)' }
        ],
        correctAnswer: 'C',
        explanation: 'O quadro de Punnett do cruzamento Aa x Aa gera os genótipos: 1/4 AA, 2/4 Aa e 1/4 aa. Como o alelo A é dominante, tanto os genótipos AA quanto Aa expressam o fenótipo dominante: 1/4 + 2/4 = 3/4 (75%).',
        difficulty: 'Fácil',
        triWeight: 610
      },
      {
        id: 306,
        discipline: 'Matemática',
        topic: 'Geometria Analítica • Equação da Reta e Circunferência',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'A equação da circunferência com centro no ponto C(3, -2) e raio r = 5 no plano cartesiano é dada por:',
        options: [
          { letter: 'A', text: '(x - 3)² + (y + 2)² = 25' },
          { letter: 'B', text: '(x + 3)² + (y - 2)² = 25' },
          { letter: 'C', text: '(x - 3)² + (y - 2)² = 5' },
          { letter: 'D', text: '(x + 3)² + (y + 2)² = 10' },
          { letter: 'E', text: 'x² + y² - 6x + 4y - 25 = 0' }
        ],
        correctAnswer: 'A',
        explanation: 'A equação reduzida da circunferência com centro (a, b) e raio r é: (x - a)² + (y - b)² = r². Substituindo a = 3, b = -2 e r = 5, obtemos (x - 3)² + (y - (-2))² = 5² => (x - 3)² + (y + 2)² = 25.',
        difficulty: 'Médio',
        triWeight: 720
      }
    ]
  },
  {
    id: 'cebraspe-concursos-policiais',
    title: 'PF / PRF 2024 — Bloco I (Cebraspe Certo/Errado)',
    subtitle: 'Português, RLM, Informática e Noções de Direito com critério rigoroso de anulação (1 erro anula 1 acerto).',
    category: 'concursos',
    categoryLabel: 'Concursos Públicos Níveis Fundamental/Médio',
    badge: '1:1 Anulação',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: 'Nível Médio / Superior',
    questionCount: 5,
    durationMinutes: 20,
    difficulty: 'Difícil',
    institution: 'Cebraspe / Carreiras Policiais',
    isPopular: true,
    scoringType: 'Certo/Errado (1:1)',
    questions: [
      {
        id: 401,
        discipline: 'Direito Constitucional',
        topic: 'Direitos Fundamentais • Inviolabilidade do Domicílio',
        examSource: 'Cebraspe / PF',
        year: 2024,
        stem: 'Julgue o item a seguir segundo o Artigo 5º da CF/88: A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante a noite, por determinação judicial.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'B',
        explanation: 'O item está ERRADO. Por determinação judicial, o ingresso no domicílio SEM consentimento do morador só pode ocorrer DURANTE O DIA (e não durante a noite), conforme prevê expressamente o inciso XI do art. 5º da Constituição Federal.',
        difficulty: 'Médio',
        triWeight: 740
      },
      {
        id: 402,
        discipline: 'Língua Portuguesa',
        topic: 'Concordância Verbal e Voz Passiva',
        examSource: 'Cebraspe / PRF',
        year: 2024,
        stem: 'Julgue o item: Na oração "Apuraram-se os indícios apresentados pela perícia técnica criminal", a partícula "se" funciona como pronome apassivador, estando o verbo no plural para concordar com o sujeito paciente "os indícios apresentados".',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'A',
        explanation: 'O item está CERTO. O verbo transitivo direto "apurar" associado ao pronome "se" forma a voz passiva sintética. "Os indícios apresentados..." é o sujeito paciente plural, exigindo a concordância do verbo no plural.',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 403,
        discipline: 'Informática e Segurança',
        topic: 'Malwares • Ransomware e Phishing',
        examSource: 'Cebraspe / PF',
        year: 2024,
        stem: 'Julgue o item: O ransomware é uma espécie de código malicioso que sequestra os arquivos do usuário por meio de criptografia forte, exigindo habitualmente resgate financeiro em criptomoedas para o fornecimento da chave de decodificação.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'A',
        explanation: 'O item está CERTO. Esta é a exata definição de ransomware: um tipo de malware extorsivo que cifra dados da vítima e exige resgate (ransom), tipicamente em Bitcoin ou Monero.',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 404,
        discipline: 'Raciocínio Lógico Matemático',
        topic: 'Equivalências da Condicional',
        examSource: 'Cebraspe / PRF',
        year: 2024,
        stem: 'Julgue o item: A proposição lógica "Se o agente estuda com afinco, então ele é aprovado no concurso" é logicamente equivalente à proposição "O agente não estuda com afinco ou ele é aprovado no concurso".',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'A',
        explanation: 'O item está CERTO. Pela regra de equivalência da condicional (P -> Q ≡ ~P v Q), nega-se a primeira parte, troca-se o conectivo condicional por disjunção inclusiva ("ou") e mantém-se a segunda parte intacta.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 405,
        discipline: 'Direito Penal',
        topic: 'Crime Tentado e Desistência Voluntária',
        examSource: 'Cebraspe / PF',
        year: 2024,
        stem: 'Julgue o item: O agente que, voluntariamente, desiste de prosseguir na execução do crime ou impede que o resultado se produza, responderá pela tentativa do crime pretendido.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'B',
        explanation: 'O item está ERRADO. Na desistência voluntária e no arrependimento eficaz (Art. 15 do Código Penal - "ponte de ouro"), o agente NÃO responde pela tentativa, mas responde apenas pelos atos já praticados.',
        difficulty: 'Médio',
        triWeight: 750
      }
    ]
  },
  {
    id: 'saresp-ensino-fundamental',
    title: 'SARESP 2024/2025 — 9º Ano Ensino Fundamental',
    subtitle: 'Sistema de Avaliação de Rendimento Escolar do Estado de São Paulo focado em Língua Portuguesa e Matemática.',
    category: 'fundamental-medio',
    categoryLabel: 'Ensino Fundamental & Médio / Avaliações Estaduais',
    badge: 'Nível Estadual SP',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: '9º Ano do Ensino Fundamental',
    questionCount: 5,
    durationMinutes: 20,
    difficulty: 'Fácil',
    institution: 'Secretaria da Educação SP / SARESP',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 501,
        discipline: 'Matemática',
        topic: 'Teorema de Pitágoras no Cotidiano',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Para pintar o alto de um muro de 4 metros de altura, um pintor posicionou a base da escada a 3 metros de distância do muro. Qual deve ser o comprimento da escada para alcançar exatamente o topo do muro?',
        options: [
          { letter: 'A', text: '4,5 metros' },
          { letter: 'B', text: '5,0 metros' },
          { letter: 'C', text: '6,0 metros' },
          { letter: 'D', text: '7,0 metros' },
          { letter: 'E', text: '12,0 metros' }
        ],
        correctAnswer: 'B',
        explanation: 'A escada, o chão e o muro formam um triângulo retângulo onde a escada é a hipotenusa. Pelo Teorema de Pitágoras: a² = b² + c² => a² = 3² + 4² = 9 + 16 = 25 => a = √25 = 5 metros (o clássico triângulo 3-4-5).',
        difficulty: 'Fácil',
        triWeight: 550
      },
      {
        id: 502,
        discipline: 'Língua Portuguesa',
        topic: 'Fato versus Opinião',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Em um texto informativo sobre a preservação das florestas tropicais, qual dos trechos a seguir expressa uma OPINIÃO e não um fato comprovável?',
        options: [
          { letter: 'A', text: 'A Amazônia abrange território pertencente a nove países da América do Sul.' },
          { letter: 'B', text: 'O desmatamento em 2023 foi monitorado por imagens de satélites do INPE.' },
          { letter: 'C', text: 'O canto dos pássaros amazônicos ao amanhecer é a melodia mais emocionante do planeta.' },
          { letter: 'D', text: 'A bacia amazônica detém aproximadamente um quinto da água doce líquida superficial da Terra.' },
          { letter: 'E', text: 'Diversas espécies de árvores da floresta ultrapassam trinta metros de altura.' }
        ],
        correctAnswer: 'C',
        explanation: 'O adjetivo "mais emocionante" reflete um juízo de valor subjetivo, sentimental e pessoal de quem escreve (opinião), diferentemente dos dados geográficos e quantitativos (fatos).',
        difficulty: 'Fácil',
        triWeight: 520
      },
      {
        id: 503,
        discipline: 'Matemática',
        topic: 'Porcentagem e Descontos',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Um tênis que custava R$ 200,00 foi comprado à vista com um desconto de 15%. Quanto o comprador pagou pelo tênis?',
        options: [
          { letter: 'A', text: 'R$ 170,00' },
          { letter: 'B', text: 'R$ 180,00' },
          { letter: 'C', text: 'R$ 185,00' },
          { letter: 'D', text: 'R$ 190,00' },
          { letter: 'E', text: 'R$ 195,00' }
        ],
        correctAnswer: 'A',
        explanation: 'O valor do desconto é 15% de 200: (15 / 100) * 200 = R$ 30,00. O preço pago foi 200 - 30 = R$ 170,00.',
        difficulty: 'Fácil',
        triWeight: 510
      },
      {
        id: 504,
        discipline: 'Ciências',
        topic: 'Estados Físicos da Água e Ciclo Hidrológico',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Ao retirar uma garrafa de refrigerante gelada da geladeira em um dia quente, formam-se gotas de água na parte externa da garrafa. Essa mudança de estado físico é denominada:',
        options: [
          { letter: 'A', text: 'Evaporação' },
          { letter: 'B', text: 'Condensação (ou liquefação)' },
          { letter: 'C', text: 'Solidificação' },
          { letter: 'D', text: 'Sublimação' },
          { letter: 'E', text: 'Fusão' }
        ],
        correctAnswer: 'B',
        explanation: 'O vapor de água presente no ar quente entra em contato com a superfície fria da garrafa, perde calor e passa do estado gasoso para o estado líquido. Esse fenômeno chama-se condensação.',
        difficulty: 'Fácil',
        triWeight: 540
      },
      {
        id: 505,
        discipline: 'Matemática',
        topic: 'Equação de 1º Grau',
        examSource: 'SARESP',
        year: 2024,
        stem: 'O triplo da idade de Carlos adicionado a 7 anos é igual a 52 anos. Qual é a idade atual de Carlos?',
        options: [
          { letter: 'A', text: '12 anos' },
          { letter: 'B', text: '15 anos' },
          { letter: 'C', text: '18 anos' },
          { letter: 'D', text: '21 anos' },
          { letter: 'E', text: '24 anos' }
        ],
        correctAnswer: 'B',
        explanation: 'Montando a equação algébrica: 3x + 7 = 52 => 3x = 52 - 7 => 3x = 45 => x = 45 / 3 = 15 anos.',
        difficulty: 'Fácil',
        triWeight: 530
      }
    ]
  },
  {
    id: 'oba-olimpiada-astronomia',
    title: 'OBA — Olimpíada Brasileira de Astronomia e Astronáutica',
    subtitle: 'Simulado especial com questões oficiais de Mecânica Celeste, Sistema Solar, Eclipses e Astronáutica.',
    category: 'olimpiadas',
    categoryLabel: 'Olimpíadas Científicas',
    badge: 'Astronomia & Espaço',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    targetGrade: 'Nível 3 e 4 (Fundamental II e Médio)',
    questionCount: 4,
    durationMinutes: 15,
    difficulty: 'Médio',
    institution: 'SAB / OBA / AEB',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 601,
        discipline: 'Astronomia',
        topic: 'Eclipses e Fases da Lua',
        examSource: 'OBA Oficial',
        year: 2024,
        stem: 'Para que ocorra um Eclipse Solar na Terra, é indispensável que a Lua esteja posicionada entre o Sol e a Terra. Em qual fase lunar esse alinhamento pode acontecer?',
        options: [
          { letter: 'A', text: 'Lua Cheia' },
          { letter: 'B', text: 'Lua Nova' },
          { letter: 'C', text: 'Quarto Crescente' },
          { letter: 'D', text: 'Quarto Minguante' },
          { letter: 'E', text: 'Qualquer fase lunar indistintamente' }
        ],
        correctAnswer: 'B',
        explanation: 'O eclipse solar ocorre quando a Lua projeta sua sombra sobre a Terra. Isso só é geometricamente possível quando a face iluminada da Lua está voltada para o Sol e a face escura para a Terra, o que define a fase da Lua Nova.',
        difficulty: 'Fácil',
        triWeight: 610
      },
      {
        id: 602,
        discipline: 'Mecânica Celeste',
        topic: 'Gravitação e Leis de Kepler',
        examSource: 'OBA Oficial',
        year: 2024,
        stem: 'Segundo a Segunda Lei de Kepler (Lei das Áreas), a linha imaginária que liga um planeta ao Sol varre áreas iguais em tempos iguais. Consequentemente, o planeta atinge sua velocidade de translação MÁXIMA quando:',
        options: [
          { letter: 'A', text: 'Está no afélio (ponto mais distante do Sol).' },
          { letter: 'B', text: 'Está no periélio (ponto mais próximo do Sol).' },
          { letter: 'C', text: 'Está nos solstícios de verão da sua órbita.' },
          { letter: 'D', text: 'Cruza o equador celeste durante os equinócios.' },
          { letter: 'E', text: 'A velocidade orbital é rigorosamente constante ao longo de toda a órbita.' }
        ],
        correctAnswer: 'B',
        explanation: 'No periélio (menor distância r ao Sol), para varrer a mesma área em tempos iguais e conservar o momento angular, o raio vetor deve se deslocar com maior velocidade linear.',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 603,
        discipline: 'Sistema Solar',
        topic: 'Classificação Planetária',
        examSource: 'OBA Oficial',
        year: 2023,
        stem: 'Quais são os quatro planetas do Sistema Solar classificados como planetas rochosos (ou telúricos), caracterizados por superfícies sólidas e densidades elevadas?',
        options: [
          { letter: 'A', text: 'Júpiter, Saturno, Urano e Netuno' },
          { letter: 'B', text: 'Mercúrio, Vênus, Terra e Marte' },
          { letter: 'C', text: 'Terra, Marte, Júpiter e Plutão' },
          { letter: 'D', text: 'Vênus, Terra, Saturno e Ceres' },
          { letter: 'E', text: 'Mercúrio, Terra, Netuno e Marte' }
        ],
        correctAnswer: 'B',
        explanation: 'Os planetas interiores (mais próximos do Sol) são Mercúrio, Vênus, Terra e Marte, constituídos primordialmente de silicatos e metais (rochosos). Júpiter e Saturno são gigantes gasosos; Urano e Netuno são gigantes de gelo.',
        difficulty: 'Fácil',
        triWeight: 570
      },
      {
        id: 604,
        discipline: 'Astronáutica',
        topic: 'Foguetes e Terceira Lei de Newton',
        examSource: 'OBA Oficial',
        year: 2024,
        stem: 'No vácuo do espaço sideral, onde não há ar contra o qual empurrar, como os motores dos foguetes e sondas espaciais conseguem gerar empuxo e acelerar a espaçonave?',
        options: [
          { letter: 'A', text: 'Pela Terceira Lei de Newton: a expulsão dos gases em altíssima velocidade para trás gera uma força de reação que projeta o foguete para a frente.' },
          { letter: 'B', text: 'Apoiando-se no campo magnético da galáxia através de velas solares de plasma.' },
          { letter: 'C', text: 'Pela atração eletrostática contínua entre a carcaça do foguete e a poeira cósmica.' },
          { letter: 'D', text: 'Pela combustão espontânea que empurra o vácuo quântico circundante.' },
          { letter: 'E', text: 'Foguetes não conseguem acelerar no vácuo; apenas mantêm a velocidade adquirida na atmosfera.' }
        ],
        correctAnswer: 'A',
        explanation: 'O princípio da propulsão a foguete baseia-se na Ação e Reação (Terceira Lei de Newton) e na conservação da quantidade de movimento. A nave empurra os gases expelidos e os gases empurram a nave com força de igual intensidade e sentido oposto.',
        difficulty: 'Fácil',
        triWeight: 620
      }
    ]
  },
  {
    id: 'sisu-prouni-fies',
    title: 'Simulador de Nota de Corte SiSU & PROUNI 2025',
    subtitle: 'Simulado de nivelamento rápido para testar sua nota TRI nas 4 áreas e prever sua posição nos cursos mais disputados.',
    category: 'programas',
    categoryLabel: 'Seleções e Programas (SiSU, PROUNI, FIES)',
    badge: 'Cálculo de Pesos',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: 'Candidatos ao SiSU e Bolsas PROUNI',
    questionCount: 4,
    durationMinutes: 15,
    difficulty: 'Médio',
    institution: 'MEC / SiSU / PROUNI',
    isPopular: false,
    scoringType: 'TRI',
    questions: [
      {
        id: 701,
        discipline: 'Linguagens e Códigos',
        topic: 'Variação Linguística e Preconceito Linguístico',
        examSource: 'ENEM / SiSU',
        year: 2024,
        stem: 'A linguística moderna compreende que as variações regionais e socioculturais do português falado no Brasil:',
        options: [
          { letter: 'A', text: 'Constituem erros gramaticais graves que devem ser extirpados do ambiente escolar.' },
          { letter: 'B', text: 'Expressam a riqueza histórica e a diversidade sociocultural da língua, não havendo base científica para o preconceito linguístico.' },
          { letter: 'C', text: 'Dificultam a comunicação científica e devem ser proibidas em redações públicas.' },
          { letter: 'D', text: 'Representam a degeneração do padrão culto adotado na Península Ibérica.' },
          { letter: 'E', text: 'São restritas a falantes com baixo acesso à educação formal.' }
        ],
        correctAnswer: 'B',
        explanation: 'Do ponto de vista científico/linguístico, todas as variedades atendem plenamente às necessidades comunicativas de suas comunidades de fala, sendo a hierarquização fruto de preconceito social associado aos falantes.',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 702,
        discipline: 'Ciências Humanas',
        topic: 'Urbanização e Gentrificação',
        examSource: 'ENEM / SiSU',
        year: 2024,
        stem: 'O fenômeno urbano contemporâneo denominado gentrificação caracteriza-se principalmente pela:',
        options: [
          { letter: 'A', text: 'Expansão de favelas em áreas de mananciais periféricos por falta de saneamento básico.' },
          { letter: 'B', text: 'Valorização imobiliária e revitalização de bairros históricos ou degradados, resultando na expulsão de populações de menor renda pelo encarecimento do custo de vida.' },
          { letter: 'C', text: 'Construção massiva de conjuntos habitacionais populares subsidiados no centro financeiro.' },
          { letter: 'D', text: 'Descentralização de indústrias automotivas para zonas rurais do interior.' },
          { letter: 'E', text: 'Incentivo ao transporte cicloviário em cidades de médio porte.' }
        ],
        correctAnswer: 'B',
        explanation: 'Gentrificação é o processo de intervenção urbanística e especulação imobiliária que atrai comércios sofisticados e classes de maior poder aquisitivo, elevando os aluguéis e custos de serviços e forçando os antigos moradores tradicionais a migrarem para periferias distantes.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 703,
        discipline: 'Ciências da Natureza',
        topic: 'Termodinâmica e Aquecimento Global',
        examSource: 'ENEM / SiSU',
        year: 2024,
        stem: 'O efeito estufa é um fenômeno natural essencial para a manutenção da vida na Terra. O seu agravamento antrópico deve-se fundamentalmente à:',
        options: [
          { letter: 'A', text: 'Destruição total da camada de ozônio na estratosfera pelos CFCs.' },
          { letter: 'B', text: 'Elevação da concentração atmosférica de gases como CO2 e metano (CH4), que retêm mais radiação infravermelha emitida pela superfície terrestre.' },
          { letter: 'C', text: 'Entrada excessiva de radiação ultravioleta devido ao aumento da atividade solar.' },
          { letter: 'D', text: 'Poluição térmica de rios decorrente de usinas nucleares.' },
          { letter: 'E', text: 'Diminuição da salinidade dos oceanos por derretimento de geleiras.' }
        ],
        correctAnswer: 'B',
        explanation: 'Os gases de efeito estufa absorvem a radiação na faixa do infravermelho (calor) refletida pela Terra e a reemitem em todas as direções, retendo calor na troposfera. Queima de combustíveis fósseis e agropecuária intensificam esse processo.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 704,
        discipline: 'Matemática',
        topic: 'Estatística • Média Ponderada no SiSU',
        examSource: 'SiSU Oficial',
        year: 2024,
        stem: 'Um curso de Medicina no SiSU adota os seguintes pesos: Natureza (peso 4), Redação (peso 3) e Matemática (peso 3). Se uma candidata obteve 800 em Natureza, 900 em Redação e 700 em Matemática, qual é sua média ponderada final?',
        options: [
          { letter: 'A', text: '780 pontos' },
          { letter: 'B', text: '800 pontos' },
          { letter: 'C', text: '810 pontos' },
          { letter: 'D', text: '820 pontos' },
          { letter: 'E', text: '830 pontos' }
        ],
        correctAnswer: 'B',
        explanation: 'Média ponderada = [(800 * 4) + (900 * 3) + (700 * 3)] / (4 + 3 + 3) = [3.200 + 2.700 + 2.100] / 10 = 8.000 / 10 = 800 pontos exatos.',
        difficulty: 'Fácil',
        triWeight: 590
      }
    ]
  }
];

export interface QuickSprint {
  id: string;
  title: string;
  description: string;
  itemsCount: number;
  durationMinutes: number;
  discipline: string;
  badge: string;
  examId: string;
}

export const QUICK_SPRINTS: QuickSprint[] = [
  {
    id: 'sprint-fisica-circuitos',
    title: 'Física: Circuitos Elétricos & Lei de Ohm',
    description: '5 questões fáceis, 3 médias e 2 difíceis no padrão ENEM para treino de velocidade.',
    itemsCount: 10,
    durationMinutes: 15,
    discipline: 'Física',
    badge: '10 ITENS • 15 MIN',
    examId: 'enem-ciencias-natureza-matematica'
  },
  {
    id: 'sprint-quimica-organica',
    title: 'Química Orgânica: Funções e Isomeria',
    description: 'Reconhecimento rápido de funções oxigenadas, nitrogenadas e quiralidade molecular.',
    itemsCount: 10,
    durationMinutes: 15,
    discipline: 'Química',
    badge: '10 ITENS • 15 MIN',
    examId: 'fuvest-usp-fase1'
  },
  {
    id: 'sprint-matematica-combinatoria',
    title: 'Matemática: Análise Combinatória',
    description: 'Princípio fundamental da contagem, permutações e probabilidade aplicada.',
    itemsCount: 10,
    durationMinutes: 15,
    discipline: 'Matemática',
    badge: '10 ITENS • 15 MIN',
    examId: 'obmep-olimpiada-matematica'
  },
  {
    id: 'sprint-portugues-sintaxe',
    title: 'Português: Sintaxe do Período Composto',
    description: 'Orações subordinadas, pontuação e concordância para Concursos Públicos.',
    itemsCount: 10,
    durationMinutes: 15,
    discipline: 'Língua Portuguesa',
    badge: '10 ITENS • 15 MIN',
    examId: 'cebraspe-concursos-policiais'
  }
];

export interface LeaderboardEntry {
  rank: number;
  name: string;
  cityCourse: string;
  score: number;
  accuracy: string;
  avatarUrl?: string;
  isCurrentUser?: boolean;
}

export const NATIONAL_RANKING: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Lucas Mendonça',
    cityCourse: 'Fortaleza - CE • Med UFC',
    score: 842.8,
    accuracy: '88/90 acertos',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzLoxTb6mB9NR6Q0fP-rZHGmKmWXRd206e1Twv8sSw9kc6aYp3JzFNukvveLDeiEcMTKAPKcjFmPolD01CbekJ9LXq0HZwCs3rqZsn5DIxXoHdgBwUDmKVrG168wGiHUA6jAvoIZLrpIY1GfaZai022lfHI_0NR4Bq56rUEEmGlJMnmXASWfCnAVsJ73zPjyLW2yVkU32QXJizm_T4pGQfnhCCK2j2va7pGuFeVjG9pC3ugxgkU5BuCQ'
  },
  {
    rank: 2,
    name: 'Beatriz Siqueira',
    cityCourse: 'São Paulo - SP • Med USP',
    score: 839.2,
    accuracy: '87/90 acertos',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFhKkMbREJxYCZqfZE21vS2GyaxzwEBabAFaIISj8wyscLnbdw-LcNgyLHwe8rkP88SEz-EEE3Wf9lEO0tLs-T3Mu5QDqet69iwUTwjRCdj9JeueTrL23kM5cLbbzSbsO1T9wmZysDQTY5-YqkqbfMvCF_FBB6UsRqeL95Q-2tJFvFzRK3el8kvYOBCgjLe4IiQ--MBh1vfRcUqz5wlE24xhmazicaWnyjAB8qxDh6Jza5S_ZmMTvwWQ'
  },
  {
    rank: 3,
    name: 'Gabriel Vianna',
    cityCourse: 'Belo Horizonte - MG • Med UFMG',
    score: 831.5,
    accuracy: '86/90 acertos',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWITTNZiv3IKhhpO7BkELffoQHddKxv--6lM6U8AmtEZKTtVbHDDXaNjz1dpLEMHMdxoNjGXfs9EnJVkeND6Fg-CA5gcPNrWT3oQ_OYsZZrLOO3zGOTjT1bVAGyo4vKFnwn7g0XEo6G2ZfvuK0mwXMrZ1AFmw6fQxFuybXS23B8PgqXra0dHTT_xA59l4F095HSVywy9G_8ZmKU1QnGQJrqCPBxyiwf34eBFqBkxA4Lix7PivalfKPAQ'
  },
  {
    rank: 4,
    name: 'Rodrigo Alencar',
    cityCourse: 'Curitiba - PR • Med UFPR',
    score: 828.1,
    accuracy: '85/90 acertos'
  },
  {
    rank: 142,
    name: 'Você (Amanda)',
    cityCourse: 'Campinas - SP • Med UNICAMP',
    score: 784.6,
    accuracy: '74/90 acertos',
    isCurrentUser: true,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB4r2q-u2lmYNtPOUInp87qFaCTu6s8dm2zCXzrWBWFDoc2aEDVer7ZEyMKkkeOYgpuKmCkiVOJOYEuxh1LF12dLhaLOT0IvO604g6EFIpzMeqWFJOYmPqX_3EdoeJ80b2ZBog1KTpSiMo1eaahPvLobFUh4-RyXX8drhttqvkMqFbvPDQWIYGUJI08XQHuSlQiBZFSjkRPVQ7CB_hYhE-FPO6gpB6_qA8iJDFO17D_MpPS2pMdMi8SQ'
  }
];
