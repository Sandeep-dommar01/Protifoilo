'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900">
              Home
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-900 font-medium">
                About
              </Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/about" 
                  className="text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/experience" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  href="/projects" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none">            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Cybersecurity-focused IT professional with over 2 years of hands-on 
              experience in network administration, IT support, and system security.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              I have proven expertise in network troubleshooting, patch management, firewall support, and 
              vulnerability assessments. Completed Master&apos;s degree in Information Technology with 
              Cybersecurity focus and actively pursuing CompTIA Security+ certification.
            </p>

            <p className="text-gray-700 leading-relaxed mb-12">
              Based in Columbus, OH, I&apos;m passionate about cybersecurity and committed to protecting digital 
              infrastructure through proactive security measures and continuous learning.
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Education</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-200 pl-6">                <h3 className="text-xl font-medium text-gray-900">Master of Science in Information Technology</h3>
                <p className="text-gray-600 mb-2">Franklin University – Columbus, OH</p>
                <p className="text-gray-500 text-sm mb-2">Sep 2023 – Jun 2025 (Completed)</p>
                <p className="text-gray-700">Cybersecurity Focus</p>
                <p className="text-gray-600 text-sm mt-1">
                  Relevant Courses: Network Security, Ethical Hacking, Cloud Security, Risk Management
                </p>
              </div>
              
              <div className="border-l-4 border-green-200 pl-6">
                <h3 className="text-xl font-medium text-gray-900">Bachelor of Technology in Computer Science</h3>
                <p className="text-gray-600 mb-2">Jawaharlal Nehru Technological University – Hyderabad, India</p>
                <p className="text-gray-500 text-sm">Jul 2016 – Oct 2020</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-2">CompTIA Security+ (SY0-701)</h3>
                <p className="text-gray-600 text-sm">In Progress, Est. June 2025</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-2">Microsoft Certified: Azure Fundamentals</h3>
                <p className="text-gray-600 text-sm">Completed</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 md:col-span-2">
                <h3 className="font-medium text-gray-900 mb-2">Google IT Support Professional Certificate</h3>
                <p className="text-gray-600 text-sm">Completed</p>
              </div>
            </div>
          </div>          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Networking & Security</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Firewall Configuration (UFW), ACLs</li>
                  <li>• Network Segmentation, VPN, DNS, DHCP</li>
                  <li>• Packet Capture (Wireshark)</li>
                  <li>• OSI Model Troubleshooting</li>
                  <li>• IDS/IPS Concepts</li>
                  <li>• Vulnerability Scanning (Nmap NSE)</li>
                  <li>• Log Analysis (Syslog)</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-4">System Administration</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Windows Server, Linux (Ubuntu/Kali)</li>
                  <li>• Group Policy (GPO), Active Directory</li>
                  <li>• Microsoft Entra (Azure AD), GSuite Admin</li>
                  <li>• Endpoint Security Hardening</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-600 mb-4">Cloud & Virtualization</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Microsoft Azure, Basic AWS</li>
                  <li>• VMware, Hyper-V</li>
                  <li>• Microsoft 365 (Exchange, SharePoint, Teams, Intune)</li>
                </ul>
              </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-600 mb-4">Tools & Platforms</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• SolarWinds Network Monitoring</li>
                  <li>• Cisco Meraki Dashboard</li>
                  <li>• ServiceNow ITSM Platform</li>
                  <li>• Automox Patch Management</li>
                  <li>• Microsoft SCCM</li>
                  <li>• Wireshark Protocol Analyzer</li>
                  <li>• Nmap Network Scanner</li>
                  <li>• PowerShell & Bash Scripting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
