import MouseTracker from "../faac/mouseTracker";

const MouseTrackerUser = () => {
    return (
        <>
            <MouseTracker>
                {(props: any) => (
                    <h1>This is test {props.x + ", " + props.y}</h1>
                )}
            </MouseTracker>
        </>
    );
}

export default MouseTrackerUser;