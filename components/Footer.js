import { useRouter } from 'next/router'

export default function Footer() {
    if (useRouter().pathname.startsWith('/calendar')) {
        return <></>;
    }

    return (
        <>
            <div className="footer">
                <img  src='/logo.png' alt='Code2Impact Logo' height='200'/>
            </div>
            <style jsx>{`
                .footer {
                    display: block;
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

