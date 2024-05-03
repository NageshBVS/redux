"use client";
import Image from "next/image";
import styles from "./page.module.css";
import A from "@/A/A";
import B from "@/B/B";
import C from "@/C/C";
import D from "@/D/D";

export default function Home() {
  return (
    <div>
      <A />
      <B />
      <C />
      <D />
    </div>
  );
}
