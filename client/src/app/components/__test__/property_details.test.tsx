import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyDetails from "..//propertyDetails/page"; // Adjust path if necessary


// Mock the BookingCard component


describe("PropertyDetails Component", () => {
  const mockProps = {
    title: "Luxury Villa in Paradise",
    rating: 4.8,
    reviewsCount: 120,
    reviewLink: "/reviews",
    bedrooms: 3,
    bathrooms: 2,
    sleeps: 6,
    size: "2,500 sq ft",
    amenities: [
      { icon: "fas fa-wifi", label: "Free Wi-Fi" },
      { icon: "fas fa-swimmer", label: "Swimming Pool" },
      { icon: "fas fa-car", label: "Free Parking" },
      { icon: "fas fa-dumbbell", label: "Gym" },
    ],
  };

  test("renders property title and rating", () => {
    render(<PropertyDetails {...mockProps} />);

    // Check for the title
    expect(screen.getByText(/Luxury Villa in Paradise/i)).toBeInTheDocument();

    // Check for the rating badge and description
    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText(/Exceptional/i)).toBeInTheDocument();

    // Check for the reviews link
    const reviewsLink = screen.getByText(/120 reviews/i);
    expect(reviewsLink).toBeInTheDocument();
    expect(reviewsLink).toHaveAttribute("href", "/reviews");
  });

  test("renders property details like bedrooms, bathrooms, sleeps, and size", () => {
    render(<PropertyDetails {...mockProps} />);

    // Check for property features
    expect(screen.getByText("3 bedrooms")).toBeInTheDocument();
    expect(screen.getByText("2 bathroom")).toBeInTheDocument();
    expect(screen.getByText("Sleeps 6")).toBeInTheDocument();
    expect(screen.getByText("2,500 sq ft")).toBeInTheDocument();
  });

  test("renders popular amenities", () => {
    render(<PropertyDetails {...mockProps} />);

    // Check for all amenities
    mockProps.amenities.forEach((amenity) => {
      expect(screen.getByText(amenity.label)).toBeInTheDocument();
    });
  });

  test("renders the BookingCard component", () => {
    render(<PropertyDetails {...mockProps} />);

    // Check for the mocked BookingCard
    expect(screen.getByTestId("booking-card")).toBeInTheDocument();
  });
});
