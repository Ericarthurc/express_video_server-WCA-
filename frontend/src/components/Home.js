import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// VIDEO THIMBNAILS
import chapel_5_7 from '../assets/images/chapel_5-7.png';
import chapel_5_14 from '../assets/images/chapel_5-14.png';
import pe_3 from '../assets/images/pe_3.png';
import pe_2 from '../assets/images/pe_2.png';

import writers from '../assets/images/writers.png';
import kinder2nd from '../assets/images/kinder2nd.png';
import third5th from '../assets/images/3rd5th.png';
import sixth8th from '../assets/images/6th8th.png';

import wcaInterview from '../assets/images/wca_interview.png';

import k1 from '../assets/images/k-1.png';
import twothree from '../assets/images/2-3.png';
import fourfive from '../assets/images/4-5.png';
import sixeight from '../assets/images/6-8.png';

const Home = () => {
  return (
    <>
      <div className="Main__Content-Wrapper">
        <div className="Content-Wrapper">
          <p className="Content-Header">Graduation Ceremonies</p>
          <div className="Content__Video-Wrapper">
            <Link
              to={`/watch?v=grad-k-1&til=Graduation%20for%20Kinder-1st&tec=Principal%20Reid`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={k1}
                ></img>
                <div className="Video-Context">Graduation K-1</div>
              </div>
            </Link>
            <Link
              to={`/watch?v=grad-2-3&til=Graduation%20for%202nd-3rd&tec=Principal%20Reid`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={twothree}
                ></img>
                <div className="Video-Context">Graduation 2-3</div>
              </div>
            </Link>
          </div>
          <div style={{ marginTop: '35px' }}></div>
          <div className="Content__Video-Wrapper">
            <Link
              to={`/watch?v=grad-4-5&til=Graduation%20for%204rd-5th&tec=Principal%20Reid`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={fourfive}
                ></img>
                <div className="Video-Context">Graduation 4-5</div>
              </div>
            </Link>
            <Link
              to={`/watch?v=grad-6-7-8&til=Graduation%20for%206th-8th&tec=Principal%20Reid`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={sixeight}
                ></img>
                <div className="Video-Context">Graduation 6-7-8</div>
              </div>
            </Link>
          </div>
        </div>
        {/* SPACER */}
        <div className="Content-Wrapper">
          <p className="Content-Header">Graduation Congratulations!</p>
          <div className="Content__Video-Wrapper">
            <Link
              to={`/watch?v=wca_interview&til=Interview&tec=Pastor%20Chris`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={wcaInterview}
                ></img>
                <div className="Video-Context">
                  Principal Reid and Pastor Chris
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="Content-Wrapper">
          <p className="Content-Header">
            Creative Writing and Art Contest Awards
          </p>
          <div className="Content__Video-Wrapper">
            <Link
              to={`/watch?v=JanetteWritersAwards&til=Awards&tec=Mrs.%20McLaughlin`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={writers}
                ></img>
                <div className="Video-Context">Writers' Awards</div>
              </div>
            </Link>
            <Link
              to={`/watch?v=JillAwardsforKinder-2nd&til=Awards%20for%20Kinder-2nd&tec=Mrs.%20Isaac`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={kinder2nd}
                ></img>
                <div className="Video-Context">Awards for Kinder-2nd</div>
              </div>
            </Link>
          </div>
          <div style={{ marginTop: '35px' }}></div>
          <div className="Content__Video-Wrapper">
            <Link
              to={`/watch?v=JillAwardsfor3rd-5th&til=Awards%20for%203rd-5th&tec=Mrs.%20Isaac`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={third5th}
                ></img>
                <div className="Video-Context">Awards for 3rd-5th</div>
              </div>
            </Link>
            <Link
              to={`/watch?v=JillAwardsfor6th-8th&til=Awards%20for%206th-8th&tec=Mrs.%20Isaac`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={sixth8th}
                ></img>
                <div className="Video-Context">Awards for 6th-8th</div>
              </div>
            </Link>
          </div>
        </div>

        {/* SPACER */}
        <div className="Content-Wrapper">
          <p className="Content-Header">Chapel Videos</p>
          <div className="Content__Video-Wrapper">
            <Link
              to={`/watch?v=chapel_5-14-20&til=Chapel&tec=Principal%20Reid`}
            >
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={chapel_5_14}
                ></img>
                <div className="Video-Context">Principal Reid (May 14th)</div>
              </div>
            </Link>
            <Link to={`/watch?v=chapel_5-7-20&til=Chapel&tec=Pastor%20Jake`}>
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={chapel_5_7}
                ></img>
                <div className="Video-Context">Pastor Jake (May 7th)</div>
              </div>
            </Link>
          </div>
        </div>

        {/* SPACER */}
        <div className="Content-Wrapper">
          <p className="Content-Header">Physical Education</p>
          <div className="Content__Video-Wrapper">
            <Link to={`/watch?v=pe_3&til=PE&tec=Dani%20Fraley`}>
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={pe_3}
                ></img>
                <div className="Video-Context">PE (May 14th)</div>
              </div>
            </Link>
            <Link to={`/watch?v=pe_2&til=PE&tec=Dani%20Fraley`}>
              <div className="Content__Video-Thumbnail-Wrapper">
                <img
                  className="Content__Video-Thumbnail"
                  alt="chapel_logo"
                  src={pe_2}
                ></img>
                <div className="Video-Context">PE (May 4th)</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;