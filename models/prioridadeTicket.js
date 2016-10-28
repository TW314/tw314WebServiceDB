module.exports = (sequelize, DataType) => {
    const PrioridadeTicket = sequelize.define("prioridade_ticket", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate: (models) => {
                PrioridadeTicket.hasMany(models.ticket, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    })
    return PrioridadeTicket;
};
