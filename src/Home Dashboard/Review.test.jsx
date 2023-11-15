import React from 'react';
import { render, screen } from "@testing-library/react";
import Review from "./Review";

describe("Review component", () => {
  const review = {
    name: "John Doe",
    rating: 4,
    reviewText: "This is a great review!",
  };

  test("should display the name", () => {
    render(<Review {...review} />);
    expect(screen.getByText(review.name)).toBeInTheDocument();
  });

  test("should display the review text", () => {
    render(<Review {...review} />);
    expect(screen.getByText(review.reviewText)).toBeInTheDocument();
  });

  test("should display the correct number of stars", () => {
    render(<Review {...review} />);
    const starIcons = screen.getAllByTestId("star-icon");
    expect(starIcons.length).toBe(Math.floor(review.rating));
  });
test("should display the correct number of stars and half stars", () => {
    const review2 = {
        name: "Doe John",
        rating: 4.5,
        reviewText: "This is a another great review!",
    };
    render(<Review {...review2} />);
    const starIcons = screen.getAllByTestId("star-icon");

    expect(starIcons.length).toBe(Math.floor(review.rating));
    const halfStarIcons = screen.getAllByTestId("half-star-icon");
    expect(halfStarIcons.length).toBe(1);
  });
});
