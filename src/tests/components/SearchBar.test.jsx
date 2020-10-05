import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';
import SearchContextProvider from '../../providers/SearchContext';

describe('SearchBar', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <SearchContextProvider>
        <SearchBar />
      </SearchContextProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('updates input text on change', () => {
    const query = 'hola';
    render(
      <SearchContextProvider>
        <SearchBar />
      </SearchContextProvider>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: query } });
    expect(screen.getByDisplayValue(query)).toBeTruthy();
  });

  it('searches on submit', () => {
    const handleOnSubmit = jest.fn();
    render(
      <SearchContextProvider>
        <SearchBar handleOnSubmit={handleOnSubmit} />
      </SearchContextProvider>
    );
    const input = screen.getByRole('textbox');
    fireEvent.submit(input);
    expect(handleOnSubmit).toHaveBeenCalled();
  });
});
