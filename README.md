# Contact Management App with Charts and Maps

This React application includes a contact management system and a dashboard with charts and maps using various technologies including ReactJS, TypeScript, TailwindCSS, Redux, React Router, and React Query.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [API Endpoints](#api-endpoints)
5. [Folder Structure](#folder-structure)

## Project Overview

The application consists of two main pages:

1. **Contacts Page**: 
   - Allows users to create, edit, and delete contacts.
   - Displays a list of all contacts with the ability to view details.

2. **Charts and Maps Page**:
   - Displays a line chart showing COVID-19 case fluctuations.
   - Shows a React Leaflet map with markers for various countries, displaying COVID-19 statistics.

## Technologies Used

- **ReactJS**: Front-end library for building the user interface.
- **TypeScript**: Adds static typing to JavaScript, improving development speed and safety.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **Redux**: State management library for handling global state.
- **React Router v6**: For routing and navigation.
- **React Query**: For fetching and managing data from APIs.
- **Leaflet**: For interactive maps.

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**:

   - git clone https://github.com/nishchaya2k/cma.git
   - cd cma

2. **Install dependencies**:

   npm install

3. **Run the development server:**

   npm run dev

## API Endpoints

The application uses the following API endpoints:

1. **World Wide COVID-19 Data**:
   - **Endpoint**: `https://disease.sh/v3/covid-19/all`
   - **Description**: Provides global COVID-19 statistics including total cases, deaths, and recoveries.

2. **Country-Specific COVID-19 Data**:
   - **Endpoint**: `https://disease.sh/v3/covid-19/countries`
   - **Description**: Provides COVID-19 statistics for individual countries, including active cases, recovered cases, and deaths.

3. **Historical COVID-19 Data**:
   - **Endpoint**: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
   - **Description**: Provides historical COVID-19 data with case fluctuations over time.

## Folder Structure

  src/
  │
  ├── components/
  │   ├── ContactItems.tsx
  │   ├── Form.tsx
  │   ├── Input.tsx
  │   ├── LineChart.tsx
  │   ├── Navbar.tsx
  │   └── Sidebar.tsx
  │
  ├── pages/
  │   ├── ChartsMaps.tsx
  │   └── Contacts.tsx
  │
  ├── store/
  │   ├── ContactSlice.ts
  │   └── Store.ts
  │
  ├── utils/
  │   ├── const.ts
  │   └── en.ts
  │
  ├── App.tsx
  ├── index.css
  └── main.tsx


