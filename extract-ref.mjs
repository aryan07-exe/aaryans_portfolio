import fs from "fs";
import zlib from "zlib";

const html = fs.readFileSync("Aaryan Sahu Portfolio.html", "utf8");
const key = "b123b6e6-36ce-44e8-b181-43b0ac6badd5";
const idx = html.indexOf(`"${key}"`);
const dataIdx = html.indexOf('"data":"', idx);
const start = dataIdx + 8;
let end = start;
while (html[end] !== '"' || html[end - 1] === "\\") end++;
const b64 = html.slice(start, end);
const bundle = zlib.gunzipSync(Buffer.from(b64, "base64")).toString("utf8");

// Find embedded hero page JSON string
const heroNeedle = '"<!DOCTYPE html>\\n<html lang=\\"en\\"';
const hStart = bundle.indexOf(heroNeedle);
if (hStart < 0) throw new Error("hero string not found");
const quoted = bundle.slice(hStart);
const heroHtml = JSON.parse(quoted.slice(0, quoted.indexOf('"\n  </script>') + 1));
fs.writeFileSync("hero_reference.html", heroHtml);
console.log("wrote hero_reference.html", heroHtml.length);
