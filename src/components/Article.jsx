import React from "react"
import '../styles/article.css'

export default function Article({title, images, content}){
    return(
        <article className="article">
            <h2  className="agu-display">{title}</h2>
            <p className="styled-paragraph">{content}</p>

          <div className="image-container">
            {images.map((image, index) =>(
                <img key={index}
                src= {image.src}
                alt={image.alt}/>
            ))}

           </div>

            
        </article>
    )
}