import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('renders the welcome title', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to SkyBook/i)).toBeInTheDocument();
  });

  test('renders the "Let\'s Search a Flight" button', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /Let's Search a Flight/i })).toBeInTheDocument();
  });

  test('renders the "View My Bookings" button', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /View My Bookings/i })).toBeInTheDocument();
  });
});
import { fireEvent } from '@testing-library/react';

describe('Navigation and Page Rendering', () => {
  test("navigates to SearchPage when clicking \"Let's Search a Flight\"", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const searchButton = screen.getByRole('button', { name: /Let's Search a Flight/i });
    fireEvent.click(searchButton);
    expect(screen.getByRole('heading', { name: /Search Flights/i })).toBeInTheDocument();
  });

  test('navigates to ViewBookingsPage when clicking "View My Bookings"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const bookingsButton = screen.getByRole('button', { name: /View My Bookings/i });
    fireEvent.click(bookingsButton);
    expect(screen.getByText(/View My Bookings/i)).toBeInTheDocument();
  });
});

describe('Form Validations and Fallbacks', () => {
  test('renders "No flight selected." if no state is passed to BookingPage', () => {
    render(
      <MemoryRouter initialEntries={['/booking']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/No flight selected./i)).toBeInTheDocument();
  });

  test('renders "No booking found." if no state is passed to SuccessPage', () => {
    render(
      <MemoryRouter initialEntries={['/success']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/No booking found./i)).toBeInTheDocument();
  });

  test('renders "No bookings found." if empty results passed to BookingsResultsPage', () => {
    render(
      <MemoryRouter initialEntries={['/bookings-results']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/No bookings found./i)).toBeInTheDocument();
  });
});