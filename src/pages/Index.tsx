import { lazy, Suspense } from 'react';
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { BlogSection } from "@/components/portfolio/blog-section";

// Lazy load heavy components for better performance
const AboutSection = lazy(() => import("@/components/portfolio/about-section").then(module => ({ default: module.AboutSection })));
const ExperienceSection = lazy(() => import("@/components/portfolio/experience-section").then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import("@/components/portfolio/projects-section").then(module => ({ default: module.ProjectsSection })));
const CertificationsSection = lazy(() => import("@/components/portfolio/certifications-section").then(module => ({ default: module.CertificationsSection })));
const ContactSection = lazy(() => import("@/components/portfolio/contact-section").then(module => ({ default: module.ContactSection })));

/**
 * Section Loading Skeleton
 * Provides visual feedback while sections are loading
 */
function SectionSkeleton() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-secondary">
      <div className="space-y-4 text-center">
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-sm text-muted-foreground font-medium">Loading section...</p>
      </div>
    </div>
  );
}

/**
 * Main Portfolio Index Page
 * Features:
 * - Lazy loading for performance
 * - Proper semantic HTML structure
 * - Professional footer
 * - SEO optimized
 */
function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      {/* Meta tags for SEO - Would be better in a separate SEO component */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section - Loaded immediately (above the fold) */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* About Section - Lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>

        {/* Experience Section - Lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <ExperienceSection />
        </Suspense>

        {/* Projects Section - Lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>

<BlogSection /> 

        {/* Certifications Section - Lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <CertificationsSection />
        </Suspense>

        {/* Contact Section - Lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Professional Footer */}
      <footer className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />

        {/* Footer Content */}
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Haryono</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                IT Network & Infrastructure Specialist dengan dedikasi tinggi dalam 
                mengimplementasikan solusi teknologi yang inovatif dan scalable.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm text-primary-foreground/80">
                <a 
                  href="mailto:masharyono02@gmail.com"
                  className="block hover:text-primary-foreground transition-colors"
                >
                  masharyono02@gmail.com
                </a>
                <a 
                  href="https://wa.me/628112633779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary-foreground transition-colors"
                >
                  +62 811-2633-779
                </a>
                <a 
                  href="https://www.linkedin.com/in/haryon0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary-foreground transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
              <p>
                © {currentYear} Haryono. All rights reserved.
              </p>
              <p className="flex items-center gap-2">
                Built with 
                <span className="text-accent font-semibold">React</span>
                <span>•</span>
                <span className="text-accent font-semibold">TypeScript</span>
                <span>•</span>
                <span className="text-accent font-semibold">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
