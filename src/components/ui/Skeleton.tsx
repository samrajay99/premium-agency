export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-2xl bg-bg-muted ${className}`} />;
}

export function ProfileCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line">
      <Skeleton className="aspect-[4/5] rounded-none" />
      <div className="space-y-3 p-4">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}
