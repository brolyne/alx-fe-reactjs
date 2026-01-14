# MyCompany - A Four-Page React Website

A professional four-page company website built with React, Vite, and React Router. This project demonstrates modern React practices including routing, component composition, state management, and inline CSS styling.

## Features

- **Multi-page Navigation**: Four main pages (Home, About, Services, Contact)
- **React Router Integration**: Smooth client-side routing without page reloads
- **Responsive Navigation Bar**: Sticky navbar with hover effects and smooth transitions
- **Contact Form**: Interactive contact form with form state management using React hooks
- **Professional Footer**: Consistent footer across all pages
- **Inline CSS Styling**: All styling done with inline CSS for easy customization
- **Fast Development**: Built with Vite for fast HMR (Hot Module Replacement)

## Project Structure

```
my-company/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component with routing links
│   │   └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── Home.jsx        # Home page with welcome message
│   │   ├── About.jsx       # About page with company information
│   │   ├── Services.jsx    # Services page with service listings
│   │   └── Contact.jsx     # Contact page with interactive form
│   ├── App.jsx             # Main app component with routing setup
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Page Contents

### Home Page
- Welcome message
- Company tagline
- Introduction to services

### About Page
- Company history (established 1990)
- Company specializations
- Mission statement

### Services Page
- Technology Consulting
- Market Analysis
- Product Development
- Business Strategy
- Marketing Solutions

### Contact Page
- Interactive contact form with three fields:
  - Name (text input)
  - Email (email input)
  - Message (textarea)
- Form submission handling with validation
- Success message display

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Navigate to project directory**:
```bash
cd my-company
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```
The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Technologies Used

- **React 19.2.0** - UI library
- **React Router 7.12.0** - Client-side routing
- **Vite 7.3.1** - Build tool and dev server
- **JavaScript (ES6+)** - Programming language
- **CSS (Inline)** - Styling

## Styling Details

All components use inline CSS styling for flexibility and ease of customization:

- **Navbar**: Dark background (#333) with blue hover effects
- **Footer**: Dark background matching navbar
- **Links**: Blue (#007bff) with hover animations
- **Form Elements**: Professional styling with focus states
- **Colors**: 
  - Primary: #007bff (Blue)
  - Dark backgrounds: #333
  - Text: #333 (dark), #666 (light gray)

## Component Features

### Navbar Component
- Fixed positioning with sticky scrolling
- Logo/branding
- Navigation links to all pages
- Hover effects on links
- Responsive design

### Footer Component
- Company copyright
- Footer links (Privacy, Terms, Contact)
- Company tagline

### Contact Form
- Real-time state management using `useState` hook
- Form validation (all fields required)
- Submission handling with alert notification
- Success message display
- Form reset after submission

## How to Customize

### Change Company Name
Update the logo text in [src/components/Navbar.jsx](src/components/Navbar.jsx)

### Modify Services
Edit the services array in [src/pages/Services.jsx](src/pages/Services.jsx)

### Update Colors
Search for color values in the inline styles and adjust:
- Primary color: `#007bff`
- Dark background: `#333`
- Text colors: `#333`, `#666`

### Add New Pages
1. Create a new component in `src/pages/`
2. Add a new Route in [src/App.jsx](src/App.jsx)
3. Add a new Link in [src/components/Navbar.jsx](src/components/Navbar.jsx)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add TypeScript support
- Implement backend API integration
- Add email sending functionality to contact form
- Add image galleries
- Implement dark mode toggle
- Add animations and transitions
- Mobile-responsive design improvements

## Development Workflow

1. Make changes to components
2. Changes are automatically reflected in the browser (HMR)
3. Check for errors in the console
4. Run `npm run lint` to check code quality
5. Run `npm run build` to create production build

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically use the next available port.

### Router issues
Ensure `BrowserRouter` is wrapping your Routes component in App.jsx

### Form not submitting
Check that all form fields have `name` attributes matching the state object keys

## License

This project is open source and available under the MIT License.

## Author

Created as part of the ALX Front-end React.js coursework - alx-fe-reactjs repository.

---

**Happy coding! 🚀**
