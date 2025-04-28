import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A19] border-t border-white/10" id="contact">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="/" className="text-white font-bold text-2xl block mb-6">
              <span className="text-[#0066FF]">DRAPER</span> NETWORK
            </a>
            <p className="text-white/70 mb-6">
              A global network of independent venture funds, working together to support extraordinary entrepreneurs.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0066FF]/20 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Network Benefits', href: '#network' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-white/70">
                <strong className="text-white">San Francisco:</strong><br />
                55 2nd Street, Suite 900<br />
                San Francisco, CA 94105
              </li>
              <li className="text-white/70">
                <strong className="text-white">Email:</strong><br />
                info@drapernetwork.com
              </li>
              <li className="text-white/70">
                <strong className="text-white">Phone:</strong><br />
                +1 (415) 555-0123
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated on the latest news, events, and investment opportunities.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 focus:border-transparent"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#0066FF] hover:bg-[#0055CC] text-white px-4 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Draper Venture Network. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;