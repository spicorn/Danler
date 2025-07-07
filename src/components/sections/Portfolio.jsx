import Spline from '@splinetool/react-spline';
import { FiArrowRight } from 'react-icons/fi';
import afz from '/images/afz.png';
import vakani from '/images/vakani.png';
import tob from '/images/tob.png';
import mineral from '/images/mineral.png';
import { isMobile } from '../../utils/isMobile';
import instant from '/images/instant.png';

const projects = [
  {
    id: 1,
    title: 'Instant Homes',
    description: "Instant Homes is Zimbabwe's leading provider of high-quality, customizable, and sustainable prefab homes. Our homes are adapted from Australian designs to suit Zimbabwean needs, ensuring comfort, efficiency, and affordability for all.",
    image: instant,
    liveUrl: 'https://spicorn.github.io/instanthomes',
    featured: false,
  },
  {
    id: 2,
    title: 'Associated Foods Zimbabwe',
    description: 'Associated Foods Zimbabwe is a leading food manufacturer and distributor of quality Spreads, Canned Products, Preserves and Snack Foods in Zimbabwe.',
    image: afz,
    liveUrl: 'https://spicorn.github.io/Associated-Foods-ZImbabwe',
    
  },
  {
    id: 3,
    title: 'Vakani Bricks',
    description: 'Vakani is a leading building materials company that provides high quality products and reliable services to customers and communities in and around Zimbabwe.',
    image: vakani,
    liveUrl: 'https://spicorn.github.io/Vakani',
    
  },
  {
    id: 4,
    title: 'TOB Energy',
    description: 'TOB Energy (Private) Limited is a Zimbabwean indigenous trading firm. Its organizational roots stem from efficiently sourcing and producing services and products enabling us to deliver them to the customers at a fair cost timeously whilst upholding quality standards.',
    image: tob,
    liveUrl: 'https://spicorn.github.io/tobenergy',
    featured: false,
  },
  {
    id: 5,
    title: 'Mineral Marven Consultancy',
    description: 'Mineral Maven Mining is a trusted mining consultancy that provides expert guidance and solutions to help mining companies optimize their operations, improve efficiency, and reduce costs.It also connects mining companies with investors and provides expert guidance to help them succeed.',
    image: mineral,
    liveUrl: 'https://spicorn.github.io/Marvern',
    featured: false,
  },
];

const Portfolio = () => (
  <section id="projects" className="py-10 relative overflow-hidden">
    {/* Spline 3D Portfolio Background with Parallax and Glow */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 z-0 transition-transform duration-300 pointer-events-none" style={{ filter: 'drop-shadow(0 0 60px #7f9cf5) blur(0.5px)', opacity: 0.90 }}>
        <Spline scene="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-transparent dark:from-primary-900/10 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-primary-50/15 dark:to-primary-900/5 pointer-events-none" />
    <div className="container relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Our Portfolio
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our latest projects and see how we transform ideas into exceptional digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <img src={project.image} alt={project.title} className="object-contain h-full w-full" loading="lazy" />
            </div>
            {/* Project Info */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">
                {project.description}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 text-white font-semibold shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary-600/90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-400/60"
                style={{ minWidth: 180 }}
              >
                View Project
                <FiArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              {project.featured && (
                <span className="ml-2 mt-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-medium rounded-full">Featured</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio; 
