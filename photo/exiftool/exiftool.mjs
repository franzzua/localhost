import {watch} from "fs";
import {execSync} from "child_process";

watch('/input', {recursive: true},  processFiles);
process.chdir("/output")

function processFiles(){
    execSync("exiftool " +
        "'-FileName<FileModifyDate' " +
        "'-FileName<DateTimeOriginal' " +
        "-d %Y/%m/%d/%H-%M-%S%%c.%%e -r " +
        "/input", {stdio: 'inherit'});
    execSync(`curl -X POST http://localhost:2342/api/v1/index`)
}
processFiles();