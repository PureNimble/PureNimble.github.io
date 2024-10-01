import pureNimble from '../assets/pureNimbleLogo.png';
import { FaGithubAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, url, date, logo }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-content-light dark:bg-content-dark rounded-lg shadow-lg overflow-hidden w-full h-full transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-500 flex flex-col justify-between">
                <div>
                    {
                        logo ? (
                            <>
                                <img src={logo.dark} alt="Project Logo" className="w-full h-64 scale-75 dark:hidden transition-transform duration-300 group-hover:scale-100" />
                                <img src={logo.light} alt="Project Logo" className="w-full h-64 scale-75 hidden dark:block transition-transform duration-300 group-hover:scale-100" />
                            </>
                        ) : (
                            <FaGithubAlt className="w-full h-64 scale-75 text-bkg-dark dark:text-bkg-light transition-transform duration-300 group-hover:scale-100" />
                        )
                    }
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-accent1-light dark:text-accent1-dark mb-2 transition-colors duration-300 group-hover:text-content-dark dark:group-hover:text-content-light">
                            {title}
                        </h2>
                        <p className="text-accent2-light dark:text-accent2-dark leading-tight line-clamp-5 mb-4 transition-colors duration-300 group-hover:text-content-dark dark:group-hover:text-content-light">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="pb-6 pr-6 pl-6 bg-transparent flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={pureNimble} alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover transition-transform duration-300" />
                        <span className="text-accent1-light dark:text-accent1-dark font-semibold transition-colors duration-300 group-hover:text-content-dark dark:group-hover:text-content-light">
                            PureNimble
                        </span>
                    </div>
                    <span className="text-accent1-light dark:text-accent1-dark transition-colors duration-300 group-hover:text-content-dark dark:group-hover:text-content-light">
                        {date}
                    </span>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
