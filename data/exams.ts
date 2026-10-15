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
  // 1. ENEM Dia 2
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
        explanation: 'A DNA-polimerase III é a principal enzima responsável pela polimerização da nova fita no sentido 5\' -> 3\'. Sem ela, a elongação das fitas filhas é bloqueada na fase S.',
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
        explanation: 'Para brilho nominal em 120 V, cada lâmpada deve receber individualmente os 120 V da fonte, característica exclusiva da ligação em paralelo.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 3,
        discipline: 'Química',
        topic: 'Físico-Química • Equilíbrio Químico',
        examSource: 'ENEM Oficial',
        year: 2023,
        stem: 'No processo Haber-Bosch: N2(g) + 3 H2(g) ⇌ 2 NH3(g) (ΔH < 0). Qual alteração nas condições do sistema deslocará o equilíbrio no sentido de favorecer a formação de amônia (NH3)?',
        options: [
          { letter: 'A', text: 'Aumento da temperatura e diminuição da pressão total do reator.' },
          { letter: 'B', text: 'Aumento da pressão total e resfriamento moderado do sistema.' },
          { letter: 'C', text: 'Adição de um catalisador de ferro, que desloca o equilíbrio para a direita.' },
          { letter: 'D', text: 'Remoção contínua de nitrogênio molecular (N2) do interior do vaso.' },
          { letter: 'E', text: 'Aumento do volume do recipiente reacional mantendo a temperatura constante.' }
        ],
        correctAnswer: 'B',
        explanation: 'Maior pressão favorece o menor volume molar (2 mols vs 4 mols), e menor temperatura favorece a reação exotérmica (ΔH < 0).',
        difficulty: 'Médio',
        triWeight: 740
      },
      {
        id: 4,
        discipline: 'Matemática',
        topic: 'Geometria Espacial • Cilindros e Volumes',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Um reservatório cilíndrico reto tem raio da base r = 2 metros e altura h = 5 metros. Adotando π = 3, qual é a capacidade total de armazenamento em litros?',
        options: [
          { letter: 'A', text: '12.000 litros' },
          { letter: 'B', text: '30.000 litros' },
          { letter: 'C', text: '60.000 litros' },
          { letter: 'D', text: '120.000 litros' },
          { letter: 'E', text: '300.000 litros' }
        ],
        correctAnswer: 'C',
        explanation: 'V = π * r² * h = 3 * 4 * 5 = 60 m³ = 60.000 litros.',
        difficulty: 'Fácil',
        triWeight: 590
      },
      {
        id: 5,
        discipline: 'Matemática',
        topic: 'Análise Combinatória',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Uma comissão de saúde será formada por 3 médicos e 2 enfermeiros a partir de 6 médicos e 5 enfermeiros. Quantas comissões distintas podem ser compostas?',
        options: [
          { letter: 'A', text: '120 maneiras' },
          { letter: 'B', text: '150 maneiras' },
          { letter: 'C', text: '200 maneiras' },
          { letter: 'D', text: '250 maneiras' },
          { letter: 'E', text: '720 maneiras' }
        ],
        correctAnswer: 'C',
        explanation: 'C(6,3) * C(5,2) = 20 * 10 = 200 comissões distintas.',
        difficulty: 'Médio',
        triWeight: 715
      },
      {
        id: 6,
        discipline: 'Biologia',
        topic: 'Ecologia • Biomagnificação',
        examSource: 'ENEM Oficial',
        year: 2023,
        stem: 'Em uma cadeia alimentar aquática contaminada por mercúrio, qual elo apresentará a maior concentração do poluente tóxico?',
        options: [
          { letter: 'A', text: 'Fitoplâncton (produtores autotróficos).' },
          { letter: 'B', text: 'Zooplâncton (consumidores primários).' },
          { letter: 'C', text: 'Peixes herbívoros (consumidores secundários).' },
          { letter: 'D', text: 'Aves piscívoras e predadores de topo.' },
          { letter: 'E', text: 'Concentração idêntica em todos os elos.' }
        ],
        correctAnswer: 'D',
        explanation: 'Metais pesados acumulam-se em concentrações crescentes nos níveis tróficos superiores (biomagnificação).',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 7,
        discipline: 'Física',
        topic: 'Óptica • Presbiopia',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Para corrigir a presbiopia ("vista cansada") e permitir a leitura a 25 cm, o oftalmologista deve prescrever lentes:',
        options: [
          { letter: 'A', text: 'Divergentes' },
          { letter: 'B', text: 'Convergentes' },
          { letter: 'C', text: 'Cilíndricas' },
          { letter: 'D', text: 'Planóides' },
          { letter: 'E', text: 'Bifocais neutras' }
        ],
        correctAnswer: 'B',
        explanation: 'Lentes convergentes (positivas) aproximam o foco para a retina em objetos próximos.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 8,
        discipline: 'Matemática',
        topic: 'Função Exponencial',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'A proliferação de bactérias segue N(t) = 1000 * 2^(0.5 * t), com t em horas. Em quanto tempo a população atinge 16.000 bactérias?',
        options: [
          { letter: 'A', text: '4 horas' },
          { letter: 'B', text: '6 horas' },
          { letter: 'C', text: '8 horas' },
          { letter: 'D', text: '12 horas' },
          { letter: 'E', text: '16 horas' }
        ],
        correctAnswer: 'C',
        explanation: '16 = 2^(0.5 * t) => 2^4 = 2^(0.5 * t) => 0.5 * t = 4 => t = 8 horas.',
        difficulty: 'Médio',
        triWeight: 750
      }
    ]
  },

  // 2. ENEM Dia 1
  {
    id: 'enem-dia-1-linguagens-humanas',
    title: 'Simulado Geral ENEM 2024/2025 — Dia 1',
    subtitle: 'Linguagens, Códigos e suas Tecnologias + Ciências Humanas e suas Tecnologias com foco em interpretação textual e cidadania.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: '1º Dia Oficial',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    targetGrade: '3º Ano EM / Pré-Vestibular',
    questionCount: 6,
    durationMinutes: 40,
    difficulty: 'Médio',
    institution: 'INEP / ENEM',
    isPopular: true,
    scoringType: 'TRI',
    questions: [
      {
        id: 11,
        discipline: 'Língua Portuguesa',
        topic: 'Funções da Linguagem',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Um anúncio publicitário governamental afirma: "Vacine seu filho neste sábado. Proteja quem você mais ama!". A função da linguagem predominante é:',
        options: [
          { letter: 'A', text: 'Referencial ou denotativa, focada unicamente na descrição de dados científicos.' },
          { letter: 'B', text: 'Conativa ou apelativa, que busca convencer e orientar o comportamento do interlocutor através do imperativo.' },
          { letter: 'C', text: 'Metalinguística, pois discute o próprio código da língua portuguesa.' },
          { letter: 'D', text: 'Fática, que busca testar o canal de comunicação.' },
          { letter: 'E', text: 'Poética, priorizando a métrica clássica e rimas regulares.' }
        ],
        correctAnswer: 'B',
        explanation: 'O uso de verbos no imperativo ("vacine", "proteja") e foco em persuadir o receptor caracteriza a função conativa/apelativa.',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 12,
        discipline: 'História do Brasil',
        topic: 'Cidadania e Ditadura Militar (1964-1985)',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'O Ato Institucional nº 5 (AI-5), decretado em dezembro de 1968, representou o fechamento mais severo do regime militar brasileiro ao:',
        options: [
          { letter: 'A', text: 'Permitir a eleição direta para todos os cargos executivos do país.' },
          { letter: 'B', text: 'Suspender a garantia de habeas corpus para crimes contra a segurança nacional e autorizar o fechamento do Congresso.' },
          { letter: 'C', text: 'Legalizar os partidos políticos clandestinos de esquerda.' },
          { letter: 'D', text: 'Revogar o Estatuto da Terra e estatizar os bancos estrangeiros.' },
          { letter: 'E', text: 'Instituir o voto facultativo para cidadãos analfabetos.' }
        ],
        correctAnswer: 'B',
        explanation: 'O AI-5 suspendeu garantias constitucionais como o habeas corpus, censurou a imprensa e consolidou os "anos de chumbo".',
        difficulty: 'Médio',
        triWeight: 690
      },
      {
        id: 13,
        discipline: 'Sociologia',
        topic: 'Globalização e Indústria Cultural',
        examSource: 'ENEM Oficial',
        year: 2023,
        stem: 'Para Theodor Adorno e Max Horkheimer, a "Indústria Cultural" no capitalismo contemporâneo tem como consequência central:',
        options: [
          { letter: 'A', text: 'A democratização espontânea do pensamento crítico e filosófico.' },
          { letter: 'B', text: 'A padronização das manifestações artísticas e a transformação da cultura em mercadoria de consumo passivo.' },
          { letter: 'C', text: 'O resgate da autonomia das vanguardas artísticas medievais.' },
          { letter: 'D', text: 'A extinção da publicidade de massa nas grandes metrópoles.' },
          { letter: 'E', text: 'A eliminação do lucro financeiro nas produtoras de entretenimento.' }
        ],
        correctAnswer: 'B',
        explanation: 'A Escola de Frankfurt conceitua a Indústria Cultural como a subordinação da arte à lógica mercantil, alienando o consumidor.',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 14,
        discipline: 'Filosofia',
        topic: 'Contratualismo e Estado Moderno',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Para Thomas Hobbes, a transição do "estado de natureza" para o "estado civil" decorre principalmente da necessidade de:',
        options: [
          { letter: 'A', text: 'Preservar a igualdade econômica absoluta entre os cidadãos.' },
          { letter: 'B', text: 'Superar o medo constante da morte violenta e a guerra de todos contra todos por meio de um poder soberano forte.' },
          { letter: 'C', text: 'Garantir a soberania popular direta com plebiscitos semanais.' },
          { letter: 'D', text: 'Promover a livre concorrência sem interferência governamental.' },
          { letter: 'E', text: 'Retornar ao estado de inocência original da humanidade.' }
        ],
        correctAnswer: 'B',
        explanation: 'Em "Leviatã", Hobbes argumenta que no estado de natureza a vida humana é "solitária, pobre, sórdida e curta", justificando o pacto social para segurança mútua.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 15,
        discipline: 'Geografia',
        topic: 'Migrações e Urbanização Brasileira',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Nas últimas duas décadas, o fluxo migratório interestadual no Brasil apresentou como nova tendência destacada:',
        options: [
          { letter: 'A', text: 'O êxodo rural maciço exclusivamente em direção à cidade de São Paulo.' },
          { letter: 'B', text: 'A migração de retorno para as regiões de origem (especialmente o Nordeste) e o crescimento das cidades médias do interior.' },
          { letter: 'C', text: 'O esvaziamento total das capitais litorâneas.' },
          { letter: 'D', text: 'A proibição de deslocamentos inter-regionais pelo Estatuto da Metrópole.' },
          { letter: 'E', text: 'A concentração populacional restrita à Região Norte.' }
        ],
        correctAnswer: 'B',
        explanation: 'Descentralização econômica e melhoria de infraestrutura levaram à migração de retorno e crescimento de polos do interior.',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 16,
        discipline: 'Língua Portuguesa',
        topic: 'Gêneros Digitais e Intertextualidade',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Em um meme publicado nas redes sociais que ironiza o excesso de reuniões corporativas improdutivas, o recurso comunicativo predominante é:',
        options: [
          { letter: 'A', text: 'O uso de jargão exclusivamente jurídico sem humor.' },
          { letter: 'B', text: 'A síntese verbo-visual combinando texto curto e imagem de domínio público com efeito humorístico e crítico.' },
          { letter: 'C', text: 'A narração romântica descritiva em terceira pessoa.' },
          { letter: 'D', text: 'A estrutura formal de artigo científico indexado.' },
          { letter: 'E', text: 'O tom solene de edital ministerial.' }
        ],
        correctAnswer: 'B',
        explanation: 'Os memes utilizam multimodalidade verbo-visual com alto poder de síntese e crítica social cotidiana.',
        difficulty: 'Fácil',
        triWeight: 560
      }
    ]
  },

  // 3. FUVEST Fase 1
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
        explanation: 'Brás Cubas utiliza o humor cáustico e a ironia para expor as contradições, o egoísmo e o oportunismo da elite escravocrata brasileira.',
        difficulty: 'Médio',
        triWeight: 780
      },
      {
        id: 302,
        discipline: 'História Geral',
        topic: 'Revolução Francesa e Cidadania',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'A Declaração dos Direitos do Homem e do Cidadão (1789) representou:',
        options: [
          { letter: 'A', text: 'A consolidação da monarquia absolutista sob novos parâmetros.' },
          { letter: 'B', text: 'A extensão imediata do direito de voto a mulheres e pessoas escravizadas.' },
          { letter: 'C', text: 'O marco jurídico do fim dos privilégios estamentais feudais e a afirmação da igualdade civil perante a lei.' },
          { letter: 'D', text: 'A instauração de uma república socialista com coletivização de terras.' },
          { letter: 'E', text: 'A proibição do livre comércio mercantil em favor de corporações medievais.' }
        ],
        correctAnswer: 'C',
        explanation: 'O documento aboliu as prerrogativas de nascimento da nobreza e do clero, consagrando a igualdade jurídica formal burguesa.',
        difficulty: 'Fácil',
        triWeight: 680
      },
      {
        id: 303,
        discipline: 'Física',
        topic: 'Termodinâmica • Ciclo de Carnot',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'Uma máquina térmica de Carnot opera entre 500 K e 300 K. Recebendo 2.000 J da fonte quente por ciclo, qual o trabalho útil máximo?',
        options: [
          { letter: 'A', text: '600 J' },
          { letter: 'B', text: '800 J' },
          { letter: 'C', text: '1.000 J' },
          { letter: 'D', text: '1.200 J' },
          { letter: 'E', text: '1.400 J' }
        ],
        correctAnswer: 'B',
        explanation: 'η = 1 - (300/500) = 0,4. W = 0,4 * 2.000 = 800 J.',
        difficulty: 'Médio',
        triWeight: 760
      },
      {
        id: 304,
        discipline: 'Química',
        topic: 'Química Orgânica • Quiralidade',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'Para apresentar atividade óptica e enantiômeros que desviam a luz polarizada, uma molécula simples deve conter:',
        options: [
          { letter: 'A', text: 'Uma ligação tripla carbono-carbono entre radicais aromáticos.' },
          { letter: 'B', text: 'Pelo menos um carbono quiral assimétrico ligado a quatro ligantes distintos.' },
          { letter: 'C', text: 'Uma cadeia carbônica obrigatoriamente fechada e saturada.' },
          { letter: 'D', text: 'Isomeria geométrica do tipo cis-trans.' },
          { letter: 'E', text: 'Um plano de simetria molecular interno.' }
        ],
        correctAnswer: 'B',
        explanation: 'A assimetria molecular e quiralidade decorrem da presença de carbono com 4 ligantes diferentes entre si.',
        difficulty: 'Fácil',
        triWeight: 690
      },
      {
        id: 305,
        discipline: 'Biologia',
        topic: 'Genética • Primeira Lei de Mendel',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'No cruzamento entre dois heterozigotos (Aa x Aa) com dominância completa, qual a probabilidade do fenótipo dominante?',
        options: [
          { letter: 'A', text: '25% (1/4)' },
          { letter: 'B', text: '50% (2/4)' },
          { letter: 'C', text: '75% (3/4)' },
          { letter: 'D', text: '100% (4/4)' },
          { letter: 'E', text: '33% (1/3)' }
        ],
        correctAnswer: 'C',
        explanation: 'Genótipos AA (1/4) e Aa (2/4) expressam o fenótipo dominante: 3/4 = 75%.',
        difficulty: 'Fácil',
        triWeight: 610
      },
      {
        id: 306,
        discipline: 'Matemática',
        topic: 'Geometria Analítica • Circunferência',
        examSource: 'FUVEST',
        year: 2024,
        stem: 'A equação da circunferência com centro C(3, -2) e raio r = 5 é:',
        options: [
          { letter: 'A', text: '(x - 3)² + (y + 2)² = 25' },
          { letter: 'B', text: '(x + 3)² + (y - 2)² = 25' },
          { letter: 'C', text: '(x - 3)² + (y - 2)² = 5' },
          { letter: 'D', text: '(x + 3)² + (y + 2)² = 10' },
          { letter: 'E', text: 'x² + y² - 6x + 4y - 25 = 0' }
        ],
        correctAnswer: 'A',
        explanation: '(x - a)² + (y - b)² = r² => (x - 3)² + (y + 2)² = 25.',
        difficulty: 'Médio',
        triWeight: 720
      }
    ]
  },

  // 4. UNICAMP 1ª Fase
  {
    id: 'unicamp-conhecimentos-gerais',
    title: 'UNICAMP 2025 — 1ª Fase Conhecimentos Gerais',
    subtitle: 'Prova interdisciplinar da Comvest com foco em análise crítica de gráficos, textos históricos e contemporaneidade.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: 'Comvest',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: 'Vestibulandos UNICAMP',
    questionCount: 5,
    durationMinutes: 25,
    difficulty: 'Difícil',
    institution: 'Comvest / UNICAMP',
    isPopular: true,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 41,
        discipline: 'Interdisciplinar',
        topic: 'Mudanças Climáticas e Recursos Hídricos',
        examSource: 'UNICAMP',
        year: 2024,
        stem: 'O fenômeno dos "Rios Voadores" na América do Sul refere-se a:',
        options: [
          { letter: 'A', text: 'Correntes fluviais subterrâneas que abastecem o Aquífero Guarani.' },
          { letter: 'B', text: 'Massas de ar carregadas de vapor d\'água originadas na Floresta Amazônica que transportam umidade para o Centro-Oeste e Sudeste do Brasil.' },
          { letter: 'C', text: 'Vapor emitido pelas geleiras da Patagônia em direção à Cordilheira dos Andes.' },
          { letter: 'D', text: 'Canais artificiais construídos para a transposição do Rio São Francisco.' },
          { letter: 'E', text: 'Frentes polares que provocam geadas no Sul do Brasil.' }
        ],
        correctAnswer: 'B',
        explanation: 'A evapotranspiração massiva da Amazônia cria fluxos aéreos de vapor que abastecem de chuvas as lavouras e reservatórios do Centro-Sul.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 42,
        discipline: 'Biologia',
        topic: 'Imunologia e Vacinas',
        examSource: 'UNICAMP',
        year: 2024,
        stem: 'A tecnologia de vacinas de RNA mensageiro (mRNA) atua estimulando o sistema imune ao:',
        options: [
          { letter: 'A', text: 'Alterar permanentemente o genoma das células hospedeiras no núcleo celular.' },
          { letter: 'B', text: 'Instruir os ribossomos citoplasmáticos a sintetizarem temporariamente uma proteína antigênica viral, gerando anticorpos e células de memória.' },
          { letter: 'C', text: 'Injetar vírus vivos com carga replicativa integral.' },
          { letter: 'D', text: 'Destruir todos os macrófagos e linfócitos T do organismo.' },
          { letter: 'E', text: 'Fornecer anticorpos prontos produzidos em animais como cavalos.' }
        ],
        correctAnswer: 'B',
        explanation: 'O mRNA não entra no núcleo nem altera o DNA; ele é lido no citoplasma para produzir o antígeno, ativando a resposta imune ativa.',
        difficulty: 'Médio',
        triWeight: 730
      },
      {
        id: 43,
        discipline: 'Física',
        topic: 'Gravitação Universal',
        examSource: 'UNICAMP',
        year: 2024,
        stem: 'Se a distância entre dois corpos celestes for triplicada, a força de atração gravitacional mútua entre eles:',
        options: [
          { letter: 'A', text: 'Ficará multiplicada por 3.' },
          { letter: 'B', text: 'Permanecerá inalterada.' },
          { letter: 'C', text: 'Ficará reduzida a um terço (1/3).' },
          { letter: 'D', text: 'Ficará reduzida a um nono (1/9).' },
          { letter: 'E', text: 'Ficará multiplicada por 9.' }
        ],
        correctAnswer: 'D',
        explanation: 'Pela Lei de Newton, F = G * (m1 * m2) / d². Triplicar d divide a força por 3² = 9.',
        difficulty: 'Fácil',
        triWeight: 590
      },
      {
        id: 44,
        discipline: 'História do Brasil',
        topic: 'Abolição e Pós-Abolição',
        examSource: 'UNICAMP',
        year: 2024,
        stem: 'Após a assinatura da Lei Áurea em 1888, a população negra liberta no Brasil deparou-se com:',
        options: [
          { letter: 'A', text: 'Distribuição imediata de terras e indenizações financeiras garantidas pela Coroa.' },
          { letter: 'B', text: 'Falta de políticas públicas de integração socioeconômica, criminalização de práticas culturais e incentivo oficial à imigração europeia.' },
          { letter: 'C', text: 'Cotas universitárias e ocupação proporcional de cargos no funcionalismo imperial.' },
          { letter: 'D', text: 'Proibição total do trabalho assalariado para imigrantes italianos.' },
          { letter: 'E', text: 'Acesso universal e gratuito a escolas secundárias públicas.' }
        ],
        correctAnswer: 'B',
        explanation: 'A abolição formal ocorreu sem reformas estruturais ou reforma agrária, marginalizando os libertos e priorizando mão de obra europeia.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 45,
        discipline: 'Matemática',
        topic: 'Matrizes e Determinantes',
        examSource: 'UNICAMP',
        year: 2024,
        stem: 'O determinante da matriz 2x2 M = [[4, 2], [3, 5]] é igual a:',
        options: [
          { letter: 'A', text: '14' },
          { letter: 'B', text: '20' },
          { letter: 'C', text: '26' },
          { letter: 'D', text: '8' },
          { letter: 'E', text: '10' }
        ],
        correctAnswer: 'A',
        explanation: 'det(M) = (4 * 5) - (2 * 3) = 20 - 6 = 14.',
        difficulty: 'Fácil',
        triWeight: 570
      }
    ]
  },

  // 5. UNESP 1ª Fase
  {
    id: 'unesp-vunesp-1fase',
    title: 'Simulado Geral UNESP 2025 — VUNESP',
    subtitle: 'Simulado padrão VUNESP com questões diretas, contextualizadas e multidisciplinares de Humanas, Exatas e Biológicas.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: 'Padrão Vunesp',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    targetGrade: 'Vestibulandos UNESP',
    questionCount: 5,
    durationMinutes: 25,
    difficulty: 'Médio',
    institution: 'Fundação Vunesp / UNESP',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 51,
        discipline: 'Biologia',
        topic: 'Zoologia • Artrópodes e Insetos',
        examSource: 'UNESP',
        year: 2024,
        stem: 'Qual característica anatômica é exclusiva dos insetos em comparação com os demais artrópodes (como aracnídeos e crustáceos)?',
        options: [
          { letter: 'A', text: 'Corpo dividido em três tagmas (cabeça, tórax e abdome) e presença de três pares de pernas.' },
          { letter: 'B', text: 'Exoesqueleto quitinoso sujeito a mudas ou ecdises.' },
          { letter: 'C', text: 'Apêndices articulados e sistema circulatório aberto.' },
          { letter: 'D', text: 'Respiração exclusivamente branquial.' },
          { letter: 'E', text: 'Quatro pares de pernas e ausência de antenas.' }
        ],
        correctAnswer: 'A',
        explanation: 'Hexápodes (insetos) possuem três pares de patas torácicas e corpo dividido em cabeça, tórax e abdome.',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 52,
        discipline: 'Química',
        topic: 'Cinética Química • Catalisadores',
        examSource: 'UNESP',
        year: 2024,
        stem: 'A adição de um catalisador apropriado a uma reação química tem como efeito principal:',
        options: [
          { letter: 'A', text: 'Aumentar a energia de ativação e a entalpia final da reação.' },
          { letter: 'B', text: 'Diminuir a energia de ativação da reação através de um caminho alternativo mais rápido.' },
          { letter: 'C', text: 'Deslocar o equilíbrio químico favorecendo maior rendimento final de produtos.' },
          { letter: 'D', text: 'Consumir os reagentes antes que o equilíbrio seja atingido.' },
          { letter: 'E', text: 'Elevar a temperatura interna do meio reacional de forma permanente.' }
        ],
        correctAnswer: 'B',
        explanation: 'Catalisadores aumentam a velocidade reacional abaixando a barreira de energia de ativação sem alterar o equilíbrio químico nem o ΔH.',
        difficulty: 'Fácil',
        triWeight: 610
      },
      {
        id: 53,
        discipline: 'Geografia',
        topic: 'Cartografia • Escalas Numéricas',
        examSource: 'UNESP',
        year: 2024,
        stem: 'Em um mapa de escala 1 : 250.000, uma rodovia mede 4 cm. Qual é a extensão real dessa rodovia no terreno?',
        options: [
          { letter: 'A', text: '1 km' },
          { letter: 'B', text: '10 km' },
          { letter: 'C', text: '25 km' },
          { letter: 'D', text: '100 km' },
          { letter: 'E', text: '1.000 km' }
        ],
        correctAnswer: 'B',
        explanation: 'Distância real = 4 cm * 250.000 = 1.000.000 cm = 10.000 m = 10 km.',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 54,
        discipline: 'Física',
        topic: 'Hidrostática • Princípio de Arquimedes',
        examSource: 'UNESP',
        year: 2024,
        stem: 'Um bloco cúbico de madeira flutua na água com metade de seu volume submerso. Sabendo que a densidade da água é 1,0 g/cm³, qual a densidade da madeira?',
        options: [
          { letter: 'A', text: '0,25 g/cm³' },
          { letter: 'B', text: '0,50 g/cm³' },
          { letter: 'C', text: '1,00 g/cm³' },
          { letter: 'D', text: '2,00 g/cm³' },
          { letter: 'E', text: '0,75 g/cm³' }
        ],
        correctAnswer: 'B',
        explanation: 'No equilíbrio: Peso = Empuxo => d_corpo * V_total = d_líquido * V_submerso => d_corpo = 1,0 * 0,5 = 0,50 g/cm³.',
        difficulty: 'Médio',
        triWeight: 700
      },
      {
        id: 55,
        discipline: 'Filosofia',
        topic: 'Iluminismo • Divisão dos Poderes',
        examSource: 'UNESP',
        year: 2024,
        stem: 'A teoria da separação dos poderes em Executivo, Legislativo e Judiciário com freios e contrapesos mútuos foi formulada por:',
        options: [
          { letter: 'A', text: 'Montesquieu em "O Espírito das Leis".' },
          { letter: 'B', text: 'Nicolau Maquiavel em "O Príncipe".' },
          { letter: 'C', text: 'Karl Marx em "O Capital".' },
          { letter: 'D', text: 'Jean-Paul Sartre em "O Ser e o Nada".' },
          { letter: 'E', text: 'René Descartes no "Discurso do Método".' }
        ],
        correctAnswer: 'A',
        explanation: 'Montesquieu propôs a tripartição dos poderes para evitar a tirania e o abuso absolutista.',
        difficulty: 'Fácil',
        triWeight: 590
      }
    ]
  },

  // 6. Provão Paulista - Etapa III (Vunesp)
  {
    id: 'provão-paulista-vunesp',
    title: 'Provão Paulista 2024/2025 — Etapa III (Vunesp)',
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
        topic: 'Figuras de Linguagem',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'No trecho "A cidade acordou cinzenta, com os carros cuspindo fumaça nas esquinas apressadas", identificam-se:',
        options: [
          { letter: 'A', text: 'Metonímia e Eufemismo.' },
          { letter: 'B', text: 'Personificação (Prosopopeia) e Metáfora.' },
          { letter: 'C', text: 'Pleonasmo e Paradoxo.' },
          { letter: 'D', text: 'Hipérbole e Antítese.' },
          { letter: 'E', text: 'Silepse e Elipse.' }
        ],
        correctAnswer: 'B',
        explanation: 'Atribuir ações humanas a seres inanimados ("acordou", "esquinas apressadas") caracteriza prosopopeia.',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 102,
        discipline: 'História do Brasil',
        topic: 'Era Vargas',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'Durante o primeiro governo Vargas (1930–1945), a política trabalhista caracterizou-se pelo:',
        options: [
          { letter: 'A', text: 'Distanciamento do Estado nas negociações patronais.' },
          { letter: 'B', text: 'Paternalismo estatal e controle sindical (peleguismo) atrelado à criação da CLT.' },
          { letter: 'C', text: 'Incentivo a greves livres e descentralização da Justiça do Trabalho.' },
          { letter: 'D', text: 'Apoio preferencial a petroleiras estrangeiras.' },
          { letter: 'E', text: 'Fechamento de escolas técnicas fabris.' }
        ],
        correctAnswer: 'B',
        explanation: 'A política varguista combinou direitos trabalhistas inéditos (CLT, salário mínimo) com estrito controle sindical estatal.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 103,
        discipline: 'Matemática',
        topic: 'Trigonometria',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'Do topo de um farol de 40 m de altura, avista-se um barco sob ângulo de depressão de 30°. Com tg(30°) = 0,58, qual a distância do barco à base?',
        options: [
          { letter: 'A', text: '23,2 metros' },
          { letter: 'B', text: '46,4 metros' },
          { letter: 'C', text: '68,9 metros' },
          { letter: 'D', text: '80,0 metros' },
          { letter: 'E', text: '115,0 metros' }
        ],
        correctAnswer: 'C',
        explanation: 'tg(30°) = 40 / d => d = 40 / 0,58 ≈ 68,96 metros.',
        difficulty: 'Médio',
        triWeight: 730
      },
      {
        id: 104,
        discipline: 'Geografia',
        topic: 'Biomas Brasileiros',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'O avanço da moderna fronteira agropecuária no Brasil incidiu mais fortemente sobre qual bioma?',
        options: [
          { letter: 'A', text: 'Mata Atlântica' },
          { letter: 'B', text: 'Cerrado' },
          { letter: 'C', text: 'Pampa' },
          { letter: 'D', text: 'Caatinga' },
          { letter: 'E', text: 'Pantanal' }
        ],
        correctAnswer: 'B',
        explanation: 'O Cerrado brasileiro foi o principal bioma alterado pelo cultivo mecanizado de grãos e pecuária extensiva.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 105,
        discipline: 'Física',
        topic: 'Movimento Uniformemente Variado',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'Um metrô parte do repouso com aceleração constante de 1,5 m/s². Qual sua velocidade após 10 s?',
        options: [
          { letter: 'A', text: '10 m/s (36 km/h)' },
          { letter: 'B', text: '15 m/s (54 km/h)' },
          { letter: 'C', text: '20 m/s (72 km/h)' },
          { letter: 'D', text: '25 m/s (90 km/h)' },
          { letter: 'E', text: '30 m/s (108 km/h)' }
        ],
        correctAnswer: 'B',
        explanation: 'v = v0 + a*t = 0 + 1,5 * 10 = 15 m/s (ou 54 km/h).',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 106,
        discipline: 'Química',
        topic: 'Estequiometria',
        examSource: 'Provão Paulista',
        year: 2024,
        stem: 'A queima de 1 mol de metano (CH4 + 2 O2 -> CO2 + 2 H2O) produz quantos gramas de CO2? (C=12, O=16)',
        options: [
          { letter: 'A', text: '16 g' },
          { letter: 'B', text: '28 g' },
          { letter: 'C', text: '32 g' },
          { letter: 'D', text: '44 g' },
          { letter: 'E', text: '64 g' }
        ],
        correctAnswer: 'D',
        explanation: '1 mol de CO2 tem massa molar = 12 + 32 = 44 g.',
        difficulty: 'Fácil',
        triWeight: 600
      }
    ]
  },

  // 7. Provão Paulista - Etapa II
  {
    id: 'provao-paulista-etapa2',
    title: 'Provão Paulista 2024/2025 — Etapa II (2º Ano EM)',
    subtitle: 'Simulado seriado para alunos do 2º ano do Ensino Médio da rede pública estadual de São Paulo.',
    category: 'fundamental-medio',
    categoryLabel: 'Ensino Fundamental & Médio / Avaliações Estaduais',
    badge: 'Etapa II (Seriado)',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    targetGrade: '2º Ano do Ensino Médio',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'Vunesp / SP',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 71,
        discipline: 'Física',
        topic: 'Termologia • Dilatação Térmica',
        examSource: 'Provão Paulista II',
        year: 2024,
        stem: 'Nas ferrovias, deixam-se pequenas frestas entre os trilhos de aço (juntas de dilatação). Essa medida de engenharia é indispensável porque:',
        options: [
          { letter: 'A', text: 'O aumento de temperatura causa dilatação linear no aço, e sem o espaço livre os trilhos entortariam.' },
          { letter: 'B', text: 'Facilita a drenagem de água da chuva evitando ferrugem.' },
          { letter: 'C', text: 'Aumenta a velocidade máxima dos trens por diminuição do atrito.' },
          { letter: 'D', text: 'Evita a contração dos trilhos em dias de muito calor.' },
          { letter: 'E', text: 'Trata-se de uma falha de montagem inevitável nas siderúrgicas.' }
        ],
        correctAnswer: 'A',
        explanation: 'ΔL = L0 * α * ΔT. O aumento térmico expande o metal; sem espaço para dilatar, surgem tensões mecânicas e deformações.',
        difficulty: 'Fácil',
        triWeight: 590
      },
      {
        id: 72,
        discipline: 'Matemática',
        topic: 'Progressão Aritmética (PA)',
        examSource: 'Provão Paulista II',
        year: 2024,
        stem: 'Em um teatro, a 1ª fileira tem 12 assentos, a 2ª tem 15 assentos, a 3ª tem 18 assentos, e assim por diante em PA. Quantos assentos há na 10ª fileira?',
        options: [
          { letter: 'A', text: '36 assentos' },
          { letter: 'B', text: '39 assentos' },
          { letter: 'C', text: '42 assentos' },
          { letter: 'D', text: '45 assentos' },
          { letter: 'E', text: '48 assentos' }
        ],
        correctAnswer: 'B',
        explanation: 'a_n = a_1 + (n - 1) * r => a_10 = 12 + (9 * 3) = 12 + 27 = 39 assentos.',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 73,
        discipline: 'Química',
        topic: 'Soluções e Concentração Comum',
        examSource: 'Provão Paulista II',
        year: 2024,
        stem: 'Dissolvem-se 20 g de cloreto de sódio (NaCl) em água suficiente para preparar 500 mL de solução salina. Qual é a concentração em g/L dessa solução?',
        options: [
          { letter: 'A', text: '10 g/L' },
          { letter: 'B', text: '20 g/L' },
          { letter: 'C', text: '40 g/L' },
          { letter: 'D', text: '50 g/L' },
          { letter: 'E', text: '100 g/L' }
        ],
        correctAnswer: 'C',
        explanation: 'C = massa / volume em litros = 20 g / 0,5 L = 40 g/L.',
        difficulty: 'Fácil',
        triWeight: 570
      },
      {
        id: 74,
        discipline: 'História',
        topic: 'Segundo Reinado no Brasil',
        examSource: 'Provão Paulista II',
        year: 2024,
        stem: 'A economia brasileira durante o Segundo Reinado (governo de Dom Pedro II) foi amplamente sustentada pela expansão do cultivo e exportação de:',
        options: [
          { letter: 'A', text: 'Café no Vale do Paraíba e Oeste Paulista.' },
          { letter: 'B', text: 'Borracha na Amazônia ocidental.' },
          { letter: 'C', text: 'Cacau no sul da Bahia.' },
          { letter: 'D', text: 'Algodão no Maranhão.' },
          { letter: 'E', text: 'Soja transgênica no Centro-Oeste.' }
        ],
        correctAnswer: 'A',
        explanation: 'O café foi o grande motor econômico, modernizador e político do Império, gerando divisas cambiais e a ferrovia.',
        difficulty: 'Fácil',
        triWeight: 600
      }
    ]
  },

  // 8. SARESP 9º Ano
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
        stem: 'Para pintar o alto de um muro de 4 metros de altura, a base da escada foi posta a 3 metros do muro. Qual o comprimento da escada?',
        options: [
          { letter: 'A', text: '4,5 metros' },
          { letter: 'B', text: '5,0 metros' },
          { letter: 'C', text: '6,0 metros' },
          { letter: 'D', text: '7,0 metros' },
          { letter: 'E', text: '12,0 metros' }
        ],
        correctAnswer: 'B',
        explanation: 'a² = 3² + 4² = 9 + 16 = 25 => a = 5 metros (triângulo pitagórico 3-4-5).',
        difficulty: 'Fácil',
        triWeight: 550
      },
      {
        id: 502,
        discipline: 'Língua Portuguesa',
        topic: 'Fato versus Opinião',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Qual dos trechos abaixo expressa uma OPINIÃO e não um fato comprovável?',
        options: [
          { letter: 'A', text: 'A Amazônia abrange nove países sul-americanos.' },
          { letter: 'B', text: 'O desmatamento foi monitorado por satélites do INPE.' },
          { letter: 'C', text: 'O canto dos pássaros amazônicos ao amanhecer é a melodia mais emocionante do planeta.' },
          { letter: 'D', text: 'A bacia amazônica detém um quinto da água doce da Terra.' },
          { letter: 'E', text: 'Diversas árvores ultrapassam 30 metros de altura.' }
        ],
        correctAnswer: 'C',
        explanation: '"Mais emocionante" expressa julgamento afetivo pessoal subjetivo (opinião).',
        difficulty: 'Fácil',
        triWeight: 520
      },
      {
        id: 503,
        discipline: 'Matemática',
        topic: 'Porcentagem e Descontos',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Um tênis de R$ 200,00 foi comprado à vista com 15% de desconto. Quanto foi pago?',
        options: [
          { letter: 'A', text: 'R$ 170,00' },
          { letter: 'B', text: 'R$ 180,00' },
          { letter: 'C', text: 'R$ 185,00' },
          { letter: 'D', text: 'R$ 190,00' },
          { letter: 'E', text: 'R$ 195,00' }
        ],
        correctAnswer: 'A',
        explanation: 'Desconto de 15% de 200 = R$ 30. Preço = 200 - 30 = R$ 170,00.',
        difficulty: 'Fácil',
        triWeight: 510
      },
      {
        id: 504,
        discipline: 'Ciências',
        topic: 'Estados Físicos da Água',
        examSource: 'SARESP',
        year: 2024,
        stem: 'Ao retirar uma garrafa gelada da geladeira em dia quente, gotículas formam-se na sua superfície externa. Isso ocorre por:',
        options: [
          { letter: 'A', text: 'Evaporação' },
          { letter: 'B', text: 'Condensação (ou liquefação)' },
          { letter: 'C', text: 'Solidificação' },
          { letter: 'D', text: 'Sublimação' },
          { letter: 'E', text: 'Fusão' }
        ],
        correctAnswer: 'B',
        explanation: 'O vapor da água do ar resfria em contato com a garrafa e vira líquido (condensação).',
        difficulty: 'Fácil',
        triWeight: 540
      },
      {
        id: 505,
        discipline: 'Matemática',
        topic: 'Equação de 1º Grau',
        examSource: 'SARESP',
        year: 2024,
        stem: 'O triplo da idade de Carlos adicionado a 7 anos é igual a 52 anos. Qual é a idade de Carlos?',
        options: [
          { letter: 'A', text: '12 anos' },
          { letter: 'B', text: '15 anos' },
          { letter: 'C', text: '18 anos' },
          { letter: 'D', text: '21 anos' },
          { letter: 'E', text: '24 anos' }
        ],
        correctAnswer: 'B',
        explanation: '3x + 7 = 52 => 3x = 45 => x = 15 anos.',
        difficulty: 'Fácil',
        triWeight: 530
      }
    ]
  },

  // 9. SARESP 3ª Série Ensino Médio
  {
    id: 'saresp-3serie-medio',
    title: 'SARESP 2024/2025 — 3ª Série do Ensino Médio',
    subtitle: 'Avaliação de proficiência estadual para conclusão do Ensino Médio em escolas públicas e privadas.',
    category: 'fundamental-medio',
    categoryLabel: 'Ensino Fundamental & Médio / Avaliações Estaduais',
    badge: 'Conclusão EM',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: '3ª Série do Ensino Médio',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'Secretaria da Educação SP',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 91,
        discipline: 'Língua Portuguesa',
        topic: 'Coesão e Conectivos Lógicos',
        examSource: 'SARESP Médio',
        year: 2024,
        stem: 'Na frase "Ele estudou com dedicação durante meses, CONQUANTO enfrentasse dificuldades de acesso à internet", o conectivo destacado introduz ideia de:',
        options: [
          { letter: 'A', text: 'Concessão' },
          { letter: 'B', text: 'Consequência' },
          { letter: 'C', text: 'Causa' },
          { letter: 'D', text: 'Finalidade' },
          { letter: 'E', text: 'Tempo' }
        ],
        correctAnswer: 'A',
        explanation: '"Conquanto" é conjunção subordinativa concessiva (sinônimo de "embora", "ainda que").',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 92,
        discipline: 'Matemática',
        topic: 'Probabilidade Simples',
        examSource: 'SARESP Médio',
        year: 2024,
        stem: 'Em uma urna com 4 bolas azuis, 6 bolas vermelhas e 10 bolas verdes idênticas, retira-se uma ao acaso. Qual a probabilidade de ser vermelha?',
        options: [
          { letter: 'A', text: '20%' },
          { letter: 'B', text: '30%' },
          { letter: 'C', text: '40%' },
          { letter: 'D', text: '50%' },
          { letter: 'E', text: '60%' }
        ],
        correctAnswer: 'B',
        explanation: 'Total = 20 bolas. Vermelhas = 6. P = 6 / 20 = 3 / 10 = 30%.',
        difficulty: 'Fácil',
        triWeight: 560
      },
      {
        id: 93,
        discipline: 'Biologia',
        topic: 'Ecologia • Relações Ecológicas',
        examSource: 'SARESP Médio',
        year: 2024,
        stem: 'A relação ecológica harmônica interespecífica em que duas espécies vivem juntas com benefícios mútuos e dependência vital é chamada de:',
        options: [
          { letter: 'A', text: 'Comensalismo' },
          { letter: 'B', text: 'Inquilinismo' },
          { letter: 'C', text: 'Mutualismo obrigatório (simbiose)' },
          { letter: 'D', text: 'Amensalismo' },
          { letter: 'E', text: 'Predatismo' }
        ],
        correctAnswer: 'C',
        explanation: 'Mutualismo obrigatório (como líquens e micorrizas) envolve interdependência vital benéfica mútua (+/+).',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 94,
        discipline: 'Matemática',
        topic: 'Estatística • Mediana',
        examSource: 'SARESP Médio',
        year: 2024,
        stem: 'Considere o rol ordenado de notas: 4, 5, 6, 7, 8, 9, 10. Qual é a mediana desse conjunto de valores?',
        options: [
          { letter: 'A', text: '6' },
          { letter: 'B', text: '7' },
          { letter: 'C', text: '8' },
          { letter: 'D', text: '7,5' },
          { letter: 'E', text: '6,5' }
        ],
        correctAnswer: 'B',
        explanation: 'Com 7 valores ímpares, a mediana é o 4º termo central: 7.',
        difficulty: 'Fácil',
        triWeight: 530
      }
    ]
  },

  // 10. SAEB Avaliação Nacional
  {
    id: 'saeb-educacao-basica',
    title: 'Simulado SAEB 2024/2025 — Escala IDEB Oficial',
    subtitle: 'Sistema de Avaliação da Educação Básica do Ministério da Educação para medição da qualidade do aprendizado.',
    category: 'fundamental-medio',
    categoryLabel: 'Ensino Fundamental & Médio / Avaliações Estaduais',
    badge: 'MEC / IDEB',
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
    targetGrade: 'Ensino Fundamental e Médio',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Fácil',
    institution: 'INEP / MEC',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 1001,
        discipline: 'Língua Portuguesa',
        topic: 'Tese e Argumento',
        examSource: 'SAEB Oficial',
        year: 2024,
        stem: 'Identificar a tese de um texto dissertativo-argumentativo consiste em reconhecer:',
        options: [
          { letter: 'A', text: 'A posição central ou ideia defendida pelo autor ao longo do texto.' },
          { letter: 'B', text: 'A biografia detalhada do escritor no rodapé.' },
          { letter: 'C', text: 'A quantidade de parágrafos utilizados.' },
          { letter: 'D', text: 'O número de figuras de linguagem presentes.' },
          { letter: 'E', text: 'O resumo das ideias que o autor discorda.' }
        ],
        correctAnswer: 'A',
        explanation: 'A tese é o ponto de vista basilar que todo o arcabouço argumentativo busca sustentar e fundamentar.',
        difficulty: 'Fácil',
        triWeight: 520
      },
      {
        id: 1002,
        discipline: 'Matemática',
        topic: 'Gráficos de Barras e Setores',
        examSource: 'SAEB Oficial',
        year: 2024,
        stem: 'Em um gráfico de setores (pizza) que representa as preferências de 360 alunos, o setor correspondente à Educação Física possui um ângulo central de 90°. Quantos alunos preferem essa disciplina?',
        options: [
          { letter: 'A', text: '45 alunos' },
          { letter: 'B', text: '60 alunos' },
          { letter: 'C', text: '90 alunos' },
          { letter: 'D', text: '120 alunos' },
          { letter: 'E', text: '180 alunos' }
        ],
        correctAnswer: 'C',
        explanation: '90° representa 90 / 360 = 1/4 (25%) do círculo. 25% de 360 alunos = 90 alunos.',
        difficulty: 'Fácil',
        triWeight: 540
      },
      {
        id: 1003,
        discipline: 'Matemática',
        topic: 'Área do Trapézio',
        examSource: 'SAEB Oficial',
        year: 2024,
        stem: 'Um terreno tem a forma de um trapézio com base maior B = 14 m, base menor b = 6 m e altura h = 8 m. Qual é sua área total?',
        options: [
          { letter: 'A', text: '60 m²' },
          { letter: 'B', text: '80 m²' },
          { letter: 'C', text: '112 m²' },
          { letter: 'D', text: '160 m²' },
          { letter: 'E', text: '224 m²' }
        ],
        correctAnswer: 'B',
        explanation: 'Área = [(B + b) * h] / 2 = [(14 + 6) * 8] / 2 = (20 * 8) / 2 = 80 m².',
        difficulty: 'Fácil',
        triWeight: 550
      },
      {
        id: 1004,
        discipline: 'Língua Portuguesa',
        topic: 'Semântica e Polissemia',
        examSource: 'SAEB Oficial',
        year: 2024,
        stem: 'A palavra "banco" na frase "Sentei no banco da praça para esperar a abertura do banco financeiro" exemplifica o fenômeno da:',
        options: [
          { letter: 'A', text: 'Sinonímia perfeita' },
          { letter: 'B', text: 'Polissemia / Homonímia' },
          { letter: 'C', text: 'Antonímia' },
          { letter: 'D', text: 'Paronímia imperfeita' },
          { letter: 'E', text: 'Hiperonímia restrita' }
        ],
        correctAnswer: 'B',
        explanation: 'Mesma grafia e pronúncia com significados totalmente diferentes em contextos distintos.',
        difficulty: 'Fácil',
        triWeight: 510
      }
    ]
  },

  // 11. OBMEP Nível 3 (Ensino Médio)
  {
    id: 'obmep-olimpiada-matematica',
    title: 'OBMEP — Olimpíada Brasileira de Matemática (Nível 3)',
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
        stem: 'Em uma gaveta há 10 meias pretas, 8 brancas e 6 azuis idênticas ao tato. Quantas meias retirar no escuro para garantir um par da mesma cor?',
        options: [
          { letter: 'A', text: '3 meias' },
          { letter: 'B', text: '4 meias' },
          { letter: 'C', text: '11 meias' },
          { letter: 'D', text: '15 meias' },
          { letter: 'E', text: '24 meias' }
        ],
        correctAnswer: 'B',
        explanation: 'Havendo 3 cores, ao retirar 4 meias é garantido que pelo menos duas terão a mesma cor pelo Princípio da Casa dos Pombos.',
        difficulty: 'Fácil',
        triWeight: 650
      },
      {
        id: 202,
        discipline: 'Geometria Plana',
        topic: 'Áreas e Pontos Médios',
        examSource: 'OBMEP Oficial',
        year: 2023,
        stem: 'Um quadrado ABCD de lado 12 cm tem seus pontos médios unidos formando o quadrado menor EFGH. Qual a área de EFGH?',
        options: [
          { letter: 'A', text: '36 cm²' },
          { letter: 'B', text: '48 cm²' },
          { letter: 'C', text: '72 cm²' },
          { letter: 'D', text: '96 cm²' },
          { letter: 'E', text: '108 cm²' }
        ],
        correctAnswer: 'C',
        explanation: 'A área do quadrado inscrito pelos pontos médios é exatamente metade da área original: 144 / 2 = 72 cm².',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 203,
        discipline: 'Teoria dos Números',
        topic: 'Critérios de Divisibilidade',
        examSource: 'OBMEP Oficial',
        year: 2024,
        stem: 'Qual é o menor inteiro positivo de 3 dígitos que deixa resto 2 por 5 e resto 3 por 7?',
        options: [
          { letter: 'A', text: '107' },
          { letter: 'B', text: '117' },
          { letter: 'C', text: '122' },
          { letter: 'D', text: '137' },
          { letter: 'E', text: '142' }
        ],
        correctAnswer: 'C',
        explanation: '122 / 5 tem resto 2 (pois termina em 2). 122 = 17 * 7 + 3 (resto 3).',
        difficulty: 'Difícil',
        triWeight: 840
      },
      {
        id: 204,
        discipline: 'Sequências Periódicas',
        topic: 'Ciclos de Repetição',
        examSource: 'OBMEP Oficial',
        year: 2023,
        stem: 'A sequência de 8 algarismos [1, 2, 3, 4, 5, 4, 3, 2] repete-se indefinidamente. Qual algarismo ocupa a 2025ª posição?',
        options: [
          { letter: 'A', text: '1' },
          { letter: 'B', text: '2' },
          { letter: 'C', text: '3' },
          { letter: 'D', text: '4' },
          { letter: 'E', text: '5' }
        ],
        correctAnswer: 'A',
        explanation: '2025 / 8 = 253 ciclos com resto 1. O 1º elemento do ciclo é 1.',
        difficulty: 'Médio',
        triWeight: 750
      },
      {
        id: 205,
        discipline: 'Combinatória',
        topic: 'Caminhos em Malhas',
        examSource: 'OBMEP Oficial',
        year: 2024,
        stem: 'Uma formiguinha vai de (0,0) a (3,3) movendo-se apenas para a direita ou para cima. Quantos caminhos existem?',
        options: [
          { letter: 'A', text: '9' },
          { letter: 'B', text: '12' },
          { letter: 'C', text: '18' },
          { letter: 'D', text: '20' },
          { letter: 'E', text: '36' }
        ],
        correctAnswer: 'D',
        explanation: 'Permutação com repetição: 6! / (3! * 3!) = 720 / 36 = 20 caminhos.',
        difficulty: 'Médio',
        triWeight: 760
      }
    ]
  },

  // 12. OBMEP Nível 2 (Fundamental II)
  {
    id: 'obmep-nivel2-fundamental',
    title: 'OBMEP — Olimpíada Brasileira de Matemática (Nível 2)',
    subtitle: 'Problemas de lógica, aritmética engenhosa e geometria básica para 8º e 9º anos do Ensino Fundamental.',
    category: 'olimpiadas',
    categoryLabel: 'Olimpíadas Científicas',
    badge: 'Nível 2 (8º/9º Anos)',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    targetGrade: '8º e 9º Anos do Ensino Fundamental',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'IMPA / OBMEP',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 211,
        discipline: 'Aritmética',
        topic: 'Operações e Desafios de Lógica',
        examSource: 'OBMEP Nível 2',
        year: 2024,
        stem: 'Se a soma de 5 números inteiros consecutivos é igual a 100, qual é o maior desses números?',
        options: [
          { letter: 'A', text: '20' },
          { letter: 'B', text: '21' },
          { letter: 'C', text: '22' },
          { letter: 'D', text: '23' },
          { letter: 'E', text: '24' }
        ],
        correctAnswer: 'C',
        explanation: '(n - 2) + (n - 1) + n + (n + 1) + (n + 2) = 5n = 100 => n = 20. O maior é n + 2 = 22.',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 212,
        discipline: 'Geometria',
        topic: 'Perímetros de Figuras Compostas',
        examSource: 'OBMEP Nível 2',
        year: 2024,
        stem: 'Três quadrados idênticos de lado 4 cm são colados lado a lado formando um retângulo. Qual é o perímetro desse retângulo?',
        options: [
          { letter: 'A', text: '24 cm' },
          { letter: 'B', text: '32 cm' },
          { letter: 'C', text: '36 cm' },
          { letter: 'D', text: '40 cm' },
          { letter: 'E', text: '48 cm' }
        ],
        correctAnswer: 'B',
        explanation: 'O retângulo resultante tem comprimento 12 cm e largura 4 cm. Perímetro = 2 * (12 + 4) = 32 cm.',
        difficulty: 'Fácil',
        triWeight: 550
      },
      {
        id: 213,
        discipline: 'Lógica',
        topic: 'Pesagens e Balança de Pratos',
        examSource: 'OBMEP Nível 2',
        year: 2024,
        stem: 'Dentre 9 moedas aparentemente idênticas, uma é mais pesada por ser falsa. Usando uma balança de dois pratos sem pesos, quantas pesagens mínimas garantem encontrar a falsa?',
        options: [
          { letter: 'A', text: '1 pesagem' },
          { letter: 'B', text: '2 pesagens' },
          { letter: 'C', text: '3 pesagens' },
          { letter: 'D', text: '4 pesagens' },
          { letter: 'E', text: '5 pesagens' }
        ],
        correctAnswer: 'B',
        explanation: 'Divide-se em 3 grupos de 3 moedas (3, 3, 3). 1ª pesagem: compara dois grupos. A balança indica o grupo com a falsa. 2ª pesagem: compara duas moedas desse grupo.',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 214,
        discipline: 'Frações',
        topic: 'Frações do Cotidiano',
        examSource: 'OBMEP Nível 2',
        year: 2024,
        stem: 'Ana comeu 1/3 de uma barra de chocolate e Bruno comeu 1/4 do que restou. Que fração da barra inteira ainda sobrou?',
        options: [
          { letter: 'A', text: '1/4' },
          { letter: 'B', text: '1/3' },
          { letter: 'C', text: '1/2' },
          { letter: 'D', text: '5/12' },
          { letter: 'E', text: '7/12' }
        ],
        correctAnswer: 'C',
        explanation: 'Ana deixou 2/3. Bruno comeu 1/4 de 2/3 = 2/12 = 1/6. Sobrou: 2/3 - 1/6 = 4/6 - 1/6 = 3/6 = 1/2.',
        difficulty: 'Médio',
        triWeight: 670
      }
    ]
  },

  // 13. OBA Astronomia e Astronáutica
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
        stem: 'Para ocorrer um Eclipse Solar na Terra, em qual fase da Lua esse alinhamento acontece?',
        options: [
          { letter: 'A', text: 'Lua Cheia' },
          { letter: 'B', text: 'Lua Nova' },
          { letter: 'C', text: 'Quarto Crescente' },
          { letter: 'D', text: 'Quarto Minguante' },
          { letter: 'E', text: 'Qualquer fase' }
        ],
        correctAnswer: 'B',
        explanation: 'A Lua precisa estar entre o Sol e a Terra projetando sua sombra, o que define a Lua Nova.',
        difficulty: 'Fácil',
        triWeight: 610
      },
      {
        id: 602,
        discipline: 'Mecânica Celeste',
        topic: 'Segunda Lei de Kepler',
        examSource: 'OBA Oficial',
        year: 2024,
        stem: 'Pela Lei das Áreas de Kepler, um planeta atinge sua velocidade de translação MÁXIMA quando:',
        options: [
          { letter: 'A', text: 'Está no afélio (mais distante do Sol).' },
          { letter: 'B', text: 'Está no periélio (mais próximo do Sol).' },
          { letter: 'C', text: 'Está nos solstícios.' },
          { letter: 'D', text: 'Cruza os equinócios.' },
          { letter: 'E', text: 'Sempre constante.' }
        ],
        correctAnswer: 'B',
        explanation: 'No periélio (menor raio r), a velocidade orbital precisa ser máxima para varrer áreas iguais em tempos iguais.',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 603,
        discipline: 'Sistema Solar',
        topic: 'Planetas Rochosos',
        examSource: 'OBA Oficial',
        year: 2023,
        stem: 'Quais são os quatro planetas rochosos (telúricos) do Sistema Solar?',
        options: [
          { letter: 'A', text: 'Júpiter, Saturno, Urano e Netuno' },
          { letter: 'B', text: 'Mercúrio, Vênus, Terra e Marte' },
          { letter: 'C', text: 'Terra, Marte, Júpiter e Plutão' },
          { letter: 'D', text: 'Vênus, Terra, Saturno e Ceres' },
          { letter: 'E', text: 'Mercúrio, Terra, Netuno e Marte' }
        ],
        correctAnswer: 'B',
        explanation: 'Mercúrio, Vênus, Terra e Marte são os planetas internos de alta densidade rochosa.',
        difficulty: 'Fácil',
        triWeight: 570
      },
      {
        id: 604,
        discipline: 'Astronáutica',
        topic: 'Propulsão a Foguete',
        examSource: 'OBA Oficial',
        year: 2024,
        stem: 'No vácuo espacial, como os foguetes conseguem acelerar sem ar para empurrar?',
        options: [
          { letter: 'A', text: 'Pela Terceira Lei de Newton (Ação e Reação): a ejeção dos gases para trás impulsiona o foguete para a frente.' },
          { letter: 'B', text: 'Pelas ondas gravitacionais solares.' },
          { letter: 'C', text: 'Pela atração eletrostática com cometas.' },
          { letter: 'D', text: 'Pela queima do vácuo quântico.' },
          { letter: 'E', text: 'Foguetes não aceleram no vácuo.' }
        ],
        correctAnswer: 'A',
        explanation: 'A conservação da quantidade de movimento e ação-reação empurram a nave na direção oposta aos gases de escape.',
        difficulty: 'Fácil',
        triWeight: 620
      }
    ]
  },

  // 14. Cebraspe Concurso Polícia Federal
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
        topic: 'Inviolabilidade do Domicílio',
        examSource: 'Cebraspe / PF',
        year: 2024,
        stem: 'Julgue o item: A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante a noite, por determinação judicial.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'B',
        explanation: 'Item ERRADO. Por determinação judicial, o ingresso só é permitido DURANTE O DIA (Art. 5º, XI da CF/88).',
        difficulty: 'Médio',
        triWeight: 740
      },
      {
        id: 402,
        discipline: 'Língua Portuguesa',
        topic: 'Voz Passiva Sintética',
        examSource: 'Cebraspe / PRF',
        year: 2024,
        stem: 'Julgue o item: Na oração "Apuraram-se os indícios apresentados pela perícia técnica", a partícula "se" funciona como pronome apassivador, estando o verbo no plural concordando com o sujeito paciente.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'A',
        explanation: 'Item CERTO. Verbo transitivo direto + "se" = voz passiva sintética.',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 403,
        discipline: 'Informática',
        topic: 'Segurança da Informação • Ransomware',
        examSource: 'Cebraspe / PF',
        year: 2024,
        stem: 'Julgue o item: O ransomware é uma espécie de malware que cifra arquivos do usuário com criptografia, exigindo habitualmente resgate financeiro para o fornecimento da chave de decodificação.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'A',
        explanation: 'Item CERTO. Definição precisa de ransomware.',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 404,
        discipline: 'Raciocínio Lógico',
        topic: 'Equivalência da Condicional',
        examSource: 'Cebraspe / PRF',
        year: 2024,
        stem: 'Julgue o item: "Se o agente estuda, então é aprovado" é logicamente equivalente a "O agente não estuda ou é aprovado".',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'A',
        explanation: 'Item CERTO. Regra P -> Q ≡ ~P v Q.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 405,
        discipline: 'Direito Penal',
        topic: 'Tentativa e Desistência Voluntária',
        examSource: 'Cebraspe / PF',
        year: 2024,
        stem: 'Julgue o item: O agente que desiste voluntariamente de prosseguir na execução responde pela tentativa do crime pretendido.',
        options: [
          { letter: 'A', text: 'CERTO' },
          { letter: 'B', text: 'ERRADO' }
        ],
        correctAnswer: 'B',
        explanation: 'Item ERRADO. Na desistência voluntária (Art. 15 CP), o agente responde apenas pelos atos já praticados, e não por tentativa.',
        difficulty: 'Médio',
        triWeight: 750
      }
    ]
  },

  // 15. FGV Concursos Tribunais & MP
  {
    id: 'fgv-tribunais-justica',
    title: 'Concurso FGV — Tribunais de Justiça & Ministério Público',
    subtitle: 'Simulado de alta densidade no estilo clássico da Fundação Getulio Vargas com interpretação refinada e gramática culta.',
    category: 'concursos',
    categoryLabel: 'Concursos Públicos Níveis Fundamental/Médio',
    badge: 'Banca FGV',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    targetGrade: 'Técnico e Analista Judiciário',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Difícil',
    institution: 'Fundação Getulio Vargas (FGV)',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 151,
        discipline: 'Língua Portuguesa',
        topic: 'Pontuação e Emprego da Vírgula',
        examSource: 'FGV Oficial',
        year: 2024,
        stem: 'Assinale a frase em que o emprego da vírgula está plenamente de acordo com a norma culta:',
        options: [
          { letter: 'A', text: 'O juiz da comarca, assinou todos os despachos da semana com celeridade.' },
          { letter: 'B', text: 'Os candidatos que chegaram atrasados, perderam o horário da prova.' },
          { letter: 'C', text: 'Durante a sessão plenária de julgamento, os desembargadores mantiveram debates acalorados.' },
          { letter: 'D', text: 'Ela entregou o documento, ao oficial de justiça.' },
          { letter: 'E', text: 'São Paulo e Rio de Janeiro, lideram os índices de processos digitais.' }
        ],
        correctAnswer: 'C',
        explanation: 'A oração inicia com adjunto adverbial de tempo deslocado ("Durante a sessão plenária de julgamento,"), exigindo pontuação facultativa/recomendada sem separar sujeito e predicado.',
        difficulty: 'Médio',
        triWeight: 750
      },
      {
        id: 152,
        discipline: 'Direito Administrativo',
        topic: 'Princípios Constitucionais (LIMPE)',
        examSource: 'FGV Oficial',
        year: 2024,
        stem: 'A proibição de que nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades constem em publicidade governamental decorre do princípio da:',
        options: [
          { letter: 'A', text: 'Legalidade estrita' },
          { letter: 'B', text: 'Impessoalidade' },
          { letter: 'C', text: 'Eficiência orçamentária' },
          { letter: 'D', text: 'Autotutela executória' },
          { letter: 'E', text: 'Continuidade dos serviços públicos' }
        ],
        correctAnswer: 'B',
        explanation: 'Art. 37, § 1º da CF/88 consagra a Impessoalidade, impedindo personalismo e favorecimento individual com recursos públicos.',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 153,
        discipline: 'Língua Portuguesa',
        topic: 'Crase Obrigatória e Proibida',
        examSource: 'FGV Oficial',
        year: 2024,
        stem: 'O acento grave indicativo de crase é OBRIGATÓRIO em qual das opções?',
        options: [
          { letter: 'A', text: 'Ele começou a redigir o relatório.' },
          { letter: 'B', text: 'O texto referia-se à jurisprudência pacificada do Supremo Tribunal Federal.' },
          { letter: 'C', text: 'Entregou a petição a uma servidora da vara cível.' },
          { letter: 'D', text: 'Passearam a cavalo pelo parque.' },
          { letter: 'E', text: 'Dirigiu-se a ela com muito respeito.' }
        ],
        correctAnswer: 'B',
        explanation: '"Referia-se a" (rege preposição) + "a jurisprudência" (artigo feminino definido) = fusão obrigatória (à).',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 154,
        discipline: 'Raciocínio Lógico',
        topic: 'Negação do Quantificador Universal',
        examSource: 'FGV Oficial',
        year: 2024,
        stem: 'A negação lógica da proposição "Todos os servidores do cartório são pontuais" é:',
        options: [
          { letter: 'A', text: 'Nenhum servidor do cartório é pontual.' },
          { letter: 'B', text: 'Pelo menos um servidor do cartório não é pontual.' },
          { letter: 'C', text: 'Todos os servidores do cartório são impontuais.' },
          { letter: 'D', text: 'A maioria dos servidores é pontual.' },
          { letter: 'E', text: 'Alguns servidores são pontuais e outros não.' }
        ],
        correctAnswer: 'B',
        explanation: 'Para negar "Todo A é B", basta que exista pelo menos um elemento A que não seja B ("Existe / Pelo menos um / Algum servidor não é pontual").',
        difficulty: 'Médio',
        triWeight: 700
      }
    ]
  },

  // 16. Concurso Caixa Econômica / Banco do Brasil
  {
    id: 'caixa-banco-brasil',
    title: 'Concurso Caixa / Banco do Brasil — Técnico Bancário & TI',
    subtitle: 'Simulado focado em Conhecimentos Bancários, Matemática Financeira, PIX, Open Finance e Atendimento ao Cliente.',
    category: 'concursos',
    categoryLabel: 'Concursos Públicos Níveis Fundamental/Médio',
    badge: 'Carreiras Bancárias',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: 'Nível Médio Completo',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'Fundação Cesgranrio / Caixa',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 161,
        discipline: 'Conhecimentos Bancários',
        topic: 'Sistema Financeiro Nacional • Banco Central',
        examSource: 'Cesgranrio / CEF',
        year: 2024,
        stem: 'No Sistema Financeiro Nacional, qual órgão possui a atribuição de executar a política monetária e emitir papel-moeda?',
        options: [
          { letter: 'A', text: 'Conselho Monetário Nacional (CMN)' },
          { letter: 'B', text: 'Banco Central do Brasil (Bacen)' },
          { letter: 'C', text: 'Comissão de Valores Mobiliários (CVM)' },
          { letter: 'D', text: 'Banco do Brasil S.A.' },
          { letter: 'E', text: 'BNDES' }
        ],
        correctAnswer: 'B',
        explanation: 'O Bacen é o órgão executor supervisor, responsável pela política monetária e emissão de moeda autorizada pelo CMN.',
        difficulty: 'Fácil',
        triWeight: 590
      },
      {
        id: 162,
        discipline: 'Matemática Financeira',
        topic: 'Juros Simples',
        examSource: 'Cesgranrio / CEF',
        year: 2024,
        stem: 'Um capital de R$ 5.000,00 foi aplicado a juros simples à taxa de 2% ao mês durante 6 meses. Qual foi o montante resgatado?',
        options: [
          { letter: 'A', text: 'R$ 5.400,00' },
          { letter: 'B', text: 'R$ 5.600,00' },
          { letter: 'C', text: 'R$ 5.800,00' },
          { letter: 'D', text: 'R$ 6.000,00' },
          { letter: 'E', text: 'R$ 6.200,00' }
        ],
        correctAnswer: 'B',
        explanation: 'J = C * i * t = 5.000 * 0,02 * 6 = R$ 600. Montante = 5.000 + 600 = R$ 5.600,00.',
        difficulty: 'Fácil',
        triWeight: 560
      },
      {
        id: 163,
        discipline: 'Conhecimentos Bancários',
        topic: 'PIX e Moeda Digital',
        examSource: 'Cesgranrio / CEF',
        year: 2024,
        stem: 'O sistema de pagamentos instantâneos brasileiro (PIX) opera com liquidação:',
        options: [
          { letter: 'A', text: 'Em tempo real, 24 horas por dia, 7 dias por semana.' },
          { letter: 'B', text: 'Apenas em dias úteis durante o horário de expediente bancário comercial.' },
          { letter: 'C', text: 'Exclusivamente por meio de cartões plásticos magnéticos com chip.' },
          { letter: 'D', text: 'Com compensação diferida em D+2 dias úteis.' },
          { letter: 'E', text: 'Restrita a transações entre contas do mesmo conglomerado financeiro.' }
        ],
        correctAnswer: 'A',
        explanation: 'O PIX foi desenvolvido pelo Banco Central para operar ininterruptamente em tempo real (24/7/365).',
        difficulty: 'Fácil',
        triWeight: 540
      },
      {
        id: 164,
        discipline: 'Legislação',
        topic: 'Prevenção à Lavagem de Dinheiro (Lei 9.613/98)',
        examSource: 'Cesgranrio / CEF',
        year: 2024,
        stem: 'As instituições financeiras devem comunicar operações suspeitas de lavagem de dinheiro ao:',
        options: [
          { letter: 'A', text: 'COAF (Conselho de Controle de Atividades Financeiras)' },
          { letter: 'B', text: 'PROCON' },
          { letter: 'C', text: 'Ministério do Trabalho' },
          { letter: 'D', text: 'Juizado de Pequenas Causas' },
          { letter: 'E', text: 'Cartório Notarial de Títulos e Documentos' }
        ],
        correctAnswer: 'A',
        explanation: 'O COAF é a unidade de inteligência financeira nacional encarregada de receber e examinar comunicações de operações atípicas.',
        difficulty: 'Fácil',
        triWeight: 620
      }
    ]
  },

  // 17. FCC Tribunais Federais (TRT / TRE)
  {
    id: 'fcc-tribunais-federais',
    title: 'Concurso FCC — Tribunais Regionais Federais & Eleitorais',
    subtitle: 'Simulado com questões literais de leis, direito constitucional e administração pública no estilo Fundação Carlos Chagas.',
    category: 'concursos',
    categoryLabel: 'Concursos Públicos Níveis Fundamental/Médio',
    badge: 'Banca FCC',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    targetGrade: 'Técnico Judiciário',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'Fundação Carlos Chagas (FCC)',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 171,
        discipline: 'Direito Constitucional',
        topic: 'Organização dos Poderes • Poder Judiciário',
        examSource: 'FCC Oficial',
        year: 2024,
        stem: 'Segundo o Artigo 92 da Constituição Federal, são órgãos do Poder Judiciário brasileiro, EXCETO:',
        options: [
          { letter: 'A', text: 'O Supremo Tribunal Federal (STF).' },
          { letter: 'B', text: 'O Superior Tribunal de Justiça (STJ).' },
          { letter: 'C', text: 'O Ministério Público da União (MPU).' },
          { letter: 'D', text: 'Os Tribunais Regionais do Trabalho (TRTs).' },
          { letter: 'E', text: 'Os Tribunais de Justiça dos Estados.' }
        ],
        correctAnswer: 'C',
        explanation: 'O Ministério Público é instituição autônoma essencial à justiça, não integrando a estrutura do Poder Judiciário.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 172,
        discipline: 'Direito Administrativo',
        topic: 'Regime Jurídico Único (Lei 8.112/90)',
        examSource: 'FCC Oficial',
        year: 2024,
        stem: 'O servidor público federal estável só perderá o cargo em virtude de:',
        options: [
          { letter: 'A', text: 'Sentença judicial transitada em julgado ou processo administrativo disciplinar em que lhe seja assegurada ampla defesa.' },
          { letter: 'B', text: 'Decisão monocrática informal do chefe imediato de setor.' },
          { letter: 'C', text: 'Troca de partido político pelo chefe do Poder Executivo.' },
          { letter: 'D', text: 'Afastamento preventivo por licença de saúde superior a 30 dias.' },
          { letter: 'E', text: 'Transferência obrigatória para outra sede regional.' }
        ],
        correctAnswer: 'A',
        explanation: 'Art. 41, § 1º da CF/88 e Lei 8.112/90 garantem estabilidade após 3 anos, sujeita a perda só por PAD ou processo judicial transitado em julgado.',
        difficulty: 'Fácil',
        triWeight: 640
      },
      {
        id: 173,
        discipline: 'Língua Portuguesa',
        topic: 'Regência Verbal',
        examSource: 'FCC Oficial',
        year: 2024,
        stem: 'O verbo "visar" no sentido de "ter por objetivo / almejar" exige a regência:',
        options: [
          { letter: 'A', text: 'Direta (sem preposição).' },
          { letter: 'B', text: 'Indireta com a preposição "a" (visar a algo).' },
          { letter: 'C', text: 'Indireta com a preposição "de".' },
          { letter: 'D', text: 'Indireta com a preposição "com".' },
          { letter: 'E', text: 'Intransitiva sem complemento.' }
        ],
        correctAnswer: 'B',
        explanation: 'No sentido de mirar/assinar é VTD (visar o passaporte). No sentido de objetivar é VTI com preposição "a" (visar ao cargo).',
        difficulty: 'Médio',
        triWeight: 720
      },
      {
        id: 174,
        discipline: 'Direito Eleitoral',
        topic: 'Alistamento e Voto Obrigatório',
        examSource: 'FCC Oficial',
        year: 2024,
        stem: 'No Brasil, o alistamento eleitoral e o voto são FACULTATIVOS para:',
        options: [
          { letter: 'A', text: 'Maiores de 18 anos e menores de 70 anos alfabetizados.' },
          { letter: 'B', text: 'Os analfabetos, os maiores de 70 anos e os jovens de 16 e 17 anos.' },
          { letter: 'C', text: 'Apenas os militares das Forças Armadas.' },
          { letter: 'D', text: 'Cidadãos residentes em capitais de estado.' },
          { letter: 'E', text: 'Servidores públicos estatutários de plantão.' }
        ],
        correctAnswer: 'B',
        explanation: 'Art. 14, § 1º, II da CF/88: o voto é facultativo para analfabetos, maiores de 70 anos e jovens entre 16 e 18 anos incompletos.',
        difficulty: 'Fácil',
        triWeight: 590
      }
    ]
  },

  // 18. FATEC SP
  {
    id: 'fatec-tecnologia',
    title: 'Simulado FATEC 2025 — Faculdade de Tecnologia de SP',
    subtitle: 'Simulado oficial para cursos superiores de Tecnologia (ADS, Gestão TI, Mecatrônica) do Centro Paula Souza.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: 'Centro Paula Souza',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
    targetGrade: 'Cursos Tecnológicos / Vestibulandos FATEC',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'Centro Paula Souza / FATEC',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 181,
        discipline: 'Raciocínio Lógico & TI',
        topic: 'Lógica Booleana e Portas Lógicas',
        examSource: 'FATEC Oficial',
        year: 2024,
        stem: 'Em computação, a porta lógica E (AND) produz saída VERDADEIRA (1) se e somente se:',
        options: [
          { letter: 'A', text: 'Pelo menos uma das entradas for verdadeira.' },
          { letter: 'B', text: 'Todas as suas entradas forem verdadeiras.' },
          { letter: 'C', text: 'Todas as entradas forem falsas.' },
          { letter: 'D', text: 'Uma entrada for verdadeira e a outra for falsa.' },
          { letter: 'E', text: 'Apenas a primeira entrada for verdadeira.' }
        ],
        correctAnswer: 'B',
        explanation: 'A conjunção lógica AND exige que ambas as variáveis de entrada sejam 1 para que o resultado seja 1.',
        difficulty: 'Fácil',
        triWeight: 580
      },
      {
        id: 182,
        discipline: 'Matemática',
        topic: 'Geometria Espacial • Paralelepípedo',
        examSource: 'FATEC Oficial',
        year: 2024,
        stem: 'Uma caixa de papelão em formato de paralelepípedo retângulo possui dimensões 30 cm x 20 cm x 10 cm. Qual é o seu volume em litros?',
        options: [
          { letter: 'A', text: '0,6 litros' },
          { letter: 'B', text: '6,0 litros' },
          { letter: 'C', text: '60,0 litros' },
          { letter: 'D', text: '600 litros' },
          { letter: 'E', text: '6.000 litros' }
        ],
        correctAnswer: 'B',
        explanation: 'Volume = 30 * 20 * 10 = 6.000 cm³. Como 1.000 cm³ = 1 litro, o volume é 6 litros.',
        difficulty: 'Fácil',
        triWeight: 570
      },
      {
        id: 183,
        discipline: 'Física',
        topic: 'Consumo de Energia Elétrica (kWh)',
        examSource: 'FATEC Oficial',
        year: 2024,
        stem: 'Um chuveiro elétrico de 5.500 W (5,5 kW) é utilizado durante 30 minutos (0,5 h) por dia ao longo de um mês de 30 dias. Qual o consumo mensal em kWh?',
        options: [
          { letter: 'A', text: '27,5 kWh' },
          { letter: 'B', text: '55,0 kWh' },
          { letter: 'C', text: '82,5 kWh' },
          { letter: 'D', text: '165,0 kWh' },
          { letter: 'E', text: '330,0 kWh' }
        ],
        correctAnswer: 'C',
        explanation: 'Energia = Potência * Tempo = 5,5 kW * (0,5 h * 30 dias) = 5,5 * 15 = 82,5 kWh.',
        difficulty: 'Médio',
        triWeight: 690
      },
      {
        id: 184,
        discipline: 'Química',
        topic: 'Polímeros e Reciclagem',
        examSource: 'FATEC Oficial',
        year: 2024,
        stem: 'O plástico PET amplamente utilizado em garrafas de refrigerante e embalagens recicláveis é um polímero classificado quimicamente como:',
        options: [
          { letter: 'A', text: 'Polietileno tereftalato (um poliéster termoplástico).' },
          { letter: 'B', text: 'Borracha vulcanizada termofixa.' },
          { letter: 'C', text: 'Poliuretano rígido biodegradável.' },
          { letter: 'D', text: 'Silicone orgânico insolúvel.' },
          { letter: 'E', text: 'Celulose pura extraída de pinus.' }
        ],
        correctAnswer: 'A',
        explanation: 'PET significa Polietileno Tereftalato, um termoplástico reciclável obtido por policondensação.',
        difficulty: 'Fácil',
        triWeight: 610
      }
    ]
  },

  // 19. UERJ Exame de Qualificação
  {
    id: 'uerj-exame-qualificacao',
    title: 'Simulado UERJ 2025 — 1º Exame de Qualificação',
    subtitle: '60 questões objetivas interdisciplinares para obtenção do conceito A e bonificação na 2ª Fase.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: 'Conceito A (UERJ)',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    targetGrade: 'Vestibulandos do Rio de Janeiro',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Médio',
    institution: 'DSEA / UERJ',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 191,
        discipline: 'Interdisciplinar',
        topic: 'Revolução Industrial e Trabalho',
        examSource: 'UERJ Oficial',
        year: 2024,
        stem: 'A introdução da máquina a vapor no século XVIII alterou a percepção humana do tempo ao:',
        options: [
          { letter: 'A', text: 'Subordinar o ritmo do trabalho aos ciclos astronômicos da natureza e das colheitas.' },
          { letter: 'B', text: 'Impor a disciplina cronometrada do relógio da fábrica e a padronização das jornadas fabris.' },
          { letter: 'C', text: 'Extinguir o trabalho noturno nas grandes cidades manufatureiras.' },
          { letter: 'D', text: 'Permitir a autogestão dos horários pelos próprios operários artesãos.' },
          { letter: 'E', text: 'Incentivar o teletrabalho doméstico com remuneração em peças avulsas.' }
        ],
        correctAnswer: 'B',
        explanation: 'O capitalismo industrial substituiu o "tempo da natureza" pelo "tempo mecânico do relógio fabril", disciplinando o corpo operário.',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 192,
        discipline: 'Biologia',
        topic: 'Fotossíntese e Respiração',
        examSource: 'UERJ Oficial',
        year: 2024,
        stem: 'O oxigênio molecular (O2) liberado na atmosfera pelos organismos fotossintetizantes origina-se da:',
        options: [
          { letter: 'A', text: 'Fotólise da molécula de água (H2O) na fase clara.' },
          { letter: 'B', text: 'Fixação de gás carbônico (CO2) no Ciclo de Calvin.' },
          { letter: 'C', text: 'Degradação da glicose durante a glicólise.' },
          { letter: 'D', text: 'Oxidação de íons nitrato presentes no solo.' },
          { letter: 'E', text: 'Respiração anaeróbica das mitocôndrias.' }
        ],
        correctAnswer: 'A',
        explanation: 'Na reação de Hill (etapa fotoquímica), a luz solar quebra a água (fotólise), liberando O2 e fornecendo elétrons para a clorofila.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 193,
        discipline: 'Física',
        topic: 'Ondulatória • Efeito Doppler',
        examSource: 'UERJ Oficial',
        year: 2024,
        stem: 'Quando uma ambulância com a sirene ligada se aproxima rapidamente de um pedestre parado, o som percebido por ele torna-se:',
        options: [
          { letter: 'A', text: 'Mais grave, porque o comprimento de onda aparente aumenta.' },
          { letter: 'B', text: 'Mais agudo, porque a frequência aparente recebida é mais alta.' },
          { letter: 'C', text: 'Com velocidade de propagação dobrada no ar.' },
          { letter: 'D', text: 'Inaudível devido à interferência destrutiva com o eco.' },
          { letter: 'E', text: 'Idêntico ao som emitido com a ambulância parada.' }
        ],
        correctAnswer: 'B',
        explanation: 'Pelo Efeito Doppler acústico, na aproximação relativa as frentes de onda são comprimidas, aumentando a frequência (som mais agudo).',
        difficulty: 'Fácil',
        triWeight: 600
      },
      {
        id: 194,
        discipline: 'Matemática',
        topic: 'Função do 1º Grau no Cotidiano',
        examSource: 'UERJ Oficial',
        year: 2024,
        stem: 'Uma corrida de táxi cobra bandeirada fixa de R$ 6,00 mais R$ 2,50 por quilômetro rodado. Para uma corrida de 12 km, qual o valor total da tarifa?',
        options: [
          { letter: 'A', text: 'R$ 30,00' },
          { letter: 'B', text: 'R$ 36,00' },
          { letter: 'C', text: 'R$ 42,00' },
          { letter: 'D', text: 'R$ 48,00' },
          { letter: 'E', text: 'R$ 54,00' }
        ],
        correctAnswer: 'B',
        explanation: 'V(x) = 6,00 + 2,50 * 12 = 6,00 + 30,00 = R$ 36,00.',
        difficulty: 'Fácil',
        triWeight: 530
      }
    ]
  },

  // 20. SISU & PROUNI Nivelamento
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
        topic: 'Variação Linguística',
        examSource: 'ENEM / SiSU',
        year: 2024,
        stem: 'A linguística moderna compreende que as variações regionais do português falado no Brasil:',
        options: [
          { letter: 'A', text: 'Constituem erros gramaticais graves a serem punidos.' },
          { letter: 'B', text: 'Expressam a riqueza histórica e a diversidade sociocultural, sem base científica para preconceito.' },
          { letter: 'C', text: 'Dificultam a comunicação científica em artigos acadêmicos.' },
          { letter: 'D', text: 'Representam a degeneração do padrão clássico europeu.' },
          { letter: 'E', text: 'São restritas a falantes não escolarizados.' }
        ],
        correctAnswer: 'B',
        explanation: 'Variações linguísticas são naturais, ricas e cumprem integralmente a função comunicativa em suas comunidades.',
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
          { letter: 'A', text: 'Expansão de favelas por falta de saneamento básico.' },
          { letter: 'B', text: 'Valorização imobiliária em bairros centrais/históricos que expulsa moradores tradicionais de menor renda.' },
          { letter: 'C', text: 'Construção massiva de conjuntos habitacionais populares no centro financeiro.' },
          { letter: 'D', text: 'Descentralização de indústrias para áreas rurais.' },
          { letter: 'E', text: 'Incentivo ao transporte cicloviário.' }
        ],
        correctAnswer: 'B',
        explanation: 'A gentrificação encarece os custos de vida e aluguel de áreas valorizadas, gerando segregação socioespacial.',
        difficulty: 'Médio',
        triWeight: 710
      },
      {
        id: 703,
        discipline: 'Ciências da Natureza',
        topic: 'Aquecimento Global e Gases de Efeito Estufa',
        examSource: 'ENEM / SiSU',
        year: 2024,
        stem: 'O agravamento antrópico do efeito estufa decorre fundamentalmente da:',
        options: [
          { letter: 'A', text: 'Destruição total da camada de ozônio por CFCs.' },
          { letter: 'B', text: 'Elevação da concentração de gases como CO2 e CH4, retendo maior radiação infravermelha.' },
          { letter: 'C', text: 'Entrada descontrolada de raios gama emitidos pelo Sol.' },
          { letter: 'D', text: 'Poluição térmica de rios por usinas nucleares.' },
          { letter: 'E', text: 'Diminuição da salinidade marítima.' }
        ],
        correctAnswer: 'B',
        explanation: 'Gases de efeito estufa absorvem a radiação infravermelha (calor) refletida pela crosta, aquecendo a troposfera.',
        difficulty: 'Fácil',
        triWeight: 620
      },
      {
        id: 704,
        discipline: 'Matemática',
        topic: 'Média Ponderada no SiSU',
        examSource: 'SiSU Oficial',
        year: 2024,
        stem: 'Medicina SiSU: Natureza (peso 4), Redação (peso 3) e Matemática (peso 3). Com notas 800 (Natureza), 900 (Redação) e 700 (Matemática), qual a média final?',
        options: [
          { letter: 'A', text: '780 pontos' },
          { letter: 'B', text: '800 pontos' },
          { letter: 'C', text: '810 pontos' },
          { letter: 'D', text: '820 pontos' },
          { letter: 'E', text: '830 pontos' }
        ],
        correctAnswer: 'B',
        explanation: 'Média = [(800 * 4) + (900 * 3) + (700 * 3)] / 10 = (3.200 + 2.700 + 2.100) / 10 = 8.000 / 10 = 800 pontos exatos.',
        difficulty: 'Fácil',
        triWeight: 590
      }
    ]
  },

  // 21. Colégio Militar & EPCAR
  {
    id: 'colegio-militar-epcar',
    title: 'Simulado Colégios Militares & EPCAR — Nível Fundamental/Médio',
    subtitle: 'Matemática e Língua Portuguesa rigorosas com foco nas bancas do Exército e Aeronáutica.',
    category: 'fundamental-medio',
    categoryLabel: 'Ensino Fundamental & Médio / Avaliações Estaduais',
    badge: 'Carreiras Militares',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    targetGrade: 'Ingresso no 1º Ano do Ensino Médio',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Difícil',
    institution: 'Colégio Militar / EPCAR',
    isPopular: false,
    scoringType: 'Tradicional',
    questions: [
      {
        id: 2101,
        discipline: 'Matemática',
        topic: 'Produtos Notáveis e Fatoração',
        examSource: 'Colégio Militar',
        year: 2024,
        stem: 'Simplificando a fração algébrica (x² - 9) / (x + 3) para qualquer número real x ≠ -3, obtém-se exatamente:',
        options: [
          { letter: 'A', text: 'x - 3' },
          { letter: 'B', text: 'x + 3' },
          { letter: 'C', text: 'x - 9' },
          { letter: 'D', text: 'x² - 3' },
          { letter: 'E', text: '3' }
        ],
        correctAnswer: 'A',
        explanation: 'x² - 9 é a diferença de dois quadrados: (x - 3)(x + 3). Dividindo por (x + 3), resta (x - 3).',
        difficulty: 'Fácil',
        triWeight: 610
      },
      {
        id: 2102,
        discipline: 'Língua Portuguesa',
        topic: 'Regência Nominal e Crase',
        examSource: 'EPCAR Oficial',
        year: 2024,
        stem: 'Assinale a alternativa que preenche corretamente a lacuna: "O cadete estava obediente ___ ordens do comandante".',
        options: [
          { letter: 'A', text: 'as' },
          { letter: 'B', text: 'às' },
          { letter: 'C', text: 'a' },
          { letter: 'D', text: 'à' },
          { letter: 'E', text: 'nas' }
        ],
        correctAnswer: 'B',
        explanation: '"Obediente a" (rege preposição "a") + "as ordens" (artigo definido plural) = "às ordens".',
        difficulty: 'Fácil',
        triWeight: 630
      },
      {
        id: 2103,
        discipline: 'Matemática',
        topic: 'MDC e MMC em Problemas de Escala',
        examSource: 'Colégio Militar',
        year: 2024,
        stem: 'Dois navios partem juntos do porto de Santos hoje. O navio Alfa retorna a cada 12 dias e o navio Bravo retorna a cada 18 dias. Daqui a quantos dias eles se encontrarão novamente no porto?',
        options: [
          { letter: 'A', text: '24 dias' },
          { letter: 'B', text: '30 dias' },
          { letter: 'C', text: '36 dias' },
          { letter: 'D', text: '48 dias' },
          { letter: 'E', text: '72 dias' }
        ],
        correctAnswer: 'C',
        explanation: 'Encontrar novamente no mesmo porto requer o MMC(12, 18). 12 = 2² * 3; 18 = 2 * 3². MMC = 2² * 3² = 4 * 9 = 36 dias.',
        difficulty: 'Médio',
        triWeight: 680
      },
      {
        id: 2104,
        discipline: 'Geometria',
        topic: 'Triângulo Equilátero e Altura',
        examSource: 'EPCAR Oficial',
        year: 2024,
        stem: 'Um triângulo equilátero tem lado medindo 6 cm. Qual é a sua altura exata?',
        options: [
          { letter: 'A', text: '3 cm' },
          { letter: 'B', text: '3√2 cm' },
          { letter: 'C', text: '3√3 cm' },
          { letter: 'D', text: '6√3 cm' },
          { letter: 'E', text: '9 cm' }
        ],
        correctAnswer: 'C',
        explanation: 'h = (L * √3) / 2 = (6 * √3) / 2 = 3√3 cm.',
        difficulty: 'Fácil',
        triWeight: 620
      }
    ]
  },

  // 22. ENEM Simulado Redação e TRI
  {
    id: 'enem-redacao-tri',
    title: 'Simulado ENEM — Treino Intensivo TRI & Filosofia',
    subtitle: 'Questões calibradas de alta discriminação pedagógica para alavancar a nota de corte em Medicina e Direito.',
    category: 'vestibulares',
    categoryLabel: 'Exames Nacionais & Vestibulares',
    badge: 'TRI Calibrada',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    targetGrade: 'Candidatos de Alta Performance',
    questionCount: 4,
    durationMinutes: 20,
    difficulty: 'Difícil',
    institution: 'INEP / ENEM',
    isPopular: false,
    scoringType: 'TRI',
    questions: [
      {
        id: 2201,
        discipline: 'Filosofia',
        topic: 'Ética Aristotélica',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Na "Ética a Nicômaco", Aristóteles define a virtude moral (areté) como:',
        options: [
          { letter: 'A', text: 'A obediência cega aos mandamentos divinos da teologia medieval.' },
          { letter: 'B', text: 'O justo meio (termo médio) equilibrado entre dois extremos viciosos por excesso ou por falta.' },
          { letter: 'C', text: 'A busca desenfreada do prazer corporal imediato (hedonismo estrito).' },
          { letter: 'D', text: 'O desapego total de qualquer laço social ou dever político na pólis.' },
          { letter: 'E', text: 'O acúmulo de riqueza material com o objetivo de demonstrar prestígio.' }
        ],
        correctAnswer: 'B',
        explanation: 'Para Aristóteles, a virtude é a justa medida (mesotés) entre extremos, como a coragem entre a covardia e a temeridade.',
        difficulty: 'Médio',
        triWeight: 750
      },
      {
        id: 2202,
        discipline: 'Física',
        topic: 'Acústica • Tubos Sonoros',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Um tubo sonoro aberto nas duas extremidades de comprimento L = 0,85 m emite seu som fundamental. Sendo a velocidade do som no ar 340 m/s, qual a frequência do som fundamental emitido?',
        options: [
          { letter: 'A', text: '100 Hz' },
          { letter: 'B', text: '200 Hz' },
          { letter: 'C', text: '340 Hz' },
          { letter: 'D', text: '400 Hz' },
          { letter: 'E', text: '680 Hz' }
        ],
        correctAnswer: 'B',
        explanation: 'No tubo aberto, o comprimento de onda fundamental é λ = 2 * L = 2 * 0,85 = 1,7 m. f = v / λ = 340 / 1,7 = 200 Hz.',
        difficulty: 'Médio',
        triWeight: 770
      },
      {
        id: 2203,
        discipline: 'Química',
        topic: 'Pilhas Eletroquímicas e Potencial Padrão',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'Na pilha de Daniell (Zn / Zn²⁺ // Cu²⁺ / Cu), o eletrodo de zinco sofre oxidação e o cobre sofre redução. Nesse dispositivo, o ânodo e o polo positivo são, respectivamente:',
        options: [
          { letter: 'A', text: 'Zinco (ânodo) e Cobre (polo positivo).' },
          { letter: 'B', text: 'Cobre (ânodo) e Zinco (polo positivo).' },
          { letter: 'C', text: 'Zinco (ânodo) e Zinco (polo positivo).' },
          { letter: 'D', text: 'Cobre (ânodo) e Cobre (polo positivo).' },
          { letter: 'E', text: 'A ponte salina atua como ânodo permanente.' }
        ],
        correctAnswer: 'A',
        explanation: 'Na pilha: Ânodo = local da oxidação (Zn, polo negativo). Cátodo = local da redução (Cu, polo positivo).',
        difficulty: 'Médio',
        triWeight: 740
      },
      {
        id: 2204,
        discipline: 'Matemática',
        topic: 'Logaritmos na Escala Richter',
        examSource: 'ENEM Oficial',
        year: 2024,
        stem: 'A magnitude R de um terremoto na escala Richter obedece a R = log10(A / A0). Se a amplitude sísmica A for multiplicada por 1.000, qual será o acréscimo numérico na magnitude R?',
        options: [
          { letter: 'A', text: '1 unidade' },
          { letter: 'B', text: '2 unidades' },
          { letter: 'C', text: '3 unidades' },
          { letter: 'D', text: '10 unidades' },
          { letter: 'E', text: '30 unidades' }
        ],
        correctAnswer: 'C',
        explanation: 'log10(1000 * x) = log10(1000) + log10(x) = 3 + log10(x). O acréscimo é de exatamente 3 unidades na escala.',
        difficulty: 'Fácil',
        triWeight: 630
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
    name: 'Você',
    cityCourse: 'Campinas - SP • Med UNICAMP',
    score: 784.6,
    accuracy: '74/90 acertos',
    isCurrentUser: true,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB4r2q-u2lmYNtPOUInp87qFaCTu6s8dm2zCXzrWBWFDoc2aEDVer7ZEyMKkkeOYgpuKmCkiVOJOYEuxh1LF12dLhaLOT0IvO604g6EFIpzMeqWFJOYmPqX_3EdoeJ80b2ZBog1KTpSiMo1eaahPvLobFUh4-RyXX8drhttqvkMqFbvPDQWIYGUJI08XQHuSlQiBZFSjkRPVQ7CB_hYhE-FPO6gpB6_qA8iJDFO17D_MpPS2pMdMi8SQ'
  }
];

export const AVATAR_PRESETS = [
  {
    id: 'amanda',
    label: 'Amanda (Padrão)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB4r2q-u2lmYNtPOUInp87qFaCTu6s8dm2zCXzrWBWFDoc2aEDVer7ZEyMKkkeOYgpuKmCkiVOJOYEuxh1LF12dLhaLOT0IvO604g6EFIpzMeqWFJOYmPqX_3EdoeJ80b2ZBog1KTpSiMo1eaahPvLobFUh4-RyXX8drhttqvkMqFbvPDQWIYGUJI08XQHuSlQiBZFSjkRPVQ7CB_hYhE-FPO6gpB6_qA8iJDFO17D_MpPS2pMdMi8SQ'
  },
  {
    id: 'beatriz',
    label: 'Beatriz (Med USP)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFhKkMbREJxYCZqfZE21vS2GyaxzwEBabAFaIISj8wyscLnbdw-LcNgyLHwe8rkP88SEz-EEE3Wf9lEO0tLs-T3Mu5QDqet69iwUTwjRCdj9JeueTrL23kM5cLbbzSbsO1T9wmZysDQTY5-YqkqbfMvCF_FBB6UsRqeL95Q-2tJFvFzRK3el8kvYOBCgjLe4IiQ--MBh1vfRcUqz5wlE24xhmazicaWnyjAB8qxDh6Jza5S_ZmMTvwWQ'
  },
  {
    id: 'lucas',
    label: 'Lucas (Med UFC)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzLoxTb6mB9NR6Q0fP-rZHGmKmWXRd206e1Twv8sSw9kc6aYp3JzFNukvveLDeiEcMTKAPKcjFmPolD01CbekJ9LXq0HZwCs3rqZsn5DIxXoHdgBwUDmKVrG168wGiHUA6jAvoIZLrpIY1GfaZai022lfHI_0NR4Bq56rUEEmGlJMnmXASWfCnAVsJ73zPjyLW2yVkU32QXJizm_T4pGQfnhCCK2j2va7pGuFeVjG9pC3ugxgkU5BuCQ'
  },
  {
    id: 'gabriel',
    label: 'Gabriel (Med UFMG)',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWITTNZiv3IKhhpO7BkELffoQHddKxv--6lM6U8AmtEZKTtVbHDDXaNjz1dpLEMHMdxoNjGXfs9EnJVkeND6Fg-CA5gcPNrWT3oQ_OYsZZrLOO3zGOTjT1bVAGyo4vKFnwn7g0XEo6G2ZfvuK0mwXMrZ1AFmw6fQxFuybXS23B8PgqXra0dHTT_xA59l4F095HSVywy9G_8ZmKU1QnGQJrqCPBxyiwf34eBFqBkxA4Lix7PivalfKPAQ'
  },
  {
    id: 'camila',
    label: 'Camila (Direito USP)',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'rafael',
    label: 'Rafael (Polícia Federal)',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'mariana',
    label: 'Mariana (OBMEP Ouro)',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'andre',
    label: 'André (Engenharia Poli)',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];
