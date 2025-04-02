# Electron-React-TypeScript-Tailwind Template

A modern Electron starter template powered by **React**, **TypeScript**, and **Tailwind CSS**. This setup provides a seamless development experience with a clean structure, automatic refresh, and an uncluttered Electron UI (default menu hidden).

## Features
- ⚡ **Electron** - Build cross-platform desktop apps
- ⚛ **React** - Component-based UI with fast rendering
- 🟦 **TypeScript** - Type safety for scalable development
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🚀 **Hot Reloading** - Instant updates without restarting Electron
- 🛠️ **Minimal Setup** - Pre-configured Webpack and Electron settings
- ❌ **No Default Menu** - A clean, distraction-free app window

## Getting Started

### 1️⃣ Install Dependencies
Run the following command to install all required packages:
```sh
npm i
```

### 2️⃣ Start the Development Server
Launch the app in development mode:
```sh
npm run dev
```
This will start the Electron app with hot-reloading enabled.

### 3️⃣ Refresh the App
If you make changes and don’t see updates, simply press:
```
Ctrl + R
```
This will refresh the Electron window instantly.

## Folder Structure
```
📂 electron-react-ts-tailwind-template
├── 📁 src             # Source code
│   ├── 📁 electron    # Electron main process
│   │   ├── 📄 index.ts # Electron entry point
│   ├── 📁 website     # React frontend
│   │   ├── 📄 App.tsx  # Main React component
│   │   ├── 📄 index.tsx # React entry point
│   │   ├── 📄 index.html # HTML template
│   │   ├── 📄 app.css   # Tailwind styles
├── 📄 package.json     # Dependencies & scripts
├── 📄 tailwind.config.js # Tailwind configuration
├── 📄 tsconfig.json    # TypeScript configuration
├── 📄 postcss.config.js # PostCSS configuration
├── 📄 webpack.electron.config.js # Webpack config for Electron
├── 📄 webpack.website.config.js  # Webpack config for React website
```

## Build for Production
To generate a production-ready build, run:
```sh
npm run build
```

## Notes
- The default Electron menu is hidden for a cleaner interface.
- Hot reloading ensures faster development without restarting Electron.
- Tailwind CSS is preconfigured for rapid styling.
- Webpack configurations are separate for **Electron** and **React website**.

---

🚀 Happy Coding!

