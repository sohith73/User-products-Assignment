import  {  useEffect } from "react";
import type  {ReactNode} from "react";
import { createPortal } from "react-dom";

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    width?: number;
};

export default function Modal({
    open,
    onClose,
    title,
    children,
    width = 720,
}: Props) {
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-content"
                style={{ maxWidth: width }}
                onClick={(e) => e.stopPropagation()}
            >
                {title && <div className="modal-header">{title}</div>}
                <div className="modal-body">{children}</div>
            </div>
        </div>,
        document.body
    );
}
