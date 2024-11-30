import React from 'react';
import '../stylesheets/AstronomyCalendar.css';
import Header from "../components/Header";
//import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AstronomyCalendar() {
  const events = [
    {
      icon: '🌠',
      cur_date: 'January 3',
      title: 'Quadrantids Meteor Shower',
      sunrise: '06:45 UTC',
      sunset: '18:30 UTC',
      moonrise: '20:00 UTC',
      moonset: '08:00 UTC',
      description: 'The Quadrantids is an above average shower, with up to 40 meteors per hour at its peak. It is thought to be produced by dust grains left behind by an extinct comet known as 2003 EH1, which was discovered in 2003. The shower runs annually from January 1-5...'
    },
    {
      icon: '🌑',
      cur_date: 'January 3',
      title: 'New Moon',
      sunrise: '06:45 UTC',
      sunset: '18:30 UTC',
      moonrise: '20:00 UTC',
      moonset: '08:00 UTC',
      description: 'The Moon will be located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 11:59 UTC...'
    },
    {
      icon: '\u00A0☿\u00A0\u00A0',
      cur_date: 'January 12',
      title: 'Mercury at Greatest Western Elongation',
      sunrise: '06:45 UTC',
      sunset: '18:30 UTC',
      moonrise: '20:00 UTC',
      moonset: '08:00 UTC',
      description: 'The planet Mercury reaches greatest western elongation of 23.5 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the morning sky...'
    },
    {
      icon: '🌕',
      cur_date: 'January 25',
      title: 'Full Moon',
      sunrise: '06:45 UTC',
      sunset: '18:30 UTC',
      moonrise: '20:00 UTC',
      moonset: '08:00 UTC',
      description: 'The Moon will be located on the opposite side of the Earth as the Sun and its face will be fully illuminated. This phase occurs at 17:55 UTC...'
    },
    {
      icon: '🌔',
      cur_date: 'March 25',
      title: 'Penumbral Lunar Eclipse',
      sunrise: '06:45 UTC',
      sunset: '18:30 UTC',
      moonrise: '20:00 UTC',
      moonset: '08:00 UTC',
      description: 'A penumbral lunar eclipse occurs when the Moon passes through the Earth\'s partial shadow, or penumbra. The entire eclipse will be visible throughout North America, Mexico, Central America, and northern South America.',
      link: 'https://eclipse.gsfc.nasa.gov/'
    }
  ];
  
  return (
    <div>
      <Header />
      <NavBar />
      <div className="calendar-container">
        <header>
          <h1>Astronomical Event Calendar 2024</h1>
          <p className="timezone">Coordinated Universal Time (UTC)</p>
        </header>

        {events.map((event, index) => (
          <section className="event" key={index}>
            <div className="icon">{event.icon}</div>
            <div className="event-details">
              <h2>{event.cur_date} - {event.title}</h2>
              <p>{event.description}</p>
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
