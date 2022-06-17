import { Header } from "@/components/Header";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout ({children}: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}