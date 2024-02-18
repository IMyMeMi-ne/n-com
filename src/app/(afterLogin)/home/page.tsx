import style from "./home.module.css";
import TabProvider from "./_component/TabProvider";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "../_component/Post";
export default function HomePage() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
