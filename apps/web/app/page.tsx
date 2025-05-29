import Image, { type ImageProps } from "next/image";
import { Button } from "../components/ui/button";
import styles from "./page.module.css";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Button className="outline">Click here !</Button>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      ;
    </div>
  );
}
