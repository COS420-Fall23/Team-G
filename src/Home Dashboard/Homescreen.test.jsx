import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom';
import Homescreen from "./Homescreen"; // Adjust the import path as needed


const RenderHomescreen = () => {
    return (
        render(<BrowserRouter><Homescreen
            
        /></BrowserRouter>)
    );
}


describe("Homescreen Component", () => {
  test("displays the Drawer and content", () => {
    RenderHomescreen(<Homescreen />);
    expect(screen.getByTestId('Drawer')).toBeInTheDocument();
    expect(screen.getByText("Drivers")).toBeInTheDocument();
    expect(screen.getByText("Ride Requests")).toBeInTheDocument();
    expect(screen.getByText("Map")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test('AppBar loads correctly', () => {
    RenderHomescreen(<Homescreen />);
    expect(screen.getByTestId('appbar')).toBeInTheDocument();
});

});
