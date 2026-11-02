type PortfolioProject = {
  title: string;
  slug: string;
  tagline: string;
  overview: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  learnings: string[];
  feedback: boolean;
  links: { live?: string; github?: string };
};

export const projects: PortfolioProject[] = [
  {
    title: 'Dushyant Verma · Personal Portfolio',
    slug: 'personal-portfolio',
    tagline:
      'A personal portfolio presenting my experience, projects, skills, education, and coding activity.',
    overview:
      'Designed and built this responsive portfolio to bring my software engineering work into one place. It includes project details, education and experience timelines, technology badges, coding-platform totals, GitHub activity, and a contact form.',
    features: [
      'Responsive sections for introduction, education, experience, projects, skills, stats, awards, and contact.',
      'Coding-platform statistics and GitHub profile activity.',
      'Contact form with server-side email delivery.',
    ],
    techStack: [
      'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js',
    ],
    challenges: [],
    learnings: [],
    feedback: false,
    links: { live: 'https://dushhyant.info' },
  },
  {
    title: 'PeerForge · Peer Mentorship Marketplace',
    slug: 'peerforge',
    tagline:
      'A mentorship marketplace for discovering mentors, booking sessions, and learning together.',
    overview:
      'Built a platform for discovering mentors by skill and managing learner and mentor profiles. It supports mentor availability, session booking, in-session messaging, Razorpay payments, reviews, notifications, and role-based admin dashboards.',
    features: [
      'Mentor discovery by skill with learner and mentor profiles.',
      'Availability management, session booking, and in-session messaging.',
      'Razorpay payments, reviews, notifications, and role-based admin dashboards.',
    ],
    techStack: [
      'Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL',
      'Redis', 'JWT', 'Razorpay', 'AWS',
    ],
    challenges: [],
    learnings: [],
    feedback: false,
    links: { live: 'https://peerforge.dushhyant.in/' },
  },
  {
    title: 'Innerly · Private Journaling App',
    slug: 'innerly',
    tagline:
      'A private journaling app for creating, searching, and organizing personal entries.',
    overview:
      'Built a private journaling website with account signup and tools to create, search, edit, and delete journal entries. Secured accounts with JWT authentication and BCrypt password hashing. Deployed the backend on AWS and used Redis to cache weather data for faster retrieval.',
    features: [
      'Account signup and private journal management.',
      'Create, search, edit, and delete journal entries.',
      'JWT authentication, BCrypt password hashing, and Redis weather-data caching.',
    ],
    techStack: [
      'Java', 'Spring Boot', 'Redis', 'MongoDB', 'JavaScript', 'AWS',
    ],
    challenges: [],
    learnings: [],
    feedback: false,
    links: { live: 'https://innerly.dushhyant.in/' },
  },
  {
    title: 'ExpenseTracker · Personal Finance App',
    slug: 'expense-tracker',
    tagline:
      'A full-stack app for tracking personal expenses and managing monthly budgets.',
    overview:
      'Built secure, account-specific expense management with category filtering and paginated records. Deployed on AWS and added monthly budget status checks, spending summaries, and CSV export.',
    features: [
      'Account-specific expense tracking and monthly budgets.',
      'Category filtering and paginated expense records.',
      'Budget status checks, spending summaries, and CSV export.',
    ],
    techStack: [
      'Java', 'Spring Boot', 'React', 'JavaScript', 'AWS', 'Docker',
    ],
    challenges: [],
    learnings: [],
    feedback: false,
    links: { live: 'https://expense-tracker.dushhyant.in/' },
  },
];
