import heroPortrait from "./assets/hero-portrait.webp";
import heroWave from "./assets/hero-wave.webp";
import heroYellow from "./assets/hero-yellow.webp";
import heroRight from "./assets/hero-right.webp";
import video from "./assets/video.webp";
import galleryLarge from "./assets/gallery-large.webp";
import galleryTop from "./assets/gallery-top.webp";
import galleryCyan from "./assets/gallery-cyan.webp";
import galleryButton from "./assets/gallery-button.webp";
import galleryMoon from "./assets/gallery-moon.webp";
import galleryPlate from "./assets/gallery-plate.webp";
import galleryBlue from "./assets/gallery-blue.webp";
import galleryFlower from "./assets/gallery-flower.webp";
import exhibit1 from "./assets/exhibit-1.webp";
import exhibit2 from "./assets/exhibit-2.webp";
import exhibit3 from "./assets/exhibit-3.webp";
import exhibit4 from "./assets/exhibit-4.webp";
import contactFace from "./assets/contact-face.webp";
import contactPalette from "./assets/contact-palette.webp";
import smallSea from "./assets/small-sea.webp";

export const assets = {
  heroPortrait,
  heroWave,
  heroYellow,
  heroRight,
  video,
  smallSea,
  contactFace,
  contactPalette,
};

export const gallery = [
  { src: galleryLarge, className: "lg:col-span-5 lg:row-span-2" },
  { src: galleryTop, className: "lg:col-span-3" },
  { src: galleryCyan, className: "lg:col-span-3" },
  { src: galleryButton, className: "lg:col-span-3", cta: "VIEW MORE" },
  { src: galleryMoon, className: "lg:col-span-3" },
  { src: galleryPlate, className: "lg:col-span-4" },
  { src: galleryBlue, className: "lg:col-span-4" },
  { src: galleryFlower, className: "lg:col-span-4" },
];

export const exhibitions = [
  { src: exhibit1 },
  { src: exhibit2 },
  { src: exhibit3 },
  { src: exhibit4 },
];

export const timeline = [
  ["2016", "Opened a first quiet studio and began the liquid color studies."],
  ["2019", "Built the Marvelous Enough series around motion, portraiture, and abstraction."],
  ["2022", "Presented museum-scale work across coastal galleries and artist residencies."],
  ["2026", "Developing live painting rooms, public talks, and experimental exhibition films."],
];

export const skills = [
  "Large format acrylic",
  "Liquid pigment direction",
  "Portrait staging",
  "Exhibition concept",
  "Color theory",
  "Studio film direction",
];

export const awards = [
  "Independent Visual Voice Award",
  "Emerging Painter Residency",
  "Gallery Selection Prize",
  "Public Art Commission Shortlist",
];

export const exhibitionEvents = [
  {
    slug: "blue-chapel",
    title: "Blue Chapel",
    date: "Jul 18, 2026",
    location: "Oxford Rotunda, UK",
    image: exhibit4,
    status: "Upcoming",
    detail: "A quiet collection of cathedral blues, still water, and suspended light.",
  },
  {
    slug: "yellow-current",
    title: "Yellow Current",
    date: "Aug 09, 2026",
    location: "Lumen Hall, Berlin",
    image: galleryLarge,
    status: "Upcoming",
    detail: "A charged room of yellow-black works made from poured movement.",
  },
  {
    slug: "inside-water",
    title: "Inside Water",
    date: "Sep 21, 2026",
    location: "North Glass Museum",
    image: galleryBlue,
    status: "Upcoming",
    detail: "Paintings about depth, silence, and the sense of entering a color.",
  },
  {
    slug: "city-of-light",
    title: "City Of Light",
    date: "Mar 14, 2025",
    location: "Aster Gallery, Paris",
    image: exhibit2,
    status: "Past",
    detail: "An architectural exhibition pairing modern forms with painterly rhythm.",
  },
  {
    slug: "flower-noise",
    title: "Flower Noise",
    date: "Nov 03, 2024",
    location: "Mica Room, Milan",
    image: galleryFlower,
    status: "Past",
    detail: "Dark botanical canvases, yellow heat, and sharp organic silhouettes.",
  },
];

export const posts = [
  {
    slug: "why-color-needs-risk",
    title: "Why Color Needs Risk",
    category: "Studio Notes",
    date: "Jun 12, 2026",
    tags: ["color", "process", "painting"],
    image: galleryYellowFallback(),
    excerpt: "A studio note on pressure, brightness, and the point where a canvas begins talking back.",
  },
  {
    slug: "building-a-room-for-paint",
    title: "Building A Room For Paint",
    category: "Exhibition",
    date: "May 29, 2026",
    tags: ["gallery", "space", "installation"],
    image: video,
    excerpt: "How wall scale, walking paths, and silence change the way a painting is understood.",
  },
  {
    slug: "portrait-as-weather",
    title: "Portrait As Weather",
    category: "Essay",
    date: "Apr 18, 2026",
    tags: ["portrait", "artist", "essay"],
    image: heroRight,
    excerpt: "A portrait is less a face than a climate: posture, light, object, and breath.",
  },
  {
    slug: "the-blue-underneath",
    title: "The Blue Underneath",
    category: "Process",
    date: "Feb 07, 2026",
    tags: ["blue", "process", "water"],
    image: galleryBlue,
    excerpt: "Notes from a week of building darkness, reflection, and a small impossible pool.",
  },
];

function galleryYellowFallback() {
  return galleryLarge;
}

export const faqs = [
  ["Do you accept commissions?", "Yes, selected private and public commissions are reviewed each season."],
  ["Can I book a studio visit?", "Studio visits are available by appointment for collectors, curators, and collaborators."],
  ["Where are original works sold?", "Original pieces are sold through exhibitions, partner galleries, and direct studio inquiries."],
  ["Do you ship internationally?", "Yes, framed and unframed works can be shipped with insured fine-art handling."],
];
