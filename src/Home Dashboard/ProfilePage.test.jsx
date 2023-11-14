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

const RenderProfilePage = () => {
    return (
        render(<ProfilePage
            UserInformation={UserInformation}
        />)
    );
}


describe("ProfilePage Component", () => {
  test("displays the name", () => {
    RenderProfilePage()
    expect(screen.getByText(UserInformation.name)).toBeInTheDocument();
  });

  test("displays the major", () => {
    render(<ProfilePage />);
    const pattern = new RegExp(UserInformation.major, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("displays the about me text", () => {
    render(<ProfilePage />);
    // Define a regular expression pattern to match the desired text
    const pattern = new RegExp(UserInformation.aboutMeText, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
    expect(screen.getByText(pattern)).toBeInTheDocument();
    // this allows searching for text regardless of it being encapsulated in other text.
  });

  test("displays the carpool preferences", () => {
    render(<ProfilePage />);
    // Define a regular expression pattern to match the desired text
    const preferencesPattern = new RegExp(UserInformation.preferences, "i");
    expect(screen.getByText(preferencesPattern)).toBeInTheDocument();
  });

  test("displays reviews from specific individuals", () => {
    render(<ProfilePage />);
    UserInformation.reviews.forEach((review) => {
      expect(screen.getByText(review.name)).toBeInTheDocument();
    });
  });
});
