UserProfile component (Tailwind)

This folder contains a styled, responsive `UserProfile` React component using Tailwind CSS utilities.

File:
- src/components/UserProfile.jsx

Notes:
- The component expects Tailwind CSS to be configured in the parent project (Tailwind directives in CSS and proper PostCSS setup).
- Responsive classes used:
  - Container: `p-4` on small screens, `md:p-8` on medium and up
  - Max width: `max-w-xs` on small, `md:max-w-sm` on medium and up
  - Image: `w-24 h-24` on small, `md:w-36 md:h-36` on medium and up
  - Heading: `text-lg` on small, `md:text-xl` on medium and up
- Interactivity:
  - Image scales on hover (`hover:scale-110`, `transition-transform duration-300`)
  - Card shadow increases on hover (`hover:shadow-xl`, `transition-shadow`)
  - Heading color changes on hover (`hover:text-blue-500`)

Usage:
Import and render the component in your app:

```jsx
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
```

If Tailwind is not yet configured in this project, follow the official Tailwind + Vite/React setup instructions before running the app.
