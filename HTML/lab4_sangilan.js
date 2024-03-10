function calculateArea(a,b,c){
    switch(a){
        case "rectangle":
            console.log(b*c);
            break;
        case "triangle":
            console.log(b*c/2);
            break;
        case "square":
            console.log(b*b);
            break;
        default:
            return Error(`${a} is not a shape`);
            break;
    }
}
calculateArea('triangle',5,5)
