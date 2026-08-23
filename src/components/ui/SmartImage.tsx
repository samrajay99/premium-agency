import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

export function SmartImage({ src, alt, ...props }: Props) {
  const unoptimized = src.endsWith(".svg") || props.unoptimized;
  return <Image src={src} alt={alt} unoptimized={unoptimized} {...props} />;
}
