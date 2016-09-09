module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("ESV_RELACIONAMENTO_EMP_SVC", {
        esv_statusAtivacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                RelacionamentoEmpresaServico.belongsTo(models.RMA_RAMOATIVIDADE, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    }),
                    RelacionamentoEmpresaServico.belongsTo(models.EMP_EMPRESA, {
                        foreignKey: {
                            allowNull: false
                        }
                        //onDelete: 'CASCADE'
                    });
            }
        }
    })
    return RelacionamentoEmpresaServico;
}
