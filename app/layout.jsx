import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'AI Study Planner',
  description: 'A student productivity application'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}