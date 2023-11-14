import React from "react";
import { render, screen } from "@testing-library/react";
import ProfilePage from "./ProfilePage"; // Adjust the import path as needed

const UserInformation = {
  name: "John Doe",
  major: "Computer Science",
  aboutMeText: "Passionate about technology and innovation.",
  preferences: "Prefers non-smokers and no pets in the car.",
  reviews: [
    { name: "Ben Smith", rating: 4, text: "Pretty Good" },
    { name: "Mark Wahlburg", rating: 3.5, text: "No Complaints" },
    {
      name: "Dr. Fisk",
      rating: 5,
      text: "My review is written for the sole purpose of demonstrating what happens when the site has to render a longer review.",
    },
  ],
};

describe("ProfilePage Component", () => {
  test("displays the name", () => {
    render(<ProfilePage />);
    expect(screen.getByText(UserInformation.name)).toBeInTheDocument();
  });

  test("displays the major", () => {
    render(<ProfilePage />);
    expect(
      screen.getByText(`Major: ${UserInformation.major}`)
    ).toBeInTheDocument();
  });

  test("displays the about me text", () => {
    render(<ProfilePage />);
    expect(
      screen.getByText(`About Me: ${UserInformation.aboutMeText}`)
    ).toBeInTheDocument();
  });

  test("displays the carpool preferences", () => {
    render(<ProfilePage />);
    expect(screen.getByText(UserInformation.preferences)).toBeInTheDocument();
  });

  test("displays reviews from specific individuals", () => {
    render(<ProfilePage />);
    UserInformation.reviews.forEach((review) => {
      expect(screen.getByText(review.name)).toBeInTheDocument();
    });
  });
});
