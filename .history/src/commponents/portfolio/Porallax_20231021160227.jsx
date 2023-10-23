import React from 'react'
import "./porallax.scss"


const items =[
    {
        id:1,
        title:"React Commerce",
        img:"",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",
    
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",
    
    },{
        id:3,
        title:"Vanilla Js App",
        img:"",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",
    
    },{
        id:4,
        title:"Music App",
        img:"",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos voluptas eos nam aperiam nisi magni nihil, placeat adipisci corrupti rerum exercitationem recusandae porro deleniti aliquam dicta molestiae. Molestias, voluptatem.",
    
    },
]

    const Single = ({item}) => {
        return (
            <section>
                {item.title}

            </section>
        )

    }

export const Porallax = () => {
  return (
    <div className="porallax">

        {items.map((item) => (
            <Single item={item} key={item.id}></Single>
        ))}
    </div>
  )
}
