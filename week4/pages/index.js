import Head from 'next/head';
import Link from 'next/link';
import {getSortedList} from '../lib/data';


export async function getStaticProps() {
  const allData = getSortedList(false);
  const dogData = getSortedList(true);
  return {
    props: {
      allData,
      dogData
    }
  }
}

export default function Home({allData, dogData}) {
  return (
      <>
        <h1>List of Names</h1>
        <div class="list-group">
          {allData.map(({id, name }) => (
            <Link key={id} href = {'/' + id}>
              <a class ="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
        <h1>List of Dogs</h1>
        <div class="list-group">
          {dogData.map(({id, name }) => (
            <Link key={id} href = {'/' + id}>
              <a class ="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
      </>
  );
}
