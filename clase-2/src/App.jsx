import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
	const [nombre, setNombre] = useState('');
	const [edad, setEdad] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (nombre === '' || edad === '') {
			return console.log('error');
		} else if (edad < 15) {
			return console.log('debe ser mayor de edad');
		}

		console.log('usuario registrado');
	};

	return (
		<>
			<Form onSubmit={handleSubmit} className="w-50 p-5">
				<Form.Group className="mb-3">
					<Form.Label>Nombre</Form.Label>
					<Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>edad</Form.Label>
					<Form.Control type="number" onChange={(e) => setEdad(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email </Form.Label>
					<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Registrarse
				</Button>
			</Form>
		</>
	);
}

export default App;
