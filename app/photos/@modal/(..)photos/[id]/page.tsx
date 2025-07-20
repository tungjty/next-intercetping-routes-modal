import Modal from "@/components/Modal";
import PhotoCard from "@/components/PhotoCard";
import photos, { Photo } from "@/lib/photos";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
