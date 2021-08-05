import {ReactNode} from "react";
interface ColumnProps {
    children: ReactNode,
    sx?: string
}

function Column({children, sx} :ColumnProps) {
    return (
        <div className={sx}>{children}</div>
    );
}

export const First = Column;
export const Second = Column;
export const Third = Column;
export const Fourth = Column;
