import "react-native";
import React from "react";
import IconButton from "./IconButton";

import { render, screen, fireEvent } from "@testing-library/react-native";

const tree = render(<IconButton />);

it("renders correctly", () => {
  //Given
  render(<IconButton />);
});

// test("button press", () => {
//   const iconButton = tree.root.findByProps({ testId: "myIconButton" }).props;
//   renderer.act(() => iconButton.onPress());
//   const myText = tree.root.findByProps({ testId: "myText" }).props;
//   expect(myText.children).toEqual("this is my testString");
// });
