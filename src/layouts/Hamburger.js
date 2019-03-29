const hamburgerAnimation = function () {
    const spans = this.querySelectorAll('span');

    if (spans[0].style.position === 'relative') {
        spans[1].style.opacity = '0';
        spans[1].style.visibility = 'hidden';

        spans[0].style.position = 'absolute';
        spans[2].style.position = 'absolute';

        spans[0].style.top = '50%';
        spans[2].style.top = '50%';

        spans[0].style.transform = 'translate(-50%,-50%) rotate(45deg)';
        spans[2].style.transform = 'translate(-50%,-50%) rotate(-45deg)';
    } else {
        spans[1].style.opacity = '1';
        spans[1].style.visibility = 'visible';

        spans[0].style.position = 'relative';
        spans[2].style.position = 'relative';

        spans[0].style.top = '2px';
        spans[2].style.top = '2px';

        spans[0].style.transform = 'translate(0,0) rotate(0deg)';
        spans[2].style.transform = 'translate(0,0) rotate(0deg)';
    }
}