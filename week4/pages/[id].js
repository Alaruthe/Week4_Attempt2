import Head from 'next/head'

import { getAllIds, getData } from '../lib/data';

export async function getStaticProps( {params} ) {
    let itemData = await getData(params.id, false);
    if(itemData.id == undefined){
        itemData = await getData(params.id, true);
    }
    return {
        props: {
            itemData
        }
    };
}

export async function getStaticPaths(){
    const paths = getAllIds(false).concat(getAllIds(true));
    return {
        paths,
        fallback: false

    };
}

export default function Entry({itemData}){
    return (
            <article class="card col-6">
                <div class = "card-body">
                    <h5 class = "card-title">{itemData.name}</h5>
                    <h6 class = "card-subtitle mb-2 text-muted">{itemData.phone}</h6>
                    <a href={'mailto:' + itemData.email} class="card-link">{itemData.email}</a>
                </div>
            </article>
    );
}