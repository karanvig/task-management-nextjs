This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## About This Projet

This project is a comprehensive Task Management Application built with Next.js, designed to help users efficiently manage their tasks with a rich set of features and modern technologies.

### Features

- **Authentication**: 
  - Integrated with **NextAuth.js** to provide secure authentication using Google and GitHub. Users can easily sign in with their preferred provider.
  
- **Geolocation**: 
  - Utilized **Geoapify** to detect the user's location based on their IP address, offering a personalized experience.

- **State Management**:
  - Implemented global state management using **React's useContext**, ensuring smooth and consistent state handling across the application.

- **Dynamic Routing**:
  - Employed dynamic routing in Next.js to create flexible and scalable routes, enabling user-specific and context-aware navigation.

- **CRUD Functionality**:
  - Developed full **CRUD (Create, Read, Update, Delete)** operations for tasks. Users can seamlessly add, edit, view, and delete tasks within the application.

- **Dark Mode/Light Mode**:
  - Integrated **dark mode and light mode** toggling, allowing users to switch between themes for better usability and comfort.

- **Styling**:
  - Used **Tailwind CSS** for styling the application, ensuring a clean, responsive, and highly customizable user interface.

### Tech Stack

- **Next.js**: Framework for building the application with server-side rendering and static site generation.
- **NextAuth.js**: Library for managing authentication with Google and GitHub.
- **Geoapify**: Service for detecting user location based on IP.
- **React**: Library for building the user interface.
- **useContext**: React hook for global state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vercel**: Platform used for deploying the application.


