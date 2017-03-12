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

function helper(n) {
	var value;
	//works for fib and pell but not trib
	if(n < 2) {
		if(n===0) {
			value = 0;
		}
		else if(n === 1) {
			value = 1;
		}
	}
	else {
		value = 9;
	}
	return value;
}

function generateLists(n) {
	var list = [helper(0)];
	for(var i = 1; i < n; i++) {
		list.push(helper(i));
	}
	return list;
}

/**
 * Creates a div for containing the number series.
 */
function createDiv() {
	var div = document.createElement('div');
	div.setAttribute("class", " stuff-box shadowed");
	document.body.appendChild(div);
	return div;
}

/**
 * Creates links to sites holding info on the number series.
 */
function addLink(node) {
	var value = "";
	var p = document.createElement('p');
	var link = document.createElement('a');
	if(node.id.toString() == "fib") {
		value = ("A000045");
		p.textContent = ("Fibonacci");
	}
	else if(node.id.toString() == "pell") {
		value = ("A000129");
		p.textContent = ("Pell");
	}
	else {
		value = ("A000073");
		p.textContent = ("Tribonacci");
	}
	link.href = "https://oeis.org/" + value;
	link.appendChild(p);
	node.appendChild(link);
}



/**
 * Used in-class example for fibonacci.
 * Also based the pell and tribonacci recursive functions off of this.
 */

function fibHelper(n, list) {
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
		p.textContent = 'f(' + n + ') = ' + value;
		div.appendChild(p);
	}
	else {
		//left
		var left = list[n];
		var fib_class = left.html.getAttribute("class");
		left.html.setAttribute("class", fib_class + " fib-left");

		//right
		var right = list[n+1];
		fib_class = right.html.getAttribute("class");
		right.html.setAttribute("class", fib_class + " fib-right");

		//result
		value = left.value + right.value;
		// var p = document.createElement('p');
		p.textContent = 'f(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return {'value': value, 'html': div};
}
var fib = function (n, node) {
	var list = generateLists(n);
	node.setAttribute("id", "fib");
	addLink(node);
	var tree = fibHelper(n, list);
	node.appendChild(tree.html);
};

/**
 * Group of functions for generating pell numbers.
 */
function pellHelper(n) {
	var value;
	var div = document.createElement('div');
	//If value is 0 or 1
	if(n < 2) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'p(' + n + ')= ' + value;
		div.appendChild(p);
	}
	else {
		//left
		var left = pellHelper(n - 1);
		var pell_class = left.html.getAttribute("class");
		left.html.setAttribute("class", pell_class + " fib-left");

		//right
		var right = pellHelper(n - 2);
		pell_class = right.html.getAttribute("class");
		right.html.setAttribute("class", pell_class + " fib-right");

		//result
		value = 2*left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'p(' + n + ') = ' + value;

		div.appendChild(p);
		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return{'value': value, 'html': div};
}
var pell = function(n, node) {
	node.setAttribute("id", "pell");
	addLink(node);
	var tree = pellHelper(n);
	node.appendChild(tree.html);
};

/**
 * Group of functions to generate tribonacci numbers
 */
function tribHelper(n) {
	var value;
	var div = document.createElement('div');
	//If value is 0, 1, or 2
	if(n < 3) {
		if (n === 0 || n === 1) {
			value = 0;
		}
		else if (n === 2) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 't(' + n + ')= ' + value;
		div.appendChild(p);
	}
	else {
		//left
		var left = tribHelper(n - 1);
		var trib_class = left.html.getAttribute("class");
		left.html.setAttribute("class", trib_class + " fib-left");

		//middle
		var middle = tribHelper(n - 2);
		trib_class = middle.html.getAttribute("class");
		middle.html.setAttribute("class", trib_class + " fib-middle");

		//right
		var right = tribHelper(n - 3);
		trib_class = right.html.getAttribute("class");
		right.html.setAttribute("class", trib_class + " fib-right");

		//result
		value = left.value + middle.value + right.value;
		var p = document.createElement('p');
		p.textContent = 't(' + n + ')= ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(middle.html);
		div.appendChild(right.html);
	}
	return{'value': value, 'html': div};
}
var trib = function(n, node) {
	node.setAttribute("id", "trib");
	addLink(node);
	var tree = tribHelper(n);
	node.appendChild(tree.html);
};

/**
 * essentially my main function.
 */
(function() {
	fib(11, createDiv());
	pell(11, createDiv());
	trib(11, createDiv());
})();

/**
 * Used shadowed and stuff-box from in class examples.
 * I had originally tried using width: 50%; for fib-left and fib-right but the layout was all wrong.
 * Looked to in class example for formatting help.
 */
(function() {
	var style = document.createElement('style');
	style.textContent =
		"a:hover {" +
		"    color: red;" +
		"}" +
		"a {" +
		"    text-align: left;" +
		"}" +
		"#fib {" +
		"    background: lightseagreen;" +
		"    display: inline-block;" +
		"    width: 8900px;" +
		"}" +
		"" +
		"#pell {" +
		"    background: lightseagreen;" +
		"    display: inline-block;" +
		"    width: 8285px;" +
		"}" +
		"" +
		"#trib {" +
		"    background: lightseagreen;" +
		"    display: inline-block;" +
		"    width: 20705px;" +
		"}" +
		".shadowed {" +
		"    text-shadow: 1px 1px 2px black;" +
		"    color:       white;" +
		"}" +
		".stuff-box {" +
		"    font-family: 'helvetica neue', helvetica, sans-serif;" +
		"    letter-spacing: 1px;" +
		"    text-transform: capitalize;" +
		"    text-align: center;" +
		"    padding: 3px 10px;" +
		"    margin: 10px;" +
		"    cursor: pointer;" +
		"    border-color: lightskyblue;" +
		"    border-radius: 10px;" +
		"    border-width: 2px;" +
		"    border-style: solid;" +
		"}" +
		".fib-left {" +
		"    float: left;" +
		"    display: flex-inline;" +
		"    flex-direction: left;" +
		"    background: rgba(125, 1, 249, .1);" +
		"}" +
		"" +
		".fib-right {" +
		"    float: right;" +
		"    display: flex-inline;" +
		"    flex-direction: right;" +
		"    background: rgba(125, 1, 249, .1);" +
		"}" +
		"" +
		".fib-middle {" +
		"    display: inline-block;" +
		"    margin: 0px 2px 0px 2px;" +
		"    background: rgba(125, 1, 249, .1);" +
		"}" +
		"" +
		".fib-left div {" +
		"    mix-blend-mode: hard-light;" +
		"}" +
		"" +
		".fib-right div {" +
		"    mix-blend-mode: hard-light;" +
		"}";
	document.body.appendChild(style);
})();
