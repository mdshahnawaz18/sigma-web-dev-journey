import fs from "fs/promises"
import fsm from "fs"
import path from "path"

let basePath = "C:\\Users\\Md Shahnawaz\\OneDrive\\Desktop\\Sigma Web Development Course\\Day93"

let files = await fs.readdir(basePath)
console.log('files', files);

for (const item of files) {
    let ext = item.split(".").pop()
    console.log(ext);

    if (ext != "js" && ext != "json" && ext != "html" && item.split(".").length > 1) {

        if (fsm.existsSync(path.join(basePath , ext))){
            fs.rename(path.join(basePath , item) , path.join(basePath , ext , item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basePath , item) , path.join(basePath , ext , item))

        }
    }

}