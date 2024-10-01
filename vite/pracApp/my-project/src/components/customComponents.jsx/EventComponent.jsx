import React from "react";
import useFetch from "./customHooks"; // Assuming this custom hook is fetching data

const EventComponent = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/api/events");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Handling case when data is empty
  if (!data || data.length === 0) return <div>No events found.</div>;

  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default EventComponent;
