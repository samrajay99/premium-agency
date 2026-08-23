import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-gold text-[#161410] hover:bg-gold-strong shadow-[0_10px_30px_rgba(212,176,122,0.18)]",
  secondary:
    "border border-line bg-transparent text-foreground hover:border-gold hover:text-gold",
  ghost: "text-muted hover:text-foreground",
} as const;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function Button({ href, variant = "primary", className = "", children, ...props }: Props) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
