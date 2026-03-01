# Jason Cabelo - Portfolio

A modern personal portfolio website built with React, featuring smooth animations, dark/light mode, and responsive design.

## 🚀 Features

- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Smooth Animations** - Page transitions and hover effects using Framer Motion
- **Responsive Design** - Mobile-friendly layout
- **Project Showcase** - Display of featured projects with live demos and code links
- **Skills Section** - Technology stack with logos and links to official documentation

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Styling:** CSS with CSS Variables

## 📦 Installation

```
bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
my-portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable React components
│   ├── data/         # Project data
│   ├── pages/        # Page components
│   ├── styles/       # CSS styles
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
└── package.json      # Dependencies
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projectsData.js` to add new projects:

```
javascript
{
  title: "Project Name",
  description: "Project description",
  image: "image-url",
  demoLink: "https://demo.com",
  repoLink: "https://github.com/repo"
}
```

### Modifying Skills

Edit the `skills` array in `src/pages/Home.jsx` to update the technology badges.

## 📄 License

MIT License

## 👤 Author

**Jason Cabelo** - Full-stack Developer
- GitHub: [JasonCabelo](https://github.com/JasonCabelo)
- Portfolio: [jasoncabelo-portfolio.vercel.app](https://jasoncabelo-portfolio.vercel.app/)
