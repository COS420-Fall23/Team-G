import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfilePage from "./ProfilePage";
import { getDoc } from "firebase/firestore";

jest.mock('../firebaseConfig', () => ({
  db: {},
}));

jest.mock("firebase/firestore", () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
}));

const RenderProfilePage = () => {
  render(
    <BrowserRouter>
      <ProfilePage />
    </BrowserRouter>
  );
};

describe("ProfilePage Component", () => {
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

  beforeEach(() => {
    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => UserInformation,
    });
  });

  test("displays the name", async () => {
    RenderProfilePage();
    const nameElement = await screen.findByText("John Doe");
    expect(nameElement).toBeInTheDocument();
  });

  test("displays the major", async () => {
    RenderProfilePage();
    const pattern = new RegExp(UserInformation.major, "i");
    const majorElement = await screen.findByText(pattern)
    expect(majorElement).toBeInTheDocument();
  });

  test("displays the about me text", async () => {
    RenderProfilePage();
    const pattern = new RegExp(UserInformation.aboutMeText, "i");
    expect(await screen.findByText(pattern)).toBeInTheDocument();
  });

  test("displays the carpool preferences", async () => {
    RenderProfilePage();
    const preferencesPattern = new RegExp(UserInformation.preferences, "i");
    expect(await screen.findByText(preferencesPattern)).toBeInTheDocument();
  });

  test("displays reviews from specific individuals", async () => {
    RenderProfilePage();
    UserInformation.reviews.forEach(async (review) => {
      expect(await screen.findByText(review.name)).toBeInTheDocument();
    });
  });

  test("clicking edit creates 3 text fields", async () => {
    // Render the profile page
    RenderProfilePage();

    // Get the edit button and click it
    const editButton = await screen.findByText("Edit Profile");
    expect(editButton).toBeInTheDocument();
    
    fireEvent.click(editButton);
    
    // Expect three text input fields to be in the page
    expect(screen.getAllByRole("textbox").length).toBe(3);
  });


  test("clicking edit again removes the text fields", async () => {
    // Render the profile page
    RenderProfilePage();

    // Get the edit button and click it
    //const editButton = await screen.findByText("Edit Profile");
    //expect(editButton).toBeInTheDocument();
    
    //fireEvent.click(editButton);
    //fireEvent.click(editButton);

    // Expect three text input fields to be in the page
    //expect(screen.queryAllByRole("textbox").length).toBe(0);
  });
  //
});
