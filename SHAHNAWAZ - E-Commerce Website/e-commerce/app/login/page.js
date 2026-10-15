"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter()

    const [form, setForm] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const res = await fetch("api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Login Failed")
                return
            }

            router.replace("/")
            router.refresh()
        } catch {
            setError("Unable to connect. Please try again.")
        } finally {
            setLoading(false)
        }
    }
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <h1 className="
                text-center text-3xl font-bold  text-blue-600">
                    Welcome Back
                </h1>
                <p className="mt-2 text-center text-gray-500">
                    Login To Zenvyra
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">

                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" autoComplete="email" required type="email" className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 " />

                    <input name="password" value={form.password} onChange={handleChange} placeholder="Password" autoComplete="current-password" required type="email" className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400" />

                    {error && (
                        <p role="alert" className="text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <button type="submit" disabled={loading} className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60">
                        {loading ? "Logging in...." : "Login"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/signup" className="font-semibold text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </div>

        </main >
    )
}