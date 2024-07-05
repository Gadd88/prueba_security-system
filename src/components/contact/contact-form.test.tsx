import { render, screen, fireEvent } from '@testing-library/react';
import {ContactForm} from './contact-form'

describe('ContactForm', () => {
  it('renders the contact form', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('allows the user to submit the form', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'juan.perez@example.com' } });
    fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Este es un mensaje de prueba.' } });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
  });
});
