import axios from "axios";
import { useState } from "react";
import DateTimeDisplay from "../components/DatetimeDisplay";


export default function PhotoJokéne(){
    const [id, setId] = useState(''); // To track the designer ID input
    const [photoData, setPhotoData] = useState(null);  // To store the designer photo and bio
    const [loading, setLoading] =useState(true); // To track loading state
    const [error, setError] = useState('')// To store error messages
    const [showBio, setShowBio] = useState(false); // To control whether the bio is shown

     
    // Function to fetch the designer data
    const fetchPhoto = async ()=> {
        if(!id) return; //prevent fetching if the photo Id is empty


        //Reset previous data before fetching new photo data
        setPhotoData(null); //clear old data
        setLoading(true);
        setError(""); // Clear any previous error

        try {
            const response = await axios.get(`https://ezieke-jennifer-backend-capstone.onrender.com/fashion/designer/${id}`);
            setPhotoData(response.data);// Set the fetched photo data

        } catch (error) {
            setError("Designer photo is unavailable")// Set error if the fetch fails
            
        }finally {
            setLoading(false);
        }
    };

    return(
        <>
        <DateTimeDisplay/>
        <div className="container mt-5">
             <h2 class="text-center">Designer Photo and Bio</h2><br/>
             <p className="styled-para">Welcome to our Designer Bio page, where you can discover the inspiring stories behind some of the most innovative and influential designers in the fashion industry. </p>
                <p>This page offers an in-depth look at each designer's creative journey, their unique design philosophies, and how they’ve shaped the fashion world. By exploring their bios and collections, you’ll gain a deeper appreciation for the artistry, craftsmanship, and vision that drive their work. Whether you're a fashion enthusiast or simply curious about the minds behind the trends, this is your gateway
                     to understanding the individuals who are defining the future of fashion.</p><br/>

             {/* Input for Designer ID */}
           <div className="mb-3">
             <label htmlFor="designerId" className="form-label"  class="fw-medium">Enter Designer ID</label>
             <input
                type="text"
                id="designerId"
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
                />
  
            </div>


            {/* Button to fetch the photo and bio */}
            <button onClick={fetchPhoto} className="btn btn-primary mb-4">
                Designer Info
            </button>

            {/* Display Loading, Error, and Data */}
            {loading && <div>Loading...</div>}
            {error && <div className="text-danger">{error}</div>}

            {photoData && !loading && !error && (
                <div className="card" style={{ width: "18rem" }}> 
                   <img src={photoData.imageUrl} class="card-img-top" alt= {photoData.designer}/>
                   <div class="card-body">
                      <h5 class="card-title">{photoData.designer}</h5>
                {/* Toggle the bio visibility based on the showBio state */}
                     { showBio && <p class="card-text">{photoData.bio}</p>}
                      <button onClick = {()=> setShowBio(prevState => !prevState)}  class="btn btn-primary">
                        {showBio? "Hide Bio" : "Designer Bio"}</button> 
                   </div>

                </div>


            )} 


            

        </div>
        </>
    )
}