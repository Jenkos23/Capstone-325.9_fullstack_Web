import React from "react"

export default function Footer(){

    return (
        <footer className="bg-dark text-white py-4 mt-5" >
            <div className="container text-center">
                <div  className="footer-icons mb-3">
                    {/* Email Icon */}
                  <a href="mailto:kokospicy23@gmail.com" className="text-white mx-3" title="Email">
                    <img
                     src=""
                     alt="Email"
                    style={{ width: "30px" }}
                  />
                 </a>
                  {/* Twitter Icon */}
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3" title="Twitter">
                     <img
                      src=""
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

                <span className="d-block mt-3">
                &copy; 2024 JOKÉNE. All Rights Reserved.
         
                </span>

                </div>

            </div>

        </footer>
    )
}