var docxConverter = require("docx-pdf");

docxConverter("./Ocean_Bill_of_Lading.docx", "./output.pdf", function(
  err,
  result
) {
  if (err) {
    console.log(err);
  }
  console.log("result" + result);
});
