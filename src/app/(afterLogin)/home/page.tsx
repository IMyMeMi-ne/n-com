import style from "./home.module.css";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
export default function HomePage() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        {/* <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
