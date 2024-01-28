'use client';

import { useState } from "react";

export const SubscribeForm = (props: { debug?: boolean }) => {
    const [userEmail, setUserEmail] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const submitEmail = () => {
        fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                termsChecked
            })
        });
    };

    return (
        <div className={`w-full relative flex justify-center ${props.debug && 'border'} mb-[30px] px-[10px] md:px-[50px]`}>
            <div className="flex flex-col w-full items-center font-mono text-sm">
                <div className="text-5xl pt-[150px] text-middle-accent ">
                    Subscribe for updates!
                </div>
                <div className="flex flex-col pt-5 pb-10">
                    <div className="flex flex-row gap-5 flex-wrap py-5">
                        <input
                            type="email"
                            className="w-full md:w-[486px] h-[50px] border bg-bg-dark text-base px-2"
                            placeholder="Enter your e-mail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        ></input>
                        <div
                            className="w-[175px] h-[50px] border text-middle-accent border-middle-accent flex items-center justify-center text-xl cursor-pointer"
                            onClick={submitEmail}
                        >
                            Subscribe
                        </div>
                    </div>
                    <div className="flex items-center gap-5 text-sm">
                        <input
                            type="checkbox"
                            className="accent-middle-accent w-5 h-5"
                            name="terms_agree"
                            checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)}
                        >
                        </input>
                        <label htmlFor="terms_agree">
                            I agree to the processing of my personal data
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}