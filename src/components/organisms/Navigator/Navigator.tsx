import NavigateLink from '@src/components/atoms/NavigateLink';

export default function Navigator() {
  return (
    <>
      <NavigateLink linkTo='/' label='Домашний' />
      <NavigateLink linkTo='/business' label='Бизнес' />
      <NavigateLink linkTo='/about' label='Обратная связь' />
    </>
  );
}
