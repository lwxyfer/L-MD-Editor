require(['lib/marked.js','lib/jquery-2.1.4.js'], function(marked) {
//     var editor = document.getElementById("editor")
//     editor.oninput = function(e) {
//         document.getElementById("content").innerHTML = marked(editor.value);
//     };
       $('#editor').on('input',function() {
        console.log("FUCKED")
            $('#content').html(marked($('#editor').val()))
       })
 })