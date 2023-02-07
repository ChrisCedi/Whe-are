import { createContext } from "react";
import React from "react";
import { Images } from "../assets";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const developerList = [
    {
      id: "11xzxcdcvfv",
      name: "Christian Cedillo Palacios",
      subname: "Christian Cedillo",
      age: "21 años",
      ocupation: "Ingeniero en computación - UNAM",
      extra: "Creativo",
      profile: Images.chrisPhoto,
      description:
        " Me gusta mucho salir y conocer nuevos lugares, explorar y encontrar lugares atractivos para tomar fotos, disfruto mucho de la música, especialmente electrónica y pop. Disfruto mucho de la programación y todo lo relacionado con el desarrollo de aplicaciones para web y moviles.",
      songUrl: (
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/CjIUVRei27g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      musicalDescription:
        "Me gustan mucho los conciertos y los festivales, mi festival favorito es EDC México y tengo planeado ir en el 2023.",
      musicalUrl:
        "https://cdn2.mediotiempo.com/uploads/media/2022/02/25/edc-mexico-foto-edc.jpg",
      endDescription:
        "Harry Styles es un cantante y compositor británico de música pop, ex miembro de la boy band One Direction, y el primer hombre que consigue ocupar en solitario la portada de Vogue USA.",
    },
    {
      id: "134csdcsdcs",
      name: "Roberto Rendon Hernández",
      subname: "Roberto Rendon",
      age: "24 años",
      ocupation: "Ingeniero en computación - UNAM",
      extra: "Pacífico",
      profile: Images.robertPhoto,
      description:
        "Me gusta disfrutar de mi tiempo libre conociendo lugares donde hay mucha naturaleza.",
      songUrl: (
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/MaFEHf34fCQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      musicalDescription:
        "Mi festival favorito es el Corona Capital, se lleva acabo en noviembre, tiene generos muy diversos.",
      musicalUrl:
        "https://www.coronacapital.com.mx/uploads/Corona_Capital_Logo_prinicpal_02_84a6938a66.png",
      endDescription:
        "Arctic Monkeys es una banda británica de rock, formada en Sheffield, Reino Unido.​ El grupo está compuesto por el guitarrista principal y vocalista Alex Turner, el guitarrista Jamie Cook, el baterista Matt Helders y el bajista Nick O Malley. El bajista original de la banda, Andy Nicholson, dejó el proyecto en 2006 poco después del lanzamiento del álbum debut.",
    },
    {
      id: "122d23ddds",
      name: "Israel Bustamante Colín ",
      subname: "Israel Bustamante ",
      age: "22 años",
      ocupation: "Ingeniero en computación - UNAM",
      extra: "Extrovertido",
      profile: Images.ibPhoto,
      description: "Me gusta patinar y salir con mis amigos de fiesta.",
      songUrl: (
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/Cr8K88UcO0s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      musicalDescription:
        "Me gustan mucho los conciertos y los festivales, mi festival favorito es EDC México y tengo planeado ir en el 2023.",
      musicalUrl:
        "https://cdn2.mediotiempo.com/uploads/media/2022/02/25/edc-mexico-foto-edc.jpg",
      endDescription:
        "Benito Antonio Martínez Ocasio (Almirante Sur, Vega Baja, 10 de marzo de 1994), conocido artísticamente como Bad Bunny, es un rapero, cantante, compositor, productor y exluchador puertorriqueño. Su estilo de música es generalmente definido como trap latino y reguetón, pero también ha interpretado otros géneros como kizomba. Se caracteriza por su entonación grave, sin ninguna técnica vocal y su estilo de vestir.",
    },
  ];
  const contextValues = {
    developerList,
  };

  return (
    <MenuContext.Provider value={contextValues}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
