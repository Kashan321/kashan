import { useState, useEffect, useContext } from 'react'
import { Menu, X, Linkedin, Mail, Moon, Sun, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ThemeContext } from '../Providers/ThemeProvider'
import Footer from './Footer'
import AboutMe from './AboutMe'
import FancyLog from './FancyLog'
import img from "../assets/Images/ev.png"
import MERN_JWT from "../assets/Images/MERN_JWT.png"
import Weather from "../assets/Images/Weather.png"
import openAi from "../assets/Images/openAi.jpeg"
import DASHBOARD from "../assets/Images/DASHBOARD.avif"
import Project from "../assets/Images/Projects.png"
import Headroom from 'react-headroom'
import Contact from './Contact'
import DownloadIcon from '@mui/icons-material/Download';
import Resume from "../assets/kashan_v2.pdf"
import ScrollAnimation from 'react-animate-on-scroll';



const projects = [
    { id: 1, title: 'Project 1', description: 'Ev Charger Station Finder In React Native', image: img },
    { id: 2, title: 'Project 2', description: 'Full Stack Authentication App in MERN', image: MERN_JWT },
    { id: 3, title: 'Project 3', description: 'Professional Weather App In React', image: Weather },
    { id: 4, title: 'Project 4', description: 'Worked With OpenAI As React Engineer', image: openAi },
    { id: 5, title: 'Project 5', description: 'Frontend Dashboard Project', image: DASHBOARD },
    { id: 6, title: 'Project 6', description: '15+ FullStack/Frontednd Projects ', image: Project },
]

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', "MERN"]

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
    )
}

function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme } = useContext(ThemeContext) // Use the context correctly

    // The useEffect ensures dark mode is applied on mount
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])

    return (
        <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ${theme}`}>
            <Headroom>
                <nav className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-lg border border-white/10 dark:border-gray-700/20 rounded-lg z-50  w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <span className="text-2xl font-bold text-gray-800 dark:text-white">KASHAN</span>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8 ">
                                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                <a href="#fancy-log" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Planning</a>
                                <ThemeToggle />
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                <ThemeToggle />
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="sm:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Me</a>
                                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                                <a href="#fancy-log" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Fancy Log</a>
                            </div>
                        </div>
                    )}
                </nav>
            </Headroom>




            <main>
                <main>
                    <section className="bg-white dark:bg-gray-800 sm:h-[60vh] h-[50vh]">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <ScrollAnimation animateIn="fadeIn">
                                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                                        Welcome to My Portfolio
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                                        I'm a passionate Software Engineer, Professional In React and React Native
                                    </p>
                                </ScrollAnimation>

                                <div className="mt-6 flex justify-center space-x-3">
                                    <a
                                        href="#contact"
                                        className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                                    >
                                        Hire Me
                                    </a>
                                    <div className=''>
                                        <a
                                            href={Resume}
                                            className="inline-block px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                                            download={Resume}
                                        >
                                            <DownloadIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <ScrollAnimation animateIn='fadeIn' >
                                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">My Projects</h2>
                            </ScrollAnimation>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                modules={[Pagination]}
                                className="relative pb-10 z-0"
                            >
                                {projects.map((project) => (
                                    <SwiperSlide key={project.id}>
                                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
                                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                            <div className="p-3">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section>

                    <section id="skills" className="bg-white dark:bg-gray-800 py-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">My Skills</h2>
                            <div className="flex flex-wrap gap-4">
                                {skills.map((skill, index) => (
                                    <span key={index} className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="about" className="py-10">
                        <AboutMe />
                    </section>
                    <section id="fancy-log" className="py-10">
                        <FancyLog />
                    </section>
                    <Contact />
                </main>

            </main>

            <Footer />
        </div>

    )
}

export default Portfolio
