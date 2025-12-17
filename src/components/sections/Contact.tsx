

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          {/* <a
          
           href="mailto:thisisyashgarg@gmail.com"
          className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-medium">
            Get in Touch
          </a> */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground">
            I'm available for freelance projects and full-time positions.
            Feel free to reach out if you'd like to work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center reveal">
          {/* <div className="lg:col-span-2 space-y-8">
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Reach out via email or social media
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${data.social.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span>{data.social.email}</span>
                </a>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span>Remote - Worldwide</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <div className="flex gap-4">
                  <a
                    href={data.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={data.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={data.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          
          {/* <div className="lg:col-span-3">
            <form className="glass-effect rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border bg-background/70 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border bg-background/70 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-2.5 rounded-lg border bg-background/70 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border bg-background/70 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
