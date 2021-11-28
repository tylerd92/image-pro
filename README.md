# image-pro

## How to run the program

Use npm run start to run the dev server

Use npm run build to compile the code and use node build/index to run the complied version of the code.

Here is an example url to show how to run the image process in the browser
http://localhost:3000/api/images/?filename=fjord&width=200&height=200

If the image is in the assets/full folder then you should see the resized new image.

If the image is not there then you will see a message saying the image is not found on the web page.

## How to run unit tests
npm run test 

## How to run eslint
npm run lint

## How to run prettier 
npm run prettier