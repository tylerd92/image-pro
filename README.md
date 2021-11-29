# image-pro

This project is an api that allows you to resize images according to specified width and height. You must put your images in the full folder inside the assets folder. The resized images are stored in the thumb folder located inside the assets folder. 

Here is an example url to show how to run the resize image process in the browser
http://localhost:3000/api/images/?filename=fjord&width=200&height=200

When you enter this url and the file exists in the full folder you will see the new resized image on the screen. If the file does not exists you will see a 'image not found' message on the screen.


### How to run the program

Use npm run start to run the development server

Use npm run build to compile the code and use node build/index to run the complied version of the code.

If the image is in the assets/full folder then you should see the resized new image.

If the image is not there then you will see a message saying the image is not found on the web page.

### How to run unit tests
npm run test 

### How to run eslint
npm run lint

### How to run prettier 
npm run prettier