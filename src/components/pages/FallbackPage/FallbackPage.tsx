import { IcecreamOutlined } from '@mui/icons-material';

function FallbackPage() {
  return (
    <div
      role='alert'
      style={{
        width: '400px',
        height: '200px',
        margin: '25% auto',
        textAlign: 'center',
        fontSize: '24px',
      }}
    >
      <IcecreamOutlined />
      <p>Что-то пошло не так, попробуйте перезагрузить страницу!</p>
    </div>
  );
}

export default FallbackPage;
