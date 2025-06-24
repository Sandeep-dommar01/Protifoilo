import Link from 'next/link'

export default function Experience() {
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
              <Link href="/experience" className="text-gray-900 font-medium">
                Experience
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Experience Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Professional Experience</h1>
          
          <div className="space-y-16">
            {/* System Engineer Role */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-200"></div>
              <div className="pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-medium text-gray-900">System Engineer</h2>
                    <h3 className="text-lg text-blue-600 font-medium">Zensar Technologies</h3>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">May 2022 – Sep 2023</span>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Monitored and maintained network infrastructure across global client environments, including routers, Cisco Meraki switches, and wireless access points.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provided Level 1 technical support and basic configuration for Cisco Meraki devices (firewalls, APs, switches), ensuring secure connectivity and reliable performance.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Supported backup operations and assisted in routine restore testing procedures to validate disaster recovery capabilities.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Diagnosed network issues using tools like SolarWinds and Wireshark; conducted initial triage before escalation.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Delivered IT support for internal systems, remote users, and enterprise network resources using ServiceNow and remote access tools.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Maintained detailed technical documentation covering network topology, standards, and troubleshooting steps.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Participated in planning discussions with senior engineers to document capacity needs and contribute to infrastructure growth strategies.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborated with ISPs and vendors (Verizon, AT&T, Spectrum) for resolving circuit-level and external connectivity issues.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Assisted in monthly Windows patch management using Automox and contributed to endpoint security hardening efforts.
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Cisco Meraki', 'SolarWinds', 'Wireshark', 'ServiceNow', 'Automox', 'Windows Server', 'Active Directory'].map((tech) => (
                      <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Process Associate Role */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-green-200"></div>
              <div className="pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-medium text-gray-900">Process Associate</h2>
                    <h3 className="text-lg text-green-600 font-medium">Amazon India Pvt. Ltd.</h3>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Oct 2021 – May 2022</span>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Analyzed competitor pricing using internal tools; maintained high data accuracy.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Generated Excel-based reports and collaborated with pricing analysts for decision support.
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Excel', 'Data Analysis', 'Reporting Tools'].map((tech) => (
                      <span key={tech} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-20 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Technical Support</h3>
                <p className="text-gray-600 text-sm">Customer-focused Tier 1-3 support with strong problem-solving skills</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-600 text-sm">SOP writing and technical documentation for network topology and procedures</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Incident Response</h3>
                <p className="text-gray-600 text-sm">Collaborative approach to incident management and resolution</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
