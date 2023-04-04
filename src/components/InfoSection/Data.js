import img1 from '../images/emedafrica1.svg'
import img2 from '../images/emedafrica3.svg'

import img3 from '../images/emedafrica4.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'For Service Providers',
  headline:
    ' Emedafrica is a health innovation products working to improve access to health care services ',
  description:
    'The platform is user-friendly and easy to navigate with service listing, consultation carts, payment gateways, and ambulance tranfer services',
  buttonLabel: 'Get started',
  imgStart: false,
  img: img1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Logistics support',
  headline: "Providing logistic support to the service providers and ambulance tranfers ",
  description:
    'To ensure that their services are delivered to customers in a timely manner we provide support for logistics. This includes  support with customs and duties',
  buttonLabel: 'Download App Now',
  imgStart: true,
  img: img2,
  alt: 'API integration',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Training and Support ',
  headline: 'We provide training and support to  service providers ',
  description:
    'To enable African service providers use the mobile platform effectivelly. This includes training on service descrptions, pricing, marketing, and customer service.',
  buttonLabel: 'Download mobile app',
  imgStart: false,
  img: img3,
  alt: 'Mobile app',
  dark: false,
  primary: false,
  darkText: true,
}
