import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifts( category );

    return (
        <>
            <h3 className='animate__animated animate__bounce'>{category}</h3>

            { loading && <p>Loading</p> }

            <div className='card-grid'>
                    {
                        data.map( img => (
                            <GifGridItem
                                key={img.id}
                                {...img} 
                            />
                        ))
                    }
            </div>
        </>
    )
}
