import { Typography } from '@mui/material';

interface ITextWithDividersProps {
  text1: string;
  text2: string;
}

function TextWithDividers({ text1, text2 }: ITextWithDividersProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <Typography variant='body1'>{text1}</Typography>
      <div
        style={{
          width: '2px',
          height: '16px',
          backgroundColor: 'gray',
          borderRadius: '5px',
          margin: '0 6px 0 12px',
        }}
      ></div>
      <Typography variant='body1'>{text2}</Typography>
    </div>
  );
}

export default TextWithDividers;
