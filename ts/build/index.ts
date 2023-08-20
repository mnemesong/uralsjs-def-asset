import * as path from "path"
import * as browserify from "browserify"
import * as fs from "fs"

const testResPath = path.resolve(module.path, "..", "..", "test-res")

const browserifyFile = (srcPath: string, targetPath: string) => {
    try{
        fs.unlinkSync(targetPath)
    } catch (e) {}
    const mainScriptFileStream = fs.createWriteStream(targetPath)
    const b = browserify.default();
    b.add(srcPath)
        .bundle()
        .pipe(mainScriptFileStream)
}

browserifyFile(
    path.resolve(module.path, "bundle.js"), 
    path.resolve(testResPath, "bundle.js")
)
