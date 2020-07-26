import Layout from '../components/Layout';
import ClasslistClasses from "../components/ClasslistClasses";
import ClassCards from "../components/ClassCards";

export default function Home() {
    return (
        <Layout>
            <ClasslistClasses />
            <ClassCards />
        </Layout>
    )
}