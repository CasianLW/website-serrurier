import { FC, useState } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image"
import { service1, service2, service3, service4, service5, service6,
    service7, service8, service9, service10, service11, service12,
    service13, service14, service15, service16, service17, service18 } from "@/assets/icons";

interface SlideItem {
  title: string;
  image: string;
  description: string;
}

const SliderComponent: FC = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex(index);
    };

    const handleItemHover = (index: any) => {
        setActiveIndex(index);
    };

    const handleItemLeave = () => {
        setActiveIndex(null);
    };
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesPerPage = 8;

  const slides: SlideItem[] = [
    { title: "Ouverture de porte claquée", image: service1, description: "Si votre porte a été fermée mais non verrouillée, nous effectuons une ouverture à l'aide d'outils spécialisés pour éviter d'endommager la porte." },
    { title: "Fermeture à clé", image: service2, description: "Si vous avez verrouillé votre porte et perdu la clé, nous procédons au perçage du cylindre pour pouvoir déverrouiller la porte sans causer de dommages excessifs." },
    { title: "Installation de volets roulants", image: service3, description: "Après avoir pris les mesures nécessaires, nous vous proposons l'installation de volets roulants ou le remplacement du moteur existant." },
    { title: "Pose de serrures", image: service4, description: "Que vous souhaitiez une serrure carénée, une serrure à 3 points ou une serrure monobloc, nous vous proposons l'installation de la serrure correspondant à vos préférences.<" },
    { title: "Installation de blocs-portes", image: service5, description: "Que ce soit pour une porte de chambre ou une porte d'entrée, nous remplaçons le cadre et la porte selon vos préférences. Si le cadre est en bon état, nous pouvons également ne remplacer que la porte." },
    { title: "Installation de portes anti-squat", image: service6, description: "Après une expulsion d'appartement pour prévenir toute tentative de squat, nous vous proposons l'installation d'une porte anti-squat." },
    { title: "Pose de cornières anti-pinces", image: service7, description: "Nous installons des cornières anti-pinces pour renforcer la sécurité de vos portes contre les tentatives d'effraction par ouverture à la radio ou au pied de biche." },
    { title: "Installation de paumelles", image: service8, description: "Si votre porte penche ou frotte contre le sol, nous pouvons installer de nouvelles paumelles pour résoudre ce problème." },
    { title: "Remplacement de vitrage ou de fenêtre", image: service9, description: "En cas de vitre cassée, nous prenons les mesures nécessaires, commandons la fenêtre avec un vitrage simple, double ou feuilleté, et procédons à son remplacement complet si nécessaire." },
    { title: "Reproduction de clé", image: service10, description: "Si vous avez perdu ou cassé une clé, nous sommes en mesure de la reproduire." },
    { title: "Installation de ferme-portes", image: service11, description: "Les ferme-portes permettent de refermer une porte sans la claquer ou de fermer une porte trop lourde pour se refermer seule. Si votre ferme-porte ne fonctionne plus correctement ou si vous souhaitez en faire installer un là où il n'y en a pas, nous vous conseillerons sur le meilleur type de ferme-porte à utiliser." },
    { title: "Pose de frein de sol", image: service12, description: "Pour les portes en verre qui nécessitent une fermeture en douceur, nous recommandons l'installation d'un frein de sol adapté à votre porte après une évaluation de vos besoins." },
    { title: "Blindage de porte", image: service13, description: "Si vous ne vous sentez pas en sécurité en raison de la faiblesse de votre porte, nous évaluerons la situation et vous proposerons le meilleur type de blindage pour renforcer la sécurité de votre porte." },
    { title: "Installation de bandeau ventouse", image: service14, description: "Nous proposons l'installation d'un système de bandeau ventouse pour renforcer l'accès aux bâtiments. Ce système électrique supporte jusqu'à 300 kg par ventouse, ce qui renforce considérablement la sécurité de votre bâtiment." },
    { title: "Pose de barres de pivot", image: service15, description: "Si vos paumelles sont endommagées et que vous souhaitez les remplacer tout en renforçant la sécurité de votre porte, les barres de pivot remplaceront vos paumelles et renforceront l'accès à votre appartement ou maison." },
    { title: "Pose de barres antipanique", image: service16, description: "Les établissements publics sont équipés de sorties de secours avec des barres antipanique. Nous vous proposons également l'installation de ces barres pour garantir une évacuation sécurisée en cas d'urgence." },
    { title: "Installation de sélecteurs de fermeture", image: service17, description: "Les sélecteurs de fermeture sont installés sur les portes à deux vantaux qui s'ouvrent simultanément. Ils permettent à l'un des vantaux de se fermer avant l'autre, offrant ainsi un meilleur contrôle de la fermeture. Nous vous conseillerons sur le meilleur type de sélecteur de fermeture à installer." },
    { title: "Installation de systèmes de contrôle d'accès", image: service18, description: "Pour renforcer la sécurité de votre bâtiment, nous proposons l'installation de systèmes de contrôle d'accès tels que des lecteurs de cartes, des digicodes ou des serrures électroniques." },
  ];

  const totalSlides = slides.length;
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  
  const CustomNextArrow: FC = ({ onClick }: { onClick: () => void }) => (
    <button className="arrow next" onClick={onClick}>
      Next
    </button>
  );

  const CustomPrevArrow: FC = ({ onClick }: { onClick: () => void }) => (
    <button className="arrow prev" onClick={onClick}>
      Prev
    </button>
  );

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesPerPage,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    initialSlide: activeSlide,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    className: "slider-container"
  };


  return (
    <section id="service">
      <div className="container">
        <Slider {...settings}>
          {slides.map((slide, index) => (

            <div key={index} className="slide">
                <div className={`info-bulle ${activeIndex === index ? 'active' : ''}`}>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                </div>
               <div className="slide-content">
                    <div className={` bullet ${activeIndex === index ? 'active' : ''}`} onClick={() => handleItemClick(index)} onMouseEnter={() => handleItemHover(index)} onMouseLeave={handleItemLeave}>
                        <Image src={slide.image} alt={slide.title}/>
                    </div> 
                <span><strong>{slide.title}</strong></span>
               </div>
               
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderComponent;