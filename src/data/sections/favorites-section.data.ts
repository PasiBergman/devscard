import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  people: {
    title: 'People I learn from',
    data: [
      {
        image: 'https://avatars.githubusercontent.com/u/8199968?v=4',
        name: 'Nick Chapsas',
        url: 'https://github.com/Elfocrash',
      },
      {
        image: 'https://avatars.githubusercontent.com/u/499550?v=4',
        name: 'Evan You',
        url: 'https://github.com/yyx990803',
      },
      {
        image: 'https://avatars.githubusercontent.com/u/39407673?v=4',
        name: 'Amichai Mantinband',
        url: 'https://github.com/amantinband',
      },
      {
        image:
          'https://yt3.googleusercontent.com/ytc/AL5GRJX5MEehMhgNKH-svrOsH8YEY0SOHB8gExINQKim=s176-c-k-c0x00ffffff-no-rj',
        name: 'Erik Hanchett ',
        url: 'https://www.programwitherik.com',
      },
      {
        image: 'https://avatars.githubusercontent.com/u/34191235?v=4',
        name: 'Milan Jovanović',
        url: 'https://github.com/m-jovanovic',
      },
      {
        image:
          'https://yt3.googleusercontent.com/di2CH0G65Cvl09KEmiJDhCuMLIpffJKvXVmQ0Za6jNOsRGxJ6zI_PkXMUsfyEKwPAN6NH9Qp0Q=s176-c-k-c0x00ffffff-no-rj',
        name: 'Paul Hudson',
        url: 'https://www.hackingwithswift.com',
      },
    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [
      /*
      {
        image: import('@/assets/favorites/videos/video-1.jpeg'),
        title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
        url: 'https://youtu.be/TqfbAXCCVwE',
      },
      {
        image: import('@/assets/favorites/videos/video-2.jpeg'),
        title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
        url: 'https://youtu.be/FS1mnISoG7U',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
      */
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      /*
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-3.png'),
        title: 'Bytes',
        type: 'Newsletter',
        url: 'https://bytes.dev/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter',
        url: 'https://typescript-weekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast',
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
      */
    ],
  },
  books: {
    title: 'Latest books',
    data: [
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552089024i/41716145.jpg',
        title: 'The Hunted',
        author: 'Kerry Barnes',
        url: 'https://www.goodreads.com/book/show/41716145-the-hunted',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327939511i/92364.jpg',
        title: 'Eye of the Needle',
        author: 'Ken Follet',
        url: 'https://www.goodreads.com/book/show/92364.Eye_of_the_Needle',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661620413i/28114641.jpg',
        title: 'Of Dawn and Darkness, The Elder Empire: Sea #2',
        author: 'Will Wight',
        url: 'https://www.goodreads.com/book/show/28114641-of-dawn-and-darkness',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322861953i/66695.jpg',
        title: 'Sojourn, Legend of Drizzt: Dark Elf Trilogy, Book 3',
        author: 'R.A. Salvatore',
        url: 'https://www.goodreads.com/book/show/66695.Sojourn',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660426213i/61958370.jpg',
        title: 'Eastgate, Robert Hoon Thrillers, Book 4',
        author: 'JD Kirk',
        url: 'https://www.goodreads.com/book/show/61958370-eastgate',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562747584i/24180564.jpg',
        title: 'Of Sea and Shadow, The Elder Empire: Sea #1',
        author: 'Will Wight',
        url: 'https://www.goodreads.com/book/show/24180564-of-sea-and-shadow',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554401296i/365.jpg',
        title: "Dirk Gently's Holistic Detective Agency",
        author: 'Douglas Adams',
        url: 'https://www.goodreads.com/book/show/365.Dirk_Gently_s_Holistic_Detective_Agency',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654570974i/36332410.jpg',
        title: 'Skysworn, Cradle: #4',
        author: 'Will Wight',
        url: 'https://www.goodreads.com/book/show/36332410-skysworn',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
