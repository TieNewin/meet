import Event from "../components/Event";
import { render } from "@testing-library/react";
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<Event />);
  });

  test('renders event title', async () => {
    const allEvents = await getEvents();

    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event start time', async () => {
    const allEvents = await getEvents();

    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('renders event location', async () => {
    const allEvents = await getEvents();

    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test('by default, event\'s details section should be hidden', () => {

  });

  test('shows the details section when the user clicks on the \'show details\' button', () => {

  });

  test('hides the details section when the user clicks on the \'hide details\' button', () => {

  });
});