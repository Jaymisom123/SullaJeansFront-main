import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../assets/banner-coleção-especial.jpg";
import banner2 from "../../assets/world-of-gaming-jeans-banners.jpg";
import banner3 from "../../assets/Banner-moda-sullafeminina .webp";

import truckSVG from "../../assets/truck.svg";
import ticketSVG from "../../assets/ticket.svg";
import tagSVG from "../../assets/tag.svg";
import promotionsSVG from "../../assets/promotions.svg";
import creditcardSVG from "../../assets/credit-card.svg";

import { Container } from "./style";

export function Banner() {
  const [ sliderPerview, setSliderPerview ] = useState(2.7);

  const imgs = [
    banner1,
    banner2,
    banner3
  ]

  function handleResize() {
    if(window.innerWidth <= 1000) {
      setSliderPerview(2.7);
      return;
    }

    setSliderPerview(5);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  return (
    <Container>
      <Swiper className="carrossel-imgs" slidesPerView={ 1 } pagination={{ clickable: true }} loop={ true } autoplay={ true }>
        {
          imgs &&
          imgs.map( item => (
            <SwiperSlide key={ item }>
              <img src={ item } alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper className="swiper-nav" slidesPerView={ sliderPerview }>
        <SwiperSlide >
          <button>
            <img src={ truckSVG } alt="" />
            <h2> FRETE GRÁTIS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ ticketSVG } alt="" />
            <h2> CUPONS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ tagSVG } alt="" />
            <h2> MELHORES MARCAS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ promotionsSVG } alt="" />
            <h2> MELHORES PREÇOS </h2>
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button>
            <img src={ creditcardSVG } alt="" />
            <h2> FORMAS DE PAGAMENTO </h2>
          </button>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}