import './App.css'

import Api from '@/services/api'

async function App() {
    const result = await Api.getCharacters()

    console.log(result)

    return (
        <div className="App">
            <header className="App-header">
                <p>wanderson</p>
            </header>
        </div>
    )
}

export default App
