import { AddContact } from "../views/AddContact";

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
					let respuesta = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/maxgoxt");
					let data = await respuesta.json();
					setStore({ contactos: data });
				} catch (error) {
					console.log(error);
				}
			},

			addContact: async function(fullName, email, phone, address) {
				try {
					let respuesta = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "maxgoxt",
							address: address,
							phone: phone
						})
					});
					let data = await respuesta.json();
				} catch (error) {}
			}
		}
	};
};

export default getState;
