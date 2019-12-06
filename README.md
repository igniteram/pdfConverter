### PDF converter using node

#### First Approach(Not recommended)

- This project has a file `convertUsingDocPdf.js`
- It uses `docx-pdf` node module which generates 2 pdf pages which less control and no documentation of the module.
- It internally uses `mammoth` node module to html conversion and then uses `phantom.js` node module for html to pdf conversion

#### Second Approach(recommended)

- This project has a file `convertUsingMammothPuppeeteer.js`
- It uses `mammoth` to convert docx to html and then uses `puppeteer` headless chrome api to convert html to pdf
- It has more control you can specify - number of pages, page size, background etc.
