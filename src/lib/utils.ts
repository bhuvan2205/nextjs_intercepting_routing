import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(duration = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res("data");
    }, duration);
  });
}
