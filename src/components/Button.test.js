import { act, fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('Button render', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('button');

    expect(button).toBeEnabled();
  });

  it('render one button before clicking', () => {
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId('button');

    expect(buttonList).toHaveLength(1);
  });

  it('render two button after clicking', async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);
      const buttonList = getAllByTestId('button');

      await fireEvent.click(buttonList[0]);

      const newbutton = getAllByTestId('button');

      expect(newbutton).toHaveLength(2);
    });
  });
});
