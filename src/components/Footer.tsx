"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {siteConfig.footer.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/75 text-sm">
                {siteConfig.footer.copyright}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {siteConfig.footer.address}
              </p>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-white/60 text-xs">
                IELTS is a registered trademark of University of Cambridge ESOL,
                the British Council, and IDP Education Australia.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Writing9 is not affiliated, approved or endorsed by the
                University of Cambridge ESOL, the British Council, and IDP
                Education Australia.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/50 text-xs">
              Writing9 was developed to check essays from the IELTS Writing Task
              2 and Letters/Charts from Task 1. The service helps students
              practice writing for IELTS and improve their writing skills.
            </p>
            <div className="mt-4 flex justify-center items-center space-x-4 text-xs text-white/40">
              <span>0.5% of revenue goes to carbon removal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
