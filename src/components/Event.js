import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button onClick={() => {setShowDetails(!showDetails)}}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Details</h3>
          <p>Description: {event.description}</p>
          <p>Status: {event.status}</p>
        </div>
      ) : null}
    </li>
  );
}

export default Event;