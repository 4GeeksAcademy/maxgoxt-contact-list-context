const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getInfo: async function() {
				try {
					let respuesta = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/jessm");
					let data = await respuesta.json();
					setStore({ contactos: data });
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
