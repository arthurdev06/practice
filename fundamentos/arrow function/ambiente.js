(() => {
   function Person () {
    const that = this;
    this.year = 0;
    
    setInterval(function () {
        this.year = this.year + 1;
        console.log('Qual this?', this);
        console.log('Qual é a idade', this.year)
    }, 1000)
   }

   const p1 = new Person()
})()
 
