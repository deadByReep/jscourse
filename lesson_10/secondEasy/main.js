class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.background = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		var div = document.createElement('div');
		document.body.appendChild(div);
		//var p = document.createElement('p')
		div.innerHTML = "Вы прочитали это важное сообщение.";
		//div.appendChild(p);
		div.style.cssText = `height: ${this.height};
								    width: ${this.width};
								    background: ${this.background};
								    font-size: ${this.fontSize};
								    text-align: ${this.textAlign};`;
		//p.style.cssText = `font-size: ${this.fontSize};`;						    
	}
}

const get = new options('300px', '300px', 'purple', '90%', 'right');

get.createDiv();