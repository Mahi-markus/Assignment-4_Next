import React from "react";
import { render, screen } from "@testing-library/react";
import ExploreArea from "../explore_area/page"; // Adjust path based on your project structure

describe("ExploreArea Component", () => {
  const mockProps = {
    latitude: 58.3019,
    longitude: -134.4197,
  };

  test("renders the component with correct heading", () => {
    render(<ExploreArea {...mockProps} />);

    // Check for the heading
    expect(screen.getByText(/Explore the area/i)).toBeInTheDocument();
  });

  test("renders the map image with alt text", () => {
    render(<ExploreArea {...mockProps} />);

    // Check for the map image
    const mapImage = screen.getByAltText(/Map of Juneau area/i);
    expect(mapImage).toBeInTheDocument();
    expect(mapImage).toHaveAttribute("src", "./map.jpg");
  });

  test("displays latitude and longitude values", () => {
    render(<ExploreArea {...mockProps} />);

    // Check for the latitude and longitude
    expect(screen.getByText(`${mockProps.longitude}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.latitude}`)).toBeInTheDocument();
  });

  test("renders the location information list", () => {
    render(<ExploreArea {...mockProps} />);

    // Check for all location names
    const locations = [
      "Auke Bay",
      "University of Alaska-Southeast",
      "Mendenhall Golf Course",
      "Juneau, AK (JNU-Juneau Intl.)",
    ];

    locations.forEach((location) => {
      expect(screen.getByText(location)).toBeInTheDocument();
    });

    // Check for their respective travel times
    const times = ["6 min drive", "10 min drive", "14 min drive", "14 min drive"];
    times.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test("renders the 'See more about this area' link", () => {
    render(<ExploreArea {...mockProps} />);

    // Check for the link
    const seeMoreLink = screen.getByText(/See more about this area/i);
    expect(seeMoreLink).toBeInTheDocument();
    expect(seeMoreLink).toHaveAttribute("href", "#");
  });
});
