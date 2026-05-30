# DogBnB

DogBnB is a React web application that helps dog owners find temporary hosts for their pets and allows dog lovers to offer hosting services.

The project was developed as part of the **ReDI School of Digital Integration – Web Development Advanced** program.

## Live Demo

https://pastila-147.github.io/Redi-WDA-Final-Project/#/

## Features

* Browse dogs looking for temporary care
* Browse available hosts in Munich
* Filter dogs by personality, care needs, and availability
* Filter hosts by availability dates
* View detailed dog profiles
* Add new dogs and hosts through forms
* Leave reviews
* Request a callback through a validated contact form
* Save user-created dogs and hosts in LocalStorage

## Technologies

* React
* React Router
* React Query
* Zustand
* React Hook Form
* Vite
* JavaScript
* HTML5
* CSS

## API Integration

The application combines local business data with public APIs:

### Dog CEO API

Used to load random dog images for dog profiles.

### Random User API

Used to generate realistic host avatars and profile information.

## State Management

### Zustand

Used for:

* Dog and host data
* Search filters
* Form state management
* Callback modal state
* Global application state

### React Query

Used for:

* Data fetching
* API caching
* Loading states
* Error handling

## Pages

### Home

Landing page with Hero section, How It Works, and Reviews.

### About

Project information and technology overview.

### Find a Dog

Browse dogs, apply filters, add new dog profiles, and view detailed information.

### Find a Host

Browse available hosts, filter by dates, and add new host profiles.

### Reviews

Submit user reviews through a simple form.

## Project Structure

```text
src/
├── api/
├── assets/
├── components/
│   ├── DogsCards/
│   ├── HostsCards/
│   ├── Forms/
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── HowItWorks/
│   └── Reviews/
├── pages/
├── stores/
├── App.tsx
├── router.jsx
└── main.tsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Learning Goals

This project demonstrates:

* Component-based architecture
* Routing with React Router
* State management with Zustand
* API integration with React Query
* Form handling and validation with React Hook Form
* Local data persistence with LocalStorage
* Responsive UI development

## Author

**Evgeniya Emelina**

https://www.linkedin.com/in/evgeniya-emelina-8956aa28a/

Web Development Advanced Program
ReDI School of Digital Integration

