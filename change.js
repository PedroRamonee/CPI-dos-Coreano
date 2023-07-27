function changeText(name) {

    var a = document.querySelectorAll('.overlay p');
    var nome = name.querySelector('span')

    if (nome.innerText == 'Croc') {
        a[0].innerHTML = 'Rensga 2021-2'
        a[1].innerHTML = 'Miners 2022-1'
        a[2].innerHTML = 'Loud 2022-2 --> Presente'

        if (name.style.backgroundColor != "green") {
            name.style.backgroundColor = "green"
            name.style.boxShadow = " 0 4px 10px 10px rgba(0, 255, 0, 0.80)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }
    }

    else if (nome.innerText == 'Route') {
        a[0].innerHTML = 'Loud 2023-1 --> Presente'

        if (name.style.backgroundColor != "green") {
            name.style.backgroundColor = "green"
            name.style.boxShadow = " 0 4px 10px 10px rgba(0, 255, 0, 0.80)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }

    else if (nome.innerText == 'Wizer') {

        a[0].innerHTML = 'Kabum 2019-2'
        a[1].innerHTML = 'Kabum 2021-1 --> 2021-2'
        a[2].innerHTML = 'Pain 2022-1 --> Presente'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'Bvoy') {

        a[0].innerHTML = 'Flamengo 2020 - 2'
        a[1].innerHTML = 'Pain 2023-1 --> Presente'
        a[2].innerHTML = ''

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }
    }
    else if (nome.innerText == 'Zzk') {

        a[0].innerHTML = 'INTZ 2023-1 --> Presente'
        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''

        }
    }
    else if (nome.innerText == 'Nia') {

        a[0].innerHTML = 'INTZ 2023-1 --> Presente'
        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Lava') {

        a[0].innerHTML = 'Los Grandes 2023-1 --> Presente'

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Lonely') {

        a[0].innerHTML = 'Kabum 2023-1 --> Presente'

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Trick') {

        a[0].innerHTML = 'Los Grandes 2023-2'

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Flawless') {

        a[0].innerHTML = 'Kabum 2023-2'

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Yuri') {

        a[0].innerHTML = 'Rensga 2021-2 '
        a[1].innerHTML = 'Kabum 2023-1'
        a[2].innerHTML = ''

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'Hirit') {

        a[0].innerHTML = 'Los Grandes 2023-1 '

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Kuri') {

        a[0].innerHTML = 'Flamengo 2022-1 --> 2022-2 '
        a[1].innerHTML = 'RED Canids 2023-1'
        a[2].innerHTML = ''

        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


    }
    else if (nome.innerText == 'Trap') {

        a[0].innerHTML = 'Rensga 2022-1 --> 2022-2'

        if (name.style.backgroundColor != "blue") {
            name.style.background = 'blue'
            name.style.boxShadow = "  0 4px 10px 10px rgba(46, 0, 228, 0.8)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }



        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Mocha') {

        a[0].innerHTML = 'Rensga 2022-1 --> 2022-2'

        if (name.style.backgroundColor != "blue") {
            name.style.background = 'blue'
            name.style.boxShadow = "  0 4px 10px 10px rgba(46, 0, 228, 0.8)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Geum Go') {

        a[0].innerHTML = 'Flamengo 2022-2'
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'DoRun') {

        a[0].innerHTML = 'Miners 2022-1 --> 2022-2'

        if (name.style.backgroundColor != "purlple") {
            name.style.backgroundColor = "purple"
            name.style.boxShadow = " 0 4px 10px 10px rgba(129, 0, 228, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Sive') {

        a[0].innerHTML = 'Miners 2022-2'
        if (name.style.backgroundColor != "purlple") {
            name.style.backgroundColor = "purple"
            name.style.boxShadow = " 0 4px 10px 10px rgba(129, 0, 228, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Parang') {

        a[0].innerHTML = 'Kabum 2020-1 '
        a[1].innerHTML = 'Flamengo 2021-1 --> 2021-2'
        a[2].innerHTML = 'Kabum 2022-1 --> 2022-2'
        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'Wiz') {

        a[0].innerHTML = 'Kabum 2020-1 '
        a[1].innerHTML = 'Pain ???'
        a[2].innerHTML = 'Kabum 2022-1 --> 2022-2'
        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'Hades') {

        a[0].innerHTML = 'Rensga 2022-1'

        if (name.style.backgroundColor != "blue") {
            name.style.background = 'blue'
            name.style.boxShadow = "  0 4px 10px 10px rgba(46, 0, 228, 0.8)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Guard') {

        a[0].innerHTML = 'Rensga 2022-1 --> 2022-2'

        if (name.style.backgroundColor != "blue") {
            name.style.background = 'blue'
            name.style.boxShadow = "  0 4px 10px 10px rgba(46, 0, 228, 0.8)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Luci') {

        a[0].innerHTML = 'Flamengo 2019-1 --> 2020-2'
        a[1].innerHTML = 'Pain 2021-1 --> 2021-2'
        a[2].innerHTML = ''

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }
    }
    else if (nome.innerText == 'Ryan') {

        a[0].innerHTML = 'Kabum 2021-1 --> 2021-2'

        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Jackpot') {

        a[0].innerHTML = 'Santos 2020-2'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Rainbow') {

        a[0].innerHTML = 'Santos 2020-2'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Balkhan') {

        a[0].innerHTML = 'Redemption 2020-1'
        if (name.style.backgroundColor != "green") {
            name.style.backgroundColor = "green"
            name.style.boxShadow = " 0 4px 10px 10px rgba(0, 255, 0, 0.80)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Patrick') {

        a[0].innerHTML = 'Redemption 2020-1'
        if (name.style.backgroundColor != "green") {
            name.style.backgroundColor = "green"
            name.style.boxShadow = " 0 4px 10px 10px rgba(0, 255, 0, 0.80)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Woofe') {

        a[0].innerHTML = 'Flamengo 2020-1'
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Shrimp') {

        a[0].innerHTML = 'Flamengo 2018-2 --> 2019-2'
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'SeongHwan') {

        a[0].innerHTML = 'Pain 2020-1'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Key') {

        a[0].innerHTML = 'Pain 2020-1'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Mental') {

        a[0].innerHTML = 'CNB 2019-2'

        if (name.style.backgroundColor != "blue") {
            name.style.background = 'blue'
            name.style.boxShadow = "  0 4px 10px 10px rgba(46, 0, 228, 0.8)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Chaser') {

        a[0].innerHTML = 'RED Canids 2018-2'
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Sky') {

        a[0].innerHTML = 'RED Canids 2018-1 --> 2018-2'
        a[1].innerHTML = 'NOTA: Jogou o circuitão de 2020-1 na RED também'
        a[2].innerHTML = ''
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }
    }
    else if (nome.innerText == 'Jisu') {

        a[0].innerHTML = 'Flamengo 2018-2'
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Lactea') {

        a[0].innerHTML = 'Pain 2014'
        a[1].innerHTML = 'Team One 2018-1'
        a[2].innerHTML = ''
        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'DayDream') {

        a[0].innerHTML = 'Keyd Stars 2015-1'

        if (name.style.backgroundColor != "purlple") {
            name.style.backgroundColor = "purple"
            name.style.boxShadow = " 0 4px 10px 10px rgba(129, 0, 228, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Emperor') {

        a[0].innerHTML = 'Keyd Stars 2015-1'

        if (name.style.backgroundColor != "purlple") {
            name.style.backgroundColor = "purple"
            name.style.boxShadow = " 0 4px 10px 10px rgba(129, 0, 228, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }



        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Winged') {

        a[0].innerHTML = 'Keyd Stars 2014'
        a[1].innerHTML = 'RED Canids 2018-1'
        a[2].innerHTML = ''
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'Suno') {

        a[0].innerHTML = 'Keyd Stars 2014'

        if (name.style.backgroundColor != "purlple") {
            name.style.backgroundColor = "purple"
            name.style.boxShadow = " 0 4px 10px 10px rgba(129, 0, 228, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }


        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Olleh') {

        a[0].innerHTML = 'Pain 2014'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Stardust') {

        a[0].innerHTML = 'Flamengo 2020-1'
        a[1].innerHTML = 'Los Grandes 2023-1 --> Presente'
        a[2].innerHTML = ''
        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }
    }
    else if (nome.innerText == 'Reven/Flanalista') {

        a[0].innerHTML = 'Flamengo 2019-1 --> 2020-2'
        a[1].innerHTML = 'NOTA: A maior parte do tempo na ORG ele foi analista, contudo virou Strategic Coach em 2020-2'
        a[2].innerHTML = ''
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }
    }
    else if (nome.innerText == 'Xero') {

        a[0].innerHTML = 'Pain 2020-1 --> Presente'
        a[1].innerHTML = 'NOTA: Durante o primeiro split de 2021 Xero foi apenas consultor, ironicamente a ORG foi campeã nesse split, então tecnicamente, Xero nunca ganhou o cblol'
        a[2].innerHTML = ''

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

    }
    else if (nome.innerText == 'Sickness') {

        a[0].innerHTML = 'Kabum 2023-2'
        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Hiro') {

        a[0].innerHTML = 'Kabum 2018-2 --> 2019-2'
        if (name.style.backgroundColor != "orange") {
            name.style.backgroundColor = "orange"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 136, 0, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'Icarus') {

        a[0].innerHTML = 'RED Canids 2018-1'
        if (name.style.backgroundColor != "red") {
            name.style.background = 'Red'
            name.style.boxShadow = " 0 4px 10px 10px rgba(255, 0, 0, 0.80)";
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }
    else if (nome.innerText == 'sBs') {

        a[0].innerHTML = 'Furia 2023-2'

        if (name.style.backgroundColor != "black") {
            name.style.backgroundColor = "black"
            name.style.boxShadow = "0 4px 10px 10px rgba(255, 255, 255, 0.8)"
        }
        else {
            name.style.backgroundColor = "gray"
            name.style.boxShadow = " 4px 10px 10px rgba(107, 107, 107, 0.8)"
        }

        for (var i = 1; i < a.length; i++) {
            a[i].innerHTML = ''
        }
    }




    callOverlay(name)

}