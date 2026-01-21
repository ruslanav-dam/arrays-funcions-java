/* ============================================
   ARRAYS UNIDIMENSIONALS (1D)
   ============================================ */

let array1d = [10, 25, 30, 45, 50];
const valores = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

/**
 * Renderitza l'array 1D a la interfície
 */
function renderArray1D() {
    const container = document.getElementById('array1d');
    container.innerHTML = '';
    
    array1d.forEach((value, index) => {
        const cell = document.createElement('div');
        cell.className = 'array-cell animated';
        cell.innerHTML = `
            <div class="cell-index">[${index}]</div>
            <div class="cell-value">${value}</div>
        `;
        container.appendChild(cell);
    });
}

/**
 * Actualitza els valors de l'array amb números aleatoris
 */
function updateArray1D() {
    array1d = array1d.map(() => valores[Math.floor(Math.random() * valores.length)]);
    renderArray1D();
}

/**
 * Afegeix un element nou a l'array
 */
function addElement1D() {
    if (array1d.length < 10) {
        array1d.push(valores[Math.floor(Math.random() * valores.length)]);
        renderArray1D();
    }
}

/**
 * Elimina l'últim element de l'array
 */
function removeElement1D() {
    if (array1d.length > 1) {
        array1d.pop();
        renderArray1D();
    }
}

/* ============================================
   ARRAYS BIDIMENSIONALS (2D - MATRIUS)
   ============================================ */

let matrix2d = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

/**
 * Renderitza la matriu 2D a la interfície
 */
function renderMatrix2D() {
    const container = document.getElementById('matrix2d');
    container.innerHTML = '';
    
    matrix2d.forEach((row, i) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'matrix-row';
        
        row.forEach((value, j) => {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            cell.innerHTML = `${value}<br><span class="coordinates">[${i}][${j}]</span>`;
            
            // Event onclick per cada cel·la
            cell.onclick = () => {
                cell.style.background = 'linear-gradient(135deg, #1a4d8f 0%, #2563a8 100%)';
                cell.style.color = '#ffd700';
                setTimeout(() => {
                    cell.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
                    cell.style.color = '#1a4d8f';
                }, 500);
            };
            
            rowDiv.appendChild(cell);
        });
        
        container.appendChild(rowDiv);
    });
}

/**
 * Ressalta la diagonal principal de la matriu
 */
function highlightMatrix() {
    const cells = document.querySelectorAll('.matrix-cell');
    
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 4);
        const col = index % 4;
        
        if (row === col) {
            setTimeout(() => {
                cell.style.background = 'linear-gradient(135deg, #1a4d8f 0%, #2563a8 100%)';
                cell.style.color = '#ffd700';
                setTimeout(() => {
                    cell.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
                    cell.style.color = '#1a4d8f';
                }, 1000);
            }, row * 200);
        }
    });
}

/**
 * Actualitza la matriu amb nous valors aleatoris
 */
function updateMatrix() {
    matrix2d = matrix2d.map(row => row.map(() => Math.floor(Math.random() * 100)));
    renderMatrix2D();
}

/* ============================================
   FUNCIONS SENSE PARÀMETRES
   ============================================ */

/**
 * Exemple de funció sense paràmetres que retorna un String
 * @return {String} Missatge de salutació
 */
function saludar() {
    return "Hola Món!";
}

/**
 * Exemple de funció sense paràmetres que retorna un número aleatori
 * @return {Number} Número aleatori entre 0 i 99
 */
function obtenirNumeroAleatori() {
    return Math.floor(Math.random() * 100);
}

/**
 * Executa la funció saludar() i mostra el resultat
 */
function ejecutarSinParametros1() {
    document.getElementById('output1').textContent = saludar();
}

/**
 * Executa la funció obtenirNumeroAleatori() i mostra el resultat
 */
function ejecutarSinParametros2() {
    document.getElementById('output2').textContent = obtenirNumeroAleatori();
}

/* ============================================
   FUNCIONS AMB PARÀMETRES
   ============================================ */

/**
 * Suma dos números
 * @param {Number} a - Primer número
 * @param {Number} b - Segon número
 * @return {Number} Suma de a i b
 */
function sumar(a, b) {
    return a + b;
}

/**
 * Saluda una persona pel seu nom
 * @param {String} nom - Nom de la persona
 * @return {String} Missatge de salutació personalitzat
 */
function saludarPersona(nom) {
    return `Hola, ${nom}!`;
}

/**
 * Executa la funció sumar amb els valors dels inputs
 */
function ejecutarConParametros1() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('output3').textContent = sumar(num1, num2);
}

/**
 * Executa la funció saludarPersona amb el valor de l'input
 */
function ejecutarConParametros2() {
    const nombre = document.getElementById('nombre').value;
    document.getElementById('output4').textContent = saludarPersona(nombre);
}

/* ============================================
   FUNCIONS RECURSIVES
   ============================================ */

/**
 * Calcula el factorial d'un número de forma recursiva
 * @param {Number} n - Número del qual calcular el factorial
 * @return {Number} Factorial de n
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Cas base
    }
    return n * factorial(n - 1); // Cas recursiu
}

/**
 * Calcula el factorial i mostra els passos de recursió
 */
function calcularFactorial() {
    const n = parseInt(document.getElementById('factorialInput').value);
    const resultado = factorial(n);
    document.getElementById('factorialOutput').textContent = resultado;
    
    // Mostrar passos de la recursivitat
    const stepsContainer = document.getElementById('factorialSteps');
    stepsContainer.innerHTML = '<strong style="color: #1a4d8f;">Passos de la recursivitat:</strong>';
    
    let pasos = [];
    for (let i = n; i >= 1; i--) {
        if (i === 1) {
            pasos.push(`factorial(1) = 1 (cas base)`);
        } else {
            pasos.push(`factorial(${i}) = ${i} × factorial(${i-1})`);
        }
    }
    
    // Mostrar cada pas amb animació
    pasos.forEach((paso, index) => {
        setTimeout(() => {
            const step = document.createElement('div');
            step.className = 'recursion-step';
            step.innerHTML = `
                <div class="recursion-level">Nivell ${index + 1}:</div>
                <div class="recursion-value">${paso}</div>
            `;
            stepsContainer.appendChild(step);
        }, index * 300);
    });
}

/**
 * Calcula el nombre de Fibonacci en la posició n de forma recursiva
 * @param {Number} n - Posició a la seqüència de Fibonacci
 * @return {Number} Valor de Fibonacci en la posició n
 */
function fibonacci(n) {
    if (n <= 1) {
        return n; // Cas base
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Cas recursiu
}

/**
 * Calcula Fibonacci i mostra la seqüència
 */
function calcularFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value);
    const resultado = fibonacci(n);
    document.getElementById('fibonacciOutput').textContent = resultado;
    
    // Mostrar tota la seqüència fins a n
    let secuencia = [];
    for (let i = 0; i <= n; i++) {
        secuencia.push(fibonacci(i));
    }
    document.getElementById('fibonacciSequence').textContent = secuencia.join(', ');
}

/* ============================================
   INICIALITZACIÓ
   ============================================ */

/**
 * Inicialitza les visualitzacions quan es carrega la pàgina
 */
document.addEventListener('DOMContentLoaded', function() {
    renderArray1D();
    renderMatrix2D();
});
