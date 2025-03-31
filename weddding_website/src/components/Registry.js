import React from 'react';
import Navbar from './Navbar'

const Registry = () => {
    return (
        <div className='App'>
        <div className='registry-container'>
            <Navbar/>
            <div className='registry-main-text-container'>
                <h1 className='primary-heading'>Registry Info</h1>

                <h2><br></br>Wedding Registry</h2>

                <p><br></br>We love sentimental gifts from friends. Besides that, we'd much prefer cash or a check as a gift. We'll be putting any money towards our honeymoon (in Greece!) and updating our home. Thank you!</p>

                <h2><br></br>Lindsay's Bridal Shower Registry</h2>
                <p><br></br>Please contact John Meyer (605-553-6615) if you purchase something from this list, and I can remove it. Thank you!</p>
                <ul className = 'supporting-list'>
                  <li><a href = 'https://www.williams-sonoma.com/registry/kpx6xs8lf8/registry-list.html'>Williams Sonoma</a></li>
                  <li>Perennial plants from your garden!</li>
                  <li><a href = 'https://lunya.co/products/womens-washable-silk-relaxed-button-up-short-set-immersed-black'>Silk Pajamas</a></li>
                  <li>Something from the thrift store!</li>
                  <li>A really nice dust pan</li>
                  <li><a href = 'https://us.pigletinbed.com/'>Piglet in bed gift card</a></li>
                  <li><a href = 'https://bakefromscratch.com/product/bake-from-scratch-volume-9/'>Bake from Scratch Cookbook</a></li>
                  <li>Cookie Sheets</li>
                  <li><a href = 'https://squareup.com/gift/A3SMN3EXAG358/order'>Tend and Nourish gift card, Lindsay's favorite facial place!</a></li>
                  <li>Cute butter dish from a local (to you!) ceramicist</li>
                  <li><a href = 'https://www.diptyqueparis.com/en_us/l/home-fragrances/scented-candles.html'>Diptyque Candles</a></li>
                  <li><a href = 'https://www.marieveronique.com/collections/all'>Products from Marie Veronique</a></li>
                    <ul>
                        <li>Barrier Restore Serum</li>
                        <li>Balancing Hypotonic</li>
                        <li>Pure + E.O. Free Oil Cleanser</li>
                    </ul>
                </ul>
            </div>
        </div>
      </div>
    );
};

export default Registry;