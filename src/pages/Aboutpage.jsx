import React from "react";
import '../App.css'
import DateTimeDisplay from "../components/DatetimeDisplay";

export default function AboutPage() {
  return (
    <>
    <DateTimeDisplay/>
    <div className="container mt-5">
      <h1> About JOKÉNE Fashion</h1><br/>

      {/* JOKÉNE Fashion Introduction */}
      <section className="mt-4">
        <h2 className="agu-display">Welcome to JOKÉNE Fashion</h2>
        <p className="styled-paragraph">
          JOKÉNE Fashion is a revolutionary fashion brand that merges the rich
          heritage of African fashion with the global influence of international
          designer wear. Our mission is to celebrate diversity and creativity in
          the world of fashion, bringing together the elegance of African culture
          and the innovation of international trends. At JOKÉNE Fashion, we aim
          to showcase the beauty of Africa’s textile artistry while embracing
          global fashion standards and cutting-edge designs.
        </p>
      </section>

      {/* African Fashion */}
      <section className="mt-4">
        <h2 className="agu-display">African Fashion: The Heartbeat of JOKÉNE</h2>
        <p>
          African fashion is at the core of our brand, representing a deep
          connection to tradition, culture, and vibrant expressions of style. From
          the intricate beadwork of West Africa to the bold prints of East and
          Southern Africa, JOKÉNE is dedicated to highlighting the diversity and
          richness of African fashion. We collaborate with local designers and
          artisans to bring you unique collections that honor the continent’s
          timeless traditions while adding a modern twist.
        </p>
      </section>

      {/* International Designers */}
      <section className="mt-4">
        <h2 className="agu-display">International Designers: Global Influence</h2>
        <p>
          In addition to our African-inspired collections, JOKÉNE Fashion also
          embraces the elegance and sophistication of international designer
          wear. We celebrate renowned fashion icons from around the world who
          push the boundaries of creativity, style, and luxury. By blending global
          influences with African heritage, we create unique pieces that appeal to
          fashion-forward individuals who seek both style and substance.
        </p>
      </section>

      {/* Notable Designers */}
      <section className="mt-4">
        <h2 className="agu-display">Our Featured Designers</h2>
        <div className="row">
          {/* Example of an African Designer */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://assets.vogue.com/photos/589131c9736d5f2410e3702f/4:3/w_1600,c_limit/00-holding2.jpg" 
                className="card-img-top"
                alt="African Designer"
              />
              <div className="card-body">
                <h5 className="card-title">Duro Olowu</h5>
                <p className="card-text">
                Duro Olowu is a Nigerian-born British fashion designer celebrated for his bold fusion of African prints and contemporary styles. Known for his vibrant color palettes and intricate patterns, his designs reflect a unique blend of cultural influences that have earned him international acclaim.
                </p>
              </div>
            </div>
          </div>

          {/* Example of an International Designer */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://imgs.search.brave.com/NKSbgSoqNTcdjs6U2eGlnKCrzrJQyvPWbUZ6Ck_nBdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODUx/NjY2OTQyL3Bob3Rv/L2JyaXRpc2gtZmFz/aGlvbi1kZXNpZ25l/ci12aXZpZW5uZS13/ZXN0d29vZC0yOHRo/LWFwcmlsLTE5ODMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWRfa1ZZNFBlMm52/Vndxd3NnWGFBNmcw/VjFKZEJuUFRZOXUt/WGgwOWpjd2s9" 
                className="card-img-top"
                alt="International Designer"
              />
              <div className="card-body">
                <h5 className="card-title">Vivienne Westwood</h5>
                <p className="card-text">
                  Vivienne Westwood is a British designer known for her punk
                  fashion revolution and contributions to the fashion world.
                  Her unique designs challenge traditional concepts, combining
                  avant-garde styles with British cultural influences.
                </p>
              </div>
            </div>
          </div>

          {/* Example of another International Designer */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://imgs.search.brave.com/Ajgd0Wp4KOA6a4FgtU8P0hfShDDFFcL98J5emwvXxoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MjExNDMxNi9waG90/by9sb3MtYW5nZWxl/cy1jYWxpZm9ybmlh/LWVuZ2xpc2gtZGVz/aWduZXItc3RlbGxh/LW1jY2FydG5leS1h/cnJpdmVzLWZvci10/aGUtc3RlbGxhLW1j/Y2FydG5leS14Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1u/emFleUtKaURfRXJG/aUhkRm5oU29lUGhm/bVBFdnZ0dUNCWUdl/RFlfLXF3PQ" 
                className="card-img-top"
                alt="Designer"
              />
              <div className="card-body">
                <h5 className="card-title">Stella McCartney</h5>
                <p className="card-text">
                  Known for her commitment to sustainability, Stella McCartney
                  creates innovative, eco-friendly designs that are both
                  fashionable and environmentally conscious. She’s an icon in
                  the global fashion industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Remarks */}
      <section className="mt-4">
        <h2 className="agu-display">Our Vision</h2>
        <p>
          At JOKÉNE Fashion, we believe that fashion is a powerful form of
          expression, and we are committed to promoting sustainable practices,
          celebrating cultural diversity, and supporting emerging designers. We
          envision a world where African fashion is celebrated globally, and
          international designers work hand-in-hand with local artisans to create
          timeless, eco-conscious collections that inspire change.
        </p>
      </section>
    </div>
    </>
  );
}
