export default function ErrorBox({
    message = "Something went wrong.",
}: {
    message?: string;
}) {
    return (
        <div className="error-box">
            <strong>⚠️ Error</strong>
            <p>{message}</p>
        </div>
    );
}
