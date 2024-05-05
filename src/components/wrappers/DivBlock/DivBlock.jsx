import React from "react";
import './DivBlock.scss'

export const DivBlock = () => {
    return (
        <div className="div-block">
            <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab Pane ${id}`,
            };
            })}
            />
        </div>
    )
}