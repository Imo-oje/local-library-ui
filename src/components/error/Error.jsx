import "./error.scss";

export default function Error({ message, code, directTo, details, linkText }) {
  return (
    <>
      <div id="error">Error</div>
      <div className="error-code">
        <div>{code}</div>
        <div className="error-code-clip">{code}</div>
      </div>
      <p className="description">{message}</p>
      <p>
        {details} <a href={directTo}>{linkText}</a>
      </p>
    </>
  );
}
