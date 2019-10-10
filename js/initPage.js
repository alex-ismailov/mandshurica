window.onload = () => {
    macyInit2();
};

function macyInit2() {
    var macy = Macy({
        container: '.gallery',
        trueOrder: false,
        waitForImages: false,
        margin: 15,
        columns: 4,
        breakAt: {
            960: 3,
            720: 2,
            540: 1
        }
    });
    
    console.log('Create new Macy by macyInit2()');
}