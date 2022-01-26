export class KeyboardHandler {
    constructor(onKeyDown) {
        this.onKeyDown = onKeyDown;
    }
}

class KeyboardManager {
    constructor() {
        this.handlers = [];
        document.addEventListener('keydown', this.handleKeyDown.bind(this))   
    }

    handleKeyDown(event) {
        const { handlers } = this;
        const handler = handlers[handlers.length - 1];
        if (handler) {
            if (handler.onKeyDown) {
                handler.onKeyDown(event);
            }
        }
    }

    add(handler) {
        this.handlers.push(handler);
        console.log("this.hanlders", this.handlers);
    }

    remove(handler) {
        const index = this.handlers.indexOf(handler);
        if (index === -1) return;
        this.handlers.splice(index, 1);
    }
}

const manager = new KeyboardManager();
export default manager;