import { render, screen } from '@testing-library/react';
import SignUpPage from './page';

// Mock Clerk components
jest.mock('@clerk/nextjs', () => ({
  SignUp: ({ appearance, redirectUrl }: any) => (
    <div data-testid="clerk-signup" data-redirect-url={redirectUrl}>
      Mock SignUp Component
    </div>
  ),
}));

// Mock Next.js components
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('SignUpPage', () => {
  it('renders the sign-up page with correct title', () => {
    render(<SignUpPage />);
    
    expect(screen.getByText('Create your account')).toBeInTheDocument();
    expect(screen.getByText("Start building your company's intranet today")).toBeInTheDocument();
  });

  it('renders the Clerk SignUp component', () => {
    render(<SignUpPage />);
    
    const signUpComponent = screen.getByTestId('clerk-signup');
    expect(signUpComponent).toBeInTheDocument();
    expect(signUpComponent).toHaveAttribute('data-redirect-url', '/dashboard');
  });

  it('renders navigation links', () => {
    render(<SignUpPage />);
    
    expect(screen.getByText('ShortPoint')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument(); // Link at bottom
  });

  it('renders the logo', () => {
    render(<SignUpPage />);
    
    const logo = screen.getByAltText('ShortPoint');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/shortpoint-logo.svg');
  });

  it('has correct styling classes', () => {
    render(<SignUpPage />);
    
    const mainContainer = screen.getByText('Create your account').closest('.min-h-screen');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveClass('min-h-screen', 'bg-gradient-to-br', 'from-blue-50', 'to-gray-50');
  });

  it('shows correct call-to-action text', () => {
    render(<SignUpPage />);
    
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
