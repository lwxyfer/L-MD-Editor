require(['lib/marked.js'], function(marked) {
    var editor = document.getElementById("editor")
    editor.oninput = function(e) {
        document.getElementById("content").innerHTML = marked(editor.value);
    };
})