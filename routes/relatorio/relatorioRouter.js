import stormpath from 'express-stormpath'

module.exports = app => {

    const controllers = app.controllers.relatorio.relatorioController;

    app.route("/relatorio/servico/:id&:dataInicio&:dataFim")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterRelatorioPorServico(app, req.params.id, req.params.dataInicio, req.params.dataFim, resp => {
                res.json(resp)
            })
        });

    app.route("/relatorio/usuario/:id&:dataInicio&:dataFim")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterRelatorioPorNome(app, req.params.id, req.params.dataInicio, req.params.dataFim, resp => {
                res.json(resp)
            })
        });
};
