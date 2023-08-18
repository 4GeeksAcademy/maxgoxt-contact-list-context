import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEdit } from "../component/ModalEdit.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined,
		name: undefined,
		phone: undefined,
		address: undefined,
		email: undefined
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getInfo();
		// actions.addContact();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map(item => (
							<ContactCard
								key={item.id}
								name={item.full_name}
								phone={item.phone}
								address={item.address}
								email={item.email}
								onDelete={() => setState({ showModal: true, id: item.id })}
								onEdit={() => setEdit({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
			<ModalEdit
				id={edit.id}
				name={edit.full_name}
				phone={edit.phone}
				address={edit.address}
				email={edit.email}
				show={edit.showModal}
				onClose={() => setEdit({ showModal: false })}
			/>
		</div>
	);
};
