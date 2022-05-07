import { Message } from '../types'

const messages: Message[] = [
  {
    id: 1,
    user: {
      name: 'Sam Mills',
      handle: '@sam_mills',
      link: '/users/@sam_mills',
      profile: '/assets/sam-profile.png'
    },
    timestamp: '2022-04-28T06:00:00.000Z',
    message: 'I swear, one of these days I\'m going to remember exactly how to spell the word psuedo.',
    comments: [],
    likes: 0,
    sympathy: 0,
    shares: 0
  },
  {
    id: 2,
    user: {
      name: 'Sam Mills',
      handle: '@sam_mills',
      link: '/users/@sam_mills',
      profile: '/assets/sam-profile.png'
    },
    timestamp: '2022-04-11T06:00:00.000Z',
    message: 'I successfully replaced the heating element of my dryer and fixed it. I can now dry clothes again. I feel quite pleased with myself.',
    comments: Array(1245),
    likes: 10000,
    sympathy: 541,
    shares: 5000
  },
  {
    id: 3,
    user: {
      name: 'Sam Mills',
      handle: '@sam_mills',
      link: '/users/@sam_mills',
      profile: '/assets/sam-profile.png'
    },
    timestamp: '2022-04-01T06:00:00.000Z',
    message: 'My computer was being super slow, saw that my memory usage was always high. Figured it was time to upgrade. In the process of looking at my memory specs, I discovered that I had half the memory I should. Turns out only 1 of the 2 sticks was properly plugged in 🙃',
    comments: [],
    likes: 210,
    sympathy: 0,
    shares: 0
  }
];

export default messages;