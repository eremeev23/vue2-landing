<template>
  <div ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="slide in slides"
        :key="slide.url"
      >
        <img :src="slide.url" alt="Dog">
      </div>
    </div>
    <div class="swiper__buttons">
      <button class="swiper__button swiper__button_prev">
        <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.327279 0.925389C0.43076 0.822245 0.553692 0.740412 0.689032 0.684577C0.824372 0.628741 0.969463 0.6 1.11599 0.6C1.26252 0.6 1.40761 0.628741 1.54295 0.684577C1.67829 0.740412 1.80122 0.822245 1.90471 0.925389L15.2727 14.2161C15.3765 14.319 15.4588 14.4412 15.5149 14.5758C15.5711 14.7104 15.6 14.8546 15.6 15.0003C15.6 15.146 15.5711 15.2902 15.5149 15.4248C15.4588 15.5593 15.3765 15.6816 15.2727 15.7844L1.90471 29.0752C1.69553 29.2832 1.41182 29.4 1.11599 29.4C0.820167 29.4 0.536459 29.2832 0.327279 29.0752C0.118099 28.8672 0.000583254 28.5852 0.000583254 28.291C0.000583254 27.9969 0.118099 27.7149 0.327279 27.5069L12.9088 15.0003L0.327279 2.4937C0.223536 2.39081 0.141227 2.26859 0.085067 2.13404C0.028907 1.99948 0 1.85523 0 1.70954C0 1.56386 0.028907 1.41961 0.085067 1.28505C0.141227 1.15049 0.223536 1.02827 0.327279 0.925389Z" fill="white"/>
        </svg>
      </button>
      <button class="swiper__button swiper__button_next">
        <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.327279 0.925389C0.43076 0.822245 0.553692 0.740412 0.689032 0.684577C0.824372 0.628741 0.969463 0.6 1.11599 0.6C1.26252 0.6 1.40761 0.628741 1.54295 0.684577C1.67829 0.740412 1.80122 0.822245 1.90471 0.925389L15.2727 14.2161C15.3765 14.319 15.4588 14.4412 15.5149 14.5758C15.5711 14.7104 15.6 14.8546 15.6 15.0003C15.6 15.146 15.5711 15.2902 15.5149 15.4248C15.4588 15.5593 15.3765 15.6816 15.2727 15.7844L1.90471 29.0752C1.69553 29.2832 1.41182 29.4 1.11599 29.4C0.820167 29.4 0.536459 29.2832 0.327279 29.0752C0.118099 28.8672 0.000583254 28.5852 0.000583254 28.291C0.000583254 27.9969 0.118099 27.7149 0.327279 27.5069L12.9088 15.0003L0.327279 2.4937C0.223536 2.39081 0.141227 2.26859 0.085067 2.13404C0.028907 1.99948 0 1.85523 0 1.70954C0 1.56386 0.028907 1.41961 0.085067 1.28505C0.141227 1.15049 0.223536 1.02827 0.327279 0.925389Z" fill="white"/>
        </svg>
      </button>
    </div>
    <div class="swiper__pagination"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'SwiperBanner',

  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },

  mounted () {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper__pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper__button_next',
        prevEl: '.swiper__button_prev'
      },
      breakpoints: {
        1440: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        }
      }
    })
  },
}
</script>

<style lang="scss">
.swiper {
  position: relative;
  max-width: 100%;
  overflow: hidden;

  &-slide {
    cursor: grab;
    width: 100%;
    height: 294px;
    overflow: hidden;

    img {
      height: 100%;
      min-width: 100%;
      object-fit: cover;
      transition: transform .6s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  &__buttons {
    position: absolute;
    top: calc(50% - 10px);
    left: 50%;
    width: calc(100% - 32px);
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 1000;
  }

  &__button {
    width: 3rem;
    height: 3rem;
    padding: 0 14px 0 18px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(0 0 0 / .5);
    pointer-events: all;

    &_prev {
      padding: 0 18px 0 14px;

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &__pagination {
    margin-top: .5rem;
    display: flex;
    justify-content: center;

    .swiper-pagination-bullet {
      height: 12px;
      width: 12px;
      background-color: $blue;
    }
  }

  @media screen and (max-width: 1440px) {
    &-slide {
      height: 272px;
    }

    &__button {
      height: 40px;
      width: 40px;
      padding: 0 12px 0 15px;

      &_prev {
        padding: 0 15px 0 12px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    &-slide {
      height: 250px;
    }
  }

  @media screen and (max-width: 1024px) {
    &-slide {
      height: 187px;
    }

    &__buttons {
      width: calc(100% - 16px);
    }

    &__button {
      height: 32px;
      width: 32px;
      padding: 0 9px 0 12px;

      &_prev {
        padding: 0 12px 0 9px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    &-slide {
      height: 143px;
    }
  }

  @media screen and (max-width: 430px) {
    &__button {
      height: 24px;
      width: 24px;
      padding: 0 7px 0 9px;

      &_prev {
        padding: 0 9px 0 7px;
      }
    }

    &__pagination {
      .swiper-pagination-bullet {
        height: 8px;
        width: 8px;
      }
    }
  }
}
</style>
