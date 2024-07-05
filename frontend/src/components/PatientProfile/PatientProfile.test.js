import {render, screen} from "@testing-library/react";
import PatientProfile from "./PatientProfile";

test('renders Patient profile screen', () => {
  render(<PatientProfile />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
