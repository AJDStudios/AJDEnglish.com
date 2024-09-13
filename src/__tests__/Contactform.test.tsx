import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../pages/ContactForm';
import axios from 'axios';

jest.mock('react-google-recaptcha', () => ({
  __esModule: true,
  default: React.forwardRef(({ onChange }: { onChange: (token: string) => void }, ref: React.Ref<{ reset: () => void }>) => {
    React.useImperativeHandle(ref, () => ({
      reset: () => console.log('reCAPTCHA reset called'),
    }));

    React.useEffect(() => {
      onChange('fake-recaptcha-token'); 
    }, [onChange]);

    return <div>Mocked reCAPTCHA</div>;
  }),
}));

// Mock axios to prevent real submissions
jest.mock('axios');

test('submits form successfully without real submission', async () => {
  (axios.post as jest.Mock).mockResolvedValueOnce({ status: 200, data: {} });

  render(<ContactForm />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledTimes(1);  
  });
});
