export default function Gallery({ images, className = "" }: { images: string[]; className?: string }) {
  if (!images.length) return null;
  return (
    <div className={`-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 ${className}`}>
      {images.map((src) => (
        <img key={src} src={src} alt="" loading="lazy" className="h-64 w-48 shrink-0 snap-start rounded-2xl border border-border object-cover sm:h-80 sm:w-60" />
      ))}
    </div>
  );
}
