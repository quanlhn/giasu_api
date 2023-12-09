'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			'Comments',
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER.UNSIGNED,
					field: 'comment_id',
				},
				user_id: {
					type: Sequelize.INTEGER.UNSIGNED,
					references: {
						model: 'Users',
						key: 'id',
					},
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				post_id: {
					type: Sequelize.INTEGER.UNSIGNED,
					references: {
						model: 'Posts',
						key: 'post_id',
					},
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE',
				},
				comment_content: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATEONLY,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATEONLY,
				},
			},
			{
				freezeTableName: true,
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Comments');
	},
};
