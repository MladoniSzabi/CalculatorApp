import * as React from 'react'
import Calculator from '../components/Calculator';
import ThemeSelector from '../components/ThemeSelector';

function IndexPage() {
    return <main>
        <div>
            <span>calc</span>
            <ThemeSelector></ThemeSelector>
        </div>
        <Calculator></Calculator>
    </main>
}

export default IndexPage;