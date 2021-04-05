import loader from '@/assets/loader.gif'

export default function Loader() {
    return (
        <div className="container">
            <div className="loader">
                <img src={loader} alt="Carregando..." />
            </div>
        </div>
    )
}
