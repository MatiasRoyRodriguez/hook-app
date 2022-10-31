import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/useContext/MainApp";

describe('Pruebas en el MainApp', () => {

	test('Debe de mostrar el HomePage', () => {

		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('HomePage')).toBeTruthy();

	});

	test('Debe de mostrar el HomePage', () => {

		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('LoginPage')).toBeTruthy();

	});

});

