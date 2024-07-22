import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import { it } from "node:test";
import exp from "node:constants";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  // expect the first image to show, but not the second
  expect(queryByAltText('Photo by Richard Pasquerella on Unsplash')).toBeInTheDocument();
  expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
  

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText('Photo by Richard Pasquerella on Unsplash')).not.toBeInTheDocument();
  expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
});

//smoke test
it('renders without crashing', function() {
  render(<Carousel />)
})

//snapshot test
it('matches snapshot', function() {
  const { asFragment } = render(<Carousel />)
  expect((asFragment)).toMatchSnapshot()
}) 

//left arrow test
it('left arrow works', function() {
  const { getByTestId, getByText } = reder(<Carousel />)
  const leftArrow = getByTestId('left-arrow')
  const rightArrow = getByTestId('right-arrow')
  const firstImg = getByText('Photo by Richard Pasquarella on Unsplash')

  fireEvent.click(rightArrow)
  const secondImg = getByText('Photo by Pratik Patel on Unsplash')
  expect(secondImg).toBeInTheDocument()

  fireEvent.click(leftArrow)
  expect(firstImg).toBeInTheDocument()
})

//hide arrow test
it('hides arrows', function() {
  const { getByTestId } = render(<Carousel />)
  const leftArrow = getByTestId('left-arrow')
  const rightArrow = getByTestId('right-arrow')

  expect(leftArrow).toHaveClass('hidden')
  expect(rightArrow).not.toHaveClass('hidden')

  fireEvent.click(getByTestId('right-arrow'))
  expect(leftArrow).not.toHaveClass('hidden')
  expect(rightArrow).not.toHaveClass('hidden')

  fireEvent.click(getByTestId('rightArrow'))
  expect(leftArrow).not.toHaveClass('hidden')
  expect(rightArrow).toHaveClass('hidden')
})
