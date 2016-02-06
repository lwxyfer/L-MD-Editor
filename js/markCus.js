var marked = require('marked');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

console.log(marked('I am using __markdown__.'));

function test(data) {
	var out = '<table>';
	for (var i = data.rows.length - 1, i >= 0; i--) {
		var row = data.rows[i]
		out += '<tr>'
		for (var j = row.cells.length - 1; j >= 0; j--) {
			out += '<td>' + row.cells[j] + '</td>';
		}
		out += '</tr>';
	}

	out += '</table>';
	return out;
}
var xx = 111
var b = 10

function xx() {
	var a = 100
}