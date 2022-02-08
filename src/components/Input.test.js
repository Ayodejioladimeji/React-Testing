import { act, fireEvent, render } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import Input from './Input';

describe('Input component', () => {
  it('rendered input', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('searchbar');

    expect(input).toBeEnabled();
  });

  it('render div', () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId('showdiv');

    expect(div).toBeTruthy();
  });

  it("don't render div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId('showdiv');

    expect(div).toBeFalsy();
  });

  it('display search item on input', async () => {
    //   When changing anything inside your component with the state
    await act(async () => {
      const { getByTestId } = render(<Input />);
      const input = getByTestId('searchbar');
      const display = getByTestId('displaysearch');
      const inputWord = 'Layobright';
      await fireEvent.change(input, { target: { value: inputWord } });

      expect(display.innerHTML).toBe(inputWord);
    });
  });
});
