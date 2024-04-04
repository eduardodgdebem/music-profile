import { SignInButton } from "../_components/signInButton";

export default function signIn() {
  return (
    <section className="flex h-full w-full items-center justify-center flex-col gap-4">
      <h1 className="text-4xl">Music Profile</h1>
      <SignInButton />
    </section>
  );
}
