# Product Requirements Document (PRD)

Version: 1.0

Project: AI Operating System Portfolio

---

# Overview

The AI Operating System Portfolio is a web application that simulates a modern desktop operating system.

Users interact with the portfolio by opening applications, navigating windows, and exploring information about the developer.

The experience should feel intuitive and familiar to anyone who has used a modern desktop OS.

---

# User Journey

## First Visit

When a visitor opens the website:

1. Desktop loads
2. Welcome animation appears
3. Desktop icons become visible
4. Taskbar becomes available
5. Visitor can immediately begin exploring

The user should never be forced to read lengthy introductions.

Exploration should feel natural.

---

# Desktop Environment

## Purpose

Acts as the primary workspace for the portfolio.

---

## Features

### Wallpaper

Displays a modern and professional background.

Requirements:

- High quality
- Optimized for performance
- Responsive across screen sizes

---

### Desktop Icons

Provide shortcuts to applications.

Initial icons:

- About Me
- Projects
- Skills
- Resume
- Contact
- Terminal
- AI Assistant

Requirements:

- Double-click support
- Touch support
- Keyboard accessible

---

### Right Click Menu

MVP Version:

- Refresh
- Open AI Assistant
- Open Terminal

Future versions may include additional options.

---

# Taskbar

## Purpose

Displays running applications.

Provides quick navigation.

---

## Features

### Start Menu Button

Opens Start Menu.

---

### Running Applications

Shows currently opened applications.

Requirements:

- Highlight active window
- Allow window switching
- Show minimized state

---

### System Clock

Displays current local time.

Updates automatically.

---

# Start Menu

## Purpose

Central application launcher.

---

## Features

### Search Bar

Allows searching:

- Applications
- Skills
- Projects

MVP may use local search.

---

### Application List

Displays all available applications.

---

# Window Management System

## Purpose

Provides desktop-like multitasking.

---

## Window Features

Every application window must support:

- Open
- Close
- Minimize
- Maximize
- Restore
- Drag
- Focus

---

## Focus Rules

When a window is selected:

- Move to front
- Receive highest z-index
- Become active taskbar item

---

## Window Persistence

For MVP:

State may reset on page refresh.

Persistence is optional.

---

# Application: About Me

## Purpose

Introduce the developer.

---

## Content

### Profile Section

Displays:

- Name
- Role
- Location
- Short introduction

---

### Professional Summary

Explains:

- Technical background
- Current goals
- Areas of interest

---

### Quick Facts

Examples:

- Years coding
- Technologies used
- Projects completed

---

# Application: Projects

## Purpose

Showcase completed work.

---

## Project Card Information

Each project should include:

- Name
- Description
- Technologies
- Screenshots
- Challenges solved
- Key achievements

---

## Project Details Window

When a project is opened:

Display:

- Full description
- Features
- Technical architecture
- Lessons learned

---

# Application: Skills

## Purpose

Show technical capabilities.

---

## Categories

### Frontend

Examples:

- React
- TypeScript
- Tailwind

---

### Backend

Examples:

- Node.js
- Express
- Socket.io

---

### Database

Examples:

- SQLite
- PostgreSQL
- MySQL

---

### AI Tools

Examples:

- OpenAI
- Gemini
- Amazon Q
- Claude

---

# Application: Resume

## Purpose

Provide resume access.

---

## Features

### Embedded Resume Viewer

Display resume directly inside application.

---

### Download Button

Allow resume download.

---

# Application: Contact

## Purpose

Allow visitors to reach the developer.

---

## Features

### Contact Information

Display:

- Email
- GitHub
- LinkedIn
- Portfolio links

---

### Contact Form

Fields:

- Name
- Email
- Message

---

# Application: Terminal

## Purpose

Provide an interactive developer experience.

---

## Supported Commands

help

Displays all commands.

---

about

Displays developer summary.

---

skills

Lists skills.

---

projects

Lists projects.

---

contact

Displays contact information.

---

resume

Opens Resume application.

---

clear

Clears terminal output.

---

whoami

Returns developer identity.

---

neofetch

Displays developer profile in terminal style.

---

# Application: AI Assistant

## Purpose

Allow natural language exploration of the portfolio.

---

## Core Behavior

The AI assistant acts as a digital version of the developer.

It answers questions using portfolio information only.

---

## Example Questions

Who is Jay-ar?

What projects has he built?

What technologies does he use?

What is his strongest project?

How can I contact him?

---

## Rules

The assistant must:

- Stay on topic
- Use portfolio knowledge
- Be concise
- Be professional

The assistant must not:

- Invent information
- Answer unrelated questions
- Generate fictional experience

---

# Responsive Requirements

Desktop First

Target experience.

---

Tablet Support

Must remain usable.

---

Mobile Support

Should provide a simplified desktop experience.

Windows may open fullscreen.

---

# Accessibility Requirements

Must support:

- Keyboard navigation
- Focus indicators
- Screen readers
- Sufficient color contrast

---

# Performance Requirements

Initial load under 3 seconds.

Smooth window dragging.

Responsive interactions.

Minimal layout shifts.

---

# MVP Completion Definition

The MVP is considered complete when:

- Desktop loads successfully
- Window management works
- All applications open correctly
- Taskbar functions correctly
- AI Assistant works
- Resume is viewable
- Contact information is accessible
- Responsive layout is functional