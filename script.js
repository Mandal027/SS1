document.getElementById('downloadButton').addEventListener('click', function() {
    // Create promises array to hold promises for each div
    var promises = [];

    // Get references to the div elements
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');

    // Use html2canvas to capture each div and convert to image
    promises.push(html2canvas(div1).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = 'div1.png';
        link.href = imgData;
        link.click();
    }));

    promises.push(html2canvas(div2).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = 'div2.png';
        link.href = imgData;
        link.click();
    }));

    // Wait for all promises to complete
    Promise.all(promises).then(function() {
        console.log('Downloads complete');
    });
});
