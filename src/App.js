import './App.css'
import Header from '@/components/shared/Header'
import Home from '@/components/Home'

function App() {
    return (
        <div>
            <Header />
            <main style={{ padding: '0 24px' }}>
                <Home />
            </main>
        </div>
    )
}

export default App
