"use client";
import { useParams } from "next/navigation";

interface IParams {
  [key: string]: string; // Signatura de índice para el tipo string
  id: string;
}

export default function page() {
  const { id } = useParams<IParams>();
  return <div>page {id}</div>;
}
