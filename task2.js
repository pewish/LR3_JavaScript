function checkSpam(str) {
        var firstWord = 'viagra';
        var secondWord = 'xxx';
        var string = str.toLowerCase();
        var result;

        if (checkTheWord(firstWord) || checkTheWord(secondWord)) {
            return true;
        }
        return false;

        function checkTheWord(word) {
            for (var i = 0; i < string.length - 1; i++) {
                if (string[i] == word[0]) {
                    result = string.slice(i, i + word.length);
                    if (result == word) {
                        return true;
                    }
                }
            }
        }
    }
