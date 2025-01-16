import React from "react";
import plam from "../assets/images/plant_images/palm.jpeg";
import peaceLily from "../assets/images/plant_images/peaceLily.jpeg";
import potos from "../assets/images/plant_images/potos.jpeg";
import snakePlant from "../assets/images/plant_images/snakePlant.jpeg";
import PlantComponent from "./PlantComponent";

const PlantFriends = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold text-center mt-28 mb-12">
        Meet our Friends
      </h1>
      <div>
        <PlantComponent
          h1="Pothos (Devil's Ivy)"
          p1="* Known as a natural air purifier, pothos can remove toxins likeformaldehyde and benzene from the air."
          p2="* It's almost indestructible! Pothos thrives in low light and can survive with minimal watering, making it perfect for beginners."
          photo={potos}
          bgColor="rgb(18, 53, 36)"
          variant={true}
        ></PlantComponent>

        <PlantComponent
          h1="Snake Plant (Sansevieria)"
          p1="* Dubbed 'Mother-in-laws' Tongue this plant is nearly impossible to kill and can even thrive in neglected corners"
          p2="* Unlike most plants, it releases oxygen at night, making it a great bedroom plant for improved sleep."
          photo={snakePlant}
          bgColor="rgb(82,110,72)"
          variant={false}
        ></PlantComponent>

        <PlantComponent
          h1="Peace Lily"
          p1="* It's a champion air purifier, known for filtering out mold spores and other pollutants."
          p2="* Peace lilies bloom beautiful white flowers, which symbolize peace and prosperity. Keep it away from pets, as it can be toxic if ingested."
          photo={peaceLily}
          bgColor="rgb(18, 53, 36)"
          variant={true}
        ></PlantComponent>

        <PlantComponent
          h1="Palm (Areca Palm or Parlor Palm)"
          p1="* Adds a tropical vibe to your home while boosting humidity, which is excellent for skin and respiratory health."
          p2="* Parlor palms are non-toxic and safe for pets, making them family-friendly. They've been cultivated as indoor plants since the Victorian era for their elegance."
          photo={plam}
          bgColor="rgb(82,110,72)"
          variant={false}
        ></PlantComponent>
      </div>
    </div>
  );
};

export default PlantFriends;
