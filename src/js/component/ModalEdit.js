import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ModalEdit = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const [fullName, setFullName] = useState(props.name);
	const [email, setEmail] = useState(props.email);
	const [phone, setPhone] = useState(props.phone);
	const [address, setAddress] = useState(props.address);
	const id = props.id;

	const { actions, store } = useContext(Context);

	useEffect(() => {
		console.log(actions.delete(store.contactos.id));
		console.log(store.contactos);
	}, []);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<div>
							<h1 className="text-center mt-5">Edit a contact</h1>
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Full Name"
										value={fullName}
										onChange={function(e) {
											setFullName(e.target.value);
										}}
									/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										className="form-control"
										placeholder="Enter email"
										value={email}
										onChange={function(e) {
											setEmail(e.target.value);
										}}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										className="form-control"
										placeholder="Enter phone"
										value={phone}
										onChange={function(e) {
											setPhone(e.target.value);
										}}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter address"
										value={address}
										onChange={function(e) {
											setAddress(e.target.value);
										}}
									/>
								</div>
								<button
									onClick={() => {
										actions.actualizar(id, fullName, email, phone, address);
									}}
									type="button"
									className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/">
									or get back to contacts
								</Link>
							</form>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => {
								props.onClose(), actions.actualizar(props.id, fullName, email, phone, address);
							}}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEdit.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	email: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
