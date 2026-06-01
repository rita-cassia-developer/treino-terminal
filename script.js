// 1️⃣ FASE 1: ENTRADA (As crianças na fila)
const filaDeCriancas = ["Ana", "Beto", "Carla"];
let docesEntregues = 0;

// 2️⃣ FASE 2: PROCESSAMENTO (A professora andando pela fila)
for (let i = 0; i < filaDeCriancas.length; i++) {
    let criancaDaVez = filaDeCriancas[i]; 
    console.log("Entreguei um pirulito para: " + criancaDaVez);
    
    // Conta +1 pirulito entregue
    docesEntregues++; 
}

// 3️⃣ FASE 3: SAÍDA (A fila acabou)
console.log("Fim da fila! Total de doces gastos: " + docesEntregues);
