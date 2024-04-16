import React, { useState } from "react";

export const ChatBlockFilters = ({filtered, setFiltered}) => {

    return (
        <div className="new--message--from">
            <input id={filtered === 'max' ? 'active--filter' : ''} className="new--message--button" type="button" value="Высокая оценка" onClick={() => setFiltered('max')} />
            <input id={filtered === 'min' ? 'active--filter' : ''} className="new--message--button" type="button" value="Низкая оценка" onClick={() => setFiltered('min')} />
            <input id={filtered === null ? 'active--filter' : ''} className="new--message--button" type="button" value="&#128465;" onClick={() => setFiltered(null)} />
        </div>
    )
}