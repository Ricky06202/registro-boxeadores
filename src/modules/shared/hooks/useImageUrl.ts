import { useEffect, useState } from "react";

export function useImageUrl(imagen?: any) {
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (!imagen) return;
    const imagenBytes = Object.values(imagen) as number[];
    const byteArray = new Uint8Array(imagenBytes);
    const imageBlob = new Blob([byteArray], { type: "image/*" });
    const blobUrl = URL.createObjectURL(imageBlob);
    setImgUrl(blobUrl);
    return () => URL.revokeObjectURL(blobUrl);
  }, [imagen]);
  return imgUrl;
}
