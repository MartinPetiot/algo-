const tableau = [26, 12, 15, 3, 6, 52, 96, 16];
n = tableau.length;
function swap (tableau, i , j){
    let temp = tableau[i];
    tableau[i]=tableau[j];
    tableau[j]=temp;
}
function tri_fusion (tableau) {
    const n = tableau.length
    const middle = Math.floor(n/2);
    const left = tableau.slice(0, middle)
    const right = tableau.slice(middle, n)
    if (n <= 1) { //n correspond à l'index max de mon tableau
        return tableau;
    } else{
        return fusion(tri_fusion(left), tri_fusion(right));
    }
}

function fusion (tabA,tabB) {
    if (tabA.length === 0 ) {
        return tabB;
    } else if (tabB.length === 0) {
        return tabA;
    } else if (tabA[0] <= tabB[0]) {
        return [tabA[0]].concat(fusion(tabA.slice(1,tabA.length), tabB));
    } else {
        return [tabB[0]].concat(fusion(tabA,tabB.slice(1, tabB.length)));
    }
}


console.log(tri_fusion(tableau));

function tri_rapide(tableau,first=0,last=tableau.length-1){
    if (first<last){
        let pi = partitionner(tableau,first, last);
        tri_rapide(tableau,first,pi-1);
        tri_rapide(tableau,pi+1,last);
    }
}

function partitionner (tableau, first, last){
    let pivot = last;
    let j = first;
    for (let i = j; i<last;i++){
        if (tableau[i]<= tableau[pivot]){
            swap(tableau, i, j)
            j=j+1;
        }
    }
    swap(tableau, last, j)
    return j;
}
tri_rapide(tableau)
console.log(tableau)