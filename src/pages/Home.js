import { Link } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main2.svg';

import appstore from '../assets/google-play-badge.png'
import { Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';



import InfoSection from '../components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data'
import QandA from '../components/QandA'
import ReviewsComponent from '../components/ReviewsComponent'

function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Redirect to='/dashboard' />}
      <Wrapper className='page'>
        <div className='info'>
          <h2>
            <span>Emed</span>
            Africa
          </h2>

          <br></br>

          <h3>
            <span>In Emergency | </span>
            In Convenience
          </h3>
          <p>
          Simpler, more efficient and more effective way for patients to find verified health service providers they love and a smarter way for health service providers to find fantastic patients.
          </p>
          <p> 
       <a href='https://play.google.com/store/apps/details?id=com.imbuga.EmedAfrica'>   <img src={appstore} alt='job hunt' className='appstore' /></a>
          </p>

          <Link to='/login' className='btn'>
            Login
          </Link>
          <Link to='/register' className='btn'>
            Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </Wrapper>
      <InfoSection {...homeObjOne} />
      <br />
      <br />
      <QandA />
      <br />
      <InfoSection {...homeObjTwo} />
      {/* Reviwws */}

      <ReviewsComponent />
      <InfoSection {...homeObjThree} />
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  h2 {
    font-weight: 700;
  }
  h2 span {
    color: var(--primary-500);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    .main-img {
      display: block;
    }
  }
  .btn {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export default Home;
