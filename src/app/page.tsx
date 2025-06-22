export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="text-purple-400">My Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional web applications using modern technologies like React, Next.js, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View My Work
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker', 'Ubuntu', 'Git'].map((tech) => (
              <div key={tech} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                <h3 className="text-white font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
            
            {/* Networking & Security */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Networking & Security</h3>
              <ul className="list-disc list-inside">
                <li>Firewall Configuration (UFW), ACLs</li>
                <li>Network Segmentation, VPN, DNS, DHCP</li>
                <li>Packet Capture (Wireshark)</li>
                <li>OSI Model Troubleshooting</li>
                <li>IDS/IPS Concepts</li>
                <li>Vulnerability Scanning (Nmap NSE)</li>
                <li>Log Analysis (Syslog)</li>
              </ul>
            </div>

            {/* System Administration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">System Administration</h3>
              <ul className="list-disc list-inside">
                <li>Windows Server, Linux (Ubuntu/Kali)</li>
                <li>Group Policy (GPO), Active Directory</li>
                <li>Microsoft Entra (Azure AD), GSuite Admin</li>
                <li>Endpoint Security Hardening</li>
              </ul>
            </div>

            {/* Cloud & Virtualization */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Cloud & Virtualization</h3>
              <ul className="list-disc list-inside">
                <li>Microsoft Azure, Basic AWS</li>
                <li>VMware, Hyper-V</li>
                <li>Microsoft 365 (Exchange, SharePoint, Teams, Intune)</li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Tools & Platforms</h3>
              <ul className="list-disc list-inside">
                <li>SolarWinds, Cisco Meraki</li>
                <li>ServiceNow, Automox (Patch Management)</li>
                <li>SQL (Basic Reporting)</li>
                <li>Command-line tools: ping, traceroute, etc.</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Soft Skills</h3>
              <ul className="list-disc list-inside">
                <li>Customer-Focused Technical Support (Tier 1–3)</li>
                <li>Documentation & SOP Writing</li>
                <li>Incident Response Collaboration</li>
                <li>Asset Management</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
