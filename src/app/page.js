"use client";

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { MDBCol } from 'mdb-react-ui-kit';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaCaretDown } from 'react-icons/fa';
import styles from '../../styles/Pages.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/global.css"
import Footer from './Footer'; // Ensure the correct path

export default function Pages() {
  const [counties, setCounties] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    async function fetchCounties() {
      const res = await fetch('/api/counties');
      if (res.ok) {
        const data = await res.json();
        setCounties(data.counties);
      } else {
        console.error('Failed to fetch counties');
      }
    }
    fetchCounties();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const carouselItems = [
    { image: 'http://localhost:3002/image/pic1.jpeg', title: 'Picture 1' },
  
    { image: 'http://localhost:3002/image/pic3.jpeg', title: 'Picture 3' }
  ];

  const cardData = [
    {
      header: "Floor Proceedings",
      sections: [
        {
          header: "Friday, Jun 28, 2024",
          items: [
            { text: "12:00 p.m.: Convene for a pro forma session." },
            { text: "Floor Webcast", url: "#" },
            { text: "Senate Calendar (latest issue)", url: "#" },
            { text: "Executive Calendar (latest issue, PDF)", url: "#" },
            { text: "Tentative Floor Schedule", url: "#" }
          ]
        }
      ]
    },
    {
      header: "Previous Meeting",
      sections: [
        {
          header: "Tuesday, Jun 25, 2024",
          items: [
            { text: "The Senate convened at 11:30 a.m. for a pro forma session." },
            { text: "Floor Activity", url: "#" },
            { text: "Daily Digest (latest issue)", url: "#" },
            { text: "Congressional Record (latest issue, PDF)", url: "#" },
            { text: "Senate Floor Proceedings, 2014 to Present", url: "#" }
          ]
        }
      ]
    },
    {
      header: "Scheduled Hearings",
      sections: [
        {
          header: "Today, Jun 26, 2024",
          items: [
            { text: "No committee hearings scheduled." }
          ]
        },
        {
          header: "Tuesday, Jul 09, 2024",
          items: [
            { text: "Environment and Public Works 10:00 AM — SD-406", url: "#" }
          ]
        },
        {
          header: "Wednesday, Jul 10, 2024",
          items: [
            { text: "Environment and Public Works 10:00 AM — SD-406", url: "#" },
            { text: "More", url: "#" }
          ]
        }
      ]
    }
  ];

  const imageCardData = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Robert_Smalls_-_Brady-Handy.jpg/440px-Robert_Smalls_-_Brady-Handy.jpg',
      title: 'Research Tools',
      items: [
        { text: 'Research Tools', url: '#' },
        { text: 'Commonly Searched for Legislation', url: '#' }
      ]
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Senate_in_2010.jpg/440px-Senate_in_2010.jpg',
      title: 'Recent Senate Roll Call Votes',
      items: [
        { text: 'Jun 20 | 202 (43-27) | Agreed to | PN1461', url: '#' },
        { text: 'Jun 20 | 201 (45-26) | Confirmed | PN1343', url: '#' },
        { text: 'Jun 18 | 200 (88-2) | Agreed to | S. 870', url: '#' },
        { text: 'Detailed Session List', url: '#' }
      ]
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rotunda_Painting.jpg/440px-Rotunda_Painting.jpg',
      title: 'Public Disclosure',
      items: [
        { text: 'Financial Disclosure', url: '#' },
        { text: 'Gift Rule/Travel', url: '#' },
        { text: 'Lobby Disclosure Act', url: '#' }
      ]
    }
  ];

  const newImageCardData = [
    {
      headerImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sunflower.jpg',
      bodyText: 'Features',
      footerItems: [
        { text: 'Women of the Senate', url: '#' },
        { text: 'Senate Stories Blog', url: '#' },
      ],
    },
    {
      headerImage: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Cherry_blossoms_in_Paris.jpg',
      bodyText: 'Visiting',
      footerItems: [
        { text: 'Plan Your Visit', url: '#' },
        { text: 'Capitol Visitors\' Center', url: '#' },
        { text: 'Capitol Camera', url: '#' },
      ],
    },
    {
      headerImage: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
      bodyText: 'Jobs',
      footerItems: [
        { text: 'Employment', url: '#' },
        { text: 'Procurement', url: '#' },
      ],
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.centralFlexContainer}>
        <Head>
          <title>Landing Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <div className={styles.rowSmall}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg"
              alt="Flag of Liberia"
              className={styles.flag}
            />
            <div className={styles.dropdownContainer}>
              <div className={styles.dropdown} onClick={toggleDropdown}>
                Find Your County <FaCaretDown />
              </div>
              {dropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  {counties.map((county, index) => (
                    <li key={index}>{county}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={styles.rowLarge}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Liberia.svg/800px-Coat_of_arms_of_Liberia.svg.png"
              alt="Seal of Liberia"
              className={styles.seal}
            />
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchField}
            />
          </div>
          <div className={styles.rowThird}>
            <span>Third Row Content</span>
          </div>
        </header>

        <main className={styles.main}>
          <div style={{ width: "60%" }}>
            <Slider {...settings}>
              {carouselItems.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt={item.title} style={{ width: '90%', height: '80%' }} />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.cardContainer}>
            {cardData.map((card, cardIndex) => (
              <Card key={cardIndex} className={styles.card}>
                <CardContent>
                  <Typography variant="h5" component="div" className={styles.cardHeader}>
                    {card.header}
                  </Typography>
                  {card.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={styles.cardSection}>
                      <Typography variant="h6" component="div" className={styles.cardSectionHeader}>
                        {section.header}
                      </Typography>
                      <ul>
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} style={item.bold ? { fontWeight: 'bold' } : {}}>
                            {item.url ? <a href={item.url}>{item.text}</a> : item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className={styles.imageCardContainer}>
            {imageCardData.map((imageCard, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={imageCard.image} alt={imageCard.title} />
                <h3>{imageCard.title}</h3>
                <ul>
                  {imageCard.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.url}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.cardContainer}>
            {newImageCardData.map((card, index) => (
              <Card key={index} className={styles.card}>
                <div
                  className={styles.cardHeader}
                  style={{ backgroundImage: `url(${card.headerImage})` }}
                ></div>
                <div className={styles.cardBody}>
                  <Typography variant="body1">
                    {card.bodyText}
                  </Typography>
                </div>
                <div className={styles.cardFooter}>
                  <ul>
                    {card.footerItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href={item.url}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </main>
        <div>kkkkkkkkkkkkkkkkkkkkk</div>
        <div>kkkkkkkkkkkkkkkkkkkkk</div>
        <Footer /> {/* Add Footer here */}
      </div>
    </div>
  );
}
