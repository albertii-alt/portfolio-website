# UI / UX Specification

Version: 1.0

Project: AI Operating System Portfolio

---

# Design Goal

Create a portfolio experience that feels like a premium modern operating system.

The interface should combine:

- Professionalism
- Futuristic aesthetics
- Smooth interactions
- Familiar desktop behavior

The design should impress recruiters without sacrificing usability.

---

# Design Inspiration

Primary Inspirations:

- Windows 11
- macOS Sonoma
- Modern AI products
- Glassmorphism interfaces
- Premium SaaS dashboards

The result should feel like a custom operating system rather than a clone of any existing platform.

---

# Design Principles

## Principle 1

Clarity over complexity.

Even though the portfolio looks like an operating system, users should never feel lost.

---

## Principle 2

Motion should enhance usability.

Animations should communicate state changes.

Animations should never exist purely for decoration.

---

## Principle 3

Consistency matters.

Every application should feel like part of the same operating system.

---

## Principle 4

The interface is the portfolio.

The UI itself demonstrates engineering and design capability.

---

# Visual Style

## Overall Feel

Keywords:

- Modern
- Intelligent
- Clean
- Premium
- Futuristic
- Professional

Avoid:

- Excessive neon
- Hacker aesthetics
- Gaming aesthetics
- Visual clutter

---

# Color System

## Background

Primary Desktop Background:

#0F172A

---

## Surface

Window Background:

rgba(15, 23, 42, 0.75)

---

## Accent

Primary Accent:

#38BDF8

---

## Success

#22C55E

---

## Warning

#F59E0B

---

## Error

#EF4444

---

## Text

Primary:

#FFFFFF

Secondary:

#CBD5E1

Muted:

#94A3B8

---

# Glassmorphism Rules

Windows should use:

Backdrop Blur:
20px

Background Opacity:
70–80%

Border:
1px subtle transparent white

Shadow:
Soft and realistic

The effect should feel premium rather than flashy.

---

# Typography

## Primary Font

Inter

Fallback:

sans-serif

---

# Font Weights

Light:
300

Regular:
400

Medium:
500

Semibold:
600

Bold:
700

---

# Desktop Layout

Desktop occupies entire viewport.

No page scrolling.

All navigation happens through applications.

---

# Wallpaper

Requirements:

- Professional
- Minimal
- Dark theme
- High quality
- Non-distracting

Wallpaper should support content visibility.

---

# Desktop Icons

## Style

Modern square icons.

Rounded corners.

Consistent visual language.

---

## Behavior

Single Click:

Select icon.

Double Click:

Open application.

---

## Hover State

Subtle glow.

Scale animation.

Duration:
150ms

---

# Window Design

## Window Shape

Rounded corners:

16px

---

## Window Header

Contains:

- Application icon
- Application name
- Minimize button
- Maximize button
- Close button

---

## Header Height

48px

---

# Window Animations

## Open

Scale:
95% → 100%

Fade:
0 → 100%

Duration:
250ms

---

## Close

Scale:
100% → 95%

Fade:
100% → 0

Duration:
200ms

---

## Minimize

Animate toward taskbar.

Duration:
200ms

---

## Restore

Animate from taskbar.

Duration:
200ms

---

# Window Dragging

Dragging must feel smooth.

No lag.

Window position updates should be performant.

---

# Active Window

Active window receives:

- Highest z-index
- Stronger shadow
- Accent border

---

# Inactive Window

Slightly reduced opacity.

Reduced shadow intensity.

---

# Taskbar

## Position

Bottom center

---

## Style

Floating taskbar

Rounded corners

Glassmorphism background

---

## Height

64px

---

# Taskbar Contents

Left:

Start Button

Center:

Running Applications

Right:

Clock

System Status

---

# Start Menu

## Layout

Centered popup

Modern application launcher

---

## Sections

Search

Pinned Applications

Quick Access

---

# Application Design

All applications should follow the same design language.

Shared:

- Header
- Padding
- Typography
- Components

---

# About Application

Layout:

Profile Card

Biography

Highlights

Technology Stack

---

# Projects Application

Layout:

Grid of project cards

---

# Project Card

Displays:

- Thumbnail
- Name
- Description
- Technology Tags

---

# Skills Application

Layout:

Categorized skill groups

Examples:

Frontend

Backend

Database

AI

Tools

---

# Resume Application

Layout:

Document viewer

Centered content

Easy download access

---

# Contact Application

Layout:

Contact information

Contact form

Social links

---

# Terminal Application

Theme:

Dark terminal

Monospace font

---

# Terminal Font

JetBrains Mono

Fallback:

monospace

---

# Terminal Experience

Should feel authentic.

Commands should respond instantly.

Typing should feel responsive.

---

# AI Assistant Application

Most important application.

Should feel premium.

---

# Layout

Conversation view

Input box

Suggested prompts

---

# Suggested Prompts

Examples:

Who is Jay-ar?

Show me projects.

What technologies does he use?

How can I contact him?

---

# AI Message Design

Assistant messages:

Distinct styling.

Readable formatting.

Professional tone.

---

# Loading States

Use skeleton loaders.

Avoid spinners where possible.

---

# Empty States

Every empty state should provide guidance.

Example:

"No projects found."

Provide action suggestions.

---

# Responsive Behavior

## Desktop

Full operating system experience.

---

## Tablet

Desktop experience with adjustments.

---

## Mobile

Applications open fullscreen.

Taskbar simplified.

Window dragging disabled.

Navigation optimized for touch.

---

# Accessibility

Support:

Keyboard navigation

Screen readers

Focus indicators

Reduced motion preferences

---

# Motion Guidelines

Animation Duration:

Fast:
150ms

Normal:
250ms

Slow:
350ms

---

# Animation Curve

Use smooth modern easing.

Avoid bounce animations.

Avoid exaggerated movement.

---

# Final UX Requirement

A first-time visitor should understand how to use the interface within 30 seconds without reading instructions.