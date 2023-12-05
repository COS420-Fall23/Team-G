import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import UserPage from "./UserPage";

// Mocks
const mockUserData = {
  name: "John Doe",
  major: "Computer Science",
  aboutMeText: "Passionate about technology.",
  preferences: "Non-smoker, enjoys music",
  reviews: [
    { name: "Alice", rating: 5, text: "Great experience!" },
    { name: "Bob", rating: 4, text: "Very punctual and friendly." }
  ],
  profileImageUrl: "url/to/image"
};

jest.mock("../DatabaseFacade", () => ({
  GetUserByUid: () => mockUserData,
  UpdateUserInformation: jest.fn(),
  UpdateUserImage: jest.fn()
}));

describe("ProfilePage Component Tests", () => {
  
  test("should display the user's name", () => {
    render(
      <BrowserRouter>
        <UserPage />
      </BrowserRouter>
    );
    expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
  });

  test("should display the user's major", () => {
    render(
      <BrowserRouter>
        <UserPage />
      </BrowserRouter>
    );
    const pattern = new RegExp(mockUserData.major, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("should display the About Me text", () => {
    render(
      <BrowserRouter>
        <UserPage />
      </BrowserRouter>
    );
    const pattern = new RegExp(mockUserData.aboutMeText, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("should display carpool preferences", () => {
    render(
      <BrowserRouter>
        <UserPage />
      </BrowserRouter>
    );
    const pattern = new RegExp(mockUserData.preferences, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("should display reviews from specific individuals", () => {
    render(
      <BrowserRouter>
        <UserPage />
      </BrowserRouter>
    );
    mockUserData.reviews.forEach((review) => {
      expect(screen.getByText(review.text)).toBeInTheDocument();
    });
  });
});
