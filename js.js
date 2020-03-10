teams = [
    {
        id: 1,
        name: "KK Tvrdi Orah",
        pos: 1,
        logo: "kkto.png"
    },
    {
        id: 2,
        name: "Petlovi Kraj Ibra",
        pos: 2,
        logo: "petlovi.png"
    },
    {
        id: 3,
        name: "Gmilanovac Paws",
        pos: 3,
        logo: "paws.png"
    },
    {
        id: 4,
        name: "BobMangulice",
        pos: 4,
        logo: "bobmangulice.png"
    },
    {
        id: 5,
        name: "Tapir Morbid",
        pos: 5,
        logo: "tapirmorbid.png"
    },
    {
        id: 6,
        name: "Kirikou",
        pos: 7,
        logo: "kirikouFinal.png"
    },
    {
        id: 7,
        name: "Golden Eagles",
        pos: 6,
        logo: "eagles.png"
    },
    {
        id: 8,
        name: "brnjak smugglers",
        pos: 8,
        logo: "smuggler.png"
    },
    {
        id: 9,
        name: "Kosjera",
        pos: 9,
        logo: "kosjera.png"
    },
    {
        id: 10,
        name: "Mighty Turtles",
        pos: 10,
        logo: "turtles.png"
    },
    {
        id: 11,
        name: "Pridvorica Chiefs",
        pos: 12,
        logo: "pridvoricachiefs.png"
    },
    {
        id: 12,
        name: "cockta falenderim",
        pos: 11,
        logo: "flndrm.png"
    }
];

probs =  {
    12: 164,
    11: 164,
    10: 145,
    9: 122,
    8: 104,
    7: 87,
    6: 70,
    5: 53,
    4: 36,
    3: 24,
    2: 18,
    1: 13,
};
//console.log(roundOneTwo());

function giveTeam(x) {
    for (i = 0; i <= 11; i++) {
        if (teams[i].pos == x) {
            return teams[i];
        }
    }     
}

function printOut() {
    var teamsArray = giveTeamsArray(parseInt(document.getElementById("round").value));
    changeContent(teamsArray);
}

function roundOneTwo() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {
        console.log(pick);
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                order.push(giveTeam(j).name)              
                sum -= set[j];
                delete set[j];
                break;
            }
        }
        var pick = Math.random()*sum;
    }

    for (let j in set) {
        order2.push(giveTeam(j).name);
    }

    return order.concat(order2.reverse());
}

function roundThree() {
    let set = Object.assign({}, probs);
    console.log(set)
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;
    //console.log(sum);
    

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {        
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "Mighty Turtles":
                    case "KK Tvrdi Orah":
                    case "Tapir Morbid":
                        order.push("cockta falenderim (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "cockta falenderim":
                    case "Kirikou":
                        order.push("Pridvorica Chiefs (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Gmilanovac Paws":
                    case "Petlovi Kraj Ibra":
                        order.push("Mighty Turtles (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "Mighty Turtles":
            case "KK Tvrdi Orah":
            case "Tapir Morbid":
                order2.push("cockta falenderim (via " + giveTeam(j).name + ")");
                break;
            case "cockta falenderim":
            case "Kirikou":
                order2.push("Pridvorica Chiefs (via " + giveTeam(j).name + ")");
                break;
            case "Gmilanovac Paws":
            case "Petlovi Kraj Ibra":
                order2.push("Mighty Turtles (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };

    set = {};
    set = probs;
    var rev = order2.reverse();
    order = order.concat(rev);
    return order;
}

function roundFour() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "KK Tvrdi Orah":
                        order.push("Pridvorica Chiefs (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "BobMangulice":
                        order.push("cockta falenderim (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "KK Tvrdi Orah":
                order2.push("Pridvorica Chiefs (via " + giveTeam(j).name + ")");
                break;
            case "BobMangulice":
                order2.push("cockta falenderim (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    return order.concat(order2.reverse());
}

function roundSix() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "Mighty Turtles":
                        order.push("brnjak smugglers (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Pridvorica Chiefs":
                    case "cockta falenderim":
                        order.push("KK Tvrdi Orah (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Petlovi Kraj Ibra":
                        order.push("Gmilanovac Paws (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "Mighty Turtles":
                order2.push("brnjak smugglers (via " + giveTeam(j).name + ")");
                break;
            case "Pridvorica Chiefs":
            case "cockta falenderim":
                order2.push("KK Tvrdi Orah (via " + giveTeam(j).name + ")");
                break;
            case "Petlovi Kraj Ibra":
                order2.push("Gmilanovac Paws (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    return order.concat(order2.reverse());
}

function roundSeven() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "cockta falenderim":
                        order.push("BobMangulice (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "cockta falenderim":
                order2.push("BobMangulice (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    return order.concat(order2.reverse());
}

function roundEight() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "Pridvorica Chiefs":
                        order.push("Kirikou (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "Pridvorica Chiefs":
                order2.push("Kirikou (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    return order.concat(order2.reverse());
}

function roundNine() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "cockta falenderim":
                        order.push("Tapir Morbid (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Gmilanovac Paws":
                        order.push("Kirikou (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Pridvorica Chiefs":
                    case "Kirikou":
                        order.push("cockta falenderim (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Petlovi Kraj Ibra":
                        order.push("Mighty Turtles (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "cockta falenderim":
                order2.push("Tapir Morbid (via " + giveTeam(j).name + ")");
                break;
            case "Gmilanovac Paws":
                order2.push("Kirikou (via " + giveTeam(j).name + ")");
                break;
            case "Pridvorica Chiefs":
            case "Kirikou":
                order2.push("cockta falenderim (via " + giveTeam(j).name + ")");
                break;
            case "Petlovi Kraj Ibra":
                order2.push("Mighty Turtles (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    return order.concat(order2.reverse());
}

function roundTen() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "cockta falenderim":
                        order.push("Kirikou (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    case "Kirikou":
                        order.push("Gmilanovac Paws (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "cockta falenderim":
                order2.push("Kirikou (via " + giveTeam(j).name + ")");
                break;
            case "Kirikou":
                order2.push("Gmilanovac Paws (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    return order.concat(order2.reverse());
}

function roundEleven() {
    let set = Object.assign({}, probs);
    var order = [];
    var order2 = [];
    var sum = 1000;
    var pick = Math.random()*sum;

    for (let i = 0; i <= 3; i++) {       
        for (let j in set) {
            pick -= set[j];
            if (pick <= 0) {
                switch(giveTeam(j).name) {
                    case "cockta falenderim":
                    case "Mighty Turtles":
                    case "brnjak smugglers":
                        order.push("Petlovi Kraj Ibra (via " + giveTeam(j).name + ")");
                        sum -= set[j];
                        delete set[j];
                        break;
                    default:
                        order.push(giveTeam(j).name)              
                        sum -= set[j];
                        delete set[j];
                        break;
                }
                break;
            }
        }
        var pick = Math.random()*sum;
    }
        
    for (let j in set) {
        switch(giveTeam(j).name) {
            case "cockta falenderim":
            case "Mighty Turtles":
            case "brnjak smugglers":
                order2.push("Petlovi Kraj Ibra (via " + giveTeam(j).name + ")");
                break;
            default:
                order2.push(giveTeam(j).name)              
                break;
        }
    };
    order = order.concat(order2.reverse());

    return order;
    
}

function giveTeamsArray(round) {
    switch(round) {
        case 1:
        case 2:
        case 5:
            return roundOneTwo();
        case 3:
            return roundThree();
        case 4:
            return roundFour();
        case 6:
            return roundSix();
        case 7:
            return roundSeven();
        case 8:
            return roundEight();
        case 9:
            return roundNine();
        case 10:
            return roundTen();
        case 11:
            return roundEleven();
    }   
}

function changeContent(content) {
    for (let i = 0; i < 12; i++) {
        var x = document.getElementById("myTable").rows[i+1].cells;
        x[1].innerHTML = content[i];
    }
}

