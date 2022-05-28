import React, { useRef, useState } from "react";
import { ThemeToggler } from "../../components";
import { useActionsContext } from "../../contexts/actionContext";

const HTMLElements = () => {
    const [textMessage, setTextMessage] = useState<string>("");
    const [typing, setTyping] = useState<Boolean>(false);
    const [buttonLength, setButtonLength] = useState<number>(0);
    const { setActions } = useActionsContext();
    const timeout = useRef<any>(null);

    const handleTextMessage = (e: any) => {
        if (!typing) {
            setActions(`Typing...`);
        }
        setTyping(true);
        clearTimeout(timeout.current);
        setTextMessage(e.target.value);

        timeout.current = setTimeout(() => {
            setTyping(false);
        }, 1000);
    };

    const sendTextMessage = () => {
        setActions(`Message sent: ${textMessage}`);
        setTextMessage("");
    };

    const updateButton = () => {
        setActions(`Button ${buttonLength + 1} added`);
        setButtonLength((length) => length + 1);
    };

    return (
        <div className="home__elements">
            <ThemeToggler />
            <div>
                <textarea
                    className="theme__text-area"
                    value={textMessage}
                    onChange={(e) => handleTextMessage(e)}
                />
                <button
                    disabled={!textMessage}
                    onClick={() => sendTextMessage()}
                    className="theme__btn two"
                >
                    Send Text
                </button>
            </div>

            <div>
                {buttonLength ? (
                    <div className="theme__btn--spacer">
                        {Array.from(
                            { length: buttonLength },
                            (_, id) => id + 1
                        ).map((buttonNo) => (
                            <button
                                key={buttonNo}
                                className="theme__btn two"
                                onClick={() =>
                                    setActions(`Button ${buttonNo} clicked`)
                                }
                            >
                                Button {buttonNo}
                            </button>
                        ))}
                    </div>
                ) : null}

                <button onClick={() => updateButton()}>
                    Add Button {buttonLength + 1}
                </button>
            </div>
        </div>
    );
};

export default HTMLElements;
