function carregarFrames() {
    let array:string[] = ["Final_Fantasy", "Super_Mario_Bros.", "Resident_Evil", "Halo:_Combat_Evolved"];
    for (let i=0; i<array.length; i++){
        frames[i].location="https://en.wikipedia.org/wiki/" + array[i];
    }
}

