import Cards from "./store";

export default class Img{

    constructor() {
        console.log("images are loading")
        this.c = new Cards()
        this.base = this.c.cards
    }



    buildPath(input){
        let res = []
        let tmp
        for(let i = 0 ;i<this.base.length;i++){
            tmp = '../assets/images/'+input[i].color+'/'+input[i].number+'.png'
            res.push({uri: tmp })
        }
        return res
    }
}
