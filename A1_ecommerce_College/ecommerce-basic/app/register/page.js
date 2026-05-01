export default function Register() {
  return (
    <div className="p-10">
      <h2>Register</h2>
      <input placeholder="Name" className="border p-2 block my-2"/>
      <input placeholder="Email" className="border p-2 block my-2"/>
      <input placeholder="Password" className="border p-2 block my-2"/>
      <button className="bg-green-500 text-white px-4 py-2">Register</button>
    </div>
  )
}