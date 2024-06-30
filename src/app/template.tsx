import Header from "@/components/Header";
import { ReactNode } from "react";

export default function template({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
}
