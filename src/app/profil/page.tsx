import Link from "next/link";
import { Metadata } from "next";


export const metadata = {
    title: 'Profil'
}


export default function profil() {
  return (
    <>
      <h1>User</h1>
      <Link href={"user/1"}>Profil utilisateur 1</Link>
      <Link href={"tos"}>Terms of Serviçes</Link>
      <Link href={"tos"}>Terms of Serviçes</Link>
    </>
  );
}
