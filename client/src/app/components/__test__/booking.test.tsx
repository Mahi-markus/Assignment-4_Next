import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingCard from "../bookingCard/page"; // Adjust the path based on your project structure

describe("BookingCard Component", () => {
  test("renders the BookingCard with default content", () => {
    render(<BookingCard />);

    // Assert price and per-night text
    expect(screen.getByText(/\$134/i)).toBeInTheDocument();
    expect(screen.getByText(/per night/i)).toBeInTheDocument();

    // Assert free cancellation and cancel date
    expect(screen.getByText(/Free cancellation available/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel before Mon, Nov 4/i)).toBeInTheDocument();

    // Assert input labels
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Travelers/i)).toBeInTheDocument();

    // Assert button and footer text
    expect(screen.getByRole("button", { name: /Book now/i })).toBeInTheDocument();
    expect(screen.getByText(/You wont be charged yet/i)).toBeInTheDocument();
  });

  test("renders the default value for 'Number of Travelers'", () => {
    render(<BookingCard />);
    
    const travelersInput = screen.getByDisplayValue(/2 travelers/i);
    expect(travelersInput).toBeInTheDocument();
    expect(travelersInput).toHaveAttribute("readOnly");
  });

  test("checks the date inputs can be interacted with", () => {
    render(<BookingCard />);
    
    const startDateInput = screen.getByLabelText(/Start Date/i) as HTMLInputElement;
    const endDateInput = screen.getByLabelText(/End Date/i) as HTMLInputElement;

    // Simulate entering dates
    fireEvent.change(startDateInput, { target: { value: "2024-11-20" } });
    fireEvent.change(endDateInput, { target: { value: "2024-11-25" } });

    expect(startDateInput.value).toBe("2024-11-20");
    expect(endDateInput.value).toBe("2024-11-25");
  });

  test("verifies the Book Now button is clickable", () => {
    render(<BookingCard />);

    const bookNowButton = screen.getByRole("button", { name: /Book now/i });

    // Simulate button click
    fireEvent.click(bookNowButton);

    // Check if the button is present (since no click handler is attached)
    expect(bookNowButton).toBeInTheDocument();
  });
});
