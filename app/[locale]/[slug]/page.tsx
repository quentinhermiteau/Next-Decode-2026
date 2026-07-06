"use client";

import { useParams } from "next/navigation";

// /fr/toto
// locale = fr
// slug = toto
export default function SlugPage() {
  const params = useParams();

  return <div>Valeur du slug: {params.slug}</div>;
}
