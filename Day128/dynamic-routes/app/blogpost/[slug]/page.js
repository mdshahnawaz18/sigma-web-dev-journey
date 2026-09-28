export default async function Page({ params }) {


// throw new Error("error aa agya shibu")

    let languages = ["python", "javascript", "java", "cpp", "cs"]
    const {slug} = await params

    if (languages.includes(slug)) {
        return <div>My Post : {slug}</div>
    }
    else {
        return <div>Page Not Found</div>

    }
    return <p>My Post: {slug}</p>
}