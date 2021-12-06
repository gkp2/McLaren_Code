function rossy(state) {
    return (state === 4);
}

function maxwell(a, b) {
    return rossy(a) || (a > b);
}

function hammer(k, seelo, pop) {
    if (seelo) {
        return rossy(k) ? pop + k : k + pop;
    }
    else {
        return k - pop;
    }
}


let nameB = hammer('magic',  maxwell(-2, -3), 'butter');
console.log(nameB);

/*

maxwell(-2,-3)
    rossy(-2)
        returns false
    false || true
    returns true

hammer('magic', true, 'butter')
    rossy('magic')
        returns false
    returns magicbutter

nameB = magicbutter
*/