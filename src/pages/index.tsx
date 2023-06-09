import React from 'react'

import Image from 'next/image';
import { HomeContainer, Product } from '@/styles/pages/home'

import { useKeenSlider } from 'keen-slider/react';

import shirt1 from '../assets/shirts/1.png';
import shirt2 from '../assets/shirts/2.png';
import shirt3 from '../assets/shirts/3.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.8,
      spacing: 48
    }
  })

  return (
      <HomeContainer ref={sliderRef} className='keen-slider'>
        <Product className='keen-slider__slide'>
          <Image src={shirt1} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className='keen-slider__slide'>
          <Image src={shirt2} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className='keen-slider__slide'>
          <Image src={shirt3} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className='keen-slider__slide'>
          <Image src={shirt3} width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    )
}