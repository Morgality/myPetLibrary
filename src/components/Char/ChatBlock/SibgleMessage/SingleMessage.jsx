export const SingleMessage = ({item}) => {
    return (
        <li id="chat--message">
            <span id="chat--message--username">{ item?.user }</span> <span> { item?.date } </span>
            <p>{ item?.messageText }</p>
        </li>
    )
}