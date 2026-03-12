import React, { useRef } from "react";
import "./winnerSlider.css";

export default function WinnerSlider() {

const sliderRef = useRef(null);

const scrollLeft = () => {
  sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
};
const winners = [
{
name:"Akhil",
place:"Neyyattinkara",
amount:"₹50,000",
img:"https://randomuser.me/api/portraits/men/32.jpg"
},
{
name:"Anju",
place:"Karunagappally",
amount:"₹20,000",
img:"https://randomuser.me/api/portraits/women/45.jpg"
},
{
name:"Sreejith",
place:"Adoor",
amount:"₹1,00,000",
img:"https://randomuser.me/api/portraits/men/75.jpg"
},
{
name:"Reshma",
place:"Cherthala",
amount:"₹5,000",
img:"https://randomuser.me/api/portraits/women/66.jpg"
},
{
name:"Anitha",
place:"Pala",
amount:"₹35,000",
img:"https://randomuser.me/api/portraits/women/60.jpg"
},
{
name:"Ramesh",
place:"Thodupuzha",
amount:"₹75,000",
img:"https://randomuser.me/api/portraits/men/44.jpg"
},
{
name:"Ajith",
place:"Aluva",
amount:"₹15,000",
img:"https://randomuser.me/api/portraits/men/55.jpg"
},
{
name:"Divya",
place:"Irinjalakuda",
amount:"₹28,000",
img:"https://randomuser.me/api/portraits/women/22.jpg"
},
{
name:"Kiran",
place:"Ottapalam",
amount:"₹12,000",
img:"https://randomuser.me/api/portraits/men/81.jpg"
},
{
name:"Athira",
place:"Manjeri",
amount:"₹42,000",
img:"https://randomuser.me/api/portraits/women/39.jpg"
},
{
name:"Arun",
place:"Koyilandy",
amount:"₹18,000",
img:"https://randomuser.me/api/portraits/men/28.jpg"
},
{
name:"Sneha",
place:"Kalpetta",
amount:"₹60,000",
img:"https://randomuser.me/api/portraits/women/47.jpg"
},
{
name:"Vishnu",
place:"Taliparamba",
amount:"₹90,000",
img:"https://randomuser.me/api/portraits/men/19.jpg"
},
{
name:"Neethu",
place:"Kanhangad",
amount:"₹22,000",
img:"https://randomuser.me/api/portraits/women/52.jpg"
},
{
name:"Rahul",
place:"Perumbavoor",
amount:"₹55,000",
img:"https://randomuser.me/api/portraits/men/63.jpg"
},
{
name:"Pooja",
place:"Chalakudy",
amount:"₹17,000",
img:"https://randomuser.me/api/portraits/women/33.jpg"
}
];

return (

<div className="slider-wrapper">
<button className="arrow arrow-left" onClick={scrollLeft}>‹</button>
<button className="arrow arrow-right" onClick={scrollRight}>›</button>

<div className="slider" ref={sliderRef}>

{winners.map((winner,index)=>(
<div className="winner-card" key={index}>

<img src={winner.img} />

<div className="winner-name">{winner.name}</div>
<div className="winner-place">{winner.place}</div>
<div className="winner-amount">{winner.amount}</div>

</div>
))}

</div>
</div>
);
}