import type { PropertyMediaReference } from "@/lib/property-platform/property.types";

interface PropertyMediaGalleryProps {
  media: PropertyMediaReference[];
}

export default function PropertyMediaGallery({
  media,
}: PropertyMediaGalleryProps) {
  return (
    <section aria-label="Property media gallery">
      {media.map((item) => (
        <div key={item.id}>
          {item.title ?? item.type}
        </div>
      ))}
    </section>
  );
}
