import KeyboardManager, { KeyboardHandler } from './KeyboardManager.js';

const handleKeydownPage1 = (event) => {
    console.log("handleKeydownPage1", event);
}
const page1 = new KeyboardHandler(handleKeydownPage1);
KeyboardManager.add(page1);


const handleKeydownPage2 = (event) => {
    console.log("handleKeydownPage2", event);
}
const page2 = new KeyboardHandler(handleKeydownPage2);
KeyboardManager.add(page2);

setTimeout(() => {
    KeyboardManager.remove(page2);
}, 5000)