import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfilePage from "./ProfilePage";

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
        <ProfilePage />
      </BrowserRouter>
    );
    expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
  });

  test("should display the user's major", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );
    const pattern = new RegExp(mockUserData.major, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("should display the About Me text", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );
    const pattern = new RegExp(mockUserData.aboutMeText, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("should display carpool preferences", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );
    const pattern = new RegExp(mockUserData.preferences, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("should display reviews from specific individuals", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );
    mockUserData.reviews.forEach((review) => {
      expect(screen.getByText(review.text)).toBeInTheDocument();
    });
  });

  test("should create text input fields when edit profile is clicked", async () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Edit Profile"));

    const textFields = screen.getAllByRole("textbox");
    expect(textFields.length).toBe(3);
  });

  test("should remove text input fields when edit profile is clicked twice", async () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );
    const button = screen.getByText("Edit Profile");
    fireEvent.click(button);
    fireEvent.click(button);

    const textFields = screen.queryAllByRole("textbox");
    expect(textFields.length).toBe(0);
  });
});
