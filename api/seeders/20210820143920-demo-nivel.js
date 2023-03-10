module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Niveis', [
			{
				descer_nivel: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				descer_nivel: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				descer_nivel: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Niveis', null, {})
  }
}
