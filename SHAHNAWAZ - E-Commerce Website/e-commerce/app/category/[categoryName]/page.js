
import CategoryClient from './CategoryClient/page';

const category = async ({ params }) => {

    const paraName = await params
    const categoryname = paraName.categoryName
    // const categoryname = params.categoryName

if(!categoryname){
return <p>Loading...</p>;
}

    return <CategoryClient categoryname={categoryname} />;
}

export default category





