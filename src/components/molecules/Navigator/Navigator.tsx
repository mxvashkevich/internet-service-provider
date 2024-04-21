import { NavigateLink } from '@src/components/atoms/index';
import { useAuthStore } from '@src/store/authStore';

export default function Navigator() {
  const { isAdmin } = useAuthStore((store) => store);
  return (
    <>
      <NavigateLink linkTo='/' label='Домашний' />
      <NavigateLink linkTo='/business' label='Бизнес' />
      <NavigateLink linkTo='/about' label='Обратная связь' />
      {isAdmin && <NavigateLink linkTo='/super-admin' label='Админ панель' />}
    </>
  );
}
