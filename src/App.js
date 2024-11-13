import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WifiIcon from '@mui/icons-material/Wifi';
import GamesIcon from '@mui/icons-material/Games';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function App() {
  const [spacing, setSpacing] = React.useState(2);

  const itemData = [
    {
      img: '/images/assi ghat.jpg',
      title: 'Assi Ghat',
    },
    {
      img: '/images/banaras ghats.jpg',
      title: 'Banaras Ghat',
     
    },
    {
      img: '/images/daswamedh ghat.jpg',
      title: 'Dasaswamedh Ghat',
    },
    {
      img: '/images/durlabhDarshan kendra.jpg',
      title: 'Durlabh Darshan Kendra At Varanasi',
    },
    {
      img: '/images/ganga arti.jpg',
      title: 'Ganga Arti',
    },
    {
      img: '/images/ganga river.jpg',
      title: 'Ganga River',
    },
    {
      img: '/images/kashi Vishwanath temple.jpg',
      title: 'Shri Kashi Vishwanath Temple (Golden Temple)',
    },
    {
      img: '/images/manikarnika ghat.jpg',
      title: 'Manikarnika Ghat',
      
    },
    {
      img: '/images/new vishwanath temple.jpg',
      title: 'New Vishwanath Temple',
    },
    {
      img: '/images/ruchika art gallery.jpg',
      title: 'Ruchika Art Gallery',
    },
    {
      img: '/images/sankatmochan temple.jpg',
      title: 'Sankat Mochan Temple',
    },
    {
      img: '/images/sarnath.jpg',
      title: 'Sarnath',
    },
  ];

  
  return (
    <div className="App">
      <div id="headBlock">
        <div id="mainHeading">Kashi Kastle Homestay</div>
        <div id="subHeading1">-Varanasi, Uttar Pradesh-</div>
        <div id="subHeading">--Where comfort meets legacy--</div>
       
      </div>
      <div>
        <img id="VaranasiPic" src="/images/background.jpg" alt="Varanasi" />
      </div>
      <div id="content">
        <p id="aboutHeading">About</p>
        <p id="aboutText">
          Kashi Kastle is a homestay business located in Varanasi, offering
          three 2bhk houses with amenities such as fridge, sofa, bed, cupboard,
          dining table, AC, and study table. The homestay is situated in the
          middle of the city, close to tourist places, with available cabs and
          the option to order local cuisine. Kashi Kastle prides itself on
          providing a clean and tidy environment, treating guests like family,
          and being readily available for any needs. Additionally, the homestay
          offers board games for kids and a work table for guests. Kashi Kastle
          is set to open its doors to guests on November 1, 2024.
        </p>
      </div>
      <div id="room">
        {/* <img src="/images/image1.jpg" alt="Varanasi" /> */}
        <div id="roomContainer">
          <p id="aboutHeading">Our Rooms</p>
          <p id="aboutText">
            Each 2bhk house at Kashi Kastle is designed to provide a comfortable
            and cozy stay. The rooms are well-furnished and equipped with modern
            amenities to ensure a pleasant experience for our guests.
          </p>
        </div>
      </div>
      <div id="services">
        <Typography id="serviceHeading">SERVICES</Typography>
        <div id="servicesContainer">
          <Box>
          <Card className="serviceCard">
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Local Cuisine
              </Typography>
              <RestaurantIcon />
              <Typography variant="body2">
                Kashi Kastle offers the option to order local cuisine, allowing
                guests to experience the authentic flavors of Varanasi.
              </Typography>
            </CardContent>
          </Card>
          <Card className="serviceCard">
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
                Transportation
              </Typography>
              <EmojiTransportationIcon />
              <Typography variant="body2">
              Guests can easily access cabs for convenient transportation to explore the city and visit tourist attractions.
              </Typography>
            </CardContent>
          </Card>
          <Card className="serviceCard">
            <CardContent>
              <Typography sx={{ color: "text.secondary"}}>
              Family-like Hospitality
              </Typography>
              <FamilyRestroomIcon />
              <Typography variant="body2">
              We treat our guests like family, ensuring a warm and welcoming atmosphere throughout their stay.
              </Typography>
            </CardContent>
          </Card>
          <Card className="serviceCard">
            <CardContent>
              <Typography sx={{ color: "text.secondary"}}>
              24/7 Assistance
              </Typography>
              <WifiIcon />
              <Typography variant="body2">
              Kashi Kastle is readily available to cater to the needs of our guests, providing assistance whenever required.              </Typography>
            </CardContent>
          </Card>
          <Card className="serviceCard">
            <CardContent>
              <Typography sx={{ color: "text.secondary"}}>
              Recreational Activities
              </Typography>
              <GamesIcon />
              <Typography variant="body2">
              Guests can enjoy board games and leisure activities during their stay at Kashi Kastle.              </Typography>
            </CardContent>
          </Card>
          </Box>
        </div>
      </div>
      <div >
      <Typography id="serviceHeading">Gallery</Typography>
      <ImageList sx={{ width: 650, height: 600 }} id="imageGallery">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            // subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
      <div id="ContactUs">
          <Card className="contactUsText">
            <CardContent>
              <Typography sx={{ color: "text.secondary" }}>
              Email : kashikastle@gmail.com
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
              Contact : 9554403508
              </Typography>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}

export default App;
