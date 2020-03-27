class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        // div.style.cssText = 'Some Text';
        // div.style.height = this.height;
        // div.style.width = this.width;
        // div.style.background = this.bg;
        // div.style.fontSize = this.fontSize;
        // div.style.textAlign = this.textAlign;

        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        div.style.cssText = param;

    }

}

someObj = new Options(300, 300, 'red', 14, 'center');
someObj.createDiv();