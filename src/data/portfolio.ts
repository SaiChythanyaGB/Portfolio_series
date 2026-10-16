/**
 * Central portfolio data — generated from Sai Chythanya's resume (Sai_Chythanya_GB_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };


export const profile = {
  fullName: 'Sai Chythanya G B',
  displayName: 'Sai Chythanya',
  firstName: 'SAI CHYTHANYA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SAI CHYTHANYA ORIGINAL',
  role: 'AI, Data Science & Full Stack Developer',
  tagline: ['AI & Data Science', 'Full Stack Developer', 'Machine Learning'],
  intro:
    'AI, Data Science, and Full Stack Developer passionate about building practical intelligent systems and meaningful digital experiences. I enjoy developing machine learning applications, data-driven solutions, and modern web projects that solve real-world problems.',
  location: 'Bengaluru, Karnataka, India',
  email: 'chythanya2005@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sai-chythanya-g-b-402424300/',
    github: 'https://github.com/SaiChythanyaGB',
  },
  resumePdf: '/assets/Sai_Chythanya_GB_Resume.pdf',
  portrait: {
  src: '/sai-profile.png',
  srcSet: '',
  alt: 'Sai Chythanya G B',
},
  interests: ['Artificial Intelligence', 'Data Science', 'Full Stack Development'],
};

export const education = [
  {
    id: 'BE-ai-ds',
    school: 'Global Academy of Technology',
    degree: 'Bachelor of Engineering',
    field: 'Artificial Intelligence and Data Science',
    period: '2023 - 2027',
    place: 'Bengaluru, Karnataka, India',
    score: 'CGPA: 8.06',
  },
  {
    id: 'PUC',
    school: 'Mahesh Gouthama Siddaartha PU College',
    degree: 'Pre-University Course',
    field: 'Karnataka State Board',
    period: '2021 - 2023',
    place: 'Karnataka, India',
    score: '80.66%',
  },
  {
    id: 'sslc',
    school: 'Florence High School',
    degree: 'SSLC',
    field: 'Karnataka Secondary Education Examination Board',
    period: '2021',
    place: 'Karnataka, India',
    score: '77.6%',
  },
];

export const experience = [
  {
    company: 'Technical Hub Pvt Ltd',
    role: 'Trainee',
    place: 'Surampalem, AP',
    period: 'May 2025 - June 2026',
    points: [
      'Completed one year of intensive Full-Stack Development (FSD) training covering frontend, backend, database integration, and deployment workflows.',
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity.',
      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'pdfshield-ai',
    title: 'PDFShield AI',
    year: '2026',
    genre: 'AI · Cybersecurity',
    logline:
      'An AI-powered PDF malware detection project that classifies PDF files using static structural features and explores model robustness against controlled feature-space perturbations.',
    stack: [
      'Python',
      'Streamlit',
      'Random Forest',
      'Machine Learning',
      'Static PDF Analysis',
    ],
    build: [
      'Developed a machine-learning workflow for PDF malware classification.',
      'Used static PDF features to distinguish benign and malicious files.',
      'Created an interactive Streamlit application for scanning and model exploration.',
    ],
    features: [
      'PDF scanning dashboard',
      'Benign vs. malicious classification',
      'Risk indicators',
      'Adversarial feature-space robustness lab',
      'Model information and evaluation',
    ],
    metrics: [],
    github: 'https://github.com/SaiChythanyaGB/pdfshield-ai',
    palette: {
      from: '#101827',
      via: '#164e63',
      to: '#06b6d4',
      accent: '#67e8f9',
    },
    motif: 'shield',
  },
  {
    id: 'retailflow-ai',
    title: 'RetailFlow AI',
    year: '2026',
    genre: 'Computer Vision · Retail Analytics',
    logline:
      'A smart retail vision analytics prototype combining object detection, multi-object tracking, operational analytics, and Tableau visualisation.',
    stack: [
      'Python',
      'Streamlit',
      'YOLO',
      'OpenCV',
      'ByteTrack',
      'Tableau',
    ],
    build: [
      'Built a video-analysis workflow for retail environments.',
      'Implemented people detection and tracking with directional entry and exit counting.',
      'Added zone-visit analysis and queue-zone presence monitoring.',
      'Integrated visual analytics and exportable results.',
    ],
    features: [
      'Store video analysis',
      'People detection and tracking',
      'Entry and exit counts',
      'Zone visits and queue-zone presence',
      'Charts and result exports',
      'Annotated video download',
      'Tableau workbook starter',
    ],
    metrics: [],
    github: 'https://github.com/SaiChythanyaGB/Retailflow',
    palette: {
      from: '#172554',
      via: '#1d4ed8',
      to: '#38bdf8',
      accent: '#bae6fd',
    },
    motif: 'flow',
  },
  {
    id: 'chat-app',
    title: 'MERN Chat App',
    year: '2026',
    genre: 'Full Stack · Web Development',
    logline:
      'A full-stack chat application organised into separate client and server codebases.',
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
    ],
    build: [
      'Developed a web application with separate frontend and backend codebases.',
      'Organised the project into client and server components.',
    ],
    features: [
      'Full-stack web application',
      'Separate client and server',
      'Deployed application',
    ],
    metrics: [],
    github: 'https://github.com/SaiChythanyaGB/Chat-App',
    palette: {
      from: '#052e16',
      via: '#047857',
      to: '#34d399',
      accent: '#a7f3d0',
    },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'pdfshield-ai',
    title: 'PDFShield AI',
    org: 'AI & Data Security',
    detail:
      'Developed a machine-learning application for PDF malware classification using static PDF features, with a feature-space robustness lab.',
    laurel: 'Security Project',
  },
  {
    id: 'retailflow-ai',
    title: 'RetailFlow AI',
    org: 'Computer Vision & Analytics',
    detail:
      'Built a retail video analytics prototype using object detection, multi-object tracking, entry and exit counting, and visual analytics.',
    laurel: 'Computer Vision',
  },
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    org: 'Web Application Projects',
    detail:
      'Developed full-stack web applications, including a chat application with separate client and server codebases.',
    laurel: 'Web Development',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Infosys Springboard',
    name: 'Front End Web Developer Certification',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Machine Learning Foundation Certification',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Programming using Java',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Python Foundation Certification',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Basics of Python',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'TechA CompTIA Network+(Plus) Certification',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'HTML5 - The Language',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'CSS3',
    link: '',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'JavaScript',
    link: '',
  },
  {
    issuer: 'Udemy',
    name: 'Apache Spark for Java Developers',
    link: '',
  },
  {
    issuer: 'IBM SkillsBuild',
    name: 'Getting Started with Artificial Intelligence',
    link: 'https://www.credly.com/go/aGBrRqSS',
  },
  {
    issuer: 'IBM SkillsBuild',
    name: 'Introduction to Artificial Intelligence',
    link: '',
  },
  {
    issuer: 'IBM SkillsBuild',
    name: 'Introduction to Large Language Models',
    link: '',
  },
  {
    issuer: 'IBM SkillsBuild',
    name: 'Mastering the Art of Prompting',
    link: '',
  },
  {
    issuer: 'IBM Z Datathon',
    name: 'Certificate of Appreciation — IBM Z Datathon 2024',
    link: '',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Building logic and intelligent applications',
    skills: [
      { name: 'Python', mono: 'Py', note: 'AI & Data Science' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'ai-data-science',
    title: 'AI & Data Science',
    subtitle: 'Machine learning and data-driven solutions',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Deep Learning', mono: 'DL' },
      { name: 'Computer Vision', mono: 'CV' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Data Analysis', mono: 'DA' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive and interactive web interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Vite', mono: 'Vi' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'APIs and server-side applications',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'JSON', mono: 'Js' },
      { name: 'Authentication', mono: 'Au' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage and management',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Development, analytics and deployment',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Tableau', mono: 'Tb' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science concepts',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */

export const skillEvidence: Record<string, string[]> = {
  Python: ['PDFShield AI', 'RetailFlow AI'],
  Java: ['Programming Fundamentals'],
  JavaScript: ['MERN Chat App', 'Full Stack Development'],
  TypeScript: ['Portfolio Development'],
  C: ['Programming Fundamentals'],

  'Machine Learning': ['PDFShield AI'],
  'Deep Learning': ['RetailFlow AI'],
  'Computer Vision': ['RetailFlow AI'],
  Pandas: ['PDFShield AI', 'Data Analysis'],
  NumPy: ['Data Analysis'],
  'Scikit-learn': ['PDFShield AI'],
  'Data Analysis': ['RetailFlow AI', 'Data Visualization'],

  React: ['MERN Chat App', 'Portfolio Development'],
  HTML: ['Portfolio Development'],
  CSS: ['Portfolio Development'],
  'Tailwind CSS': ['Portfolio Development'],
  Vite: ['Portfolio Development'],

  'Node.js': ['MERN Chat App'],
  'Express.js': ['MERN Chat App'],
  FastAPI: ['Job Agent — Development'],
  JSON: ['Full Stack Development'],
  Authentication: ['Full Stack Development'],

  MongoDB: ['MERN Chat App'],
  SQLite: ['Job Agent — Development'],
  PostgreSQL: ['Database Fundamentals'],
  MySQL: ['Database Fundamentals'],

  Git: ['GitHub Projects'],
  GitHub: ['PDFShield AI', 'RetailFlow AI', 'MERN Chat App'],
  Streamlit: ['PDFShield AI', 'RetailFlow AI'],
  OpenCV: ['RetailFlow AI'],
  Docker: ['Development Tools'],
  Tableau: ['RetailFlow AI'],

  DSA: ['Problem Solving'],
  OOPs: ['Programming Fundamentals'],
  DBMS: ['Database Fundamentals'],
  'Operating Systems': ['Computer Science Fundamentals'],
  'Computer Networks': ['Computer Science Fundamentals'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 - 2023',
    synopsis:
      'Building the academic foundation that led to engineering and technology.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Completed secondary and pre-university education in Karnataka, developing the foundation for an engineering degree.',
        tags: ['School Education', 'Pre-University'],
        runtime: '2021 - 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & Data Science',
    period: '2023 - Present',
    synopsis:
      'Pursuing a Bachelor of Engineering in Artificial Intelligence and Data Science at Global Academy of Technology, Bengaluru.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description:
          'Pursuing a B.E. in Artificial Intelligence and Data Science at Global Academy of Technology.',
        tags: ['B.E.', 'Artificial Intelligence', 'Data Science'],
        runtime: '2023 - Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Learner',
        description:
          'Building skills in programming, machine learning, data analysis, and software development through academic and independent work.',
        tags: ['Python', 'Java', 'Machine Learning'],
        runtime: 'Ongoing',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2024 - 2025',
    synopsis:
      'Expanding practical knowledge through programming, web development, and technology coursework.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Programmer',
        description:
          'Completed Infosys Springboard coursework in Python and Java, alongside frontend development learning.',
        tags: ['Python', 'Java', 'Programming'],
        runtime: '2024 - 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Web Developer',
        description:
          'Completed frontend-related coursework covering HTML5, CSS3, JavaScript, and front-end web development.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        runtime: '2025',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The AI Explorer',
        description:
          'Completed learning modules in artificial intelligence, machine learning foundations, and large language models.',
        tags: ['Artificial Intelligence', 'Machine Learning', 'LLMs'],
        runtime: '2024 - 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Projects',
    period: '2025 - 2026',
    synopsis:
      'Applying AI, computer vision, and full-stack development to practical software projects.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Security Builder',
        description:
          'PDFShield AI — a machine-learning application that classifies PDFs using static structural features and explores feature-space robustness.',
        tags: ['Python', 'Machine Learning', 'Data Security'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Vision Engineer',
        description:
          'RetailFlow AI — a retail video analytics prototype combining object detection, tracking, zone analysis, and visualisation.',
        tags: ['YOLO', 'OpenCV', 'ByteTrack', 'Tableau'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Full-Stack Developer',
        description:
          'Developing web applications, including a MERN chat application, with separate client and server codebases.',
        tags: ['React', 'Node.js', 'MongoDB'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis:
      'Continuing to develop as an AI, Data Science, and Full Stack Developer.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Deepening technical skills, improving project quality, and preparing for software development and AI-related opportunities.',
        tags: ['AI', 'Data Science', 'Full Stack Development'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Primary focus',
    title: 'AI & Data Science',
    detail: 'Artificial Intelligence and Data Science engineering at GAT Bengaluru',
    palette: amber,
  },
  {
    label: 'Security project',
    title: 'PDFShield AI',
    detail: 'PDF malware classification and adversarial feature-space robustness',
    palette: crimson,
  },
  {
    label: 'Computer vision',
    title: 'RetailFlow AI',
    detail: 'YOLO, OpenCV, tracking and retail video analytics',
    palette: ocean,
  },
  {
    label: 'Full-stack project',
    title: 'MERN Chat App',
    detail: 'A web application with separate client and server codebases',
    palette: violet,
  },
  {
    label: 'Python certification',
    title: 'Infosys Springboard',
    detail: 'Basics of Python and Python Foundation Certification',
    palette: jade,
  },
  {
    label: 'Frontend certification',
    title: 'Front End Web Developer',
    detail: 'Infosys Springboard certification',
    palette: amber,
  },
  {
    label: 'Machine learning',
    title: 'ML Foundation',
    detail: 'Infosys Springboard certification',
    palette: crimson,
  },
  {
    label: 'Java learning',
    title: 'Programming using Java',
    detail: 'Infosys Springboard course completion',
    palette: ocean,
  },
  {
    label: 'AI learning',
    title: 'IBM SkillsBuild',
    detail: 'Artificial intelligence, large language models and prompting',
    palette: jade,
  },
  {
    label: 'Current focus',
    title: 'Full Stack + AI',
    detail: 'Building practical applications and strengthening development skills',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · AI & Data Science',
    lines: [
      'Global Academy of Technology, Bengaluru',
      'Artificial Intelligence and Data Science',
    ],
    chips: ['CGPA 8.06'],
  },
  {
    kicker: 'Skills',
    title: 'AI meets Full Stack.',
    lines: [
      'Python, Java, JavaScript, TypeScript',
      'React, Node.js, Express.js, FastAPI',
      'Machine Learning, Computer Vision, Data Analysis',
    ],
    chips: ['Python', 'React', 'Machine Learning', 'GitHub'],
  },
  {
    kicker: 'Certifications',
    title: 'Always learning.',
    lines: [
      'Infosys Springboard · Python, Java, Frontend Development',
      'HTML5, CSS3, JavaScript and Machine Learning foundations',
      'IBM SkillsBuild · AI, LLMs and Prompting',
    ],
    chips: ['Python', 'Java', 'AI', 'Web Development'],
  },
  {
    kicker: 'Projects',
    title: 'Building real applications.',
    lines: [
      'PDFShield AI — PDF malware classification',
      'RetailFlow AI — computer vision and retail analytics',
      'MERN Chat App — full-stack web development',
    ],
    chips: ['AI', 'Computer Vision', 'Full Stack'],
  },
  {
    kicker: 'Data Security',
    title: 'PDFShield AI',
    lines: [
      'Machine-learning-based PDF classification',
      'Static feature analysis and risk indicators',
      'Feature-space adversarial robustness experiments',
    ],
  },
  {
    kicker: 'Computer Vision',
    title: 'RetailFlow AI',
    lines: [
      'YOLO-based detection and object tracking',
      'Retail entry, exit and zone analytics',
      'Streamlit interface and Tableau visualisation',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Build. Learn. Improve.',
    lines: [
      'Developing AI-powered and full-stack applications',
      'Strengthening problem-solving and software engineering skills',
      'Preparing for software development and AI opportunities',
    ],
    chips: ['AI', 'Data Science', 'Full Stack'],
  },
];

export type ProfileId = 'sai' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sai',
    name: 'Sai Chythanya',
    blurb: 'The complete portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technology & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Portfolio story & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'AI & Data Science • Education & skills',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects • AI & Full Stack`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Featured Highlights',
    meta: 'Projects • Skills • Certifications',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'Technical Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Achievements',
    card: 'Certifications & Highlights',
    meta: `${achievements.length} Highlights • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'My Resume',
    meta: 'Professional profile • View & download',
    palette: violet,
  },
};
