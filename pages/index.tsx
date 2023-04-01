import * as React from 'react'
import Calculator from '../components/Calculator';
import ThemeSelector from '../components/ThemeSelector';

function IndexPage() {
    return <div className='main-container'>
        <main>
            <div>
                <span>calc</span>
                <ThemeSelector></ThemeSelector>
            </div>
            <Calculator></Calculator>
        </main>
    </div>
}

export default IndexPage;