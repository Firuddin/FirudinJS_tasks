// A: live legend 🐱‍💻
const calc={
    ed1:0,
    ed2:0,
    read() {
        const ed1=+prompt('ilk ededi daxil edin')
        const ed2=+prompt('ikinci ededi daxil edin')
        this.ed1=ed1
        this.ed2=ed2
    },
    Sum() {
        console.log(this.ed1+this.ed2)
    },
    multiply(){},
divide(){},
subtract(){},
}
calc.read()
calc.Sum()
