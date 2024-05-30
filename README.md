# React Admin Project

This project is a comprehensive admin dashboard built with React. It leverages Material UI for a clean and modern design and includes various features and components to support various administrative tasks. This was to demonstrate the ability to create a react app with the functionality of a dashboard for internal tools for a company. This application has features such as Light and Dark Mode, 4 different charts, 3 different Data Table Pagers, FAQ PAge, Form Page, and Calendar Integration.

## Tech Stack

This project is built with the following technologies:

- **VSCode IDE**: Version: 1.89.1
  
- **Node.js**: Version: 18.18.2

- **Language**: JavaScript
  
- **React**: A JavaScript library for building user interfaces. This project uses functional components and hooks.

- **Material UI**: A popular React UI framework with reusable components. This project uses the ThemeProvider for theming support and CssBaseline for CSS reset.

- **React Router Dom**: A collection of navigational components that compose declaratively with your application. It's used in this project for routing.

- **Custom Hooks**: This project uses custom hooks like `useMode` for theme and color mode management.


## Features

- **Theme Support**: The project uses Material UI's ThemeProvider for customizable themes. The current theme and color mode can be accessed and manipulated using the `useMode` hook from the `theme` module.

- **Routing**: The project uses `react-router-dom` for routing. Each scene (or page) of the application is associated with a specific route.

- **Global Components**: The `Topbar` and `Sidebar` components are global components that appear on every page.

- **Scenes**: The application includes a variety of scenes, each associated with a specific administrative task. These include a dashboard, team management, invoice management, contact management, form creation, calendar, data visualization (bar, line, pie charts), FAQ, and geography.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-name>
npx create-react-app react-admin
cd react-admin/
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar 0.6.0 formik yup @fullcalendar/core \
  @fullcalendar/daygrid \
  @fullcalendar/timegrid \
  @fullcalendar/list @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo
