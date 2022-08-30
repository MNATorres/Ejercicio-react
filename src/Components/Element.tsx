import React, { ReactNode } from "react";

type Props = {
    title: ReactNode;
    id: number;
    text: string;
}

export default function Element(text: Props, id: Props) {
    return (
        <div className="element">
            <li style={{ color: 'black' }} key={id.id}>
                {text.title}
            </li>
        </div>
    )
}