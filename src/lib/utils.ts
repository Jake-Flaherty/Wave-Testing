import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Services } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAllServices(){
  return Services
}