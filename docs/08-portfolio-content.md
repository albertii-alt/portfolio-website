# Portfolio Content

## Basic Information

Name: Alberto Jr. Auxtero Daro
Preferred Display Name: Jay-ar 

Role:
IT Student/Full Stack-Developer/AI Builder

Location:
Trinidad, Bohol 6324

Tagline:
“Building intelligent, practical systems that solve real community and business problems.”


---

## About Me

I am an IT student currently in my 3rd year, focused on building real-world software systems that go beyond classroom requirements. My work is centered around developing full-stack applications, AI-assisted tools, and practical systems that small businesses and communities can actually use.

My journey in development started with curiosity about how websites and systems work behind the scenes. Over time, this grew into hands-on experience building applications such as POS systems with real-time features, offline-first architecture, and multi-device synchronization using modern web technologies.

I enjoy working with JavaScript and TypeScript, especially in full-stack environments using React, Node.js, and Express. I also explore AI integration in applications, aiming to build systems that are not just functional but intelligent and adaptive.

My long-term goal is to become a software engineer who builds impactful products—especially systems that improve local businesses, education, and community access to information using AI-driven solutions.
---

## Education

Institution: Trinidad Municipal College
Program:  BS Information Technology
Year Level: 3rd Year

---

## Skills

### Languages

* JavaScript
* TypeScript
* Java
* PHP
* Kotlin (mobile)
* HTML & CSS

### Frontend

* React (Web & Desktop)
* React Native (Mobile via Expo)
* Tailwind CSS
* shadcn-ui
* Bootstrap

### Backend

* Node.js
* Express
* Java Swing (Desktop UI)
* PHP
* SparkJava (Java microframework)

### Databases

* SQLite (mobile & embedded)
* MySQL / MariaDB
* JSON (file-based storage)
* PostgreSQL

### Tools

* Git & GitHub
* VS Code
* Amazon Q
* Tauri (Desktop apps)
* Expo (Mobile framework)
* Maven (Java build)
* Apache Ant (Java build)
* Vite (Web bundler)
* HikariCP (Connection pooling)
* Socket.IO (Real-time communication)
* Zustand (State management)

---

# Projects

---

## Project 1: Vantage Dental Clinic — Appointment Management System
**Repository:** `albertii-alt/dental-clinic-appointment-management-system`

A comprehensive Java Swing desktop application for managing dental clinic operations. This enterprise-grade system handles complex appointment scheduling, patient records, multi-role access control, and automated email notifications—built with security and usability as core principles.

### Problem Solved
Modern dental clinics struggle with managing patient appointments, staff coordination, role-based permissions, and communication. This system eliminates manual scheduling conflicts, enforces business rules (booking lead time, closed days, slot blocking), and automates critical notifications to patients and staff.

### Technologies Used
| Layer | Stack |
|---|---|
| Frontend | Java Swing (Metal L&F, Segoe UI fonts) |
| Backend | Java 21 (Temurin), Business Logic Services, Data Access Objects |
| Database | MySQL / MariaDB with HikariCP connection pooling |
| Security | BCrypt password hashing, prepared statements, account lockout, session timeout |
| Notifications | JavaMail async SMTP email sender |
| Reporting | Apache POI (Excel export), JFreeChart (charts) |
| UI Components | Ikonli (FontAwesome icons), JCalendar |
| Logging | SLF4J + Log4j |

**Status:** Production-ready with complete feature set

### Highlights
- Multi-portal system (Patient, Staff, Dentist, Admin portals with Super Admin)
- Granular role-based permission management with audit trails
- One active appointment per patient with automatic expiry logic
- Automated day-before & day-of appointment reminders
- Complex appointment lifecycle (Pending → Approved → Completed / Cancelled / etc.)
- Admin reporting dashboard with 6+ report types
- Account lockout after 5 failed attempts (30-min auto-unlock)
- Force password reset for new accounts
- XSS prevention, SQL injection protection, credential sanitization
- Cross-table username uniqueness validation
- Database credentials stored outside project (`~/.dental_clinic/db.properties`)

---

## Project 2: Pinili Cutlet POS System
**Repository:** `albertii-alt/pinili-cutlet-pos`

A modern, LAN-based Point of Sale system designed specifically for Pinili Cutlet food stall. The system features a multi-platform architecture with a centralized Node.js backend, a desktop management app for owners/cashiers, and a responsive mobile PWA for order entry and payment processing.

### Problem Solved
Food stalls need unified order taking, inventory tracking, and sales reporting across multiple cashiers and service stations. This system provides offline-capable clients, role-based workflows, and real-time synchronization without requiring internet connectivity.

### Technologies Used
| Layer | Stack |
|---|---|
| Backend | Node.js + Express (TypeScript) |
| Desktop App | Tauri + React (owner dashboard & cashier interface) |
| Mobile Client | React PWA (TypeScript + Vite) for phones/tablets |
| Database | SQLite (backend) |
| Networking | LAN-based communication; QR code scanning for phone onboarding |

**Status:** Active development with core features complete

### Highlights
- Multi-platform architecture (Desktop + Mobile + Backend)
- Three user roles: Owner, Cashier, Kitchen
- LAN-based POS (no internet required)
- QR code-based phone client onboarding
- Real-time order sync between stations
- Role-based dashboard views
- TypeScript across all frontend projects for type safety

---

## Project 3: FlowDay — Daily Task & Progress Tracker
**Repository:** `albertii-alt/flowday`

An offline-first mobile productivity app that empowers users to plan daily tasks, track completion progress, build consistency streaks, and stay motivated through beautiful visual feedback. All data is stored locally on the device—no internet or server required.

### Problem Solved
Many productivity apps require cloud connectivity and subscriptions. FlowDay provides a lightweight, privacy-focused alternative where users own their data and can use the app anytime, anywhere without data concerns.

### Technologies Used
| Layer | Stack |
|---|---|
| Framework | React Native + Expo 54 |
| Navigation | Expo Router (file-based routing) |
| Language | TypeScript |
| Database | SQLite (local, offline-first) |
| State Management | Zustand |
| Date Utilities | date-fns |
| Haptics | expo-haptics |
| UI | Custom gradient components, dark mode support |

**Status:** MVP complete — roadmap includes recurring tasks, push reminders, data export, and cloud sync

### Highlights
- Offline-first architecture — all data on device, zero network calls required
- Task management — add, complete, edit, delete with priority levels (Low / Medium / High)
- Category system — Personal, Work, School, Health, Errands
- Progress tracking — visual progress ring with motivational messages
- Streak system — current streak, best streak, completion rate analytics
- Calendar history — review past days with color-coded completion dots
- Dark mode — full theme with device persistence
- Haptic feedback — satisfying feedback on task completion
- Beautiful onboarding — first-launch experience
- SQLite integration — robust local data storage

---

## Project 4: Lumina POS — Hardware Store Point of Sale
**Repository:** `albertii-alt/hardware-pos`

A production-ready Point of Sale system built for hardware and construction supply stores. The system provides inventory management, sales tracking, reporting, and staff role management with a clean, responsive web interface.

### Problem Solved
Hardware stores need a reliable, easy-to-use POS system that can track inventory, process sales, generate reports, and support multiple staff roles without expensive licensing or complicated setups.

### Technologies Used
| Layer | Stack |
|---|---|
| Language | PHP |
| Frontend | HTML, CSS, Bootstrap |
| UI Components | Tom Select, Chart.js |
| Database | MySQL |
| Architecture | MVC pattern with single bootstrap entry point |
| Storage | Local file backups and logging |

**Status:** Production-ready deployment

### Highlights
- Full PHP stack implementation
- Role-based access (Owner, Cashier, Manager)
- Product and inventory management
- Sales transactions and reporting
- Staff management
- Database backup system
- Application logging

---

## Project 5: HomeBase Finder
**Repository:** `albertii-alt/homebase-finder`

A modern web application for discovering and exploring residential properties. Built with React and deployed on Vercel, this app provides a smooth user experience for browsing properties with advanced filtering and search capabilities.

### Problem Solved
Real estate searchers need an intuitive, fast, and modern interface to browse properties without clutter or complicated navigation.

### Technologies Used
| Layer | Stack |
|---|---|
| Framework | React + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Bundler | Vite |
| Deployment | Vercel — [homebase-finder.vercel.app](https://homebase-finder.vercel.app) |

**Status:** Deployed and live

### Highlights
- Modern React + TypeScript architecture
- Beautiful UI with shadcn/ui and Tailwind CSS
- Fast Vite bundler setup
- Live deployment on Vercel
- Responsive design

---

## Project 6: Portfolio Website
**Repository:** `albertii-alt/portfolio-website`

An operating system-inspired portfolio with a window manager, desktop environment, app registry, terminal, and AI assistant.

### Problem Solved
Needed a professional web presence to showcase development work and attract opportunities.

### Technologies Used
| Layer | Stack |
|---|---|
| Frontend | React + TypeScript |
| Styling | CSS |
| Bundler | Vite |
| Build Tools | JavaScript, HTML |

**Status:** Live and actively maintained

### Highlights
- Modern React setup with TypeScript
- Fast development with Vite
- Professional portfolio showcase
- Responsive CSS styling

---

## Project 7: Bisayang Kusina — Modern Login Page
**Repository:** `albertii-alt/bisayang_kusina`

A modern login and sign-up page design for a food/kitchen-themed application. This project demonstrates front-end UI/UX skills with clean, contemporary design patterns.

### Problem Solved
Demonstrates ability to create attractive, functional authentication interfaces with modern web standards.

### Technologies Used
| Layer | Stack |
|---|---|
| Markup | HTML5 |
| Styling | CSS |
| Interactivity | JavaScript |

**Status:** Complete learning/portfolio project

### Highlights
- Modern HTML5 structure
- Advanced CSS styling
- Interactive JavaScript functionality
- Responsive design

---

## Project 8: Library Management System
**Repository:** `albertii-alt/library_system_management`

A full-stack library management application combining a Java backend with a web-based frontend. The system manages books, members, borrowing/returning transactions, and member details with persistent JSON-based storage.

### Problem Solved
Libraries need to track book inventory, member registrations, borrow/return transactions, and generate reports without complex database administration.

### Technologies Used
| Layer | Stack |
|---|---|
| Backend | Java + SparkJava framework |
| Frontend | HTML, CSS, JavaScript |
| Build Tool | Apache Maven |
| Storage | JSON files (no external database required) |
| Deployment | Local Java server at `http://localhost:8080` |

**Status:** Complete project for group coursework

### Highlights
- Full-stack Java + Web implementation
- Book management (CRUD operations)
- Member registration (Student / Teacher roles)
- Borrow/return workflow with validation
- Transaction history tracking
- REST API endpoints for all operations
- Persistent JSON storage
- Web-based UI
- Maven build system

---

## Resume

Resume Summary:
IT student and aspiring full-stack developer focused on building practical systems and AI-powered applications for real-world use cases, especially in small businesses and community services.

Years of Experience:
Academic + Self-driven Projects

Key Strengths:

Full-stack web development
Real-time systems (Socket.io, multi-device sync)
AI integration in applications
Problem-solving for real-world use cases

Resume Download URL:
(Coming soon)

---

## Contact

Email: 
albertoiidaro0@gmail.com

GitHub:
https://github.com/albertii-alt

LinkedIn:

Facebook:
Jay-ar Daro

Portfolio URL:
(Optional)

Preferred Contact Method:
email
---

## AI Assistant Knowledge Base

The assistant should know that I am an IT student focused on full-stack development and AI integration. I build real-world systems such as POS systems for small businesses, real-time multi-device applications, and experimental AI tools.

My primary technologies include JavaScript, TypeScript, React, Node.js, and Express, with experience in real-time communication using Socket.io and database systems like SQLite and PostgreSQL.

I am currently exploring AI-powered systems, especially community-focused applications that improve access to information and simplify local services.

The assistant should prioritize accuracy based only on this information and future documented updates in my portfolio system.