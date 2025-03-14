import React from 'react'
import Navbar from './Navbar'
import AreaMap from './AreaMap';


function Where_to_Stay() {
    return (
      <div className='App'>
        <div className='where-to-stay-container'>
            <Navbar/>
            <div className='where-to-stay-main-text-container'>
                <h1 className='primary-heading'>Wedding Location</h1>
                <iframe src="https://maps.google.com/maps?width=800&amp;height=540&amp;hl=en&amp;q=1958%20Varley%20St%20%20Pittsburgh+(Pittsburgh%20WBU)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=ce0144f6643745a0acf22e1d30ce234d4e672dc9'></script>
                <p className='primary-text'><br></br>Hotels</p>
                <p className='supporting-text'><br></br><strong>We are not blocking any hotels.</strong> However, if you'd like to stay at a hotel, here's a few that have decent prices (last-checked on March 1, 25). Pricing also looks lower if you book an a third-party site - I'm quoting prices from the hotels themselves, though.</p>
                <ul className = 'supporting-list'>
                  <li><a href = 'https://www.wyndhamhotels.com/wyndham-grand/pittsburgh-pennsylvania/wyndham-grand-pittsburgh-downtown/rooms-rates?hotel_id=44831&checkin_date=09/05/2025&checkout_date=09/08/2025&adults=2&children=0&rooms=1&brand_id=WY&iata=00094113&cid=ME:299bn0crzzzmpxb:44831&adobe=srch_HPA_WYNDHAM-80387_localuniversal_3_US_desktop_2025-09-05_selected___organic&dsclid=68334705436798976'>Wyndam Grand Hotel</a> - Directly on the park where the rivers converge downtown. This is a very central location. About $200 / night.</li>
                  <li><a href = 'https://www.ihg.com/hotelindigo/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&glat=FREE&qSlH=PITHB&qRms=1&qAdlt=2&qChld=0&qCiD=05&qCiMy=082025&qCoD=08&qCoMy=082025&qAAR=6CBARC&qRtP=IDSLS&qrtPt=261.91&setPMCookies=true&qSlRc=OQNN&qSHBrC=IN&qDest=123%20North%20Highland%20Avenue,%20Pittsburgh,%20PA,%20US&partnerVerification=false&userCountryCode=US&partnerTotalRateShown=895.73&userSelectedRatePlan=OQNNIDSLS&userDeviceType=desktop&userBookingWindow=188&adjustMonth=true&partnerClickType=hotel&partnerCurrencyCode=USD&partnerAdSite=localuniversal&partnerRateShown=261.91&cm_mmc=hpa_free_US_desktop_PITHB_localuniversal_3_USD_2025-09-05_selected___FALSE_OQNNIDSLS&partnerDateType=selected&partnerAdType=free&srb_u=1&qRmFltr='>Hotel Indigo East Liberty</a> - In a more lively neighborhood further from downtown. Lots of good bars / restaurants nearby and close to some nice parks. $250 / night on their website but about half price on some affiliates.</li>
                  <li><a href = 'https://www.ihg.com/hotelindigo/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&glat=FREE&qSlH=PITGH&qRms=1&qAdlt=2&qChld=0&qCiD=05&qCiMy=082025&qCoD=08&qCoMy=082025&qAAR=6CBARC&qRtP=IYSLF&qrtPt=205.26&setPMCookies=true&qSlRc=TQNN&qSHBrC=IN&qDest=329%20Technology%20Drive,%20Pittsburgh,%20PA,%20US&partnerVerification=false&userCountryCode=US&partnerTotalRateShown=701.99&userSelectedRatePlan=TQNNIYSLF&userDeviceType=desktop&userBookingWindow=188&adjustMonth=true&partnerClickType=hotel&partnerCurrencyCode=USD&partnerAdSite=localuniversal&partnerRateShown=205.26&cm_mmc=hpa_free_US_desktop_PITGH_localuniversal_3_USD_2025-09-05_selected___FALSE_TQNNIYSLF&partnerDateType=selected&partnerAdType=free&srb_u=1&qRmFltr='>Hotel Indigo Oakland</a> - This is close to the college campus but the campus isn't easily accessible (there's a steep busy street nearby that takes you to campus). However, it's right on the river trails which is great for walking / running, and it's very walkable to the South Side. $200 / night.</li>
                  <li><a href = 'https://bookings.omnihotels.com/rates-room1?adults%5B1%5D=2&arrival=2025-09-05&children%5B1%5D=0&departure=2025-09-08&hotelCode=PITDTN&rooms=1&channelCode=GOOGLELOCAL&channelSite=desktop&utm_source=GHA&utm_medium=meta-organic&utm_content=OMNI-PITDTN_localuniversal_3_2025/09/05_US_desktop_selected__organic&userlistid=&s_is_ad=false'>Omni William Penn Downtown</a> - Very swanky, it's about $225-$300 / night.</li>
                  <li><strong>General Tips:</strong> It currently looks like hotels in Oakland (near Pitt campus) and on the outskirts of the city have the best deals. Further outside of town will be cheaper, but transportation is not as reliable if you're not renting a car. If you're renting a car, going to a hotel off this list outisde of the main "triangle" is fine.</li>
                </ul>
                <p className='primary-text'><br></br>Neighborhoods</p>
                <p className='supporting-text'><br></br>If you are considering staying at an AirBNB or VRBO, a few nice neighborhoods for walking and restaurants are:</p>
                <ul className = 'supporting-list'>
                  <li><strong>North Side & Mexican War Streets:</strong> Area of town just north of downtown, also close to the venue. Allegheny Commons is a beautiful park here, and there is also a river walk nearby.</li>
                  <li><strong>Strip District:</strong> Also close to the Venue, lots of international grocery stores, restaurants, and bars.</li>
                  <li><strong>Lawrenceville:</strong> Fairly close to the Venue - lots of bars, shops, and restaurants. It has a younger crowd.</li>
                  <li><strong>Shadyside:</strong> Upscale neightborhood with beautiful homes. Very walkable.</li>
                  <li><strong>Squirell Hill:</strong> Walkable neighborhood with lots of businesses. Borders two large parks, Frick and Schenley - which are both fantastic.</li>
                  <li><strong>South Side:</strong> South of the Monongahela River, this is known as a "party" area of town on weekend nights. But there's lots of good restaurants and it's very walkable.</li>
                  <li><strong>Mount Washington:</strong> Not as many businesses as the other neighborhoods, but probably more large houses and beautiful views of the city.</li>
                </ul>
                <br></br>
                <p className='primary-text'><br></br>Other Things to Do</p>
                <ul className = 'supporting-list'>
                  <li><strong>Parks!</strong> Frick and Schenley Parks are both beautiful, large parks with lots of trails. Point State Park downtown is a pretty place where the rivers converge.</li>
                  <li><strong>Phipps Botanic Garden:</strong> Botanic garden in Schenley Park.</li>
                  <li><strong>Cathedral of Learning:</strong> Iconic 40+ story gothic building on Pitt's campus. There's tours of their themed classrooms ("Nationality Rooms").</li>
                  <li><strong>Maxo Vanka Murals:</strong> Incredible murals inside a Croatian Catholic Church. You have to go on a tour which typically run Saturday mornings.</li>
                  <li><strong>Museums:</strong> Carnegie Museum of Art and Natural History near Pitt's campus is great. The Andy Warhol Museum and Matress Factory in the North Side are also neat stops.</li>
                  <li><strong>Inclines:</strong> Old-fashioned trains that run up Mount Washington. They cost about $5 per person, round trip. There are two inclines (Monongahela and Duquesne)</li>
                </ul>
                <br></br>
            </div>
        </div>
      </div>
      
    )
  }
  
  export default Where_to_Stay
