let salario = [1800, 2500, 1950, 4700, 5200, 1500, 3590, 4000, 1750, 2000]

console.log(salario);

let salAumento = salario.map(sal => sal <= 2000 ? sal * 1.15  : sal * 1.10)

console.log(salAumento);

let salSuperior = salAumento.filter(sal => sal >= 2500)

console.log(salSuperior);

let salarioSoma = salAumento.reduce((acumulador, sal) => acumulador + sal)

console.log(salarioSoma);