import style from './message.module.css';
import Room from '../_component/Room';

export const metadata = {
  title: '쪽지 / N',
  descreption: '쪽지',
};

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
