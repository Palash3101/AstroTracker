import React from 'react';
import '../stylesheets/AstronomyCalendar.css';
function AstronomyCalendar() {
  const events = [
    {
      icon: '🌠',
      title: 'January 3, 4 - Quadrantids Meteor Shower',
      description: 'The Quadrantids is an above average shower, with up to 40 meteors per hour at its peak. It is thought to be produced by dust grains left behind by an extinct comet known as 2003 EH1, which was discovered in 2003. The shower runs annually from January 1-5...'
    },
    {
      icon: '🌑',
      title: 'January 11 - New Moon',
      description: 'The Moon will be located on the same side of the Earth as the Sun and will not be visible in the night sky. This phase occurs at 11:59 UTC...'
    },
    {
      icon: '☿',
      title: 'January 12 - Mercury at Greatest Western Elongation',
      description: 'The planet Mercury reaches greatest western elongation of 23.5 degrees from the Sun. This is the best time to view Mercury since it will be at its highest point above the horizon in the morning sky...'
    },
    {
      icon: '🌕',
      title: 'January 25 - Full Moon',
      description: 'The Moon will be located on the opposite side of the Earth as the Sun and its face will be fully illuminated. This phase occurs at 17:55 UTC...'
    },
    {
      icon: '🌔',
      title: 'March 25 - Penumbral Lunar Eclipse',
      description: 'A penumbral lunar eclipse occurs when the Moon passes through the Earth\'s partial shadow, or penumbra. The entire eclipse will be visible throughout North America, Mexico, Central America, and northern South America.',
      link: 'https://eclipse.gsfc.nasa.gov/'
    }
  ];
   
  return (
    <div className="calendar-container">
      <header>
        <h1>Astronomy Calendar 2024</h1>
        <p className="timezone">Coordinated Universal Time (UTC)</p>
      </header>

      {events.map((event, index) => (
        <section className="event" key={index}>
          <div className="icon">{event.icon}</div>
          <div className="event-details">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer">More info</a>}
          </div>
        </section>
      ))}
    </div>
  );
}

export default AstronomyCalendar;
