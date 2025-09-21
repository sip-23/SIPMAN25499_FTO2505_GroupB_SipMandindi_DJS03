# DJS03: React Podcast Landing Page

## Overview

In this project, I built the landing page for a podcast discovery app using **React**. My goal is to:
- fetch podcast data from an external API and dynamically render a **responsive grid of podcast previews**. 

This focuses on 
- **data fetching**, 
- **component structure**, 
- **rendering logic**, and 
- **layout styling**.

---

## Core Objectives

- I fetched podcast data from an API: https://podcast-api.netlify.app/ on initial page load.
- I Displayed a loading indicator while data is being fetched, and handle errors or empty results with a clear user message.
- I then rendered a responsive **grid layout** of podcast previews using modular, reusable React components.
- I then pass podcast data into components via props and render each podcast card with the following:
  - Podcast **image**
  - Podcast **title**
  - Number of **seasons**
  - Associated **genre names**
  - Formatted **last updated** date (e.g., "2 days ago")

---

## Technical Requirements

- I Used **React functional components**
- I Used the **Fetch API**
- I Used `useEffect()` to fetch data once on mount
- I Used `useState()` to manage podcast data
- I Used `.map()` to dynamically render PodcastPreviewCard components
- I Formated dates using `date-fns` or a custom formatter

---

## Responsiveness Requirements

- My app looks good on:
  - Desktop (≥1200px)
  - Tablet (~768px)
  - Mobile (~375px)
- Use **CSS Grid** or **Flexbox**
- Media queries or frameworks like **Tailwind CSS** are allowed

---

## Deliverables

- **Functional React Application**

  - A working React app that fetches podcast data from an external API on initial load.
  - The app renders a grid of podcast previews using reusable components.

- **Loading, Error, and Empty States**

  - A clear loading indicator is displayed while fetching data.
  - Meaningful error or empty state messaging is shown if the fetch fails or returns no results.

- **Podcast Preview Card Component**

  - A reusable component that displays:
    - Podcast image
    - Podcast title
    - Number of seasons
    - Genre tags
    - Last updated date in a human-readable format (e.g., "3 days ago")

- **Responsive Layout**

  - Grid layout that adapts to mobile, tablet, and desktop screen sizes using responsive design principles.

- **Codebase**
  - Clean, modular code with clearly separated components.
  - All major functions and modules documented with **JSDoc** comments.
  - Consistent formatting across JavaScript, JSX, HTML, and CSS files.
