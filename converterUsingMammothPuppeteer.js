const mammoth = require("mammoth");
const fs = require("fs");
const Path = require("path");
const Util = require("util");
const Puppeteer = require("puppeteer");
const Handlebars = require("handlebars");
const ReadFile = Util.promisify(fs.readFile);

mammoth
  .convertToHtml({ path: "./Ocean_Bill_of_Lading.docx" })
  .then(function(result) {
    var html = result.value; // The generated HTML

    fs.writeFile("./converted.html", html, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("warnings", result.messages);
      console.log("The file was saved!");
    });
    // var messages = result.messages; // Any messages, such as warnings during conversion
  })
  .done();

const html = () => {};

(async () => {
  try {
    const data = {
      your: "data"
    };

    //const templatePath = Path.resolve('path', 'to', 'invoice.html')
    const content = await ReadFile("./converted.html", "utf8");

    // compile and render the template with handlebars
    const template = Handlebars.compile(content);

    const html = template(data);
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    return page.pdf({
      path: "./converted.pdf",
      pageRanges: "1",
      format: "A4",
      printBackground: true
    });
  } catch (error) {
    throw new Error("Cannot create invoice HTML template.");
  }
})();
