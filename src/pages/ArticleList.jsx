import React from "react";
import Article from "../components/article";



export default function ArticleList() {
  // Data Articles
  const articles = [
    {
      title: 'On the Street in Brooklyn: Culture and Charm',
      images: [
        {
          src: 'https://images.pexels.com/photos/28051509/pexels-photo-28051509/free-photo-of-woman-wearing-colorful-clothes-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Street in Brooklyn - Woman in Colorful Clothes'
        },
        {
          src: 'https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'Street in Brooklyn - Urban View'
        },
        {
          src: 'https://images.pexels.com/photos/7148907/pexels-photo-7148907.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Street in Brooklyn - Building'
        },
        {
          src: 'https://images.pexels.com/photos/19061051/pexels-photo-19061051/free-photo-of-cinematic-look-crazy-girl-got-heart-broken.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Street in Brooklyn - Emotional Woman'
        }
      ],
      content:  `Walking through the streets of Brooklyn is an experience like no other, where vibrant culture meets historic charm. Each block tells a story, crafted over decades, if not centuries, and invites you to delve into its rich tapestry. As you stroll, the iconic brownstone buildings come into view, their stoops often adorned with beautiful wrought-iron railings that showcase intricate designs. These architectural gems, with their warm hues and unique detailing, stand as a testament to Brooklyn's rich history and are a reminder of the families that have called them home throughout the years.

      As you navigate the streets, you'll be greeted by lively murals splashed across the walls, each one a vivid expression of the creativity and diversity that define this borough. These murals range from thought-provoking pieces addressing social issues to colorful abstractions that celebrate community spirit, making every block feel like an outdoor gallery. The art in Brooklyn isn’t just confined to galleries; it’s alive and breathing, transforming streets into canvases where the stories of the community are told through color and form.
      
      The aroma of artisanal coffee wafts through the air, mingling beautifully with the scent of fresh bagels emanating from local cafés. These establishments invite both locals and visitors to take a moment, pause, and savor the flavors that Brooklyn has to offer. Imagine indulging in a perfectly brewed cup of coffee while biting into a warm, chewy bagel topped with a spread of cream cheese or a variety of delicious toppings. It's a simple pleasure that encapsulates Brooklyn's culinary scene, rich with influences from around the world.
      
      As you continue your exploration, quaint shops beckon with unique wares, each store reflecting the diverse community that calls Brooklyn home. From vintage record stores that harken back to the borough's music legacy to modern boutiques featuring handmade jewelry and artisanal crafts, there's something for everyone. The streets of Brooklyn invite you to immerse yourself in its culture, savor its flavors, and explore its hidden gems. Brooklyn is not just a place, but an experience, and it continues to draw people from all over the world, eager to partake in its dynamic and ever-evolving narrative.`
    },
    {
      title: 'Vintage in African Street',
      images: [
        {
          src: 'https://images.pexels.com/photos/4737514/pexels-photo-4737514.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'African Vintage Fashion - Street View'
        },
        {
          src: 'https://imgs.search.brave.com/F2421tsEdRUCSn9C-4ECb6-Kvau7XBOX_nMI3rOcGuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QwLzY3/LzQ5L2QwNjc0OTRi/NTRkMTI2NTZhNzAw/N2QwNzc1ZjI2Mjk1/LmpwZw',
          alt: 'African Vintage Fashion - Textile Patterns'
        },
        {
          src: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'African Vintage Fashion - Dress Display'
        },
        {
          src: 'https://images.pexels.com/photos/29977323/pexels-photo-29977323/free-photo-of-black-and-white-beach-portrait-of-woman-relaxing.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'African Vintage Fashion - Woman Relaxing'
        }
      ],
      content: `African vintage fashion is experiencing a remarkable resurgence, captivating audiences across the globe and weaving a vibrant narrative of creativity, culture, and history. With each garment, Africa's rich diversity shines through, showcasing an eclectic mix of colors, patterns, and textures that tell deeply-rooted stories of heritage, tradition, and innovation. These unique pieces are often handcrafted by skilled artisans, who bring to life designs that reflect the individual cultural identities of the continent's many regions, from the bold, geometric prints of West Africa to the intricate beadwork of Southern Africa.

                     What makes African vintage fashion particularly striking is the way it blends traditional elements with modern sensibilities, creating a look that is both timeless and forward-thinking. Whether it's a brightly colored Kente cloth from Nigeria and Ghana or an intricately embroidered garment from Ethiopia, each piece is a testament to the artistry and craftsmanship of its maker. The boldness of the prints and the intricacy of the designs are not simply aesthetic; they represent centuries-old traditions that have been passed down through generations, carrying with them stories of ancestors, communities, and cultural symbols.

                     As the world turns towards more sustainable fashion choices, African vintage fashion offers an eco-conscious alternative to fast fashion. These garments, often sourced from local markets, thrift stores, and collectors, are cherished not only for their visual appeal but also for their ability to transcend time and trends. Whether worn as part of everyday attire or showcased at fashion events, African vintage clothing has an unmistakable power to tell a story – a story that connects people to Africa's past, present, and future.

                     The vibrant hues, intricate patterns, and cultural significance embedded in each piece have made African vintage fashion a powerful symbol of pride and identity for many. It is not merely a style choice but a statement – a celebration of African heritage and the innovative spirit that continues to shape the continent's future. By wearing these garments, individuals become a part of the ongoing story of African fashion, paying homage to the creativity and legacy of the continent while helping to preserve its rich cultural traditions for generations to come.`
    }
  ];

  return (
    <section>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          content={article.content}
          images={article.images}
        />
      ))}
    </section>
  );
}
