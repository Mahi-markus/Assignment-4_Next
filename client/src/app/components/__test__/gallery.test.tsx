import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gallery from "../gallery/page";

const mockImages = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

describe("Gallery Component", () => {
  it("renders the main image and thumbnails correctly", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    // Main image
    const mainImage = screen.getByAltText("Main View");
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute("src", mockImages[0]);

    // Thumbnails
    const thumbnails = screen.getAllByAltText(/Thumbnail/);
    expect(thumbnails.length).toBe(4);
    thumbnails.forEach((thumbnail, index) => {
      expect(thumbnail).toHaveAttribute("src", mockImages[index + 1]);
    });
  });

  it("displays a lightbox when clicking on the main image", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    const mainImage = screen.getByAltText("Main View");
    fireEvent.click(mainImage);

    const lightboxImage = screen.getByAltText("Lightbox");
    expect(lightboxImage).toBeInTheDocument();
    expect(lightboxImage).toHaveAttribute("src", mockImages[0]);

    const closeButton = screen.getByRole("button", { name: "×" });
    expect(closeButton).toBeInTheDocument();
  });

  it("closes the lightbox when clicking the close button", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    const mainImage = screen.getByAltText("Main View");
    fireEvent.click(mainImage);

    const closeButton = screen.getByRole("button", { name: "×" });
    fireEvent.click(closeButton);

    expect(screen.queryByAltText("Lightbox")).not.toBeInTheDocument();
  });

  it("navigates to the next and previous images in the lightbox", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    const mainImage = screen.getByAltText("Main View");
    fireEvent.click(mainImage);

    const nextButton = screen.getByRole("button", { name: "→" });
    fireEvent.click(nextButton);

    const lightboxImage = screen.getByAltText("Lightbox");
    expect(lightboxImage).toHaveAttribute("src", mockImages[1]);

    const prevButton = screen.getByRole("button", { name: "←" });
    fireEvent.click(prevButton);
    expect(lightboxImage).toHaveAttribute("src", mockImages[0]);
  });

  it("renders the correct title in the lightbox", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    const mainImage = screen.getByAltText("Main View");
    fireEvent.click(mainImage);

    const title = screen.getByText("Test Gallery");
    expect(title).toBeInTheDocument();
  });

  it("disables scrolling when the lightbox is open and re-enables it on close", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    const mainImage = screen.getByAltText("Main View");
    fireEvent.click(mainImage);
    expect(document.body.style.overflow).toBe("hidden");

    const closeButton = screen.getByRole("button", { name: "×" });
    fireEvent.click(closeButton);
    expect(document.body.style.overflow).toBe("auto");
  });

  it("displays the correct image count badge", () => {
    render(<Gallery images={mockImages} title="Test Gallery" />);

    const badge = screen.getByText(mockImages.length.toString());
    expect(badge).toBeInTheDocument();
  });
});
