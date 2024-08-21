import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function ShopSlide1() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Carousel data-bs-theme="dark" visible={5}>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/5vcAAOSwn55e7xmT/s-l225.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Shirt</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/hg8AAOSwAoFbarSF/s-l225.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Coats, Jackets & Vests</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/cwUAAOSwJ9te7xmb/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Activewears</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/dKkAAOSwu2Re7xmR/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Pants</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/b9IAAOSwu0Fe7xmd/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Jeans</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/L88AAOSwd4pe7xmc/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Shorts</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/gssAAOSwOahe7xmM/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Suits & Suit Separate</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/od0AAOSwDvJe7xmT/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Sweaters</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/PpkAAOSwuaJe7xmY/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Underwear</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/yoAAAOSwK4pe7xmW/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Socks</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/cmoAAOSwWLFZpnCK/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Swimwear</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25"
            src="https://i.ebayimg.com/thumbs/images/g/fGwAAOSwvnVe7xmK/s-l225.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Sleepwear & Robes</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ShopSlide1;