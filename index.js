function getScript(scriptSrc) {
    return new Promise(function (resolve, reject) {
        if(!document.querySelector('script[src="'+scriptSrc+'"]')) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.onload = resolve;
            script.onerror = reject;
            script.src = scriptSrc;
            document.body.appendChild(script);
        } else {
            resolve();
        }
    })
}
