import ArticleList from "./ArticleList"
import Footer from "../components/footer"


export default function FashionPage(){
  
  useEffect(() => {
    // Make sure the Bootstrap Carousel is initialized
    const carouselElement = document.getElementById('carouselExample');
    const carousel = new window.bootstrap.Carousel(carouselElement, {
      ride: 'carousel', // Automatically start the carousel
      interval: 3000,    // Set the interval time to 3 seconds
    });
    carousel.cycle();  // Start the carousel immediately
  }, []);



    return(
       <>
        <div id="carouselExample" className="carousel slide"  style={{ maxWidth: '500px', margin: 'auto' }} data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/29507238/pexels-photo-29507238/free-photo-of-vibrant-portrait-of-woman-in-traditional-african-headwrap.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/29831745/pexels-photo-29831745/free-photo-of-stylish-lifestyle-portrait-outdoors-in-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/9953166/pexels-photo-9953166.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://imgs.search.brave.com/Hh0b8zY_ujYOWzE3tTc6IvAAIJyv3ujfBeJFChFhmbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ucHIub3JnL2Fz/c2V0cy9pbWcvMjAy/Mi8wOC8xOS9tYmV1/ay1pZG91cnJvdS1j/b2xsZWN0aW9uLWlt/YW5lLWF5aXNzaS1w/YXJpcy1mcmFuY2Ut/YXV0dW1ud2ludGVy/LTIwMTkuLXBob3Rv/LWZhYnJpY2UtbWFs/YXJkLWNvdXJ0ZXN5/LW9mLWltYW5lLWF5/aXNzaV9jdXN0b20t/NzE1ZmQ2MGIwNWU2/NTg3NGNmMTRiYjI1/NGE0N2JiODkxZTAw/YTBlYS5qcGc_cz0x/MTAwJmM9NTAmZj1q/cGVn" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/28049936/pexels-photo-28049936/free-photo-of-dame-in-sultry-dress.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/24783996/pexels-photo-24783996/free-photo-of-woman-posing-in-wig.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
       
      </div>
       <ArticleList/>
       
       
       </>
    
    )
}