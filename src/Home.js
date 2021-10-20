import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product id="12321341" title="The Learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01_204,203,200_.jpg" />
                <Product id="12321342" title="Transformers Generations War for Cybertron: Siege Voyager Class Wfc-S11 Optimus Prime Action Figure" price={24.99} rating={4} image="https://m.media-amazon.com/images/I/51igh-KLMJL.jpg" />            
            </div>
            <div className="home__row">
                <Product id="12321343" title="NETGEAR Nighthawk Cable Modem CM1200 - Compatible with all Cable Providers including Xfinity by Comcast" price={186.46} rating={5} image="https://m.media-amazon.com/images/I/31MjU7tnJcL.jpg" />
                <Product id="12321344" title="Arlo Essential Spotlight Camera - 1 Pack - Wireless Security, 1080p Video, Color Night Vision, 2 Way Audio, Wire-Free, Direct to WiFi No Hub Needed" price={129.99} rating={3} image="https://m.media-amazon.com/images/I/31L79Ulfw6L.jpg" />            
                <Product id="12321345" title="Tenmiro 65.6ft Led Strip Lights, Ultra Long RGB 5050 Color Changing LED Light Strips Kit with 44" price={20.56} rating={5} image="https://m.media-amazon.com/images/I/51VG4UekgiL.jpg" />            
            </div>
            <div className="home__row">
                <Product id="12321346" title="Jackery SolarSaga 60W Solar Panel for Explorer 160/240/500 as Portable Solar Generator" price={152.96} rating={5} image="https://m.media-amazon.com/images/I/51UtizLl3OS.jpg" />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
