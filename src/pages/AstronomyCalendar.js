import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../stylesheets/AstronomyCalendar.css';
import Header from "../components/Header";
//import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AstronomyCalendar() {
  
  const [data, setData] = useState([]);

  useEffect(
    ()=>{
      const fetchData = async()=>{
        try{
          const res  = await axios.get("http://localhost:8800/calender");
          setData(res.data);
        }
        catch(err){
          console.log(err)
        }
      };
      fetchData();
    }
  )

  //console.log(data);



  return (
    <div>
      <Header />
      <NavBar />
      <div className="calendar-container">
        <header>
          <h1>Astronomical Event Calendar 2024</h1>
          <p className="timezone">Coordinated Universal Time (UTC)</p>
        </header>

        {data.map((event, index) => (
          <section className="event" key={index}>
            <div className="icon">{event.icon}</div>
            <div className="event-details">
              <h2>{event.cur_date} - {event.title}</h2>
              <p>{event.full_desc}</p>
              <div class ="timings">
                <div id="sun">Sunrise: {event.sunrise} &nbsp;&nbsp;&nbsp;&nbsp; Sunset: {event.sunset}</div>
                <div id="moon">Moonrise: {event.moonrise} &nbsp;&nbsp;&nbsp;Moonset: {event.moonset}</div>
              </div>
              {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer">More info</a>}
            </div>
          </section>
        ))}

        
      </div>
    </div>
  );
}

export default AstronomyCalendar;
