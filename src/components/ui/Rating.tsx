import { Star } from "lucide-react";

export function Rating({ value, count }: { value: number; count?: number }) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-2 text-sm" aria-label={`Rating ${value} out of 5`}>
      <span className="flex text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={`size-3.5 ${index < rounded ? "fill-gold" : "opacity-30"}`} />
        ))}
      </span>
      <span>{value.toFixed(1)}</span>
      {typeof count === "number" ? <span className="text-muted">({count} demo)</span> : null}
    </div>
  );
}
