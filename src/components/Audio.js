import React from "react";
import newsspot from "../files/megancattel_audio_newsreel2021.wav"

function Audio() {
  return (
    <div>
        <div className="row justify-content-center p-3">
            <div className="col col-12 col-md-8 article">
                <div className="text-center">
                    <p><b><i>Audio</i></b></p>
                </div>
                <ul>
                    <li>
                        Newsspot Reel 2021 (aired on St. Louis Public Radio’s daily newscast)
                        <audio controls>
                            <source src={newsspot} type="audio/wav" />
                            Your browser does not support the audio tag.
                        </audio>
                    </li>
                    <li>
                        <a href="https://nuvoices.com/2021/03/24/nuvoices-podcast-52-talking-fiction-writing-and-modern-china-with-te-ping-chen/">Interview with Te-ping Chen, co-hosted with Joanna Chiu</a> (NüVoices Podcast)
                    </li>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/volunteers-step-up-to-distribute-food-for-nyc-s-seniors">Volunteers Step Up to Distribute Food for NYC’s Elderly Chinese Community</a> (Uptown Radio)
                    </li>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/nyc-s-street-vendors-don-t-qualify-for-covid-19-business-aid">NYC's Street Vendors Are Not Receiving COVID-19 Business Aid</a> (Uptown Radio)
                    </li>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/raising-the-2020-census-count-in-immigrant-communities">Community Groups and Outreach for NYC’s 2020 Census</a> (Uptown Radio)
                    </li>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/andy-byford-bids-farewell-as-president-of-nyc-public-transit">Andy Byford bids Farewell as President of NYC Public Transit</a> (Uptown Radio)
                    </li>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/female-prisons-historically-overlooked-are-higher-risk-for-covid-19">Female Prisons, Historically Overlooked, Rally for Pandemic Protections</a> (Uptown Radio)
                    </li>
                </ul>
            </div>
        </div>
        <div className="row justify-content-center p-3">
            <div className="col col-12 col-md-8 article">
                <div className="text-center">
                    <p><b><i>Interstitials</i></b></p>
                </div>
                <ul>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/animal-crossing-a-quarantine-escape?fbclid=IwAR0Bu5_2uOCTfR_lfbsL3UX63gu2jTp-D82UO0IOwfnhVw2edv0bWCWoTno">Animal Crossing, a Quarantine Escape</a> (Uptown Radio)
                    </li>
                    <li>
                        <a href="https://uptownradio.wixsite.com/uptownradio/post/queens-lawyer-is-virtually-admitted-to-the-ny-state-bar">Queens Lawyer is Virtually Admitted to the NY State Bar</a> (Uptown Radio)
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Audio;