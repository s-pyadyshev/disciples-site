export const saveImage = (race, button) => {
    var node = document.querySelector(race);
    
    document.querySelector(button).addEventListener('click', function() {
        domtoimage.toPng(node)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    })
};

export default saveImage