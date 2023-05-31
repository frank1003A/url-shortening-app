import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "../buttons/Button";

interface LinkProps {
  link: string;
  generatedLink: string;
  onCopy: (text: string, result: boolean) => void;
  className?: string;
}
const Link = ({ link, generatedLink, onCopy, className }: LinkProps) => {
  return (
    <div className="link-card">
      <p className="input-link">{link}</p>
      <div className="edge">
        <p className="short-link">{generatedLink}</p>
        <CopyToClipboard text={generatedLink} onCopy={(t, b) => onCopy(t, b)}>
          <Button type="square" className={className ? className : ""}>
            {className === "copied" ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Link;
