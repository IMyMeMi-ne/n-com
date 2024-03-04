import SearchForm from '../_component/SearchForm';
import ExploreTrendSection from './_component/ExploreTrendSection';
import style from './explore.module.css';
export default function ExplorePage() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트랜드</h3>
        <ExploreTrendSection />
      </div>
    </main>
  );
}
