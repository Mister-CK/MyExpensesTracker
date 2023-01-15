import "react-native";
import React from "react";
import LoadingOverlay from "./LoadingOverlay";

import { render, screen, fireEvent } from "@testing-library/react-native";
//jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
it("renders correctly", () => {
  render(<LoadingOverlay />);
});
