import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfilePage from "./ProfilePage";

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
      text:
        "My review is written for the sole purpose of demonstrating what happens when the site has to render a longer review.",
    },
  ],
};


const RenderProfilePage = () => {
  return render(
    <BrowserRouter>
      <ProfilePage UserInformation={UserInformation} />
    </BrowserRouter>
  );
};


describe("ProfilePage Component", () => {
  test("displays the name", () => {
    RenderProfilePage();
    expect(screen.getByText(UserInformation.name)).toBeInTheDocument();
  });

  test("displays the major", () => {
    RenderProfilePage();
    const pattern = new RegExp(UserInformation.major, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("displays the about me text", () => {
    RenderProfilePage();
    const pattern = new RegExp(UserInformation.aboutMeText, "i");
    expect(screen.getByText(pattern)).toBeInTheDocument();
  });

  test("displays the carpool preferences", () => {
    RenderProfilePage();
    const preferencesPattern = new RegExp(UserInformation.preferences, "i");
    expect(screen.getByText(preferencesPattern)).toBeInTheDocument();
  });

  test("displays reviews from specific individuals", () => {
    RenderProfilePage();
    UserInformation.reviews.forEach((review) => {
      expect(screen.getByText(review.name)).toBeInTheDocument();
    });
  });

  test("clicking edit displays three text fields", () => {
  // Render the profile page
  RenderProfilePage();

  // Get the edit button and click it
  const editButton = screen.getByText("Edit Profile");
  fireEvent.click(editButton);

  // Expect three text input fields to be in the page
  expect(screen.getAllByRole("textbox").length).toBe(3);
});

test("clicking edit again removes the text fields", () => {
  // Render the profile page
  RenderProfilePage();

  // Get the edit button and click it twice
  const editButton = screen.getByText("Edit Profile");
  fireEvent.click(editButton);
  fireEvent.click(editButton);

  // Expect zero text input fields to be in the page
  expect(screen.queryAllByRole("textbox").length).toBe(0);
});

});
