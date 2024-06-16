import React, { useState, useEffect } from 'react';

const MenuItem = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  // State to store any error that occurs during data fetching
  const [error, setError] = useState(null);

  // Function to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the provided link
        const response = await fetch("https://order.toasttab.com/online/namastedenton");
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Extract JSON data from the response
        const jsonData = await response.json();
        // Update the state with the fetched data
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Update the state with the error
        setError(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Optionally perform cleanup tasks
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Render data or error message
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (data) {
    return <div>{JSON.stringify(data)}</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default MenuItem;
