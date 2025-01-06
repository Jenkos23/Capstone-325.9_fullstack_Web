import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimeDisplay from "./DatetimeDisplay";

export default function Users() {
  const [userdata, setUserData] = useState(null); // Store fetched user data
  const [error, setError] = useState(false); // Handle any errors

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://ezieke-jennifer-backend-capstone.onrender.com/users`);
        setUserData(response.data); // Update state with fetched data
      } catch (error) {
        setError('Error fetching user');
      }
    };

    fetchUser(); // Call fetchUser on component mount
  }, []); // Empty array to run the effect only once on mount

  return (
    <>
    <DateTimeDisplay/>
      {error && <p>{error}</p>} {/* Display error message if there was an error */}
      
      {userdata ? (
        <div>
          <h2 className="agu-display" style={{textAlign: 'center'}}>User Details</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading user data...</p> // Display loading text while fetching
      )}
    </>
  );
}
