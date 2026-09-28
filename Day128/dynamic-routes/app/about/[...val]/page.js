export default async function Page({ params }) {
const names = await params
    console.log(names)
    return <p>I am a page check console</p>
}