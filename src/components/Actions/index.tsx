import { useEffect, useRef } from "react";
import "./actions.scss";
import { useActionsContext } from "../../contexts/actionContext";

const Actions = () => {
    const { actions } = useActionsContext();
    const actionsRef = useRef<any>(null);

    useEffect(() => {
        const element = actionsRef.current;
        element.scrollTop = element.scrollHeight;
    }, [actions]);

    return (
        <div className="actions" ref={actionsRef}>
            <h1 className="actions__heading">Actions</h1>
            {actions.map((action: string, index: number) => (
                <p key={index} className="actions__text">
                    {action}
                </p>
            ))}
        </div>
    );
};

export default Actions;
