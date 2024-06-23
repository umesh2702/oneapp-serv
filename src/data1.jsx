// import service provider images
import Electrician1 from './assets/images/providers/electrician1.jpeg';
import Electrician2 from './assets/images/providers/electrician2.jpeg';
import Plumber1 from './assets/images/providers/plumber1.jpeg';
import Plumber2 from './assets/images/providers/plumber2.jpeg';
import Carpenter1 from './assets/images/providers/carpenter1.jpeg';
import Carpenter2 from './assets/images/providers/carpenter2.jpeg';
import Cleaner1 from './assets/images/providers/cleaner1.jpeg';
import Cleaner2 from './assets/images/providers/cleaner2.jpeg';

export const bannerData = [
    {300: 'Jobs Completed'}, 
    {1500: 'Happy Customers'}, 
    {'50': 'Service Categories'}
];

export const servicesData = [
  {
    id: 1,
    type: 'Electrician',
    name: 'John Doe',
    description:
      'Experienced in residential and commercial electrical work, including installations, repairs, and maintenance.',
    image: Electrician1,
    country: 'United States',
    city: 'New York, NY',
    experience: '10 years',
    rating: '4.8',
    price: '50',
    duration: '1hr',
    contact: {
      phone: '0123 456 78910',
      email: 'john.doe@example.com',
    },
  },
  {
    id: 2,
    type: 'Electrician',
    name: 'Jane Smith',
    description:
      'Certified electrician specializing in smart home systems and energy-efficient installations.',
    image: Electrician2,
    country: 'Canada',
    city: 'Toronto, ON',
    experience: '8 years',
    rating: '4.7',
    price: '55',
    duration: '1hr',

    contact: {
      phone: '0123 456 78911',
      email: 'jane.smith@example.com',
    },
  },
  {
    id: 3,
    type: 'Plumber',
    name: 'Mike Johnson',
    description:
      'Skilled plumber offering services for both emergency repairs and planned installations.',
    image: Plumber1,
    country: 'United States',
    city: 'Los Angeles, CA',
    experience: '12 years',
    rating: '4.9',
    price: '60',
        duration: '1hr',

    contact: {
      phone: '0123 456 78912',
      email: 'mike.johnson@example.com',
    },
  },
  {
    id: 4,
    type: 'Plumber',
    name: 'Sara Lee',
    description:
      'Professional plumber with expertise in residential plumbing, leak detection, and sewer repair.',
    image: Plumber2,
    country: 'Canada',
    city: 'Vancouver, BC',
    experience: '7 years',
    rating: '4.6',
    price: '50',
        duration: '1hr',

    contact: {
      phone: '0123 456 78913',
      email: 'sara.lee@example.com',
    },
  },
  {
    id: 5,
    type: 'Carpenter',
    name: 'Chris Evans',
    description:
      'Experienced carpenter skilled in furniture making, cabinetry, and home renovations.',
    image: Carpenter1,
    country: 'United States',
    city: 'Chicago, IL',
    experience: '15 years',
    rating: '4.8',
    price: '70',
        duration: '1hr',

    contact: {
      phone: '0123 456 78914',
      email: 'chris.evans@example.com',
    },
  },
  {
    id: 6,
    type: 'Carpenter',
    name: 'Anna Brown',
    description:
      'Detail-oriented carpenter with a passion for custom woodworking and home improvement projects.',
    image: Carpenter2,
    country: 'Canada',
    city: 'Montreal, QC',
    experience: '10 years',
    rating: '4.7',
    price: '65',
        duration: '1hr',


    contact: {
      phone: '0123 456 78915',
      email: 'anna.brown@example.com',
    },
  },
  {
    id: 7,
    type: 'Cleaner',
    name: 'David Wilson',
    description:
      'Reliable cleaner offering residential and commercial cleaning services, including deep cleaning and regular maintenance.',
    image: Cleaner1,
    country: 'United States',
    city: 'Houston, TX',
    experience: '5 years',
    rating: '4.9',
    price: '30',
        duration: '1hr',

    contact: {
      phone: '0123 456 78916',
      email: 'david.wilson@example.com',
    },
  },
  {
    id: 8,
    type: 'Cleaner',
    name: 'Emily Davis',
    description:
      'Professional cleaner with expertise in eco-friendly cleaning solutions and allergen control.',
    image: Cleaner2,
    country: 'Canada',
    city: 'Calgary, AB',
    experience: '6 years',
    rating: '4.8',
    price: '35',
        duration: '1hr',

    contact: {
      phone: '0123 456 78917',
      email: 'emily.davis@example.com',
    },
  },
];
