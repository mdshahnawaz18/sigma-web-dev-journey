export default function Header() {
  return (
    <div className="bg-slate-800 text-white p-4 flex justify-between">
      <h1>Ecom</h1>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
      </div>
    </div>
  )
}