import type { NextPage } from 'next';
// import { Client } from '@notionhq/client'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const notionApiEx: NextPage = (result) => {
  useEffect(() => {
    console.log(result);
  }, []);

  return (
    <div className={styles.container}>
      <span className="font-bold text-2xl bg-yellow-400">Hello mamen</span>
    </div>
  );
};

// export async function tryPull() {
//   const notion = new Client({ auth: process.env.NOTION_API_KEY });

//   const databaseId = "c2c863920391422384f88f2f844787ad"
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   })
//   // console.log(notion)
//   console.log(response)
// }

// export async function getStaticProps() {
//   const notion = new Client({ auth: process.env.NOTION_API_KEY });
//   const databaseId = "c2c863920391422384f88f2f844787ad"
//   const res = await notion.databases.query({
//     database_id: databaseId,
//   })

//   console.log(res)
//   return {
//     props: ({ res })
//   }
// }

// tryPull()

export default notionApiEx;
