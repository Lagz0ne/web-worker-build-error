import Link from "next/link";
import Layout from "../components/Layout";
import { useWorker } from "../worker/main";

const IndexPage = () => {
  useWorker();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
