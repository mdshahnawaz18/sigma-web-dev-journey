export default function Login() {
  return (
    <div className="p-10">
      <h2>Login</h2>
      <input placeholder="Email" className="border p-2 block my-2"/>
      <input placeholder="Password" className="border p-2 block my-2"/>
      <button className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  )
}