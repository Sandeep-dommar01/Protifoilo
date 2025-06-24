import Link from 'next/link'

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">            <Link href="/" className="font-semibold text-gray-900">
              Home
            </Link>
            <div className="flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="/projects" className="text-gray-900 font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Projects</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Here are some key projects that demonstrate my expertise in cybersecurity, 
            automation, and software development.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI-Driven Cybersecurity Project */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-bold">Cybersecurity as a Service</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">AI-Driven Cybersecurity as a Service</h4>
                <p className="text-gray-600 mb-4">
                  Built a comprehensive cloud-based security solution integrating multiple threat detection APIs 
                  with automated analysis and reporting capabilities.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Integrated AWS GuardDuty and VirusTotal API for comprehensive threat detection</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Automated scanning of files, URLs, and IPs for malware and phishing threats</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Created Django dashboard for threat visualization and incident response</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Reduced manual threat validation efforts by 40% through automation</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'AWS GuardDuty', 'VirusTotal API', 'REST APIs'].map((tech) => (
                      <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">
                    Impact: 40% reduction in manual threat validation time
                  </p>
                </div>
              </div>
            </div>

            {/* Django Code Quality Analyzer */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold">Code Quality Analyzer</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Django Code Quality Analyzer</h4>
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive static code analysis pipeline for Django projects, focusing on 
                  code quality metrics and security compliance.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Built analysis pipeline using Radon and Pylint for comprehensive code review</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Measured cyclomatic complexity and enforced coding standards</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Achieved code quality score of 6.69/10 with automated recommendations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Improved maintainability and security hygiene for Python web applications</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'Radon', 'Pylint', 'Static Analysis'].map((tech) => (
                      <span key={tech} className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm font-medium">
                    Quality Score: 6.69/10 with automated improvement suggestions
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                  <h3 className="text-xl font-bold">Portfolio Website</h3>
                </div>
              </div>
              
              <div className="p-6">                <h4 className="text-xl font-semibold text-gray-900 mb-3">Modern Portfolio Website</h4>
                <p className="text-gray-600 mb-4">
                  Built a responsive, modern portfolio website with automated CI/CD deployment 
                  and private server hosting infrastructure.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Developed with Next.js, TypeScript, and Tailwind CSS</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Implemented automated CI/CD pipeline with GitHub Actions</span>
                  </div>                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Deployed on private Ubuntu server with PM2 process management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Secured with HTTPS tunneling via ngrok and firewall configuration</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'Ubuntu', 'PM2', 'Nginx'].map((tech) => (
                      <span key={tech} className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                  <p className="text-indigo-800 text-sm font-medium">
                    Live deployment on private server with automated updates on every code push
                  </p>
                </div>
              </div>
            </div>

            {/* Lab Environment */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="text-xl font-bold">Security Lab</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity Lab Environment</h4>
                <p className="text-gray-600 mb-4">
                  Designed and maintained a comprehensive cybersecurity lab for hands-on learning 
                  and practical security testing scenarios.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Set up virtualized network environment with multiple VLANs</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Implemented various attack scenarios for penetration testing practice</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Configured SIEM solutions for log analysis and threat detection</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">Practiced incident response procedures and forensic analysis</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['VMware', 'Kali Linux', 'pfSense', 'Wireshark', 'Metasploit', 'Nmap', 'SIEM'].map((tech) => (
                      <span key={tech} className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm font-medium">
                    Hands-on environment for Security+ certification preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
