import MainMenu from '../../navigation/MainMenu';

export default function Base({ head, header, children }) {
    return (
        <div>
            {head}
            <header>
                <MainMenu />
            </header>
            <hr />
            <main>{children}</main>
        </div>
    );
}
