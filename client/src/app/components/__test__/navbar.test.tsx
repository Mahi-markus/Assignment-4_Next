import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../navbar/page"; // Adjust the path based on your project structure

// Mock localStorage
beforeEach(() => {
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.clear = jest.fn();
});

describe("Navbar Component", () => {
  test("renders the Navbar with default elements", () => {
    render(<Navbar />);
    
    // Assert links and buttons are present
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Trip Boards/i)).toBeInTheDocument();
    expect(screen.getByText(/List Your Property/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
    expect(screen.getByText(/My Trips/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  });

  test("renders the selected country from localStorage", () => {
    // Mock the localStorage value
    Storage.prototype.getItem = jest.fn(() => "Bangladesh");
    
    render(<Navbar />);
    
    expect(screen.getByText(/Bangladesh/i)).toBeInTheDocument();
  });

  test("opens the modal when the country button is clicked", () => {
    render(<Navbar />);
    
    const countryButton = screen.getByText(/United States/i);
    fireEvent.click(countryButton);
    
    const modal = screen.getByText(/Display settings/i);
    expect(modal).toBeInTheDocument();
  });

  test("updates the selected country and stores it in localStorage", () => {
    render(<Navbar />);
    
    const countryButton = screen.getByText(/United States/i);
    fireEvent.click(countryButton);
    
    const selectElement = screen.getByLabelText(/Region:/i);
    fireEvent.change(selectElement, { target: { value: "Bangladesh" } });
    
    const currencyDisplay = screen.getByText(/BDT/i);
    expect(currencyDisplay).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith("selectedCountry", "Bangladesh");
  });

  test("closes the modal when the close button is clicked", () => {
    render(<Navbar />);
    
    const countryButton = screen.getByText(/United States/i);
    fireEvent.click(countryButton);
    
    const closeButton = screen.getByText(/×/i);
    fireEvent.click(closeButton);
    
    const modal = screen.queryByText(/Display settings/i);
    expect(modal).not.toBeInTheDocument();
  });

  test("closes the modal on submit button click", () => {
    render(<Navbar />);
    
    const countryButton = screen.getByText(/United States/i);
    fireEvent.click(countryButton);
    
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);
    
    const modal = screen.queryByText(/Display settings/i);
    expect(modal).not.toBeInTheDocument();
  });
});
