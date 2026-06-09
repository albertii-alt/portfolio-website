// Single source of truth for all portfolio content.
// All apps must import from here. No content defined elsewhere.

export const profile = {
  name: 'Alberto Jr. Auxtero Daro',
  displayName: 'Jay-ar',
  role: 'IT Student / Full-Stack Developer / AI Builder',
  location: 'Trinidad, Bohol 6324',
  tagline: 'Building intelligent, practical systems that solve real community and business problems.',
  email: 'albertoiidaro0@gmail.com',
  github: 'https://github.com/albertii-alt',
  linkedin: '',
  facebook: 'Jay-ar Daro',
  preferredContact: 'email',
}

export const about = {
  bio: [
    'I am an IT student currently in my 3rd year, focused on building real-world software systems that go beyond classroom requirements. My work is centered around developing full-stack applications, AI-assisted tools, and practical systems that small businesses and communities can actually use.',
    'My journey in development started with curiosity about how websites and systems work behind the scenes. Over time, this grew into hands-on experience building applications such as POS systems with real-time features, offline-first architecture, and multi-device synchronization using modern web technologies.',
    'I enjoy working with JavaScript and TypeScript, especially in full-stack environments using React, Node.js, and Express. I also explore AI integration in applications, aiming to build systems that are not just functional but intelligent and adaptive.',
    'My long-term goal is to become a software engineer who builds impactful products—especially systems that improve local businesses, education, and community access to information using AI-driven solutions.',
  ],
  education: {
    institution: 'Trinidad Municipal College',
    program: 'BS Information Technology',
    year: '3rd Year',
  },
}

export const skills: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Kotlin (mobile)', 'HTML & CSS'],
  Frontend: ['React (Web & Desktop)', 'React Native (Mobile via Expo)', 'Tailwind CSS', 'shadcn-ui', 'Bootstrap'],
  Backend: ['Node.js', 'Express', 'Java Swing (Desktop UI)', 'PHP', 'SparkJava (Java microframework)'],
  Databases: ['SQLite (mobile & embedded)', 'MySQL / MariaDB', 'PostgreSQL', 'JSON (file-based storage)'],
  'Tools & Platforms': [
    'Git & GitHub', 'VS Code', 'Amazon Q', 'Tauri (Desktop apps)',
    'Expo (Mobile framework)', 'Maven (Java build)', 'Apache Ant (Java build)',
    'Vite (Web bundler)', 'HikariCP (Connection pooling)',
    'Socket.IO (Real-time communication)', 'Zustand (State management)',
  ],
}

export interface TechRow {
  layer: string
  stack: string
}

export interface Project {
  id: string
  name: string
  repo: string
  description: string
  problem: string
  tech: TechRow[]
  status: string
  highlights: string[]
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'dental-clinic',
    name: 'Vantage Dental Clinic — Appointment Management System',
    repo: 'albertii-alt/dental-clinic-appointment-management-system',
    description:
      'A comprehensive Java Swing desktop application for managing dental clinic operations. Handles complex appointment scheduling, patient records, multi-role access control, and automated email notifications—built with security and usability as core principles.',
    problem:
      'Modern dental clinics struggle with managing patient appointments, staff coordination, role-based permissions, and communication. This system eliminates manual scheduling conflicts, enforces business rules, and automates critical notifications.',
    tech: [
      { layer: 'Frontend', stack: 'Java Swing (Metal L&F, Segoe UI fonts)' },
      { layer: 'Backend', stack: 'Java 21 (Temurin), Business Logic Services, DAOs' },
      { layer: 'Database', stack: 'MySQL / MariaDB with HikariCP connection pooling' },
      { layer: 'Security', stack: 'BCrypt password hashing, prepared statements, account lockout' },
      { layer: 'Notifications', stack: 'JavaMail async SMTP email sender' },
      { layer: 'Reporting', stack: 'Apache POI (Excel export), JFreeChart (charts)' },
      { layer: 'Logging', stack: 'SLF4J + Log4j' },
    ],
    status: 'Production-ready',
    highlights: [
      'Multi-portal system (Patient, Staff, Dentist, Admin, Super Admin)',
      'Granular role-based permission management with audit trails',
      'One active appointment per patient with automatic expiry logic',
      'Automated day-before & day-of appointment reminders',
      'Complex appointment lifecycle (Pending → Approved → Completed / Cancelled)',
      'Admin reporting dashboard with 6+ report types',
      'Account lockout after 5 failed attempts (30-min auto-unlock)',
      'XSS prevention, SQL injection protection, credential sanitization',
    ],
  },
  {
    id: 'pinili-pos',
    name: 'Pinili Cutlet POS System',
    repo: 'albertii-alt/pinili-cutlet-pos',
    description:
      'A modern, LAN-based Point of Sale system for Pinili Cutlet food stall. Features a multi-platform architecture with a centralized Node.js backend, a Tauri desktop app, and a responsive mobile PWA for order entry and payment processing.',
    problem:
      'Food stalls need unified order taking, inventory tracking, and sales reporting across multiple cashiers and service stations—without requiring internet connectivity.',
    tech: [
      { layer: 'Backend', stack: 'Node.js + Express (TypeScript)' },
      { layer: 'Desktop App', stack: 'Tauri + React (owner dashboard & cashier interface)' },
      { layer: 'Mobile Client', stack: 'React PWA (TypeScript + Vite)' },
      { layer: 'Database', stack: 'SQLite (backend)' },
      { layer: 'Networking', stack: 'LAN-based; QR code scanning for phone onboarding' },
    ],
    status: 'Active development',
    highlights: [
      'Multi-platform architecture (Desktop + Mobile + Backend)',
      'Three user roles: Owner, Cashier, Kitchen',
      'LAN-based POS — no internet required',
      'QR code-based phone client onboarding',
      'Real-time order sync between stations',
      'TypeScript across all frontend projects',
    ],
  },
  {
    id: 'flowday',
    name: 'FlowDay — Daily Task & Progress Tracker',
    repo: 'albertii-alt/flowday',
    description:
      'An offline-first mobile productivity app that empowers users to plan daily tasks, track completion progress, build consistency streaks, and stay motivated through visual feedback. All data is stored locally—no internet or server required.',
    problem:
      'Many productivity apps require cloud connectivity and subscriptions. FlowDay provides a lightweight, privacy-focused alternative where users fully own their data.',
    tech: [
      { layer: 'Framework', stack: 'React Native + Expo 54' },
      { layer: 'Navigation', stack: 'Expo Router (file-based routing)' },
      { layer: 'Language', stack: 'TypeScript' },
      { layer: 'Database', stack: 'SQLite (local, offline-first)' },
      { layer: 'State Management', stack: 'Zustand' },
      { layer: 'UI', stack: 'Custom gradient components, dark mode support' },
    ],
    status: 'MVP complete',
    highlights: [
      'Offline-first architecture — zero network calls required',
      'Task management with priority levels (Low / Medium / High)',
      'Category system: Personal, Work, School, Health, Errands',
      'Visual progress ring with motivational messages',
      'Streak system — current streak, best streak, completion rate analytics',
      'Calendar history with color-coded completion dots',
      'Dark mode with device persistence',
      'Haptic feedback on task completion',
    ],
  },
  {
    id: 'lumina-pos',
    name: 'Lumina POS — Hardware Store Point of Sale',
    repo: 'albertii-alt/hardware-pos',
    description:
      'A production-ready Point of Sale system built for hardware and construction supply stores. Provides inventory management, sales tracking, reporting, and staff role management with a clean, responsive web interface.',
    problem:
      'Hardware stores need a reliable POS system that tracks inventory, processes sales, generates reports, and supports multiple staff roles without expensive licensing.',
    tech: [
      { layer: 'Language', stack: 'PHP' },
      { layer: 'Frontend', stack: 'HTML, CSS, Bootstrap' },
      { layer: 'UI Components', stack: 'Tom Select, Chart.js' },
      { layer: 'Database', stack: 'MySQL' },
      { layer: 'Architecture', stack: 'MVC pattern with single bootstrap entry point' },
    ],
    status: 'Production-ready',
    highlights: [
      'Full PHP MVC implementation',
      'Role-based access: Owner, Cashier, Manager',
      'Product and inventory management',
      'Sales transactions and reporting',
      'Staff management system',
      'Database backup system with application logging',
    ],
  },
  {
    id: 'homebase-finder',
    name: 'HomeBase Finder',
    repo: 'albertii-alt/homebase-finder',
    description:
      'A modern web application for discovering and exploring residential properties. Built with React and deployed on Vercel, providing a smooth browsing experience with filtering and search capabilities.',
    problem:
      'Real estate searchers need an intuitive, fast, and modern interface to browse properties without clutter or complicated navigation.',
    tech: [
      { layer: 'Framework', stack: 'React + TypeScript' },
      { layer: 'Styling', stack: 'Tailwind CSS + shadcn/ui' },
      { layer: 'Bundler', stack: 'Vite' },
      { layer: 'Deployment', stack: 'Vercel' },
    ],
    status: 'Deployed and live',
    highlights: [
      'Modern React + TypeScript architecture',
      'Beautiful UI with shadcn/ui and Tailwind CSS',
      'Live deployment on Vercel',
      'Responsive design',
    ],
    liveUrl: 'https://homebase-finder.vercel.app',
  },
  {
    id: 'library-system',
    name: 'Library Management System',
    repo: 'albertii-alt/library_system_management',
    description:
      'A full-stack library management application combining a Java backend with a web-based frontend. Manages books, members, borrowing/returning transactions, and member details with persistent JSON-based storage.',
    problem:
      'Libraries need to track book inventory, member registrations, and borrow/return transactions without complex database administration.',
    tech: [
      { layer: 'Backend', stack: 'Java + SparkJava framework' },
      { layer: 'Frontend', stack: 'HTML, CSS, JavaScript' },
      { layer: 'Build Tool', stack: 'Apache Maven' },
      { layer: 'Storage', stack: 'JSON files (no external database required)' },
    ],
    status: 'Complete',
    highlights: [
      'Full-stack Java + Web implementation',
      'Book management (CRUD operations)',
      'Member registration: Student / Teacher roles',
      'Borrow/return workflow with validation',
      'Transaction history tracking',
      'REST API endpoints for all operations',
      'Persistent JSON storage',
    ],
  },
]

export const resume = {
  summary:
    'IT student and aspiring full-stack developer focused on building practical systems and AI-powered applications for real-world use cases, especially in small businesses and community services.',
  experience: 'Academic + Self-driven Projects',
  strengths: [
    'Full-stack web development',
    'Real-time systems (Socket.io, multi-device sync)',
    'AI integration in applications',
    'Problem-solving for real-world use cases',
  ],
  downloadUrl: null as string | null,
}
