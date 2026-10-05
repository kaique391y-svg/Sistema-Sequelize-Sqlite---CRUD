const sequelize = require('./src/banco/databse');
const Aluno = require('./src/model/Aluno');

async function executarApp() {
    try {
        // 1. Sincroniza o Model com o Banco de Dados
        // Atenção: { force: true } recria a tabela toda vez. Use apenas para Testes[cite: 28]
        await sequelize.sync({ force: true });
        console.log('Tabelas sincronizadas com sucesso!');

        // ===========================================
        // CREATE (Inserir registros)[cite: 29]
        // ===========================================
        const aluno1 = await Aluno.create({
            nome: 'Ana Silva',
            matricula: '202789',
            curso: 'Desenvolvimento de Sistemas'
        });
        console.log(`Aluno criado: ${aluno1.nome}`);

        // ===========================================
        // READ (Buscar registros)[cite: 30]
        // ===========================================

        // Buscar Todos
        const todosAlunos = await Aluno.findAll();
        console.log(`Temos ${todosAlunos.length} alunos cadastrados`);

        // Buscar com condição WHERE
        const umAluno = await Aluno.findOne({ where: { matricula: '202789' } });
        
        // Verificação para evitar erro caso não encontre (boa prática apontada na página 13 da apostila)[cite: 34]
        if (umAluno) {
            console.log(`Busca Específica: ${umAluno.nome} está no curso ${umAluno.curso}`);
        }

        // ======================================
        // UPDATE (Atualizar registros)[cite: 31]
        // ======================================
        await Aluno.update(
            { curso: 'Engenharia de Software' }, // o que mudar[cite: 31]
            { where: { matricula: '202789' } }   // em quem mudar[cite: 31]
        );
        console.log('Curso Atualizado');

        // ======================================
        // DELETE (Remover registros)[cite: 31]
        // ======================================
        await Aluno.destroy({
            where: { matricula: '202789' }
        });
        console.log('Registro deletado');

    } catch (error) {
        console.error('Erro de conexão ou execução: ', error);
    }
}

executarApp();