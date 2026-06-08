# System Architecture

Version: 1.0

Project: AI Operating System Portfolio

---

# Architecture Overview

This project is a single-page React application that simulates a desktop operating system.

It follows a **component-based architecture with centralized state management**.

The system is designed to be:

- Scalable
- Modular
- Maintainable
- Agent-friendly (Amazon Q compatible)

---

# Tech Stack

## Frontend

- React (Vite)
- TypeScript
- Tailwind CSS
- Framer Motion

---

## State Management

- Zustand (primary store system)

---

## UI Behavior

- Custom window manager (core system)
- Component-based applications

---

## AI Integration

- External API (OpenAI / Gemini / Claude)
- Context limited to portfolio data

---

# High-Level System Design

The system is composed of 4 core layers:

---

## 1. Presentation Layer (UI)

Responsible for rendering:

- Desktop
- Taskbar
- Windows
- Applications

---

## 2. Application Layer

Contains all portfolio apps:

- About Me
- Projects
- Skills
- Resume
- Contact
- Terminal
- AI Assistant

Each app is independent but managed by the OS system.

---

## 3. Window Management Layer

Handles:

- Opening windows
- Closing windows
- Dragging
- Z-index ordering
- Minimization
- Maximization
- Focus control

---

## 4. State Layer

Centralized Zustand stores manage:

- Windows state
- Active applications
- Desktop state
- AI chat state
- System UI state

---

# Folder Structure

```
src/
│
├── core/
│   ├── window-manager/
│   ├── app-registry/
│   └── os-controller/
│
├── store/
│   ├── useWindowStore.ts
│   ├── useDesktopStore.ts
│   ├── useAIStore.ts
│   └── useSystemStore.ts
│
├── components/
│   ├── desktop/
│   ├── taskbar/
│   ├── start-menu/
│   ├── window/
│   └── shared/
│
├── apps/
│   ├── about/
│   ├── projects/
│   ├── skills/
│   ├── resume/
│   ├── contact/
│   ├── terminal/
│   └── ai-assistant/
│
├── hooks/
│
├── services/
│   ├── ai/
│   └── api/
│
├── types/
│
├── assets/
│
└── utils/
```

---

# Core Concepts

---

# 1. App Registry System

Every application is registered in a central registry.

```
AppRegistry = {
  id: string,
  name: string,
  icon: string,
  component: React.Component,
  defaultSize: { width, height },
}
```

---

# 2. Window Model

Every window follows this structure:

```
Window = {
  id: string,
  appId: string,
  title: string,
  position: { x, y },
  size: { width, height },
  isMinimized: boolean,
  isMaximized: boolean,
  zIndex: number,
  isActive: boolean
}
```

---

# 3. Window Store (Zustand)

Responsible for:

- openWindow(appId)
- closeWindow(windowId)
- minimizeWindow(windowId)
- maximizeWindow(windowId)
- focusWindow(windowId)
- updatePosition(windowId)

---

# 4. Desktop Store

Manages:

- wallpaper
- desktop icons
- layout state

---

# 5. AI Store

Manages:

- conversation history
- user prompts
- AI responses
- loading states

---

# 6. System Store

Manages global UI:

- theme
- system status
- notifications
- global shortcuts

---

# Component Architecture

---

# Desktop Layout

```
Desktop
 ├── DesktopIcons
 ├── WindowManager
 ├── Taskbar
 └── StartMenu
```

---

# Window System

```
WindowManager
 ├── WindowFrame
 │    ├── WindowHeader
 │    └── WindowContent
```

---

# Application Structure

Each app follows:

```
apps/[app-name]/
 ├── index.tsx
 ├── components/
 ├── hooks/
 └── data/
```

---

# Window Manager Logic

## Responsibilities

- Render all open windows
- Sort by z-index
- Handle focus switching
- Manage drag interactions
- Manage resize behavior

---

## Rules

- Only one active window at a time
- Active window always highest z-index
- Minimized windows removed from viewport
- Maximized windows override layout constraints

---

# Event Flow

## Opening an App

1. User clicks icon
2. AppRegistry lookup
3. WindowStore creates window
4. WindowManager renders it

---

## Focusing a Window

1. User clicks window
2. WindowStore updates active window
3. Z-index recalculated

---

# AI Assistant Architecture

## Flow

User Input → AI Store → API Service → Response → UI Render

---

## Constraints

AI must only use:

- Project PRD data
- Static portfolio dataset
- App registry information

No external knowledge allowed.

---

# Terminal Architecture

Terminal is a lightweight command interpreter.

Flow:

Input → Parser → Command Registry → Output

---

# Command Registry

```
commands = {
  help,
  about,
  skills,
  projects,
  contact,
  resume,
  clear,
  whoami,
  neofetch
}
```

---

# Performance Strategy

## Optimization Rules

- Lazy load apps
- Memoize window components
- Avoid unnecessary re-renders
- Virtualize heavy lists (projects)

---

# State Optimization

Zustand stores must:

- Be split by domain
- Avoid global overuse
- Prevent cross-store coupling

---

# Security Constraints

Even though this is a portfolio:

- AI must not expose fake data
- No external API exposure without validation
- No user data persistence required

---

# Scalability Design

Future-ready architecture supports:

- New apps added via registry only
- No core system modification required
- Plug-and-play window components

---

# MVP Architecture Rule

If a feature requires modifying:

- Window Manager core
- App Registry system
- Global stores

It must be justified as essential for MVP.

---

# Final Principle

The system should behave like a real operating system, but remain a React application under the hood.