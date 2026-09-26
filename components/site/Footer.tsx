import { SocialIcons } from "@/components/site/SocialIcons";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-inner">
        <figure className="site-footer-quote">
          <blockquote>&ldquo;the end is never the end.&rdquo;</blockquote>
          <figcaption>— jl</figcaption>
        </figure>
        <div className="site-footer-row">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <nav aria-label="Elsewhere">
            <SocialIcons size="sm" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
