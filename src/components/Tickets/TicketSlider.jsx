import React, { useRef, useEffect } from "react";
import "./ticketSlider.css";
import { FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TicketSlider(){

const sliderRef = useRef(null)
const navigate = useNavigate()

const slide = (direction)=>{
sliderRef.current.scrollBy({
left: direction * 200,
behavior: "smooth"
})
}

const updateCenterTicket = ()=>{

const slider = sliderRef.current
const sliderRect = slider.getBoundingClientRect()
const sliderCenter = sliderRect.left + sliderRect.width / 2

let closest = null
let closestDistance = Infinity

slider.querySelectorAll(".ticket").forEach(ticket=>{

const rect = ticket.getBoundingClientRect()
const ticketCenter = rect.left + rect.width / 2
const distance = Math.abs(sliderCenter - ticketCenter)

if(distance < closestDistance){
closestDistance = distance
closest = ticket
}

})

slider.querySelectorAll(".ticket").forEach(t => t.classList.remove("active"))

if(closest) closest.classList.add("active")

}

useEffect(()=>{

const slider = sliderRef.current

slider.addEventListener("scroll", updateCenterTicket)
updateCenterTicket()

return ()=>{
slider.removeEventListener("scroll", updateCenterTicket)
}

},[])

return(

<div className="ticket-container">

<button className="arrow left" onClick={()=>slide(-1)}>❮</button>

<div className="ticket-slider" ref={sliderRef}>

<div className="ticket sunday">
<div className="ticket-title">KARUNYA PLUS</div>
<div className="ticket-day">Sunday</div>
<div className="ticket-date">20/03/2026</div>
<div className="ticket-id">75***662M4</div>
</div>

<div className="ticket monday">
<div className="ticket-title">SUVARNA KERALAM</div>
<div className="ticket-day">Monday</div>
<div className="ticket-date">21/03/2026</div>
<div className="ticket-id">78J***62M4</div>
</div>

<div className="ticket tuesday">
<div className="ticket-title">KARUNYA</div>
<div className="ticket-day">Tuesday</div>
<div className="ticket-date">22/03/2026</div>
<div className="ticket-id">95J***2M4</div>
</div>

<div className="ticket wednesday">
<div className="ticket-title">SAMRUDDHI</div>
<div className="ticket-day">Wednesday</div>
<div className="ticket-date">23/03/2026</div>
<div className="ticket-id">85J***2M4</div>
</div>

<div className="ticket thursday">
<div className="ticket-title">BHAGYATHARA</div>
<div className="ticket-day">Thursday</div>
<div className="ticket-date">24/03/2026</div>
<div className="ticket-id">35Z***2M4</div>
</div>

<div className="ticket friday">
<div className="ticket-title">STHREE SAKTHI</div>
<div className="ticket-day">Friday</div>
<div className="ticket-date">25/03/2026</div>
<div className="ticket-id">25***62O4</div>
</div>

<div className="ticket saturday">
<div className="ticket-title">DHANALEKSHMI</div>
<div className="ticket-day">Saturday</div>
<div className="ticket-date">26/03/2026</div>
<div className="ticket-id">7GJ***2M4</div>
</div>

<div 
className="ticket history"
onClick={()=>navigate("/my-tickets")}
style={{cursor:"pointer"}}
>
<FaHistory className="history-icon" />
<div className="ticket-title">View History</div>
</div>

</div>

<button className="arrow right" onClick={()=>slide(1)}>❯</button>

</div>

)

}