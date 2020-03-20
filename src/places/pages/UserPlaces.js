import React from "react";
import { useParams } from 'react-router-dom';


import PlaceList from '../components/PlaceList';

const dummy_places = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: "One of the most famouse sky scraper in the world",
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
    address:'20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator:'u1'
  },
  {
    id: 'p2',
    title: '2 Empire State Building2',
    description: "2 One of the most famouse sky scraper in the world",
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
    address:'20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator:'u2'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = dummy_places.filter(place=> place.creator === userId);

  return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;
