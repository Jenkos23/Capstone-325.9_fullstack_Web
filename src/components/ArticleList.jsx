import React from "react";
import Article from "./article";
import DateTimeDisplay from "./DatetimeDisplay";


export default function ArticleList(){
    //Data Articles
    const articles = [
        {
           
            title: 'On the Street in Brooklyn: A Unique Journey Through Culture and Charm',
            images: [
              {
                src: 'https://images.pexels.com/photos/28051509/pexels-photo-28051509/free-photo-of-woman-wearing-colorful-clothes-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                alt: 'Street in Brooklyn'
              },
              {
                src: 'https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                alt: 'Street in Brooklyn'
              },
              {
                src: 'https://images.pexels.com/photos/28082020/pexels-photo-28082020/free-photo-of-man-standing-in-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Street in Brooklyn'
              },
              {
                src: 'https://images.pexels.com/photos/19061051/pexels-photo-19061051/free-photo-of-cinematic-look-crazy-girl-got-heart-broken.jpeg?auto=compress&cs=tinysrgb&w=600',
                alt: 'Street in Brooklyn'
              }
            ],
            content: `Walking through the streets of Brooklyn is an experience like no other, where vibrant culture meets historic charm. Each block tells a story, crafted over decades, if not centuries, and invites you to delve into its rich tapestry. As you stroll, the iconic brownstone buildings come into view, their stoops often adorned with beautiful wrought-iron railings that showcase intricate designs. These architectural gems, with their warm hues and unique detailing, stand as a testament to Brooklyn's rich history and are a reminder of the families that have called them home throughout the years.

                As you navigate the streets, you'll be greeted by lively murals splashed across the walls, each one a vivid expression of the creativity and diversity that define this borough. These murals range from thought-provoking pieces addressing social issues to colorful abstractions that celebrate community spirit, making every block feel like an outdoor gallery. The art in Brooklyn isn’t just confined to galleries; it’s alive and breathing, transforming streets into canvases where the stories of the community are told through color and form.
                
                The aroma of artisanal coffee wafts through the air, mingling beautifully with the scent of fresh bagels emanating from local cafés. These establishments invite both locals and visitors to take a moment, pause, and savor the flavors that Brooklyn has to offer. Imagine indulging in a perfectly brewed cup of coffee while biting into a warm, chewy bagel topped with a spread of cream cheese or a variety of delicious toppings. It's a simple pleasure that encapsulates Brooklyn's culinary scene, rich with influences from around the world.
                
                As you continue your exploration, quaint shops beckon with unique wares, each store reflecting the diverse community that calls Brooklyn home. From vintage boutiques selling one-of-a-kind clothing to independent bookstores housing hidden literary gems, every storefront is a treasure trove waiting to be discovered. Bustling markets come alive with the sounds and sights of vendors selling fresh produce, handmade crafts, and tantalizing street food, creating an atmosphere of vibrancy and energy.
                
                Brooklyn’s streets are alive with the laughter of children playing in lush parks, where families gather for picnics and friends meet for leisurely strolls. The parks here are not just green spaces; they are hubs of community life, often hosting events that celebrate the borough’s culture, from outdoor movie nights to local festivals. The sounds of children laughing, dogs barking, and friends chatting fill the air, creating a warm and inviting ambiance.
                
                Additionally, the streets are often accompanied by the sounds of live music emerging from nearby venues. Whether it’s a jazz band playing on a street corner or a singer-songwriter performing in an intimate bar, music is an integral part of Brooklyn's identity. The rhythms of the city pulse through every avenue, offering a soundtrack that enhances the experience of exploration.
                
                Whether it’s the art, the food, the shops, or the music, Brooklyn’s streets pulse with life, offering something new to discover around every corner. Each journey through this borough unfolds a story waiting to be told, inviting you to delve deeper into its vibrant culture and historic charm. So take your time, wander aimlessly, and allow Brooklyn to reveal its unique character to you, one step at a time.`
          },
          {
            title: 'Vintage in African Street',
            images: [
                {
                    src: 'https://imgs.search.brave.com/rpSxJJ4TlaYf_pdO3gkPaf2KsocUYYP2XDripaduIp4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIwLzZk/Lzk5LzIwNmQ5OWQ1/NmIxYmI0ODMzYWNh/ZjU5MDNhNmI3ZjU3/LmpwZw',
                    alt: 'Street in Brooklyn'
                  },
                  {
                    src: 'https://imgs.search.brave.com/F2421tsEdRUCSn9C-4ECb6-Kvau7XBOX_nMI3rOcGuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QwLzY3/LzQ5L2QwNjc0OTRi/NTRkMTI2NTZhNzAw/N2QwNzc1ZjI2Mjk1/LmpwZw',
                    alt: 'Street in Brooklyn'
                  },
                  {
                    src: 'https://images.pexels.com/photos/28082020/pexels-photo-28082020/free-photo-of-man-standing-in-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=600',
                    alt: 'Street in Brooklyn'
                  },
                  {
                    src: 'https://images.pexels.com/photos/19061051/pexels-photo-19061051/free-photo-of-cinematic-look-crazy-girl-got-heart-broken.jpeg?auto=compress&cs=tinysrgb&w=600',
                    alt: 'Street in Brooklyn'
                  }
            ],
            content: `African vintage fashion is experiencing a remarkable resurgence, captivating audiences across the globe and weaving a vibrant narrative of creativity, culture, and history. With each garment, Africa's rich diversity shines through, showcasing an eclectic mix of colors, patterns, and textures that tell deeply-rooted stories of heritage, tradition, and innovation. These unique pieces are often handcrafted by skilled artisans, who bring to life designs that reflect the individual cultural identities of the continent's many regions, from the bold, geometric prints of West Africa to the intricate beadwork of Southern Africa.

                     What makes African vintage fashion particularly striking is the way it blends traditional elements with modern sensibilities, creating a look that is both timeless and forward-thinking. Whether it's a brightly colored Kente cloth from Nigeria and Ghana or an intricately embroidered garment from Ethiopia, each piece is a testament to the artistry and craftsmanship of its maker. The boldness of the prints and the intricacy of the designs are not simply aesthetic; they represent centuries-old traditions that have been passed down through generations, carrying with them stories of ancestors, communities, and cultural symbols.

                    This fusion of the old and the new not only celebrates Africa’s cultural heritage but also places it at the forefront of global fashion trends. Designers across the continent are creatively reinterpreting traditional garments, incorporating contemporary cuts, fabrics, and styles, thus pushing the boundaries of fashion and giving African-inspired clothing an entirely fresh, modern appeal. African vintage fashion is no longer just a celebration of the past; it is a dynamic expression of African identity that speaks to the present and future.

                    As African fashion continues to rise in prominence, it offers more than just stylish attire—it brings with it an important cultural dialogue. The garments, many of which are one-of-a-kind or made in small batches, serve as a medium through which the wearer can connect to something much larger than themselves. Each thread tells a story, and each design makes a statement. These pieces challenge the conventional fashion norms, emphasizing the value of craftsmanship, sustainability, and the importance of preserving cultural legacies in the face of modernity.

                    Ultimately, African vintage fashion is reshaping the fashion industry on a global scale, offering a powerful message about the beauty and strength of African heritage. It invites fashion enthusiasts from all corners of the world to celebrate not only the beauty of the garments but the cultural narratives they represent, making it clear that African fashion is not just a trend—it’s a movement that transcends borders and influences global fashion, inspiring people to embrace their roots, their stories, and their own unique styles.`
          }
    ];

    return(
        <section>
            <DateTimeDisplay/>
            {articles.map((article, index)=>(
                <Article
                key ={index}
                title={article.title}
                images={article.images}
                content={article.content}
                />

            ))}
        </section>
    )
}