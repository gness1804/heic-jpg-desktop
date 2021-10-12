window.addEventListener('DOMContentLoaded', function () {
    var replaceText = function (selector, text) {
        var element = document.getElementById(selector);
        if (element)
            element.innerText = text;
    };
    var deps = ['chrome', 'node', 'electron'];
    for (var _i = 0, deps_1 = deps; _i < deps_1.length; _i++) {
        var dependency = deps_1[_i];
        replaceText(dependency + "-version", process.versions[dependency]);
    }
});
