function contientChiffre(ch) {
    for (var i = 0; i < ch.length; i++) {
        if (ch[i] == "0" || ch[i] == "1"||ch[i] == "2" || ch[i] == "3"||ch[i] == "4" || ch[i] == "5"||ch[i] == "6" || ch[i] == "7"||ch[i] == "8" || ch[i] == "9"){
            return true;
        }
    }
    return false;
}