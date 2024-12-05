const database = [
    { id: 1, nome: "João Silva", email: "joao@email.com", idade: 25, cidade: "São Paulo", profissao: "Engenheiro" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", idade: 30, cidade: "Rio de Janeiro", profissao: "Designer" },
    { id: 3, nome: "Carlos Pereira", email: "carlos@email.com", idade: 22, cidade: "Belo Horizonte", profissao: "Desenvolvedor" },
    { id: 4, nome: "Ana Costa", email: "ana@email.com", idade: 28, cidade: "Salvador", profissao: "Médica" },
    { id: 5, nome: "Pedro Lima", email: "pedro@email.com", idade: 35, cidade: "Curitiba", profissao: "Professor" },
    { id: 6, nome: "Fernanda Oliveira", email: "fernanda@email.com", idade: 26, cidade: "Porto Alegre", profissao: "Arquiteta" },
    { id: 7, nome: "Lucas Martins", email: "lucas@email.com", idade: 31, cidade: "Fortaleza", profissao: "Advogado" },
    { id: 8, nome: "Mariana Almeida", email: "mariana@email.com", idade: 24, cidade: "Manaus", profissao: "Farmacêutica" },
    { id: 9, nome: "Ricardo Gomes", email: "ricardo@email.com", idade: 29, cidade: "Recife", profissao: "Analista de TI" },
];

// Gerar mais registros automaticamente até 1000
for (let i = 10; i <= 1000; i++) {
    database.push({
        id: i,
        nome: `Nome ${i}`,
        email: `email${i}@example.com`,
        idade: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
        cidade: `Cidade ${i}`,
        profissao: `Profissão ${i}`
    });
}
