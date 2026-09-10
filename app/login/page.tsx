import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { signIn } from "@/auth";

async function authenticate(formData: FormData) {
  "use server";

  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/login?error=invalid");
    }

    throw error;
  }
}

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <section style={{ width: "100%", maxWidth: "420px" }}>
        <h1>MELKISM</h1>
        <p>Sign in to your account.</p>

        <form action={authenticate}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={{
                display: "block",
                width: "100%",
                marginTop: "0.35rem",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              minLength={12}
              style={{
                display: "block",
                width: "100%",
                marginTop: "0.35rem",
              }}
            />
          </div>

          <button type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
