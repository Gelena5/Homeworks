const div = document.getElementById('movingDiv');
        let position = 0;

        function moveDiv() {
            if (position >= 500) {
                return;
            }
            position += 5;
            div.style.left = position + 'px';
            requestAnimationFrame(moveDiv);
        }

        moveDiv();