import React from 'react';
import {cn} from "../lib/utils.js";


export const ResultModal = ({ isOpen, onClose, title, message, isSuccess}) => {
    if (!isOpen) {
        return null
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 animate-fade-in"
            style={{ animationDuration: '0.3s' }}
            onClick={onClose}
        >
            <div
                className="bg-card p-8 rounded-2xl shadow-xl w-full max-w-md text-center animate-fade-in-down"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>
                <p className={cn("mb-8", isSuccess ? "text-muted-foreground" : "text-red-500 font-medium")}>
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="btn bg-primary hover:bg-primary/90 w-auto size-10"
                >
                    OK
                </button>
            </div>
        </div>
    );
};