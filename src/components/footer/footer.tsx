import React from 'react';
import { SVGS } from '@/assets/svgs';
import { getSubscriptionList } from '@/utils/subscription-list';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-foreground w-full">
      <div className="max-w-5xl px-4 py-8 flex flex-col gap-6 md:gap-8">
        {/* Contact */}
        <div className="text-base md:text-lg">
          <span>Contact: </span>
          <a
            href="mailto:business@sociallysacceptedpod.com"
            className="text-cyan-400 hover:underline"
          >
            business@sociallysacceptedpod.com
          </a>
        </div>
        {/* Socials */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Follow Us:</span>
          <a href="#" className="hover:opacity-80">
            <SVGS.Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80">
            <SVGS.Linkedin className="w-6 h-6" />
          </a>
        </div>
        {/* Quick Links */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-base md:text-lg">
          <span className="font-semibold">Quick Links:</span>
          <a href="/" className="hover:underline">
            Home
          </a>
          <span>|</span>
          <a href="/episodes" className="hover:underline">
            Episodes
          </a>
          <span>|</span>
          <a href="/about" className="hover:underline">
            About
          </a>
          <span>|</span>
          <a href="/support" className="hover:underline">
            Support
          </a>
          <span>|</span>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
        {/* Policies */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-base md:text-lg">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
        {/* Subscribe */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold">Subscribe:</span>
          <div className="flex flex-wrap items-center gap-3">
            {getSubscriptionList(true).map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs md:text-sm py-3 px-4 text-left">
        © 2024 Socially Accepted. All rights reserved.
      </div>
    </footer>
  );
};
