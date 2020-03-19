


window['fakeReloadSmooth'] = (run = () => 0) => {
    window.scrollTo({
        top: 0,
    });
    run();
};
