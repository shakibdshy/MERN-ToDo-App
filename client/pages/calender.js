import React, { useState } from 'react'
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Head from 'next/head';
import Header from '../components/Header';

function calender() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    return (
        <>
            <Head>
                <title>Calender Page</title>
                <meta name="description" content="Calender" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section>
                <div className="container max-w-4xl mx-auto px-4 py-24">
                    <h1 className="text-6xl font-bold mb-10">Calender</h1>
                    <DateRangePicker
                        onChange={item => setState([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={state}
                        direction="horizontal"
                    />
                </div>
            </section>

        </>
    )
}

export default calender