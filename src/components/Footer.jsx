import { Linkedin, Mail, Github } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0">
          {/* Left section: Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Muhammad Kashan Haider. All rights reserved.
            </p>
          </div>

          {/* Right section: Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Kashan321" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/mkashanhaider" target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:muhammadkashanhaider3241@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer