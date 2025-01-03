import React from "react"

export default function Footer(){

    return (
        <footer className="bg-dark text-white py-4 mt-5" >
            <div className="container text-center">
                <div  className="footer-icons mb-3">
                    {/* Email Icon */}
                  <a href="mailto:kokospicy23@gmail.com" className="text-white mx-3" title="Email">
                    <img
                     src="https://imgs.search.brave.com/FINBnnb4L-rMuWBkQgurn5PbR3Wneg0hYeCHWDYx59c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzgxLzAwLzM0/LzM2MF9GXzE4MTAw/MzQ5MF9DeFc0ZlEw/SDNWeXBJSXNQa0ZH/cE1EdmlPOHlzV2pP/Wi5qcGc"
                     alt="Email"
                    style={{ width: "30px" }}
                  />
                 </a>
                  {/* Twitter Icon */}
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3" title="Twitter">
                     <img
                      src="https://imgs.search.brave.com/1J4MKqARDDWNTxD0kn4y2ePJojU65vRm5e1DBnvvmNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS94LXNvY2lh/bC1tZWRpYS1yb3Vu/ZC1pY29uLnN2Zw"
                      alt="Twitter"
                      style={{ width: "30px" }}
                />
                </a>

                 {/* Instagram Icon */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3" title="Instagram">
                   <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                    alt="Instagram"
                    style={{ width: "30px" }}
                />
                
               </a>

                {/* tiktok Icon */}
                <a href="https://www.tiktok.com/en" target="_blank" rel="noopener noreferrer" className="text-white mx-3" title="Instagram">
                   <img
                    src="https://imgs.search.brave.com/2kVpgwihLaDyHG8ybtsFjP0Meax8caz3MoKxT_lAE6w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzYy/LzM2MF9GXzUzMjIw/NjI2NV9KSGUzYWFs/dms5Wk5MZ1JOQXRP/cVFucDBUdGVEV2ty/cS5qcGc"
                    alt="tiktok"
                    style={{ width: "30px" }}
                />
                
               </a>

                <span className="d-block mt-3">
                &copy; 2024 JOKÉNE. All Rights Reserved.
         
                </span>

                </div>

            </div>

        </footer>
    )
}