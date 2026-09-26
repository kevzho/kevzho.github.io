import { FileDown, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/content/site";

// Icon-only social links; the label shows as a tooltip and is the accessible name.
export function SocialIcons({ size = "md", withResume = false }: { size?: "sm" | "md"; withResume?: boolean }) {
  return (
    <ul className={`social-icons is-${size}`}>
      {socialLinks.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              data-label={link.label.toLowerCase()}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener" : undefined}
            >
              {link.icon === "mail" ? (
                <Mail aria-hidden="true" />
              ) : (
                <span className="glyph" style={{ "--glyph": `url(${link.icon})` } as React.CSSProperties} aria-hidden="true" />
              )}
              {link.label === "Lifting Instagram" && <span className="social-badge" aria-hidden="true">lifts</span>}
            </a>
          </li>
        );
      })}
      {withResume && (
        <li>
          <a href={siteConfig.resumePath} download aria-label="Resume (PDF)" data-label="resume">
            <FileDown aria-hidden="true" />
          </a>
        </li>
      )}
    </ul>
  );
}
