const Footer = () => {
    return (
        <footer className="mt-16 flex flex-col items-center">
            <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div>{`© ${new Date().getFullYear()}`}</div>
            </div>
        </footer>
    );
};

export default Footer;
