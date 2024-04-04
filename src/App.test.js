import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function Sang1() {
  const Home = () => <h1>Home Page</h1>
  const About = () => <h1>About Page</h1>
  const Contact = () => <h1>Contact Page</h1>
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>/
    </BrowserRouter>
  );
}

export default Sang1;