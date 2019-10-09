

window.onload = () => {
    const masonry = new Macy({
        container: '.gallery',
        mobileFirst: true,
        columns: 1,
        breakAt: {
            400: 2,
            700: 3,
            1100: 4
        },
        margin: {
            x: 5,
            y: 5
        },
        waitForImages: true
    });

    console.log('Create new Macy');
};