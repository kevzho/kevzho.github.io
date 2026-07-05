import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function PixelButton(props: ButtonProps | LinkProps) {
  const className = clsx("pixel-button", props.variant && `pixel-button--${props.variant}`, props.className);

  if (typeof (props as LinkProps).href === "string") {
    const { children, href, ...rest } = props as LinkProps;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    const { variant, className: ignoredClassName, ...linkProps } = rest;
    void variant;
    void ignoredClassName;

    if (isExternal) {
      return (
        <a className={className} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} {...linkProps}>
          {children}
          {href.startsWith("http") ? <ArrowUpRight aria-hidden="true" size={15} /> : null}
        </a>
      );
    }

    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  const buttonOnly = props as ButtonProps;
  const { children, variant, className: ignoredClassName, ...buttonProps } = buttonOnly;
  void variant;
  void ignoredClassName;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
