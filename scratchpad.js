/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/**
 * Modifies the title of the page.
 */
(function () {
	document.querySelector('title');
	document.title = "JavaScript Recursive Sequences";
})();

/**
 * Creates a div for containing the number series.
 */
function createDiv() {
	var div = document.createElement('div');
	document.body.appendChild(div);
	return div;
}
/**
 * Create node for tree format.
 */
function createCell(pos, val) {
	var clas = pos.html.getAttribute("class");
	pos.html.setAttribute("class", clas + " fib-" + val + " " + clas);
}
/**
 * Creates links to sites holding info on the number series.
 */
function addLink(node) {
	var value = "";
	var p = document.createElement('p');
	var link = document.createElement('a');
	if (node.id.toString() == "fib") {
		value = ("A000045");
		p.textContent = ("<Fibonacci>");
	}
	else if (node.id.toString() == "pell") {
		value = ("A000129");
		p.textContent = ("<Pell>");
	}
	else if (node.id.toString() == "trib") {
		value = ("A000073");
		p.textContent = ("<Tribonacci>");
	}
	else {
		value = "";
		p.textContent = ("Why is this here?!");
	}
	link.href = "https://oeis.org/" + value;
	link.appendChild(p);
	node.appendChild(link);
}

/**
 * Used in-class example for fibonacci.
 * Also based the pell and tribonacci recursive functions off of this.
 */
function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	var p = document.createElement('p');
	//If value is 0 or 1
	if (n < 2) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		p.textContent = 'f(' + n + ')=' + value;
		div.appendChild(p);
	}
	else {
		//left
		var left = fibHelper(n - 1);
		createCell(left, "left");

		//right
		var right = fibHelper(n - 2);
		createCell(right, "right");

		//result
		value = left.value + right.value;
		p.textContent = 'f(' + n + ')=' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return {'value': value, 'html': div};
}
var fib = function (n, node) {
	node.setAttribute("class", "fib stuff-box shadowed");
	node.setAttribute("id", "fib");
	addLink(node);
	var tree = fibHelper(n);
	node.appendChild(tree.html);
	if(n > 7) {
		var width;
		if (n === 11) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (2.015));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 10) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (2.99));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 9) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (4.4));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 8) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (6.4));
			node.setAttribute("style", "width:" + width + "px");
		}
	}
	else {
		node.setAttribute("style", "width: auto");
	}
};

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	if(value < 0) {
		value = 0;
	}
	var newDiv = createDiv();
	form.parentNode.appendChild(newDiv);
	if(document.getElementById("fib") != null) {
		var oldNode = document.getElementById("fib");
		form.parentNode.removeChild(oldNode);
	}
	fib(parseInt(value), newDiv);
};
var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'fib(' + me.value + ')';
};

/**
 * Group of functions for generating pell numbers.
 */
function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	var p = document.createElement('p');
	//If value is 0 or 1
	if (n < 2) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		p.textContent = 'p(' + n + ')=' + value;
		div.appendChild(p);
	}
	else {
		//left
		var left = pellHelper(n - 1);
		createCell(left, "left");

		//right
		var right = pellHelper(n - 2);
		createCell(right, "right");

		//result
		value = 2 * left.value + right.value;
		p.textContent = 'p(' + n + ')=' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return {'value': value, 'html': div};
}
var pell = function (n, node) {
	node.setAttribute("class", "pell stuff-box shadowed");
	node.setAttribute("id", "pell");
	addLink(node);
	var tree = pellHelper(n);
	node.appendChild(tree.html);
	if(n > 7) {
		var width;
		if (n === 11) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (1.975));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 10) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (2.93));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 9) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (4.3));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 8) {
			width = (document.querySelector('body').clientWidth * (n + 1) / (6.28));
			node.setAttribute("style", "width:" + width + "px");
		}
	}
	else {
		node.setAttribute("style", "width: auto");
	}
};

var pellButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	if(value < 0) {
		value = 0;
	}
	var newDiv = createDiv();
	form.parentNode.appendChild(newDiv);
	if(document.getElementById("pell") != null) {
		var oldNode = document.getElementById("pell");
		form.parentNode.removeChild(oldNode);
	}
	pell(parseInt(value), newDiv);
};
var pellSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'pell(' + me.value + ')';
};

/**
 * Group of functions to generate tribonacci numbers
 */
function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	var p = document.createElement('p');
	//If value is 0, 1, or 2
	if (n < 3) {
		if (n === 0 || n === 1) {
			value = 0;
		}
		else if (n === 2) {
			value = 1;
		}
		p.textContent = 't(' + n + ')=' + value;
		div.appendChild(p);
	}
	else {
		//left
		var left = tribHelper(n - 1);
		createCell(left, "left");

		//middle
		var middle = tribHelper(n - 2);
		createCell(middle, "middle");

		//right
		var right = tribHelper(n - 3);
		createCell(right, "right");

		//result
		value = left.value + middle.value + right.value;
		p.textContent = 't(' + n + ')=' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(middle.html);
		div.appendChild(right.html);
	}
	return {'value': value, 'html': div};
}
var trib = function (n, node) {
	node.setAttribute("class", "trib stuff-box shadowed");
	node.setAttribute("id", "trib");
	addLink(node);
	var tree = tribHelper(n);
	node.appendChild(tree.html);
	if(n >= 7) {
		var width;
		if (n === 11) {
			width = (document.querySelector('body').clientWidth * (14.18));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 10) {
			width = (document.querySelector('body').clientWidth * (7.71));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 9) {
			width = (document.querySelector('body').clientWidth * (4.198));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 8) {
			width = (document.querySelector('body').clientWidth * (2.276));
			node.setAttribute("style", "width:" + width + "px");
		}
		else if (n === 7) {
			width = (document.querySelector('body').clientWidth * (1.24));
			node.setAttribute("style", "width:" + width + "px");
		}
	}
	else {
		node.setAttribute("style", "width: auto");
	}
};

var tribButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	if(value < 0) {
		value = 0;
	}
	var newDiv = createDiv();
	form.parentNode.appendChild(newDiv);
	if(document.getElementById("trib") != null) {
		var oldNode = document.getElementById("trib");
		form.parentNode.removeChild(oldNode);
	}
	trib(parseInt(value), newDiv);
};
var tribSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'trib(' + me.value + ')';
};
