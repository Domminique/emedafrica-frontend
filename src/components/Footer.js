import React from 'react'
//import { animateScroll as scroll } from 'react-scroll'
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer/FooterElements'

const Footer = () => {
  const toggleHome = () => {
    // scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">How it works</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Testimonials</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Careers</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Blog</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Contact</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Support</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Countries</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Our Customers</FooterLinkTitle>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Ambulances</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank"> Patients</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank"> Service Providers</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Health Insurances Companies</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Our Patners</FooterLinkTitle>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">NGOs</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Trade Associations</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Local Businesses</FooterLink>
              <FooterLink to={{ pathname: "https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw" }} 
                    target="_blank">Local Government</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <p>EmedAfrica</p>

            <WebsiteRights>
              {' '}
              emedAfrica{new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/emedafrica/'
                target='_blank '
                arial-label='Facebook'
              >
                {' '}
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank ' arial-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/channel/UCdrNLa3NpWa6mrNdNTk-gHw'
                target='_blank '
                arial-label='Youtube'
              >
                {' '}
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.twitter.com/emedafricaapp/ '
                target='_blank '
                arial-label='Twitter'
              >
                {' '}
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/emedafrica/'
                target='_blank '
                arial-label='LinkedIn'
              >
                {' '}
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
