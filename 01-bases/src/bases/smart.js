// const init = { input: process.stdin, output: process.stdout };
// const readline = require("readline").createInterface(init)[Symbol.asyncIterator]();

// CÓDIGO QUE DETERMINA SI UNA LISTA DE NÚMEROS ENTEROS DE UN ARRAY SIGUE UNA SECUENCIA PARABÓLICA

// la función recibe una cadena de numeros enteros separados por coma ","
function getValue(str) {
   const arrStr = str.split(",")
   const arrNumb = arrStr.map(x => parseInt(x))

   let maxValue = 0
   let isToUp = false
   let isToDown = false

   for (i = 0; i <= arrNumb.length - 2; i++) {
      // console.log(arrNumb[i])
      if (arrNumb[i] < arrNumb[i + 1]) {
         maxValue = arrNumb[i + 1]
         isToUp = true
      } else {
         if (maxValue > arrNumb[i + 1]) {
            isToUp = false
            isToDown = true
         }
      }
      if (isToDown === isToUp) {
         return false
      }
   }

   return true

}


(() => {

   let line1 = "0,2,3,4,7,9,8,6,2,2,3,1"

   const isParabola = getValue(line1);
   console.log(isParabola)

})();