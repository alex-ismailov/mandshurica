

window.onload = () => {
    // macyInit();
    macyInit2();
};

function macyInit2() {
    var macy = Macy({
        container: '.gallery',
        trueOrder: false,
        waitForImages: false,
        margin: 3,
        columns: 4,
        breakAt: {
            960: 3,
            720: 2,
            540: 1
        }
    });

    console.log('Create new Macy by macyInit2()');
}

// function macyInit() {
//     const masonry = new Macy({
//         container: '.gallery',
//         mobileFirst: true,
//         columns: 1,
//         breakAt: {
//             400: 2,
//             700: 3,
//             1100: 4
//         },
//         margin: {
//             x: 5,
//             y: 5
//         },
//         waitForImages: true
//     });

//     console.log('Create new Macy by macyInit()');
// }