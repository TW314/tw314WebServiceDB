const Sequelize = require('sequelize');

module.exports = app => {
    const RamoAtividade = app.db.models.ramo_atividade;
    const Servico = app.db.models.servico;
    const Empresa = app.db.models.empresa;
    app.route("/consultaInformacoesRamoAtividade/")
        .get((req, res) => {
            RamoAtividade.findAll({
                    attributes: ['id', 'nome', 'descricao', 'status_ativacao', [Sequelize.fn('COUNT', Sequelize.col('servicos.id')), 'numeroServicos'],
                        [Sequelize.fn('COUNT', Sequelize.col('empresas.id')), 'numeroEmpresas']
                    ],
                    include: [{
                        model: Servico,
                        attributes: []
                    }, {
                        model: Empresa,
                        attributes: []
                    }],
                    group: ['id', 'nome', 'descricao', 'status_ativacao']
                })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        });

    app.route("/consultaRamoAtividade/:id")
        .get((req, res) => {
            RamoAtividade.findOne({
                    where: {id: req.params.id},
                    attributes: ['id', 'nome', 'descricao', 'status_ativacao', [Sequelize.fn('COUNT', Sequelize.col('servicos.id')), 'numeroServicos'],
                        [Sequelize.fn('COUNT', Sequelize.col('empresas.id')), 'numeroEmpresas']
                    ],
                    include: [{
                        model: Servico,
                        attributes: []
                    }, {
                        model: Empresa,
                        attributes: []
                    }],
                    group: ['id', 'nome', 'descricao', 'status_ativacao']
                })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        });
};
