/*
 * Filename: c:\Users\20neu\Desktop\COS420\Team-G\src\Home Dashboard\ProfilePage.test copy.jsx
 * Path: c:\Users\20neu\Desktop\COS420\Team-G
 * Created Date: Monday, November 20th 2023, 12:18:06 pm
 * Author: David Neufeld
 * 
 * Copyright (c) 2023 Your Company
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserPage from "./UserPage"; 
import { getDoc } from "firebase/firestore";

jest.mock('../firebaseConfig', () => ({
  db: {},
}));

jest.mock("firebase/firestore", () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
}));

const RenderUserPage = () => {
  render(
    <BrowserRouter>
      <UserPage 
        EnableAcceptRide={true}
        EnableRequestRide={true}
        EnableMessage={true}
      />
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
    RenderUserPage();
    const nameElement = await screen.findByText("John Doe");
    expect(nameElement).toBeInTheDocument();
  });

  test("displays the major", async () => {
    RenderUserPage();
    const pattern = new RegExp(UserInformation.major, "i");
    const majorElement = await screen.findByText(pattern)
    expect(majorElement).toBeInTheDocument();
  });

  test("displays the about me text", async () => {
    RenderUserPage();
    const pattern = new RegExp(UserInformation.aboutMeText, "i");
    expect(await screen.findByText(pattern)).toBeInTheDocument();
  });

  test("displays the carpool preferences", async () => {
    RenderUserPage();
    const preferencesPattern = new RegExp(UserInformation.preferences, "i");
    expect(await screen.findByText(preferencesPattern)).toBeInTheDocument();
  });

  test("displays reviews from specific individuals", async () => {
    RenderUserPage();
    UserInformation.reviews.forEach(async (review) => {
      expect(await screen.findByText(review.name)).toBeInTheDocument();
    });
  });
});
