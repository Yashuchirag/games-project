function Message() {
    const name = "Chirag";
    if (name) {
        return (
            <h1>Hi {name}</h1>
        )
    }
    return (
        <h1>Hi</h1>
    )
}

export default Message;
