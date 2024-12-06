import React from 'react'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6"/>,
      label: 'Email',
      value: 'patricia.segantine@email.com',
      href: 'mailto:patricia.segantine@email.com'
    },
    {
      icon: <MapPin className="w-6 h-6"/>,
      label: 'Location',
      value: 'São Paulo, Brazil',
      href: '#'
    }
  ]
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5"/>,
      label: 'GitHub',
      href: 'https://github.com/patriciasegantine'
    },
    {
      icon: <Linkedin className="w-5 h-5"/>,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/patriciasegantine'
    }
  ]
  
  return (
    <section id="contact" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-primary-dark dark:text-zinc-50 mb-4">
              Let's Connect
            </h2>
            <p className="text-secondary dark:text-zinc-300">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-sm">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-zinc-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-700/50
                             border border-zinc-200 dark:border-zinc-700
                             text-primary-dark dark:text-zinc-100
                             focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
                             transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-zinc-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-700/50
                             border border-zinc-200 dark:border-zinc-700
                             text-primary-dark dark:text-zinc-100
                             focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
                             transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-zinc-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-700/50
                             border border-zinc-200 dark:border-zinc-700
                             text-primary-dark dark:text-zinc-100
                             focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
                             transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3
                           bg-zinc-800 dark:bg-zinc-700 rounded-lg
                           text-white font-medium
                           hover:bg-zinc-700 dark:hover:bg-zinc-600
                           focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600
                           transition-colors"
                >
                  <Send className="w-4 h-4"/>
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 shadow-sm space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                                  text-secondary dark:text-zinc-300
                                  group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700
                                  transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary dark:text-zinc-400">
                        {item.label}
                      </p>
                      <p
                        className="text-primary-dark dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-primary-dark dark:text-zinc-100 font-medium mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
                               text-secondary dark:text-zinc-300
                               hover:bg-zinc-200 dark:hover:bg-zinc-700
                               transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
