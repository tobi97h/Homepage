import fs from "fs"
import { parse } from 'node-html-parser';
import path from "path";


const root = parse(fs.readFileSync("index.html", "utf8"));
const lang_map = JSON.parse(fs.readFileSync("lang.json", "utf8"));

const languages = ["de", "en"]

fs.mkdir("content/lang", err => {
	console.log(err);
});

for(let lang of languages){
	for(let id in lang_map){
		let qry = "#" + id + "-lang";
		root.querySelector(qry).set_content(lang_map[id][lang])
	}
	console.log(root.toString())
	let langdir = path.join("content/lang", lang);
	fs.mkdir(langdir, {recursive : true}, err => {
		console.log(err);
	});
	fs.writeFileSync(path.join(langdir, "index.html"), root.toString())
}
