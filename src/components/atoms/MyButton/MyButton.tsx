import { Button } from '@mui/material';

interface IButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

function MyButton({ text, type = 'button', onClick }: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant='contained'
      type={type}
      color='primary'
      sx={{
        borderRadius: '27px',
        width: '280px',
        height: '50px',
        fontSize: '18px',
        fontWeight: 500,
        textWrap: 'nowrap',
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;
