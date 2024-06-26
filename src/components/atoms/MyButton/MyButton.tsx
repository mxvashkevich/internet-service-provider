/* eslint-disable @typescript-eslint/ban-types */
import { Button } from '@mui/material';

import { Colors, colorStyles } from '@src/components/constants';
import { TButton } from '@src/components/types/types';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: TButton;
  color?: keyof typeof Colors;
  text: string;
  textSize?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function MyButton({
  color = 'blue',
  text,
  type = 'button',
  variant = 'contained',
  textSize = '18px',
  onClick,
  disabled = false,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      type={type}
      sx={{
        backgroundColor: colorStyles[color],
        borderRadius: '27px',
        width: '280px',
        height: '50px',
        fontSize: textSize,
        fontWeight: 500,
        textWrap: 'nowrap',
        '&:hover': {
          backgroundColor: colorStyles[`${color}Dark`],
        },
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;
