'use client';

import { useRouter } from "next/navigation";

export default function register() {
    const router = useRouter();
    const handleClientSendFormRegister = () => {
    console.log("Bien inscrit");
    router.push("/login");
  };

  return (
    <>
      <h1>Register</h1>

      <button onClick={handleClientSendFormRegister}>S'inscrire</button>
    </>
  );
}
