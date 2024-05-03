
$(document).ready(function () {

    //CHANGING TYPING WORDS
    var words = ["making decisions", "selecting leaders", "conducting surveys", "making polls", "educating voters"];
    var index = 0;
    var $changingWords = $(".changing-words");

    function typeWriter(text, i, cb) {
        if (i < text.length) {
            $changingWords.text(text.substring(0, i + 1));
            setTimeout(function () {
                typeWriter(text, i + 1, cb);
            }, 70); // typing speed
        } else {
            setTimeout(cb, 1800); // Wait after typing finishes
        }
    }

    function typeNext() {
        var word = words[index];
        typeWriter(word, 0, function () {
            setTimeout(function () {
                $changingWords.text(""); // Clear word
                index = (index + 1) % words.length;
                typeNext(); // Type next word
            }, 200); // Short delay between words
        });
    }

    typeNext(); //typing first word


    //HOVER ANIMATIONS
    $('.feature').hover(
        function () {
            $(this).css({
                'background-color': 'white',
                'border-radius': '3%',
                'box-shadow': '0 0 30px rgba(0, 0, 0, 0.2)',
                'transform': 'translateY(-3px)',
                'transition': 'transform 0.3s ease'
            });
        },
        function () {
            $(this).css({
                'background-color': '',
                'border-radius': '',
                'box-shadow': '',
                'transform': '',
                'transition': 'transform 0.3s ease'
            });
        }
    );
});
