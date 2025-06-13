import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './index';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    label: 'Test Button'
  };

  it('should render the button with correct label', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
  });

  it('should apply the correct size classes', () => {
    const { rerender } = render(<Button {...defaultProps} size="small" />);
    expect(screen.getByRole('button')).toHaveClass('py-[10px] px-[16px] text-[12px]');

    rerender(<Button {...defaultProps} size="medium" />);
    expect(screen.getByRole('button')).toHaveClass('py-[11px] px-[20px] text-[14px]');

    rerender(<Button {...defaultProps} size="large" />);
    expect(screen.getByRole('button')).toHaveClass('py-[12px] px-[24px] text-[16px]');
  });

  it('should apply primary styles when primary is true', () => {
    render(<Button {...defaultProps} primary />);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-default text-white');
  });

  it('should apply secondary styles when primary is false', () => {
    render(<Button {...defaultProps} primary={false} />);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent text-neutral-text');
  });

  it('should apply custom backgroundColor via style prop', () => {
    render(<Button {...defaultProps} backgroundColor="red" />);
    expect(screen.getByRole('button')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('should call onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should apply additional className when provided', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
