import Head from 'next/head';
import Link from 'next/link';
import {getSortedList} from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}

export default function Home({allData}) {
  return (
      <>
        <h1>List of Names</h1>
        <div class="list-group">
          {allData.map(({id, name }) => (
            <link href = {'/${id}'}>
              <a key={id} class ="list-group-item list-group-item-action">{name}</a>
            </link>
          ))}
        </div>
      </>
  );
}
