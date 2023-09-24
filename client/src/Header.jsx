import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8">
            <img className="logo" src='Stoopt-logo.png' alt='logo'></img>
            <Link className="cursor-pointer" to={'/AddItemPage'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
        </header>
    );
}